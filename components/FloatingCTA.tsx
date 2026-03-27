"use client";

import { useState } from "react";
import { PhoneCall } from "lucide-react";

export default function FloatingCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hotline = "0985912711";

  return (
    <>
      <div className="fixed inset-x-0 bottom-3 z-[60] px-3 pb-[max(env(safe-area-inset-bottom),0px)]">
        {/* Mobile: phone + button cạnh nhau, không chung một khối */}
        <div className="mx-auto flex w-full max-w-md items-center gap-3 md:hidden">
          <a
            href={`tel:${hotline}`}
            aria-label={`Gọi hotline ${hotline}`}
            className="phone-zoom flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#f24b54] shadow-md ring-2 ring-[#f24b54] transition-colors hover:bg-[#f24b54] hover:text-white"
          >
            <PhoneCall className="h-6 w-6" />
          </a>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex h-12 flex-1 items-center justify-center rounded-full bg-brand-red px-5 text-sm font-extrabold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-red-600 animate-blink hover:[animation-play-state:paused] focus-visible:[animation-play-state:paused] active:[animation-play-state:paused]"
          >
            Nhận tư vấn ngay
          </button>
        </div>

        {/* Desktop: icon nằm góc trái, button tách riêng ở giữa */}
        <a
          href={`tel:${hotline}`}
          aria-label={`Gọi hotline ${hotline}`}
          className="phone-zoom fixed bottom-4 left-4 hidden h-14 w-14 items-center justify-center rounded-full bg-white text-[#f24b54] shadow-xl ring-2 ring-[#f24b54] transition-colors hover:bg-[#f24b54] hover:text-white md:flex"
        >
          <PhoneCall className="h-7 w-7" />
        </a>
        <div className="hidden md:flex md:justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex h-12 min-w-[320px] items-center justify-center rounded-full bg-brand-red px-8 text-sm font-extrabold uppercase tracking-wide text-white shadow-xl hover:bg-red-600 animate-blink hover:[animation-play-state:paused] focus-visible:[animation-play-state:paused] active:[animation-play-state:paused]"
          >
            Nhận tư vấn ngay
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 px-4">
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
                className="text-white/90 hover:text-white text-3xl leading-none font-bold"
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
                className="w-full rounded-full bg-brand-red py-2.5 text-sm font-bold text-white hover:bg-red-600 transition-colors"
              >
                Nhận tư vấn từ bác sĩ
              </button>
            </form>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes phoneZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.12);
          }
          100% {
            transform: scale(1);
          }
        }

        .phone-zoom {
          animation: phoneZoom 1.2s ease-in-out infinite;
        }

        .phone-zoom:hover,
        .phone-zoom:focus-visible,
        .phone-zoom:active {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}

