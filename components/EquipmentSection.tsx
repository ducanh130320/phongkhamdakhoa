'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function EquipmentSection() {
  return (
    <section
      id="trang-thiet-bi"
      className="relative overflow-hidden bg-[#4dd2ff] py-14 sm:py-16 lg:py-20 [overflow-x:clip]"
      style={{
        backgroundImage: "url(/images/may.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-20 rounded-full blur-[100px] z-0 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-20 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="relative mb-10 text-center sm:mb-14 lg:mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider mb-2" style={{ textShadow: "0 0 10px rgba(0, 162, 232, 0.8), 2px 2px 0px #0066b3, -2px -2px 0px #0066b3, 2px -2px 0px #0066b3, -2px 2px 0px #0066b3" }}>
            Hệ thống
          </h2>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wide" style={{ textShadow: "0 0 10px rgba(0, 162, 232, 0.8), 2px 2px 0px #0066b3, -2px -2px 0px #0066b3, 2px -2px 0px #0066b3, -2px 2px 0px #0066b3" }}>
            Trang thiết bị hiện đại
          </h2>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-14 lg:flex-row lg:gap-16">

          {/* Equipment 1 (Left) */}
          <div className="relative flex w-full items-center justify-center lg:w-1/2">
            {/* Circular rings behind */}
            <div className="absolute h-[min(82vw,400px)] w-[min(82vw,400px)] rounded-full border border-white/40 animate-[spin_20s_linear_infinite] z-0"></div>
            <div className="absolute h-[min(92vw,500px)] w-[min(92vw,500px)] rounded-full border border-white/20 animate-[spin_30s_linear_infinite_reverse] z-0"></div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="relative flex w-full max-w-[420px] flex-col items-center"
            >
              <Image
                src="/images/maychuandoan.png"
                alt="Hệ thống nội soi tiêu hóa"
                width={400}
                height={500}
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 400px"
                className="relative z-10 h-[360px] w-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105 sm:h-[420px] lg:h-[500px]"
              />

              <div className="z-20 mt-4 w-[min(92vw,320px)] rounded-2xl border border-white/50 bg-white/90 px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-sm lg:absolute lg:bottom-1/4 lg:right-0 lg:mt-0 lg:w-[300px] lg:-right-12 xl:-right-24">
                <div className="absolute -left-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-500 shadow-md z-30 lg:flex">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="text-red-600 font-bold text-xl mb-1">Chuẩn đoán siêu âm</h3>
                <p className="text-gray-700 text-sm font-medium">Hãng sản xuất: <span className="font-bold text-gray-900">Hàn Quốc</span></p>
              </div>
            </motion.div>
          </div>

          {/* Equipment 2 (Right) */}
          <div className="relative flex w-full items-center justify-center lg:w-1/2">
            {/* Circular rings behind */}
            <div className="absolute h-[min(82vw,400px)] w-[min(82vw,400px)] rounded-full border border-white/40 animate-[spin_20s_linear_infinite_reverse] z-0"></div>
            <div className="absolute h-[min(92vw,500px)] w-[min(92vw,500px)] rounded-full border border-white/20 animate-[spin_30s_linear_infinite] z-0"></div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative flex w-full max-w-[420px] flex-col items-center"
            >
              <Image
                src="/images/maychuandoan-1.png"
                alt="Hệ thống nội soi dạ dày"
                width={350}
                height={450}
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 350px"
                className="relative z-10 h-[340px] w-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105 sm:h-[400px] lg:h-[450px]"
              />
              <div className="z-20 mt-4 w-[min(92vw,320px)] rounded-2xl border border-white/50 bg-white/90 px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-sm lg:absolute lg:left-0 lg:top-1/4 lg:mt-0 lg:w-[300px] lg:-left-12 xl:-left-24">
                <div className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-500 shadow-md z-30 lg:flex">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="text-red-600 font-bold text-xl mb-1">Điều trị (trị liệu)</h3>
                <p className="text-gray-700 text-sm font-medium">Hãng sản xuất: <span className="font-bold text-gray-900">Hàn Quốc</span></p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
