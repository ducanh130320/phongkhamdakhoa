export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  overview: string[];
  procedure: string[];
  benefits: string[];
  metaDescription: string;
};

export const SERVICES: Service[] = [
  {
    slug: "bao-quy-dau",
    title: "Bao quy đầu",
    shortDescription:
      "Cắt bao quy đầu công nghệ mới, không đau, mau lành, thẩm mỹ cao.",
    image: "/images/catbaoquydau.jpg",
    metaDescription:
      "Cắt bao quy đầu công nghệ mới tại TRUE HOPE — ít đau, hồi phục nhanh, tư vấn và chăm sóc chu đáo.",
    overview: [
      "Cắt bao quy đầu là thủ thuật phổ biến giúp vệ sinh dễ dàng, giảm nguy cơ viêm nhiễm và các bệnh lý liên quan. Tại TRUE HOPE, chúng tôi áp dụng kỹ thuật xâm lấn tối thiểu, gây tê hiện đại để hạn chế khó chịu trong và sau thủ thuật.",
      "Bác sĩ sẽ thăm khám, giải thích rõ chỉ định — từ hẹp bao quy đầu, viêm tái phát đến nhu cầu thẩm mỹ — và lựa chọn phương pháp phù hợp với từng trường hợp.",
    ],
    procedure: [
      "Thăm khám, đánh giá tình trạng và chỉ định thủ thuật.",
      "Gây tê tại chỗ / gây tê khu vực theo phác đồ an toàn.",
      "Thực hiện cắt bao quy đầu với dụng cụ chuyên dụng, cầm máu tốt.",
      "Băng ép, hướng dẫn chăm sóc tại nhà và tái khám theo lịch.",
    ],
    benefits: [
      "Ít đau nhờ gây tê và kỹ thuật nhẹ nhàng.",
      "Vết thương liền nhanh, hạn chế biến chứng khi tuân thủ hướng dẫn.",
      "Tính thẩm mỹ được chú trọng, tư vấn riêng tư và tôn trọng.",
    ],
  },
  {
    slug: "kiem-tra-nam-khoa",
    title: "Kiểm tra nam khoa",
    shortDescription:
      "Tầm soát tổng quát, phát hiện và tư vấn kịp thời các vấn đề sức khỏe sinh lý nam giới.",
    image: "/images/youngman.jpg",
    metaDescription:
      "Gói kiểm tra nam khoa tại TRUE HOPE: tầm soát sức khỏe sinh sản — nam, tư vấn cá nhân hóa.",
    overview: [
      "Kiểm tra nam khoa định kỳ giúp phát hiện sớm các dấu hiệu bất thường về tinh hoàn, tuyến tiền liệt, chức năng sinh lý và bệnh lây qua đường tình dục — khi còn dễ điều trị.",
      "Quy trình được thiết kế rõ ràng, bảo mật, giảm thời gian chờ và tạo không gian thoải mái để bạn trao đổi thẳng thắn với bác sĩ.",
    ],
    procedure: [
      "Thu thập tiền sử, triệu chứng và nhu cầu kiểm tra.",
      "Khám lâm sàng theo chỉ định (có thể bao gồm siêu âm, xét nghiệm khi cần).",
      "Giải thích kết quả, phân loại nguy cơ và lập kế hoạch theo dõi.",
      "Tư vấn phòng bệnh, dinh dưỡng và lối sống phù hợp.",
    ],
    benefits: [
      "Tầm soát toàn diện, phát hiện sớm.",
      "Tư vấn minh bạch, kế hoạch điều trị / theo dõi rõ ràng.",
      "Quy trình riêng tư, tôn trọng người bệnh.",
    ],
  },
  {
    slug: "yeu-sinh-ly",
    title: "Yếu sinh lý",
    shortDescription:
      "Lấy lại bản lĩnh phái mạnh với các phác đồ điều trị chuyên sâu, an toàn và hiệu quả.",
    image: "/images/yeusinhly.jpg",
    metaDescription:
      "Điều trị yếu sinh lý tại TRUE HOPE — đánh giá nguyên nhân, phác đồ cá nhân hóa, an toàn.",
    overview: [
      "Yếu sinh lý có thể liên quan đến thể chất, tâm lý, thuốc đang dùng hoặc bệnh nền. Việc chẩn đoán đúng nguyên nhân là chìa khóa để điều trị hiệu quả và bền vững.",
      "Chúng tôi kết hợp khám lâm sàng với các hướng cận lâm sàng khi cần, đồng thời đồng hành trong giai đoạn điều chỉnh lối sống và điều trị.",
    ],
    procedure: [
      "Khám và phân tích nguyên nhân tiềm ẩn (nội tiết, mạch máu, tâm lý…).",
      "Thống nhất mục ti tiêu điều trị cùng người bệnh.",
      "Áp dụng phác đồ: điều chỉnh thuốc, vật lý trị liệu hoặc can thiệp phù hợp chỉ định.",
      "Theo dõi đáp ứng, điều chỉnh liều / phương pháp và hỗ trợ tâm lý khi cần.",
    ],
    benefits: [
      "Tiếp cận đa chiều, ưu tiên an toàn.",
      "Kế hoạch cá nhân hóa, theo dõi sát.",
      "Tôn trọng sự riêng tư và mục tiêu điều trị của bạn.",
    ],
  },
  {
    slug: "sui-mao-ga",
    title: "Sùi mào gà",
    shortDescription:
      "Chẩn đoán chính xác và tiêu diệt virus gây bệnh, ngăn chặn biến chứng.",
    image: "/images/suimaoga.jpg",
    metaDescription:
      "Điều trị sùi mào gà tại TRUE HOPE — chẩn đoán chính xác, phác đồ hiện đại, ngăn tái phát.",
    overview: [
      "Sùi mào gà do HPV gây ra; điều trị sớm giúp giảm lây lan và biến chứng. Việc phân loại tổn thương và loại HPV liên quan hỗ trợ lựa chọn phương pháp phù hợp.",
      "TRUE HOPE áp dụng các kỹ thuật loại bỏ tổn thương kết hợp tư vấn phòng ngừa và theo dõi sau điều trị.",
    ],
    procedure: [
      "Khám, xác định mức độ và vị trí tổn thương.",
      "Điều trị theo chỉ định (đốt / cắt bỏ / laser tùy trường hợp).",
      "Hướng dẫn vệ sinh, kiêng cữ và tái khám.",
      "Tư vấn phòng ngừa lây nhiễm và tái phát cho bản thân và đối tác.",
    ],
    benefits: [
      "Xử lý triệt để tổn thương hiện có khi đúng chỉ định.",
      "Giảm nguy cơ lây lan và tái phát nhờ theo dõi chặt.",
      "Thông tin rõ ràng về bệnh và cách phòng vệ.",
    ],
  },
  {
    slug: "benh-tri",
    title: "Bệnh Trĩ",
    shortDescription:
      "Điều trị trĩ nội, ngoại dứt điểm bằng phương pháp xâm lấn tối thiểu hiện đại nhất.",
    image: "/images/benhtri.jpg",
    metaDescription:
      "Điều trị bệnh trĩ tại TRUE HOPE — kỹ thuật xâm lấn tối thiểu, hồi phục nhanh.",
    overview: [
      "Trĩ là bệnh lý phổ biến; khi có đau, chảy máu hoặc sa búi trĩ ảnh hưởng sinh hoạt, việc được bác sĩ đánh giá độ trĩ và chỉ định điều trị giúp cải thiện chất lượng cuộc sống rõ rệt.",
      "Phòng khám ưu tiên các phương pháp ít xâm lấn, giảm đau sau thủ thuật và rút ngắn thời gian nằm viện khi phù hợp.",
    ],
    procedure: [
      "Khám hậu môn — trực tràng, phân loại trĩ nội / ngoại / hỗn hợp.",
      "Thảo luận phương án: nội khoa hoặc thủ thuật / phẫu thuật xâm lấn tối thiểu.",
      "Thực hiện điều trị trong điều kiện vô khuẩn, theo dõi hậu phẫu.",
      "Hướng dẫn chế độ ăn, đi đại tiện và lịch tái khám.",
    ],
    benefits: [
      "Giảm triệu chứng đau, chảy máu, khó chịu khi đi vệ sinh.",
      "Phục hồi nhanh với kỹ thuật hiện đại khi chỉ định đúng.",
      "Tư vấn phòng ngừa tái phát dựa trên thói quen sinh hoạt.",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getOtherServices(slug: string): Service[] {
  return SERVICES.filter((s) => s.slug !== slug);
}
