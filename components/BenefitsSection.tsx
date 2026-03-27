"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BenefitsSection() {
  const benefits = [
    "Công nghệ tiên tiến, điều trị ít xâm lấn, không đau, mau hồi phục.",
    "Mô hình khám 1 bác sĩ - 1 bệnh nhân, bảo mật thông tin tuyệt đối.",
    "Đội ngũ y bác sĩ Nam khoa giàu kinh nghiệm, chuyên môn cao.",
    "Chi phí minh bạch, tư vấn rõ ràng trước khi quyết định điều trị."
  ];

  return (
    <section id="loi-ich" className="py-20 text-white relative" style={{ backgroundImage: 'url(/images/nen.png)' }}>
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold uppercase mb-2">
              Vì sao nên <span className="text-brand-red cursive drop-shadow font-serif">chọn</span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold uppercase">
              Khám tại True Hope
            </h3>
          </div>

        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((text, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: idx * 0.15,
              }}
              style={{ willChange: "transform, opacity" }} //comment
            >
              <div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex gap-4 items-start hover:bg-white/20 transition-all shadow-lg"
              >
                <Image src="/images/mark.png" alt="Check" width={30} height={30} />
                <p className="text-lg font-medium leading-relaxed">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
