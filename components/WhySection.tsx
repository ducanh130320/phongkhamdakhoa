"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { SERVICES } from "../lib/services";

export default function WhySection() {
  return (
    <section
      id="dich-vu" className="py-20 bg-white relative bg-no-repeat scroll-mt-24"
      style={{ backgroundImage: "url(/images/why.jpg)" }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue uppercase mb-4 tracking-wide text-center">
            Các chuyên khoa mũi nhọn tại TRUE HOPE
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center">
            Phòng khám tự hào mang đến các giải pháp y tế toàn diện, bảo vệ và phục hồi sức khỏe an toàn, triệt để.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
          {SERVICES.map((card, index) => (
            <motion.div
              key={card.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              style={{ willChange: "transform, opacity" }}
            >
              <Link
                href={`/dich-vu/${card.slug}`}
                className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-2xl"
              >
                <div className="bg-white rounded-2xl p-4 border-t-4 border-brand-blue group-hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center h-full cursor-pointer shadow-md group-hover:shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-full h-[200px] relative rounded-xl overflow-hidden mb-4">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {card.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
