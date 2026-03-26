import Image from "next/image";

export default function DoctorsSection() {
  const doctors = [
    {
      name: "Bs Chuyên Khoa I",
      title: "Chuyên khoa Ngoại - Nam học",
      image: "bg-blue-100" // placeholder class for image
    },
    {
      name: "Trưởng Phòng Khám",
      title: "Chuyên gia Phẫu thuật Thẩm mỹ - Ngoại khoa",
      image: "bg-pink-100"
    }
  ];

  return (
    <section className="relative" style={{ backgroundImage: 'url(/images/backdrop-final.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '700px' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-brand-blue uppercase mb-2">
            Đội ngũ chuyên gia
          </h2>
          <h3 className="text-5xl md:text-6xl font-extrabold text-brand-red cursive mb-4 drop-shadow-sm font-serif">
            Kinh nghiệm
          </h3> */}
        </div>
      </div>
    </section>
  );
}
