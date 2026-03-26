"use client";

import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { generateAndDownloadExcel } from "@/lib/excel";
import { message } from "antd";

export default function FooterCTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !phone) {
      message.error("Vui lòng nhập đầy đủ họ tên và số điện thoại!");
      return;
    }

    setLoading(true);
    try {
      // 1. Generate and download Excel file
      const leadData = [
        {
          "Họ và tên": name,
          "Số điện thoại": phone,
          "Ngày đăng ký": new Date().toLocaleString("vi-VN"),
          "Nguồn": "Footer CTA"
        },
      ];
      generateAndDownloadExcel(leadData, `Dòng_chờ_tư_vấn_${name}_Footer`);

      // 2. Open Zalo chat
      const zaloPhone = "0944033320"; 
      const zaloUrl = `https://zalo.me/${zaloPhone}`;
      
      message.success("Đăng ký thành công! Đang mở Zalo để tư vấn...");
      
      setTimeout(() => {
        window.open(zaloUrl, "_blank");
        setLoading(false);
        setName("");
        setPhone("");
      }, 1500);

    } catch (error) {
      console.error("Error during registration:", error);
      message.error("Có lỗi xảy ra, vui lòng thử lại sau.");
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full bg-[#0088cc] overflow-hidden py-16">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Left Side: Images & Message */}
          <div className="w-full md:w-2/3 flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center p-2 shadow-xl border-4 border-[#3399ff]">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <Image src="/images/avatar-1.jpeg" alt="Doctor" width={100} height={100} className="object-contain rounded-full w-full h-full" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-red text-white w-24 h-24 rounded-full flex items-center justify-center border-4 border-[#0088cc] shadow-lg animate-pulse">
                <ShieldCheck className="w-12 h-12" />
              </div>
            </div>

            <div className="text-center md:text-left text-white mt-8 md:mt-0">
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-2 drop-shadow-md">
                Bảo vệ sức khỏe
              </h2>
              <div className="text-2xl font-semibold mb-2 flex flex-col md:flex-row gap-2">
                <span>là ưu tiên</span>
                <span className="text-brand-red cursive drop-shadow-md font-serif italic text-3xl">hàng đầu</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-1/3">
            <div className="bg-[#005580] rounded-xl p-6 shadow-xl border border-[#006699]">
              <div className="bg-brand-red text-white text-center font-bold uppercase py-2 px-4 rounded-lg mb-4 text-sm tracking-wide">
                Phát hiện sớm chỉ từ 100k
              </div>
              <p className="text-blue-100 text-sm text-center mb-4">Nhận tư vấn & bảng giá chi tiết</p>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Họ và tên *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3399ff]"
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3399ff]"
                />
                <button 
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`w-full bg-brand-red hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-colors uppercase mt-2 shadow-md hover:shadow-lg ${
                    loading ? "bg-gray-400 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Đang xử lý..." : "Đăng ký nhận ưu đãi"}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

