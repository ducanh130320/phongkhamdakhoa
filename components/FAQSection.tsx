'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "01. Khám Nam khoa gồm những bước nào?",
      a: "Khám nam khoa bao gồm: Khám tổng quát tiểu sử bệnh lý, Khám chi tiết bộ phận sinh dục (kiểm tra bao quy đầu, tinh hoàn...), và Xét nghiệm lâm sàng (xét nghiệm máu, nước tiểu, tinh dịch đồ) nếu cần thiết."
    },
    {
      q: "02. Cắt bao quy đầu có đau không và bao lâu thì lành?",
      a: "Tại True Hope, chúng tôi áp dụng phương pháp xâm lấn tối thiểu công nghệ mới nhất. Quá trình thực hiện hoàn toàn không đau do được gây tê tại chỗ. Vết thương rất nhỏ, thẩm mỹ cao và thường hồi phục hoàn toàn sau 7-10 ngày."
    },
    {
      q: "03. Điều trị yếu sinh lý mất bao lâu thì có hiệu quả?",
      a: "Hiệu quả phụ thuộc vào nguyên nhân và tình trạng cụ thể của mỗi người. Thông thường với phác đồ điều trị chuyên sâu kết hợp tại phòng khám, bệnh nhân sẽ thấy cải thiện rõ rệt sau 1-2 liệu trình."
    },
    {
      q: "04. Chữa Sùi mào gà / Bệnh xã hội thông tin có được bảo mật không?",
      a: "Tuyệt đối bảo mật! True Hope áp dụng mô hình 1 Bác sĩ - 1 Bệnh nhân. Mọi thông tin cá nhân và hồ sơ bệnh án của bạn được giữ kín hoàn toàn, mang lại sự riêng tư và thoải mái nhất."
    },
    {
      q: "05. Chi phí khám và điều trị là bao nhiêu?",
      a: "Chi phí luôn được niêm yết công khai, minh bạch. Sau khi thăm khám, bác sĩ sẽ tư vấn phác đồ và báo giá chi tiết trước khi bạn quyết định điều trị."
    }
  ];

  return (
    <section className="py-20 bg-[#66c2ff] relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white uppercase mb-12 drop-shadow-md tracking-wider">
          Những câu hỏi thường gặp
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
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
              style={{ willChange: "transform, opacity" }}
            >
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-blue-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className={`font-bold text-lg ${openIndex === idx ? 'text-brand-blue' : 'text-gray-700'}`}>
                    {faq.q}
                  </span>
                  {openIndex === idx ? (
                    <Minus className="w-6 h-6 text-brand-blue shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400 shrink-0" />
                  )}
                </button>

                {openIndex === idx && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 mt-2 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
