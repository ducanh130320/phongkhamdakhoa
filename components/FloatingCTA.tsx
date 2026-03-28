"use client";

import { useState } from "react";
import { PhoneCall } from "lucide-react";
import BookingModal from "./BookingModal";

export default function FloatingCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hotline = "0985912711";

  return (
    <>
      <div className="fixed inset-x-0 bottom-3 z-[60] px-3 pb-[max(env(safe-area-inset-bottom),0px)]">
        {/* Mobile: phone + button cạnh nhau, không chung một khối */}
        <div className="mx-auto flex w-full max-w-md items-center gap-3 md:hidden">
          <a
            href="https://zalo.me/0985912711"
            target="_blank"
            rel="noopener noreferrer"
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
          href={`https://zalo.me/${hotline}`}
          target="_blank"
          rel="noopener noreferrer"
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
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
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


