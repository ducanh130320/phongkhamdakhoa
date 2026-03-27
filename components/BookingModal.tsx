"use client";

import { useState } from "react";
import { Modal, Form, Input, message } from "antd";
import emailjs from '@emailjs/nodejs';
import * as XLSX from 'xlsx';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const serviceId = process.env.EMAILJS_SERVICE_ID || '';
      const templateId = process.env.EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.EMAILJS_PUBLIC_KEY || '';
      const privateKey = process.env.EMAILJS_PRIVATE_KEY || '';

      const leadData = [
        {
          "Họ và tên": values.name,
          "Số điện thoại": values.phone,
          "Ngày đăng ký": new Date().toLocaleString("vi-VN"),
          "Nguồn": "Modal Đặt Lịch"
        },
      ];

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(leadData);
      XLSX.utils.book_append_sheet(wb, ws, 'Leads');

      // Write to base64
      const base64Content = XLSX.write(wb, { type: 'base64', bookType: 'xlsx' });

      const templateParams = {
        name: values.name,
        phone: values.phone,
        message: values.message || "Không có lời nhắn",
        source: 'Modal Đặt Lịch',
        excel_file: {
          content: base64Content,
          name: "leads.xlsx",
        }
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey: publicKey,
          privateKey: privateKey,
        }
      );

      message.success("Đăng ký thành công!");
      setLoading(false);
      form.resetFields();
      onClose();
    } catch (error) {
      console.error("Error during registration:", error);
      message.error("Có lỗi xảy ra, vui lòng thử lại sau.");
      setLoading(false);
    }
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      closable={false}
      width={450}
      zIndex={70}
      className="custom-modal"
      styles={{
        mask: { backgroundColor: "rgba(0, 0, 0, 0.4)" },
      }}
    >
      <div
        className="w-full rounded-xl p-6 shadow-2xl text-white"
        style={{
          backgroundImage: "linear-gradient(rgb(0, 83, 163), rgb(0, 191, 242))",
        }}
      >
        <div className="flex items-start justify-between border-b border-[#e7d7b8] pb-3">
          <h2 className="text-2xl font-extrabold text-white drop-shadow-lg">
            Phát hiện sớm, điều trị kịp thời
          </h2>
          <button
            aria-label="Close"
            onClick={onClose}
            className="text-white/90 hover:text-white text-3xl leading-none font-bold cursor-pointer"
          >
            &times;
          </button>
        </div>
        <p className="mb-4 mt-3 text-sm font-semibold text-white drop-shadow-sm">
          Đặt lịch nội soi tiêu hóa ngay hôm nay
        </p>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="space-y-3"
        >
          <Form.Item
            name="name"
            className="mb-0"
            rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
          >
            <Input
              size="large"
              placeholder="Họ và tên"
              className="rounded-lg border-none"
            />
          </Form.Item>
          <Form.Item
            name="phone"
            className="mb-0"
            rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
          >
            <Input
              type="tel"
              size="large"
              placeholder="Số điện thoại"
              className="rounded-lg border-none"
            />
          </Form.Item>
          <Form.Item name="message" className="mb-0">
            <Input.TextArea
              placeholder="Để lại lời nhắn cho chúng tôi"
              rows={3}
              size="large"
              className="rounded-lg border-none"
            />
          </Form.Item>
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-full bg-brand-red py-2.5 text-sm font-bold text-white transition-colors mt-2 ${loading ? "bg-gray-400 cursor-not-allowed" : "hover:bg-red-600"
              }`}
          >
            {loading ? "Đang xử lý..." : "Nhận tư vấn từ bác sĩ"}
          </button>
        </Form>
      </div>
      <style jsx global>{`
        .custom-modal .ant-modal-content {
          padding: 0 !important;
          background: transparent !important;
          box-shadow: none !important;
        }
        .ant-modal-container {
          padding: 0 !important;
          background-color: unset !important;
        }
      `}</style>
    </Modal>
  );
}
