"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneCall } from "lucide-react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hotline = "0985912711";
  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-2.jpg"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain rounded-full w-16 h-16"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-brand-blue font-medium transition-colors"
          >
            Về TRUE HOPE
          </Link>
          <Link
            href="/#dich-vu"
            className="text-gray-600 hover:text-brand-blue font-medium transition-colors"
          >
            Dịch vụ
          </Link>
          <Link
            href="/#bac-si"
            className="text-gray-600 hover:text-brand-blue font-medium transition-colors"
          >
            Bác sĩ
          </Link>
          <Link
            href="/#trang-thiet-bi"
            className="text-gray-600 hover:text-brand-blue font-medium transition-colors"
          >
            Trang thiết bị
          </Link>
          <Link
            href="/#loi-ich"
            className="text-gray-600 hover:text-brand-blue font-medium transition-colors"
          >
            Lợi ích
          </Link>
          <Link
            href="/#cauhoi-thuong-gap"
            className="text-gray-600 hover:text-brand-blue font-medium transition-colors"
          >
            Câu hỏi thường gặp
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-brand-red hover:bg-red-600 text-white font-bold py-2.5 px-4 md:px-6 rounded-full shadow-md animate-blink uppercase text-sm whitespace-nowrap"
          >
            Nhận tư vấn ngay
          </button>
        </div>
        <button className="md:hidden text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div
              className="w-full max-w-md rounded-xl bg-[#fdf6e7] p-6 shadow-2xl text-white"
              style={{
                backgroundImage:
                  "linear-gradient(rgb(0, 83, 163), rgb(0, 191, 242))",
              }}
            >
              <div className="flex items-start justify-between border-b border-[#e7d7b8] pb-3">
                <h2 className="text-2xl font-extrabold text-white drop-shadow-lg">
                  Phát hiện sớm, điều trị kịp thời
                </h2>
                <button
                  aria-label="Close"
                  onClick={() => setIsModalOpen(false)}
                  className="text-white/90 hover:text-white text-3xl leading-none font-bold cursor-pointer"
                >
                  &times;
                </button>
              </div>
              <p className="mt-3 text-sm font-semibold text-white drop-shadow-sm">
                Đặt lịch nội soi tiêu hóa ngay hôm nay
              </p>
              <form className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:border-brand-blue focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:border-brand-blue focus:outline-none"
                />
                <textarea
                  placeholder="Để lại lời nhắn cho chúng tôi"
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 p-3 focus:border-brand-blue focus:outline-none"
                ></textarea>
                <button
                  type="button"
                  onClick={() => {
                    /* TODO: submit logic */
                  }}
                  className="w-full rounded-full bg-brand-red py-2.5 text-sm font-bold text-white hover:bg-red-600 animate-blink transition-colors"
                >
                  Nhận tư vấn từ bác sĩ
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
