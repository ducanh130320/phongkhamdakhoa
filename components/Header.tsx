"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BookingModal from "./BookingModal";

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
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </header>
  );
}
