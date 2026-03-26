import Image from "next/image";

export default function EquipmentSection() {
  return (
    <section className="py-20 bg-[#4dd2ff] relative overflow-hidden" style={{ backgroundImage: 'url(/images/may.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-20 rounded-full blur-[100px] z-0 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-20 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20 relative">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider mb-2" style={{ textShadow: "0 0 10px rgba(0, 162, 232, 0.8), 2px 2px 0px #0066b3, -2px -2px 0px #0066b3, 2px -2px 0px #0066b3, -2px 2px 0px #0066b3" }}>
            Hệ thống
          </h2>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wide" style={{ textShadow: "0 0 10px rgba(0, 162, 232, 0.8), 2px 2px 0px #0066b3, -2px -2px 0px #0066b3, 2px -2px 0px #0066b3, -2px 2px 0px #0066b3" }}>
            Trang thiết bị hiện đại
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative">

          {/* Equipment 1 (Left) */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center">
            {/* Circular rings behind */}
            <div className="absolute w-[400px] h-[400px] border border-white/40 rounded-full animate-[spin_20s_linear_infinite] z-0"></div>
            <div className="absolute w-[500px] h-[500px] border border-white/20 rounded-full animate-[spin_30s_linear_infinite_reverse] z-0"></div>

            <Image
              src="/images/maychuandoan.png"
              alt="Hệ thống nội soi tiêu hóa"
              width={400}
              height={500}
              className="object-contain relative z-10 w-auto h-[500px] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />

            {/* Tag 1 */}
            <div className="absolute z-20 bottom-1/4 right-0 lg:-right-12 xl:-right-24 bg-white/95 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.15)] rounded-2xl py-4 px-8 border border-white/50 w-[300px]">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-md z-30 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <h3 className="text-red-600 font-bold text-xl mb-1">Chuẩn đoán siêu âm</h3>
              <p className="text-gray-700 text-sm font-medium">Hãng sản xuất: <span className="font-bold text-gray-900">Hàn Quốc</span></p>
            </div>
          </div>

          {/* Equipment 2 (Right) */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center">
            {/* Circular rings behind */}
            <div className="absolute w-[400px] h-[400px] border border-white/40 rounded-full animate-[spin_20s_linear_infinite_reverse] z-0"></div>
            <div className="absolute w-[500px] h-[500px] border border-white/20 rounded-full animate-[spin_30s_linear_infinite] z-0"></div>

            <Image
              src="/images/maychuandoan-1.png"
              alt="Hệ thống nội soi dạ dày"
              width={350}
              height={450}
              className="object-contain relative z-10 w-auto h-[450px] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />

            {/* Tag 2 */}
            <div className="absolute z-20 top-1/4 left-0 lg:-left-12 xl:-left-24 bg-white/95 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.15)] rounded-2xl py-4 px-8 border border-white/50 w-[300px]">
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-md z-30 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <h3 className="text-red-600 font-bold text-xl mb-1">Điều trị (trị liệu)</h3>
              <p className="text-gray-700 text-sm font-medium">Hãng sản xuất: <span className="font-bold text-gray-900">Hàn Quốc</span></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
