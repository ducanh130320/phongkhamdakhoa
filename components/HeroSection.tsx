"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { useState } from "react";
import { generateAndDownloadExcel } from "@/lib/excel";
import { message } from "antd";

const benefits = [
  "Trải nghiệm nhẹ nhàng, không gây đau rát",
  "Nhanh gọn, tiết kiệm thời gian",
  "Độ chính xác cao",
  "Đảm bảo an toàn tối đa",
];

export default function HeroSection() {
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
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, source: "Banner Chính" }),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      // Open Zalo chat
      const zaloPhone = "0944033320";
      const zaloUrl = `https://zalo.me/${zaloPhone}`;

      message.success("Đăng ký thành công! Đang mở Zalo để tư vấn...");

      // Artificial delay to show success message
      setTimeout(() => {
        window.open(zaloUrl, "_blank");
        setLoading(false);
        // Clear form
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
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#e6f7ff] to-[#aee4ff]">
      <div className="container relative mx-auto min-h-[640px] md:h-[750px] md:min-h-[750px]">
        {/* —— BG bên trong —— */}
        <div
          className="pointer-events-none absolute z-[1]"
          style={{
            top: "22.1877px",
            left: "-20.5px",
            width: "min(90vw, 480px)",
            height: "320px",
          }}
        >
          <Image
            src="/images/hospital.png"
            alt=""
            fill
            className="object-contain"
            sizes="(max-width: 768px) 90vw, 480px"
          />
        </div>
        <div
          className="ladi-image pointer-events-none absolute z-[1]"
          style={{
            top: "-15px",
            left: "-358px",
            position: "absolute",
            width: "1918.8px",
            height: "738px",
          }}
        >
          <div
            className="ladi-image relative h-full w-full overflow-hidden"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="ladi-image-background relative h-full w-full">
              <Image
                src="/images/warning.png"
                alt=""
                fill
                className="object-cover"
                sizes="1919px"
              />
            </div>
          </div>
        </div>
        <div
          className="ladi-image pointer-events-none absolute left-1/2 top-[320px] z-[1] h-[260px] w-[92vw] -translate-x-1/2 md:left-[510px] md:top-[74px] md:h-[656.333px] md:w-[984.5px] md:translate-x-0"
        >
          <div
            className="ladi-image relative h-full w-full overflow-hidden"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="ladi-image-background relative h-full w-full">
              <Image
                src="/images/FN 2.png"
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 768px) 92vw, 985px"
              />
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-xl px-4 pb-10 pt-8 md:absolute md:left-4 md:top-6 md:pb-8 md:pt-20 lg:left-50">
          <div className="relative mb-5">
            <p
              className="text-[clamp(2rem,6vw,3.25rem)] font-black uppercase leading-[0.95] tracking-tight drop-shadow-[0_1px_0_#fff]"
              style={{
                color: "#0088cc",
                WebkitTextStroke: "2px #ffffff",
                paintOrder: "stroke fill",
              }}
            >
              Khám nam khoa
              <br />
              không đau và an toàn
            </p>
          </div>

          <div className="mb-3 inline-flex flex-wrap items-center gap-0 rounded-full bg-[#002347] px-5 py-2.5 shadow-md">
            <span className="text-sm font-bold uppercase tracking-wide text-white">
              Lựa chọn{" "}
            </span>
            <span className="text-sm font-black uppercase tracking-wide text-[#ff9a3c]">
              hàng đầu
            </span>
          </div>

          <p className="mb-6 max-w-xl text-base font-bold leading-snug text-[#002347] md:text-lg">
            Khám nam khoa không đau và an toàn
          </p>

          <ul className="space-y-3">
            {benefits.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white shadow-sm"
                  aria-hidden
                >
                  <Image src="/images/mark.png" alt="Check" width={30} height={30} />
                </span>
                <span className="pt-1 text-sm font-semibold leading-snug text-[#002347] md:text-base">
                  {line}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 pb-10">
        <div className="w-full max-w-5xl rounded-2xl border-4 border-[#3399ff]/30 bg-[#0066b3] p-2 shadow-xl backdrop-blur-sm bottom-[-100px]">
          <div className="flex w-full flex-col items-center justify-between gap-3 px-4 pb-4 pt-6">
            <div className="mb-4 text-center text-3xl font-bold uppercase text-white">
              Đăng ký tư vấn miễn phí
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row">
              <input
                type="text"
                placeholder="Họ và tên *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full flex-1 rounded-xl bg-white p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3399ff]"
              />
              <input
                type="text"
                placeholder="Số điện thoại *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full flex-1 rounded-xl bg-white p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3399ff]"
              />
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full whitespace-nowrap rounded-xl bg-brand-red px-8 py-3 font-bold uppercase text-white transition-colors md:w-auto ${loading ? "bg-gray-400 cursor-not-allowed" : "animate-pulse hover:bg-red-600"
                  }`}
              >
                {loading ? "Đang xử lý..." : "Nhận tư vấn ngay"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

