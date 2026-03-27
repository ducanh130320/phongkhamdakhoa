"use client";

import { useState } from "react";
import { PhoneCall } from "lucide-react";

export default function FloatingCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hotline = "0985912711";

  return (
    <>
      <div className="fixed inset-x-0 bottom-3 z-[60] px-3 pb-[max(env(safe-area-inset-bottom),0px)]">
        <div className="mx-auto flex w-full max-w-md items-center gap-3 rounded-full bg-white/90 p-2 shadow-2xl ring-1 ring-black/5 backdrop-blur">
          <a
            href={`tel:${hotline}`}
            aria-label={`Gọi hotline ${hotline}`}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#f24b54] shadow-md ring-2 ring-[#f24b54] transition-colors hover:bg-[#f24b54] hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve" preserveAspectRatio="none" width="100%" height="100%" className="fill-[#f24b54]" fill="#f24b54"><use xlinkHref="#shape_fHzhDCbWWw"></use></svg>
          </a>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex h-12 flex-1 items-center justify-center rounded-full bg-brand-red px-5 text-sm font-extrabold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-red-600"
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
    </>
  );
}

