'use client';
import Image from "next/image";
import { MapPin, Phone, Mail, Star, MoreVertical } from "lucide-react";

type ReviewItem = {
  id: string;
  initials: string;
  avatarClass: string;
  name: string;
  meta: string;
  timeAgo: string;
  isNew?: boolean;
  text: string;
  imageSrc?: string;
  imageAlt?: string;
};

const REVIEWS: ReviewItem[] = [
  {
    id: '1',
    initials: 'GH',
    avatarClass: 'from-emerald-400 to-teal-600',
    name: 'Green! Hưng',
    meta: '1 bài đánh giá · 1 ảnh',
    timeAgo: '5 ngày trước',
    isNew: true,
    text:
      'Lúc đầu cũng rén nhưng làm xong thấy nhẹ người. Bác sĩ mát tay, làm nhanh mà không đau như mình tưởng. Ưng nhất là khoản hậu phẫu, bác sĩ gọi điện hỏi han tình hình suốt nên cũng yên tâm.',
    imageSrc: '/images/review-google-maps-clinic.png',
    imageAlt: 'Ảnh khách hàng chụp tại phòng khám TRUE HOPE',
  },
  {
    id: '2',
    initials: 'MT',
    avatarClass: 'from-sky-400 to-indigo-600',
    name: 'Minh Tuấn',
    meta: '3 bài đánh giá',
    timeAgo: '2 tuần trước',
    text:
      'Phòng khám sạch sẽ, lễ tân hướng dẫn rõ ràng. Bác sĩ giải thích kỹ trước khi làm nên mình hiểu hết quy trình. Giá công khai, không phát sinh.',
  },
  {
    id: '3',
    initials: 'LA',
    avatarClass: 'from-rose-400 to-pink-600',
    name: 'Lan Anh',
    meta: 'Local Guide · 12 bài đánh giá · 8 ảnh',
    timeAgo: '1 tháng trước',
    text:
      'Đi cùng người nhà, thấy đội ngũ làm việc chuyên nghiệp. Chỗ để xe thuận tiện, không phải chờ lâu. Sau thăm khám được dặn dò cẩn thận.',
  },
  {
    id: '4',
    initials: 'HN',
    avatarClass: 'from-amber-400 to-orange-600',
    name: 'Hoàng Nam',
    meta: '1 bài đánh giá · 1 ảnh',
    timeAgo: '3 ngày trước',
    isNew: true,
    text:
      'Book lịch online nhanh, đến đúng giờ là vào khám. Mình chụp lại khu vực tiếp đón vì thấy gọn gàng, nhân viên nhiệt tình.',
    imageSrc: '/images/review-google-maps-clinic.png',
    imageAlt: 'Không gian phòng khám TRUE HOPE',
  },
  {
    id: '5',
    initials: 'TM',
    avatarClass: 'from-violet-400 to-purple-600',
    name: 'Thảo My',
    meta: '2 bài đánh giá · 3 ảnh',
    timeAgo: '2 tháng trước',
    text:
      'Mình lo lắng nhiều nhưng được động viên từ lúc vào cửa. Thủ tục đơn giản, bảo mật tốt. Sẽ giới thiệu cho bạn bè nếu có nhu cầu.',
  },
  {
    id: '6',
    initials: 'ĐA',
    avatarClass: 'from-cyan-400 to-blue-600',
    name: 'Đức Anh',
    meta: '5 bài đánh giá',
    timeAgo: '6 ngày trước',
    text:
      'So với vài nơi mình từng hỏi thì ở đây tư vấn thẳng thắn, không ép dịch vụ. Sau liệu trình thấy ổn, tái khám đúng lịch.',
  },
];

function ReviewCard({ review }: { review: ReviewItem }) {
  const hasImage = Boolean(review.imageSrc);

  return (
    <article
      className="rounded-2xl bg-white text-gray-900 shadow-xl border border-gray-200/90 overflow-hidden ring-1 ring-black/5"
      aria-label={`Bài đánh giá từ ${review.name}`}
    >
      <div
        className={
          hasImage
            ? 'flex flex-col md:flex-row md:items-stretch'
            : 'flex flex-col'
        }
      >
        <div className="p-4 sm:p-5 flex-1 min-w-0">
          <header className="flex items-start gap-3">
            <div
              className={`h-10 w-10 rounded-full bg-gradient-to-br ${review.avatarClass} flex items-center justify-center text-white text-sm font-bold shrink-0 ring-2 ring-white shadow-sm`}
              aria-hidden
            >
              {review.initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-gray-900 text-[15px] leading-tight tracking-tight">
                {review.name}
              </p>
              <p className="text-xs text-gray-500 mt-1">{review.meta}</p>
            </div>
            <div
              className="p-1.5 rounded-full text-gray-400 shrink-0 -mr-1"
              aria-hidden
            >
              <MoreVertical className="w-5 h-5" strokeWidth={2} />
            </div>
          </header>

          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5">
            <div className="flex gap-0.5" aria-hidden>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-[18px] h-[18px] fill-amber-400 text-amber-400 shrink-0"
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">{review.timeAgo}</span>
            {review.isNew ? (
              <span className="text-[10px] font-bold uppercase tracking-wide text-gray-800 border border-gray-300 rounded px-2 py-0.5 leading-none bg-gray-50">
                MỚI
              </span>
            ) : null}
          </div>

          <p className="mt-3 text-[15px] text-gray-800 leading-relaxed">
            {review.text}
          </p>
        </div>

        {hasImage && review.imageSrc ? (
          <div className="relative w-full md:w-[min(42%,280px)] md:shrink-0 aspect-[4/3] md:aspect-auto md:min-h-[200px] bg-gray-100 border-t md:border-t-0 md:border-l border-gray-100">
            <Image
              src={review.imageSrc}
              alt={review.imageAlt ?? 'Ảnh đính kèm đánh giá'}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 280px"
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}

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

            <div className="flex flex-col gap-4">
              {REVIEWS.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
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
