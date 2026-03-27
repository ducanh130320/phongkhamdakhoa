'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accordions = [
    { title: "Dài/hẹp bao quy đầu, viêm nhiễm tái phát", desc: "Nam giới bị dài, hẹp hoặc nghẹt bao quy đầu gây khó khăn trong sinh hoạt, tiểu nhiều, tiểu rắt hoặc viêm nhiễm thường xuyên." },
    { title: "Suy giảm ham muốn, yếu sinh lý, xuất tinh sớm", desc: "Ảnh hưởng đến chất lượng đời sống tình dục, mất tự tin, cần thăm khám để xác định nguyên nhân và phục hồi sinh lực dài lâu." },
    { title: "Nổi mụn, u nhú bất thường (Nghi ngờ Sùi mào gà)", desc: "Xuất hiện các nốt sần, u nhú, mụn thịt ở vùng kín, có nguy cơ lây lan nhanh. Cần chẩn đoán và loại bỏ sớm." },
    { title: "Đau rát, chảy máu khi đại tiện (Trĩ nội, Trĩ ngoại)", desc: "Búi trĩ sa ra ngoài, sưng đau, chảy máu kéo dài ảnh hưởng nghiêm trọng đến sinh hoạt hàng ngày." },
    { title: "Khám sức khỏe sinh sản, nam khoa định kỳ", desc: "Nam giới trong độ tuổi sinh sản cần kiểm tra tổng quát để tầm soát bệnh lý, bảo vệ sức khỏe toàn diện." }
  ];

  return (
    <section className="py-24  relative overflow-hidden" style={{ backgroundImage: 'url(/images/warning.png)' }}>
      {/* Decorative background number 2 */}
      <div className="container mx-auto px-4 max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Accordion Left Side */}
        <div className="order-2 w-full md:order-1 md:w-1/2">
          <h2 className="text-2xl font-bold text-brand-dark mb-2 uppercase tracking-wide">
            Những dấu hiệu cảnh báo bạn cần khám ngay
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Đừng để sự e ngại làm chậm trễ cơ hội điều trị. Hãy khám sớm để bảo vệ sức khỏe và bản lĩnh.
          </p>

          <div className="space-y-3">
            {accordions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: i * 0.12,
                }}
                style={{ willChange: "transform, opacity" }}
              >
                <div
                  key={i}
                  className={`border rounded-lg overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-brand-blue shadow-md' : 'border-gray-200'}`}
                >
                  <button
                    className={`w-full text-left px-5 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors ${openIndex === i ? 'bg-blue-50/50' : ''}`}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span className={`font-medium ${openIndex === i ? 'text-brand-blue' : 'text-gray-700'} flex-1 pr-4`}>
                      0{i + 1}. {item.title}
                    </span>
                    {openIndex === i ? (
                      <ChevronUp className="w-5 h-5 text-brand-blue shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-4 pt-1 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                      {item.desc}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side Image/Graphic */}
        <div className="order-1 w-full md:order-2 md:w-1/2 flex flex-col justify-center relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.12,
            }}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="text-center md:text-left mb-6 relative z-20">
              <h3 className="text-4xl md:text-5xl font-extrabold text-brand-red mb-1">Hãy đến</h3>
              <p className="text-3xl md:text-4xl font-bold text-[#0066b3] uppercase">Khám ngay</p>
              <p className="text-4xl md:text-5xl font-extrabold text-brand-blue -mt-2">Đừng e ngại</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.14,
            }}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="relative mx-auto h-64 w-64 bg-white rounded-full shadow-2xl p-2 z-10 sm:h-80 sm:w-80 md:ml-0">
              <div className="w-full h-full rounded-full bg-BrandLight overflow-hidden relative flex items-center justify-center border border-gray-200">
                <Image src="/images/baoquydau.png" alt="Doctor" width={70} height={70} className="object-cover rounded-full w-full h-full" />
              </div>

              <div className="absolute -left-6 bottom-10 w-20 h-20 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center z-30">
                <span className="text-blue-500 text-xs text-center font-bold px-1">Safe & Private</span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
