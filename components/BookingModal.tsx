"use client";

import { useState } from "react";
import { Modal, Form, Input, message } from "antd";

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
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          message: values.message || "",
          source: "Modal Đặt Lịch",
        }),
      });

      if (!res.ok) {
        throw new Error("send-mail failed");
      }

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
          Đặt lịch khám bệnh ngay hôm nay
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
