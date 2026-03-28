'use client';
import { MapPin, Phone, Mail, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-blue-100 py-12 border-t-4 border-brand-red">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">

          {/* Logo and Info */}
          <div className="md:w-1/2">
            <h3 className="text-white text-xl font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
              PHÒNG KHÁM ĐA KHOA TẠO HÌNH PHẪU THUẬT THẨM MỸ TRUE HOPE 👍YOUR TRUTH - OUR HAPPINESS
            </h3>

            <div className="space-y-4 text-sm leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3399ff] mt-0.5 shrink-0" />
                <p>CC2 Nguyễn Hữu Thọ, Bán Đảo Linh Đàm, Hoàng Mai , Hà Nội (Toà Nhà True Hope)</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#3399ff] shrink-0" />
                <p>0985.912.711 - 098.160.8901 - 0929.380.888.</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#3399ff] shrink-0" />
                <p>cskh.phongkhamnamkhoatruehope@gmail.com</p>
              </div>
              {/* <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#3399ff] shrink-0" />
                <p>quangnam.tmmchealthcare.com</p>
              </div> */}
            </div>
          </div>

          {/* Bản đồ + đánh giá */}
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            <div className="w-full h-64 md:h-80 bg-gray-200 rounded-xl overflow-hidden shadow-inset border-2 border-white/10 relative">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.0101075821262!2d105.8274938!3d20.9684791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad9e58eb7b7d%3A0x427e7a6d845702d5!2sTRUE%20HOPE%20SURGERY%20CLINIC%20(Ph%C3%B2ng%20kh%C3%A1m%20%C4%91a%20khoa)!5e1!3m2!1svi!2s!4v1774427192407!5m2!1svi!2s"
                title="Bản đồ TRUE HOPE SURGERY CLINIC"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-sm leading-relaxed space-y-4">
              <h4 className="text-white font-bold text-base leading-snug">
                Khám Nam Khoa TRUEHOPE - Khám &amp; Điều Trị Nam Khoa, Cắt Bao Quy Đầu
              </h4>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-blue-100">
                <span className="font-semibold text-white">Đánh giá:</span>
                <span className="font-bold tabular-nums text-amber-300">4,9/5</span>
                <span className="flex gap-0.5" aria-hidden>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                  ))}
                </span>
                <span className="text-blue-200/90 text-xs sm:text-sm w-full sm:w-auto">
                  (98.286 người đã đánh giá)
                </span>
              </div>

              <p className="text-blue-100">
                Đã có <span className="font-semibold text-white tabular-nums">138.376</span> người khám tại cơ sở.
              </p>

              <ul className="space-y-2 text-blue-100">
                <li className="flex gap-2">
                  <span className="text-[#3399ff] shrink-0 font-bold">+</span>
                  <span>Đội ngũ bác sĩ chuyên môn giỏi</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#3399ff] shrink-0 font-bold">+</span>
                  <span>Hơn 20 năm kinh nghiệm</span>
                </li>
              </ul>

              <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/10">
                <span className="text-[#3399ff] shrink-0" aria-hidden>
                  ☎
                </span>
                <span className="font-semibold text-white">HOTLINE:</span>
                <span className="tabular-nums">0985.912.711 - 098.160.8901.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-blue-200/60 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} PHÒNG KHÁM ĐA KHOA TẠO HÌNH PHẪU THUẬT THẨM MỸ TRUE HOPE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}