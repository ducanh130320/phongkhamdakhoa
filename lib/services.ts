export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  overview: string[];
  procedure: string[];
  benefits: string[];
  metaDescription: string;
  youtubeVideoId: string;
  content?: string;
  reason?: string;
  reasonContent?: string;
  titleReason?: string;
  imageReason?: string;
  symptomsTitle?: string;
  symptomsContent?: string;
  salesContent?: string;
  treatmentContent?: string;
  treatmentProcedure?: string;
  whatIsTheFoeskin?: string;
  roleFoeskin?: string;
  foeskinDiseases?: string;
  foeskinDiseasesContent?: string;
  whatIsTheMaleDepartment?: string;
  whatIsTheMaleDepartmentContent?: string;
  whyIsTheMaleDepartmentPeriodic?: string;
  whyIsTheMaleDepartmentPeriodicContent?: string;
  whatIsTheMaleDepartmentImage?: string;
  whyIsTheMaleDepartmentPeriodicSale?: string;
  expression?: string;
  expressionContent?: string;
  expressionImage?: string;
  expressionSymptomsTitle?: string;
  expressionSymptomsContent?: string;
  expressionSupport?: string;
  expressionSupportContent?: string;
  expressionSale?: string;
  expressionSaleContent?: string;
  hemorrhoidsTitle?: string;
  hemorroidsContent?: string;
  hemorroidsOfTypes?: string;
  hemorrhoidsOfTypes?: string;
  hemorroidsOfTypesSale?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "bao-quy-dau",
    title: "Bao quy đầu",
    whatIsTheFoeskin: "Bao quy đầu là gì?",
    roleFoeskin: "5 bệnh bảo quy đầu thường gặp ở nam giới",
    titleReason: "***Bệnh bao quy đầu*** là bệnh lý phổ biến, thường gặp ở nam giới, đặc biệt là ở độ tuổi từ 15 đến 40. Bệnh bao quy đầu có thể gây ra nhiều biến chứng nguy hiểm, đặc biệt là khi không được điều trị kịp thời. Do đó, các bạn cần trạng bị kiến thức về bệnh để bảo vệ sức khỏe cho mình và người thân.",
    imageReason: "/images/catbaoquydau-2.jpg",
    foeskinDiseases: `# Hẹp, Nghẹt và Viêm Bao Quy Đầu: Kiến Thức Nam Khoa Quan Trọng

## 1. Hẹp bao quy đầu

Hẹp bao quy đầu (hẹp da quy đầu) là tình trạng da bao quy đầu không tuột lên hoàn toàn khỏi quy đầu. Ở trẻ sơ sinh, hẹp bao quy đầu là sinh lý bình thường, có thể kéo dài tới tuổi thanh niên. Khi đến tuổi dậy thì, dương vật phát triển nhanh, to và dài ra, bao quy đầu sẽ tự tuột ra ngoài.  

**Phương pháp điều trị không phẫu thuật:**

- **Kem thoa steroid** (0,1% betamethasone), thoa trong 4–6 tuần. Dễ áp dụng, giá rẻ, ít rủi ro, hiệu quả cao.  
- **Nong da quy đầu bằng tay hoặc dụng cụ** Ban đầu bác sĩ thực hiện, sau đó bệnh nhân có thể tự áp dụng tại nhà. Phương pháp nhẹ nhàng, không sang chấn, nhưng nếu làm sai có thể gây chảy máu, xơ dính.  
- **Phẫu thuật** Khi phương pháp trên không hiệu quả, bao quy đầu vẫn hẹp, hoặc kèm viêm nhiễm, nhiễm trùng tiểu.  

## 2. Nghẹt bao quy đầu

![Nghẹt bao quy đầu](/images/nghet-bao-quy-dau.png)

Nghẹt bao quy đầu là tình trạng sưng mô bao quy đầu, không thể kéo trở lại phủ đầu dương vật sau khi đã lột ra. Gây sưng đau và cản trở tuần hoàn máu.  

**Nguyên nhân phổ biến:**

- Không kéo bao quy đầu trở lại vị trí cũ sau khi tuột ra kiểm tra.  
- Lột mạnh hoặc giữ bao quy đầu bị tuột quá lâu.  
- Bao quy đầu hẹp dẫn tới nhiễm trùng đầu dương vật.  

**Triệu chứng cần khám sớm:**

- Không thể kéo bao quy đầu che phủ đầu dương vật  
- Sưng, co thắt bao quy đầu  
- Dương vật đổi màu hoặc đau nhức  
- Mất cảm giác tại bao quy đầu hoặc đầu dương vật  

Trong quá trình phẫu thuật, bác sĩ dùng thuốc gây tê giảm đau và sưng. Nếu tái phát, cắt bao quy đầu có thể là lựa chọn điều trị tốt nhất.

## 3. Viêm bao quy đầu do nhiễm trùng

Viêm bao quy đầu là tình trạng viêm nhiễm tại bao quy đầu, thường gặp ở người chưa cắt bao quy đầu. Hẹp bao quy đầu làm khó vệ sinh, chất tiết tại rãnh quy đầu có thể bị nhiễm khuẩn.  

**Triệu chứng:**

- Xuất hiện đốm trắng xung quanh quy đầu  
- Sưng dương vật, đau khi tiểu  
- Ngứa hoặc đau xung quanh quy đầu  
- Tiết dịch bất thường, có mùi hôi  

**Phương pháp điều trị:**

- Bôi kem steroid hoặc thuốc mỡ kháng sinh và chống nấm  
- Vệ sinh dương vật bằng nước ấm, giữ sạch để hạn chế vi khuẩn  
- Dùng sản phẩm chăm sóc dịu nhẹ, thiên nhiên

## 4. Viêm bao quy đầu do dị ứng

**Triệu chứng:**

- Mảng màu xám, nâu hoặc đỏ trên da  
- Da dày cộm, ngứa, xuất hiện mụn nước hoặc phát ban  
- Vết trầy xước, khô nứt nẻ  
- Tiểu khó, tiểu máu, sưng bìu  
- Đau sau quan hệ tình dục, nặng hơn 2 giờ  

**Nguyên nhân:**

- Chấn thương hoặc kích ứng (kéo khóa quần, quần bó sát, chất clo, bao cao su…)  
- Hẹp bao quy đầu, bệnh vẩy nến, viêm khớp phản ứng  

**Biện pháp tại nhà:**

- Chườm khăn lạnh 20 phút/ngày  
- Thoa kem hydrocortisone 1% hoặc thuốc mỡ dịu nhẹ  
- Băng vùng trầy xước bằng gạc sạch  
- Dùng thuốc dị ứng như diphenhydramine hoặc cetirizine  
- Tránh hóa chất gây kích thích, chọn sản phẩm dịu nhẹ

## 5. Khô và nứt bao quy đầu

**Nguyên nhân phổ biến:**

- Nhiễm nấm men candida albicans  
- Vệ sinh dương vật kém  
- Mụn rộp do quan hệ không an toàn  

**Biểu hiện:**

- Da kích ứng, sưng trắng, tấy đỏ  
- Tiết dịch trắng ở bao quy đầu  
- Co thắt bao quy đầu  

## 6. Bao quy đầu bình thường

**Dấu hiệu nhận biết:**

- Sau tuổi dậy thì, dễ dàng tuột lên/xuống rãnh quy đầu, không đau  
- Khi cương cứng, da tự lột xuống, lộ quy đầu  
- Quy đầu khỏe mạnh, hồng hào, không viêm, không dịch, không mùi  

## 7. Khi nào cần gặp bác sĩ?

- Dấu hiệu bất thường ở hệ tiết niệu: khó tiểu, tiểu rát  
- Nghẹt bao quy đầu: không kéo trở lại, sưng tấy, đau nhức, đổi màu  
- Ngăn ngừa biến chứng: hoại tử quy đầu hoặc bao quy đầu  

## 8. Phương pháp chẩn đoán

- Cung cấp tiền sử bệnh và tình dục  
- Xét nghiệm toàn bộ bộ phận sinh dục  
- Phân tích mẫu nước tiểu nếu nghi ngờ nhiễm trùng  

## 9. Phòng ngừa các bệnh bao quy đầu

- Khám sức khỏe nam khoa định kỳ 2 lần/năm  
- Vệ sinh dương vật ít nhất 1 lần/ngày, chọn quần áo rộng rãi  
- Quan hệ tình dục an toàn, dùng bao cao su, thủy chung một bạn tình  

`,
    foeskinDiseasesContent: `
⚠️ Bạn đang gặp tình trạng: Khó tuột bao quy đầu, đau khi cương, ngứa ngáy, mùi hôi khó chịu hoặc viêm tái đi tái lại?
Đừng chủ quan cho qua, đó có thể là dấu hiệu của **hẹp, dài hoặc viêm bao quy đầu** gây ảnh hưởng đến sức khỏe và sinh lý nam giới!

## ✅ GIẢI PHÁP TOÀN DIỆN – CHI PHÍ CỰC THẤP

Chỉ với **280.000đ (Giá gốc 950.000đ)**, bạn nhận ngay gói **Khám Bao Quy Đầu & Nam Khoa Tổng Quát**:

- **Kiểm tra bao quy đầu**: phát hiện hẹp, dài, viêm nhiễm
- **Tầm soát viêm nhiễm nam khoa**
- **Xét nghiệm nước tiểu, soi tươi dịch**
- **Đánh giá chức năng sinh lý nam giới**

## 🛡 CAM KẾT

- Bảo mật thông tin **100%**
- Mô hình **1 Bác sĩ : 1 Bệnh nhân**
- Khám nhanh – Không chờ đợi

[Đặt lịch khám ngay](https://zalo.me/0985912711)
    `,
    shortDescription:
      "Cắt bao quy đầu công nghệ mới, không đau, mau lành, thẩm mỹ cao.",
    image: "/images/catbaoquydau.jpg",
    metaDescription:
      "Cắt bao quy đầu công nghệ mới tại TRUE HOPE — ít đau, hồi phục nhanh, tư vấn và chăm sóc chu đáo.",
    youtubeVideoId: "",
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
    ]
  },
  {
    slug: "kiem-tra-nam-khoa",
    title: "Kiểm tra nam khoa",
    whatIsTheMaleDepartment: "Tại sao nên đi khám nam khoa ?",
    whatIsTheMaleDepartmentContent: `Trong thời gian gần đây, phòng khám đã tiếp nhận và điều trị nhiều trường hợp nam giới trẻ từ 20-35 tuổi gặp tình trạng vô sinh hiếm muộn. Các nguyên nhân phổ biến bao gồm: bất thường nhiễm sắc thể, viêm nhiễm vùng kín, rối loạn cương dương thoáng qua, suy sinh dục và các bệnh lý nam khoa khác. Đây được coi là độ tuổi còn trẻ, nhưng tỷ lệ mắc các vấn đề này đang gia tăng đáng kể so với trước.`,
    whyIsTheMaleDepartmentPeriodic: "Tại sao nên đi khám nam khoa định kỳ? – Bác sĩ chuyên khoa giải đáp",
    whatIsTheMaleDepartmentImage: '/images/img-2.jpg',
    whyIsTheMaleDepartmentPeriodicContent: `
    💡 Lợi Ích Của Việc Khám Nam Khoa Định Kỳ

Khám nam khoa định kỳ không chỉ giúp bảo vệ sức khỏe mà còn phát hiện sớm nhiều bệnh lý nguy hiểm ở nam giới.

## ✅ Những lợi ích quan trọng:

- **Phát hiện sớm viêm nhiễm nam khoa**
  Như viêm bao quy đầu, dài/hẹp bao quy đầu, viêm dương vật,…

- **Tầm soát bệnh lây qua đường tình dục (STDs)**
  Giang mai, lậu, sùi mào gà… – các bệnh có tốc độ lây lan nhanh, ảnh hưởng nghiêm trọng đến sức khỏe và khả năng sinh sản.
  👉 Bạn từng quan hệ không an toàn? [**Chat với bác sĩ TẠI ĐÂY**](https://zalo.me/0985912711)

- **Kiểm tra các bệnh lý tinh hoàn**
  Phát hiện sớm viêm tinh hoàn – mào tinh hoàn, teo tinh hoàn, tắc ống dẫn tinh,…

- **Đánh giá chức năng sinh lý nam**
  Hỗ trợ điều trị sớm: rối loạn cương dương, xuất tinh sớm, yếu sinh lý, giảm ham muốn,…

- **Phát hiện nguy cơ vô sinh – hiếm muộn**
  Nhận tư vấn chuyên sâu và giải pháp điều trị phù hợp, hiệu quả.

- **Tư vấn chăm sóc & phòng bệnh**
  Hướng dẫn vệ sinh dương vật đúng cách, phòng tránh các bệnh viêm nhiễm và bệnh xã hội.

## 👨‍⚕️ Lời khuyên từ chuyên gia

> **ThS.BS Lê Đỗ Nguyên** – Nguyên Trưởng khoa Ngoại Tiết niệu – Nam học, Bệnh viện Xanh Pôn:
> *“Khám nam khoa là việc làm cần thiết để duy trì sức khỏe toàn diện cho phái mạnh. Ngoài việc khám định kỳ 3–6 tháng/lần, nam giới nên đi khám ngay khi có dấu hiệu bất thường để phát hiện sớm bệnh lý và điều trị hiệu quả.”*

## 📌 Khi nào nên đi khám nam khoa?

- Có dấu hiệu bất thường ở dương vật
- Đau, ngứa, viêm nhiễm vùng kín
- Quan hệ không an toàn
- Vấn đề sinh lý hoặc khả năng sinh sản
    `,
    whyIsTheMaleDepartmentPeriodicSale: `# 🔎 ĐỪNG ĐỂ "CHUYỆN NHỎ" TRỞ THÀNH "HẬU QUẢ LỚN"!

⚠️ Bạn đang gặp các dấu hiệu:

- Tiểu buốt, tiểu rắt  
- Ngứa ngáy vùng kín  
- Khó chịu khi quan hệ  
- Xuất tinh sớm, giảm phong độ  

Đừng chủ quan cho qua! Đây có thể là dấu hiệu của **viêm nhiễm nam khoa hoặc suy giảm chức năng sinh lý** ảnh hưởng nghiêm trọng đến sức khỏe và khả năng sinh sản.

---

## ✅ GIẢI PHÁP TOÀN DIỆN – CHI PHÍ CỰC THẤP

Chỉ với **280.000đ (Giá gốc 950.000đ)**, bạn nhận ngay gói:

### 🔹 Khám Nam Khoa Tổng Quát

- **Kiểm tra cơ quan sinh dục** – phát hiện viêm nhiễm sớm  
- **Xét nghiệm nước tiểu** & **soi tươi dịch niệu đạo**  
- **Đánh giá chức năng sinh lý & tuyến tiền liệt**  

---

## 🛡 CAM KẾT

- 🔒 Bảo mật thông tin **100%**  
- 👨‍⚕️ Mô hình **1 Bác sĩ : 1 Bệnh nhân**  
- ⚡ Khám nhanh – Không chờ đợi  

---

⏳ **Ưu đãi chỉ áp dụng cho 30 người đăng ký sớm nhất trong tuần!**

---

[Đặt lịch khám ngay](https://zalo.me/0985912711)`,
    shortDescription:
      "Tầm soát tổng quát, phát hiện và tư vấn kịp thời các vấn đề sức khỏe sinh lý nam giới.",
    image: "/images/youngman.jpg",
    metaDescription:
      "Gói kiểm tra nam khoa tại TRUE HOPE: tầm soát sức khỏe sinh sản — nam, tư vấn cá nhân hóa.",
    youtubeVideoId: "VHkn9Dz6tno",
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
    expression: "Yếu sinh lý là gì ?",
    expressionSymptomsTitle: 'Biểu hiện yếu sinh lý',
    expressionContent: '***Yếu sinh lý*** là tình trạng rối loạn sinh lý thường gặp ở đàn ông. Đây là nỗi khổ tâm khó nói của đàn ông, khiến họ luôn cảm thấy mặc cảm, tự ti do không thỏa mãn được nhu cầu tình dục của bản thân cũng như của bạn tình.. Do đó nhận biết sớm những biếu hiện yếu sinh lý ở đàn ông sẽ giúp người bệnh có cách phòng và hỗ trợ chữa bệnh kịp thời, tránh ảnh hưởng đến hạnh phúc gia đình và khả năng sinh sản về sau.',
    expressionImage: '/images/yeu-sinh-ly-2.jpg',
    expressionSymptomsContent: `
Theo các bác sĩ chuyên khoa, biểu hiện và mức độ **yếu sinh lý** ở mỗi người là khác nhau. Tuy nhiên, bạn hoàn toàn có thể nhận biết sớm qua các dấu hiệu điển hình dưới đây:

## 🔻 1. Rối loạn xuất tinh

Tình trạng xuất tinh không theo quy luật bình thường, bao gồm:

- **Xuất tinh sớm**: Xuất tinh khi chưa đạt khoái cảm, thường dưới 2 phút
- **Xuất tinh muộn**: Dương vật cương cứng lâu nhưng khó đạt cực khoái
- **Không xuất tinh**: Dương vật cương cứng nhưng không thể xuất tinh

## 🔻 2. Rối loạn cương dương

Đây là dấu hiệu phổ biến nhất của yếu sinh lý:

- Dương vật khó cương cứng
- Không duy trì được độ cương khi quan hệ
- Dễ bị “mềm” giữa chừng

## 🔻 3. Giảm ham muốn tình dục

- Mất hứng thú với chuyện chăn gối
- Nguyên nhân thường do stress, áp lực công việc, tâm lý
- Ảnh hưởng đến chất lượng đời sống tình dục và khả năng sinh sản

## 🔻 4. Đau khi quan hệ

- Cảm giác đau, căng tức khi dương vật cương cứng
- Đau rát hoặc buốt khi xuất tinh
- Gây khó chịu và ảnh hưởng đến tâm lý khi quan hệ

## 📌 Lời khuyên

Nếu bạn gặp **1 hoặc nhiều dấu hiệu trên**, đừng chủ quan. Việc thăm khám sớm giúp:

- Xác định chính xác nguyên nhân
- Điều trị kịp thời, tránh biến chứng
- Cải thiện sức khỏe sinh lý và chất lượng cuộc sống

📲 **Liên hệ bác sĩ hoặc đặt lịch khám sớm để được tư vấn chính xác và bảo mật.**
    `,
    expressionSupport: "Hỗ trợ điều trị yếu sinh lý",
    expressionSupportContent: `
    # 💊 Các Phương Pháp Hỗ Trợ Điều Trị Yếu Sinh Lý Ở Nam Giới

Để hỗ trợ điều trị **yếu sinh lý**, trước tiên bác sĩ sẽ tiến hành thăm khám và xác định chính xác **nguyên nhân gây bệnh**. Từ đó đưa ra phương pháp điều trị phù hợp và hiệu quả nhất.

---

## 🔹 1. Liệu pháp tâm lý

Những yếu tố như **áp lực công việc, stress kéo dài, căng thẳng tâm lý** có thể ảnh hưởng trực tiếp đến chức năng sinh lý nam giới.

Vì vậy, trong quá trình điều trị, người bệnh cần:

- Giảm căng thẳng và áp lực trong cuộc sống
- Giữ tâm lý thoải mái
- Ngủ đủ giấc và cân bằng giữa công việc – nghỉ ngơi

Việc cải thiện tâm lý có thể giúp nâng cao hiệu quả điều trị và phục hồi chức năng sinh lý.

---

## 🔹 2. Điều trị bằng thuốc chuyên khoa

Bác sĩ có thể chỉ định sử dụng **thuốc nội tiết tố hoặc thuốc hỗ trợ sinh lý** nhằm:

- Điều chỉnh hormone nam giới về mức cân bằng
- Cải thiện khả năng cương cứng
- Tăng cường chức năng sinh lý

⚠️ Việc sử dụng thuốc cần **tuân theo chỉ định của bác sĩ**, không tự ý dùng thuốc để tránh tác dụng phụ.

---

## 🔹 3. Phương pháp vật lý trị liệu

Một số **bài tập và phương pháp vật lý trị liệu** có thể giúp cải thiện tình trạng yếu sinh lý, hỗ trợ:

- Tăng lưu thông máu đến dương vật
- Cải thiện khả năng cương cứng
- Nâng cao sức khỏe sinh lý nam giới

---

## 🥗 4. Điều chỉnh chế độ ăn uống và sinh hoạt

Bên cạnh điều trị y khoa, người bệnh cần duy trì **chế độ ăn uống và sinh hoạt khoa học**, bao gồm:

- Bổ sung thực phẩm giàu **protein** như: gan, hải sản, hàu
- Ăn nhiều **rau xanh và thực phẩm giàu chất xơ**
- Hạn chế rượu bia, thuốc lá và thức khuya
- Tăng cường vận động và tập luyện thể dục

Chế độ sống lành mạnh sẽ giúp **cải thiện sức khỏe sinh lý và nâng cao chất lượng cuộc sống của nam giới**.

---

📌 **Lời khuyên:**
Khi xuất hiện các dấu hiệu yếu sinh lý, nam giới nên thăm khám sớm tại cơ sở y tế chuyên khoa để được tư vấn và điều trị kịp thời.
    `,

    expressionSale: `
    ⚠️ CẢNH BÁO: TỰ Ý DÙNG THUỐC "CẤP TỐC" – LỢI BẤT CẬP HẠI!

## 🛑 "CHƯA ĐI CHỢ ĐÃ HẾT TIỀN" – NỖI LO KHÔNG CỦA RIÊNG AI

Bạn đang gặp tình trạng:

- "Trên bảo dưới không nghe"
- Thời gian quan hệ quá ngắn
- Giảm ham muốn, mất tự tin trước bạn đời

❗ Đừng im lặng chịu đựng! Đây có thể là dấu hiệu của **yếu sinh lý, rối loạn cương dương hoặc suy giảm nội tiết**.

---

## ✅ GIẢI PHÁP KHOA HỌC – LẤY LẠI BẢN LĨNH

### 🔹 Xác định chính xác nguyên nhân
- Do tâm lý (stress, áp lực)
- Do nội tiết tố
- Do bệnh lý nam khoa tiềm ẩn

### 🔹 Phác đồ điều trị cá nhân hóa
- Hỗ trợ kéo dài thời gian quan hệ
- Tăng cường sinh lực bền bỉ
- Cải thiện chức năng sinh lý an toàn

---

## 💰 ƯU ĐÃI ĐẶC BIỆT

🎁 **Tặng voucher giảm 30%** cho khách hàng đặt lịch trong tuần này!

---

## 🛡 CAM KẾT

- 🔒 Riêng tư **1 – 1**
- 🔐 Bảo mật thông tin tuyệt đối
- 📈 Hiệu quả rõ rệt sau liệu trình

---

## ⏰ THÔNG TIN LIÊN HỆ

- ⏰ Thời gian: **08:00 – 20:00** (Tất cả các ngày, kể cả T7 – CN & ngày lễ)
- ☎ Hotline: **0985.912.711 – 098.160.8901**
- 📍 Địa chỉ: **Hoàng Mai – Hà Nội**

---

📲 **Đừng để hạnh phúc nguội lạnh! Inbox ngay để được bác sĩ nam khoa tư vấn kín đáo.**

> [Đặt lịch khám ngay](https://zalo.me/0985912711)
    `,

    shortDescription:
      "Lấy lại bản lĩnh phái mạnh với các phác đồ điều trị chuyên sâu, an toàn và hiệu quả.",
    image: "/images/yeusinhly.jpg",
    metaDescription:
      "Điều trị yếu sinh lý tại TRUE HOPE — đánh giá nguyên nhân, phác đồ cá nhân hóa, an toàn.",
    youtubeVideoId: "8OUe6rtS4gk",
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
    titleReason: "***Sùi mào gà*** là bệnh xã hội do virus hpv gây ra, khiến niêm mạc da xuất hiện các mụn thịt, mục cóc. Các chủng chủng HPV gây bệnh sùi mào gà thường gây tổn thương ở vùng niêm mạc và bán niêm mạc.",
    reason: "Nguyên nhân gây sùi mào gà",
    content: "***Bệnh sùi mào gà*** là bệnh xã hội nguy hiểm, nếu không phát hiện sớm, điều trị triệt để sẽ gây ra nhiều biến chứng nguy hiểm ảnh hưởng nghiêm trọng đến sức khỏe, khả năng sinh sản thâm chí còn có thể gây ung thư, đe dọa tính mạng người bệnh. Do đó, các bạn cần trạng bị kiến thức về bệnh để bảo vệ sức khỏe cho mình và người thân.",
    imageReason: "/images/nguyen-nhan-gay-sui-mao-ga.jpg",
    reasonContent: `
- **Quan hệ tình dục không an toàn**  
Có đến 90% bệnh nhân bị sùi mào gà đều xuất phát từ việc quan hệ tình dục không an toàn, gồm quan hệ qua đường âm đạo, miệng hoặc hậu môn.

- **Tiếp xúc với vết thương hở**  
Virus HPV thường ẩn nấp tại những vị trí ẩm ướt trên cơ thể. Nếu bạn tiếp xúc trực tiếp với vết thương hở của người mắc bệnh thì nguy cơ lây nhiễm rất cao.

- **Dùng chung đồ cá nhân**  
Dịch tiết có thể bám trên quần áo, khăn tắm… Việc dùng chung các vật dụng này với người bệnh cũng có thể khiến bạn bị lây.

- **Lây truyền từ mẹ sang con**  
Nếu mẹ mắc bệnh khi mang thai, trẻ có thể tiếp xúc với virus trong quá trình sinh thường và bị lây nhiễm bẩm sinh.

Nắm rõ nguyên nhân gây bệnh là một trong những cách phòng tránh hiệu quả. Nếu bạn đang gặp vấn đề liên quan, hãy trao đổi với bác sĩ để được tư vấn và hỗ trợ kịp thời.
`,
    shortDescription:
      "Chẩn đoán chính xác và tiêu diệt virus gây bệnh, ngăn chặn biến chứng.",
    image: "/images/suimaoga.jpg",
    metaDescription:
      "Điều trị sùi mào gà tại TRUE HOPE — chẩn đoán chính xác, phác đồ hiện đại, ngăn tái phát.",
    youtubeVideoId: "cOSF4gAfN9o",
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
    symptomsTitle: "Triệu chứng của bệnh sùi mào gà",
    symptomsContent: `
- **Xuất hiện nốt mụn cóc hoặc nốt sần**
Đây là dấu hiệu phổ biến. Các nốt mọc ở vùng kín như môi lớn, môi bé, cổ tử cung, hậu môn hoặc vùng bẹn. Thường có màu hồng hoặc màu da, hình dạng giống súp lơ hoặc mào gà.

- **Cảm thấy ngứa và khó chịu**
Người bệnh thường bị ngứa, khó chịu ở cơ quan sinh dục, đặc biệt khi các nốt phát triển và lan rộng, ảnh hưởng đến sinh hoạt hằng ngày.

- **Đau nhức và sưng phù**
Vùng kín có thể bị sưng và đau, gây khó khăn khi đi tiểu hoặc quan hệ tình dục.

- **Xảy ra xuất huyết**
Các nốt mụn cóc khi bị tổn thương có thể chảy máu, đặc biệt sau khi quan hệ hoặc khi vệ sinh.

- **Âm đạo tiết ra chất nhầy bất thường**
Có thể xuất hiện khí hư có màu sắc, độ đặc bất thường và kèm mùi hôi khó chịu do viêm nhiễm.

- **Xuất hiện nốt ở nhiều vị trí**
Các nốt có thể xuất hiện ở bên ngoài âm hộ, bên trong âm đạo, cổ tử cung hoặc vùng hậu môn.`,
    salesContent: `# ⚡ TẦM SOÁT SÙI MÀO GÀ – TRỌN GÓI 690K – TRẢ KẾT QUẢ NGAY!

Bạn nghi ngờ mình bị lây nhiễm sau khi quan hệ không an toàn? Hãy kiểm tra ngay để bảo vệ bản thân và đối tác!

---

## ✅ Gói khám 690.000đ bao gồm:

- **Khám lâm sàng** với bác sĩ chuyên khoa.
- **Xét nghiệm HPV** (phát hiện chủng gây ung thư).
- **Kiểm tra các bệnh xã hội** kèm theo.

---

## 🛡 Ưu điểm:

- Kín đáo  
- Chuyên nghiệp  
- Không chờ đợi

---

📍 **Phòng Khám TRUEHOPE** – Đồng hành cùng sức khỏe phái mạnh.

 **[Đặt lịch khám ngay](https://zalo.me/0985912711)** `,
    treatmentContent: "An tâm điều trị sùi mào gà tại True Hope ",
    treatmentProcedure: `# 💡 Tại sao chọn TRUEHOPE khi khám sùi mào gà?

- **Bác sĩ chuyên khoa giỏi** Tất cả bác sĩ đều giàu kinh nghiệm, vững tay nghề.  
- **Trang thiết bị hiện đại** Hệ thống máy móc y tế tiên tiến giúp thăm khám nhanh và xét nghiệm chính xác.  
- **Phương pháp điều trị hiệu quả** An toàn, triệt để, không biến chứng.  
- **Chi phí minh bạch** Thu đúng quy định Bộ Y tế, người bệnh hoàn toàn yên tâm.  
- **Thời gian linh động** Khám ngoài giờ, không thu thêm phí.  
- **Ưu đãi tiết kiệm** Luôn có chương trình giúp bệnh nhân giảm chi phí.  

> 👉 [Tôi muốn tìm hiểu các chương trình ưu đãi của phòng khám?](#)

- **Tư vấn trực tuyến 24/24** Giải đáp mọi thắc mắc của người bệnh.  
- **Thăm khám nhanh chóng** Không xếp hàng, không chờ đợi khi đặt lịch online [TẠI ĐÂY](#) hoặc qua hotline: **0985.912.711 - 098.160.8901 - 0929.380.888.**`
  },
  {
    slug: "benh-tri",
    title: "Bệnh Trĩ",
    hemorrhoidsTitle: `
## 📌 1. Bệnh trĩ là gì?

***Bệnh trĩ không chỉ liên quan đến tĩnh mạch, mà là bệnh của hệ thống mạch máu phức tạp gồm:***

- Tiểu động mạch
- Tĩnh mạch
- Thông nối động – tĩnh mạch
- Cơ trơn và mô liên kết

  Đám rối tĩnh mạch nằm dưới lớp niêm mạc hậu môn, được nâng đỡ bởi mô sợi đàn hồi.

***👉 Khi áp lực tăng (rặn khi đi đại tiện, táo bón…), máu ứ đọng gây phình giãn tĩnh mạch → hình thành búi trĩ.***


## 🔎 2. Phân loại bệnh trĩ

### 🔹 Trĩ nội
- Nằm trên đường lược
- Ít đau, dễ chảy máu

### 🔹 Trĩ ngoại
- Nằm dưới đường lược
- Gây đau, dễ sưng viêm

![Phân loại trĩ](/images/phan-loai-tri.jpg)

### 📊 Phân độ trĩ nội

- **Độ 1:** Chưa sa ra ngoài
- **Độ 2:** Sa ra khi đi ngoài, tự co lại
- **Độ 3:** Sa ra, phải dùng tay đẩy lên
- **Độ 4:** Sa thường xuyên, không đẩy vào được

![Phân loại độ](/images/phan-loai-tri.jpg)

## ⚠️ 3. Các yếu tố gây bệnh trĩ

- Táo bón hoặc tiêu chảy kéo dài
- Chế độ ăn ít chất xơ
- Ngồi hoặc đứng lâu
- Lao động nặng, tập gym cường độ cao
- Thừa cân, béo phì
- Mang thai

## ❗ 4. Nguyên nhân bệnh trĩ

- Rặn mạnh khi đi đại tiện
- Ngồi lâu trên bồn cầu
- Táo bón mạn tính
- Quan hệ qua đường hậu môn
- Tuổi tác (mô liên kết suy yếu)

![Nguyên nhân trĩ](/images/nguyen-nhan-gay-tri.jpg)

## 🚨 5. Triệu chứng bệnh trĩ

### Dấu hiệu thường gặp:
- Chảy máu khi đi đại tiện
- Ngứa, rát hậu môn
- Đau khi ngồi hoặc đi vệ sinh
- Sưng, có khối lồi ra ngoài

![Triệu chứng trĩ](/images/trieu-chung.jpg)

### 🔹 Triệu chứng theo loại

**Trĩ ngoại:**
- Đau nhiều
- Có thể xuất hiện cục máu đông
- Sưng, viêm quanh hậu môn

**Trĩ nội:**
- Ít đau
- Chảy máu đỏ tươi
- Có thể sa ra ngoài

## ⚡ 6. Biến chứng nguy hiểm

- Thiếu máu do chảy máu kéo dài
- Nghẹt búi trĩ
- Tắc mạch trĩ (đau dữ dội)
- Viêm nhiễm hậu môn

## 💊 7. Cách điều trị bệnh trĩ

### 🔹 7.1 Điều trị nội khoa

- Ăn nhiều chất xơ
- Uống đủ nước
- Ngâm hậu môn nước ấm
- Dùng thuốc theo chỉ định bác sĩ

### 🔹 7.2 Điều trị ngoại khoa

- Thắt búi trĩ bằng dây chun
- Chích xơ búi trĩ
- Phẫu thuật cắt trĩ

👉 Phương pháp hiện đại:
- Longo (PPH)
- THD (khâu triệt mạch)

## 🛡 8. Phòng ngừa bệnh trĩ

- Ăn nhiều rau xanh, trái cây
- Uống 6–8 ly nước/ngày
- Không rặn mạnh khi đi vệ sinh
- Tập thể dục thường xuyên
- Tránh ngồi lâu

📷 **Chế độ ăn phòng ngừa trĩ**
![Phòng ngừa trĩ](/images/phong-ngua.jpg)

## 📌 LƯU Ý QUAN TRỌNG

❗ Không nên tự ý điều trị tại nhà khi chưa có chẩn đoán:

Chảy máu hậu môn có thể là dấu hiệu của:
- Polyp đại tràng
- Ung thư đại trực tràng
- Các bệnh lý nguy hiểm khác

👉 Hãy đi khám ngay nếu:
- Chảy máu nhiều
- Đau dữ dội
- Thay đổi thói quen đi tiêu
    `,
    hemorroidsContent: "***Bệnh trĩ*** không chỉ liên quan đến các vấn đề về tĩnh mạch mà còn là bệnh của một hệ thống mạch máu phức tạp bao gồm tiểu động mạch, tĩnh mạch, thông nối động tĩnh mạch đến cơ trơn và mô liên kết được lót bởi lớp biểu mô bình thường của ống hậu môn. \n\nĐám rối tĩnh mạch nằm trong lớp dưới của niêm mạc được hỗ trợ nâng đỡ bởi cấu trúc mô sợi đàn hồi.Việc tăng áp lực trong khu vực này như trong trường hợp rặn khi đi đại tiện, sự tích tụ máu liên tục sẽ gây phình giãn và dẫn đến hình thành các búi trĩ bên trong lòng ống hậu môn.Khi con người già đi, cấu trúc mô liên kết nâng đỡ yếu đi và các búi trĩ có thể bắt đầu sa khỏi lỗ hậu môn dẫn đến bệnh trĩ nội sa.",
    hemorroidsOfTypesSale: `
    # 🔎 ĐỪNG ĐỂ "CHUYỆN NHỎ" TRỞ THÀNH "HẬU QUẢ LỚN"!

⚠️ Bạn đang gặp tình trạng:

- Đi ngoài ra máu
- Đau rát, ngứa hậu môn
- Có cục lồi khi đi vệ sinh
- Ngồi lâu khó chịu, sưng tức vùng hậu môn

❗ Đừng chủ quan! Đây có thể là dấu hiệu của **bệnh trĩ hoặc các bệnh lý hậu môn – trực tràng nguy hiểm**.

---

## ✅ GIẢI PHÁP TẦM SOÁT – CHI PHÍ TIẾT KIỆM

💰 **Chỉ với 280.000đ (Giá gốc 950.000đ)**
Bạn nhận ngay gói **Khám & Tầm Soát Bệnh Trĩ:**

- Khám hậu môn – trực tràng với bác sĩ chuyên khoa
- Nội soi hậu môn (nếu cần)
- Tư vấn phác đồ điều trị phù hợp từng mức độ

---

## 🛡 CAM KẾT

- 🔒 Bảo mật thông tin 100%
- 👨‍⚕️ Mô hình **1 Bác sĩ – 1 Bệnh nhân**
- ⚡ Thăm khám nhanh – không chờ đợi

---

## ⏳ ƯU ĐÃI GIỚI HẠN

🎁 Chỉ áp dụng cho **30 khách hàng đăng ký sớm nhất trong tuần**

**[Đặt lịch khám ngay](https://zalo.me/0985912711)**
    `,
    hemorrhoidsOfTypes: "Phân loại bệnh trĩ",
    shortDescription:
      "Điều trị trĩ nội, ngoại dứt điểm bằng phương pháp xâm lấn tối thiểu hiện đại nhất.",
    image: "/images/benhtri.jpg",
    metaDescription:
      "Điều trị bệnh trĩ tại TRUE HOPE — kỹ thuật xâm lấn tối thiểu, hồi phục nhanh.",
    youtubeVideoId: "",
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
