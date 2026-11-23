/**
 * ============================================================================
 * KHO DỮ LIỆU PORTFOLIO CHẠM CREW (events-data.js)
 * Hướng dẫn cập nhật nhanh:
 * - Muốn thêm sự kiện mới: Copy một khối { ... } tương ứng và dán vào danh sách.
 * - Mã tag cố định (tagType):
 *     "tag1" -> DOANH NGHIỆP & VĂN HÓA (Xanh ngọc lục bảo đậm)
 *     "tag2" -> GIÁO DỤC & HỌC ĐƯỜNG (Xanh lam cổ vịt)
 *     "tag3" -> GIẢI ESPORT (Đỏ rượu vang đậm)
 *     "tag4" -> CHIẾN DỊCH TRỌNG ĐIỂM (Vàng đồng ánh kim - Quy mô lớn / 1.000+ khách)
 * ============================================================================
 */

const CHAM_CREW_DATA = {
  // 1. THÔNG TIN LIÊN HỆ & ĐƯỜNG DẪN CHÍNH THỨC
  config: {
    brandName: "CHẠM CREW",
    tagline: "Chạm cảm xúc – Chạm trái tim",
    bannerImage: "banner.webp", // Tên file banner bạn đã nén đuôi .webp
    logoImage: "logochamcrew.png.png", // Tự động dùng huy hiệu CC vàng nếu chưa có file
    coordinator: "Mỹ Hoa (Trưởng ban Điều phối)",
    phoneDisplay: "0965 052 847",
    zaloUrl: "https://zalo.me/0965052847",
    email: "chamcrew25@gmail.com",
    fanpageUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN",
    location: "TP. Hồ Chí Minh & các tỉnh lân cận"
  },

  // 2. BẢNG 4 TAG CỐ ĐỊNH GÓC TRÊN TRÁI
  tags: {
    tag1: { label: "DOANH NGHIỆP & VĂN HÓA", className: "tag-emerald" },
    tag2: { label: "GIÁO DỤC & HỌC ĐƯỜNG", className: "tag-teal" },
    tag3: { label: "GIẢI ESPORT", className: "tag-crimson" },
    tag4: { label: "CHIẾN DỊCH TRỌNG ĐIỂM", className: "tag-gold" }
  },

  // 3. DẢI 4 CHỈ SỐ NĂNG LỰC (Bấm vào từng ô sẽ mở Thẻ nổi thu gọn AFK)
  metrics: [
    {
      id: "metric-gifts",
      number: "550+",
      title: "Quà tặng & Lượt tương tác",
      badge: "Năng lực Kích hoạt",
      summary: "Quy mô điều phối quà tặng và gian hàng trải nghiệm trực tiếp trong một chiến dịch kích hoạt thương hiệu.",
      detail: "Kiểm soát xuất – nhập tồn kho quà tặng theo thời gian thực (như 557 phần quà Lucky Box tại trụ sở chính Vietravel), đảm bảo minh bạch, chống thất thoát và tối ưu tốc độ trao quà giờ cao điểm."
    },
    {
      id: "metric-attendees",
      number: "300+",
      title: "Học sinh & Khách tham dự",
      badge: "Kiểm soát Luồng người",
      summary: "Quy mô người tham dự trực tiếp được điều phối luồng di chuyển và đảm bảo an toàn đồng thời.",
      detail: "Thiết lập sơ đồ phân luồng trạm trải nghiệm luân chuyển, bố trí trạm dự phòng chống ùn tắc và đội ngũ Coach/Điều phối viên giám sát an toàn vòng ngoài xuyên suốt chương trình."
    },
    {
      id: "metric-events",
      number: "15+",
      title: "Sự kiện & Giải đấu",
      badge: "Đa dạng Mô hình",
      summary: "Vận hành thực chiến từ kích hoạt thương hiệu doanh nghiệp, ngày hội học đường đến giải đấu eSports.",
      detail: "Kinh nghiệm phối hợp nhịp nhàng cùng các đối tác lớn (Vietravel, Beevent, Prudential, FTeam, B52Hub) tại TP.HCM và các tỉnh lân cận."
    },
    {
      id: "metric-sop",
      number: "100%",
      title: "Tuân thủ Runsheet & SOP",
      badge: "Kỷ luật Vận hành",
      summary: "Cam kết vận hành đúng tiến độ kịch bản, kiểm soát vật tư chặt chẽ và ưu tiên an toàn hiện trường.",
      detail: "Mọi nhân sự trước giờ G đều được briefing kỹ lưỡng theo bộ quy chuẩn vận hành SOP, phân công rõ vị trí BOH/FOH và kịch bản dự phòng rủi ro."
    }
  ],

  // 4. DANH SÁCH SỰ KIỆN THEO NĂM (Hỗ trợ thanh trượt 2026 <-> 2027)
  projectsByYear: {
    "2026": [
      // =====================================================================
      // GÓI 1: VĂN HÓA & DOANH NGHIỆP
      // =====================================================================
      {
        groupId: "corporate",
        groupTitle: "Gói I • Văn Hóa & Doanh Nghiệp",
        groupSubtitle: "Kích hoạt thương hiệu, hội nghị khách hàng & trải nghiệm văn hóa",
        // TẦNG 1: WIDGET LỚN (Kiểu 1 - 1 ảnh ngang/thẻ, có nút < > chuyển slide)
        largeWidgets: [
          {
            id: "vietravel-mo-mua-thu-2026",
            tagType: "tag4", // Vàng đồng ánh kim - Chiến dịch trọng điểm
            scaleTag: "+557 QUÀ LUCKY BOX",
            partnerDate: "VIETRAVEL × BEEVENT • 14/08 – 16/08/2026",
            title: "Mở Mùa Thu 2026: Khởi Hành Mùa Vàng",
            coverImage: "", // Điền tên file ảnh ngang .webp (vd: "vietravel-thu.webp") khi có ảnh
            fallbackStyle: "gold-royal",
            stats: [
              { value: "557", label: "Quà Lucky Box" },
              { value: "03 Ngày", label: "Thi công & Sự kiện" },
              { value: "02 Chủ Đề", label: "Âu Mỹ & Đông Bắc Á" }
            ],
            shortDesc: "Vận hành hiện trường, điều phối chuỗi trạm trải nghiệm văn hóa Âu – Á và quà tặng kích hoạt thương hiệu tại trụ sở chính 190 Pasteur.",
            // Dữ liệu hiển thị trong Bảng Pop-up Lượn Sóng
            location: "Trụ sở chính Vietravel (190 Pasteur, Quận 3, TP.HCM)",
            popupHighlights: [
              { label: "Quy mô Quà tặng", text: "557 phần quà Lucky Box (Vali JCB, Instax, Bình thủy tinh...) cho khách đặt tour từ 30 triệu." },
              { label: "Thời lượng Tác chiến", text: "03 ngày liên tục từ khâu thi công, test kỹ thuật 14/08 đến 16 tiếng vận hành 15–16/08." },
              { label: "Không gian Kép", text: "Vận hành 2 kịch bản riêng biệt: Thu Vàng Phương Tây (15/08) & Sắc Thu Đông Bắc Á (16/08)." }
            ],
            operations: [
              "Hoạt náo cổng & Khai mạc: Điều phối đội hình diễu hành Carnaval (chú hề cà kheo, vũ công Flamenco, 2 Robot khổng lồ, Mascot), phát ấn phẩm và hỗ trợ nghi thức rung chuông khai mùa.",
              "Khu Trò chơi Quốc tế: Trực trạm, hướng dẫn luật chơi và tính điểm cho 3 trò chơi chủ đề: Cornhole (Ném bao đậu Mỹ), Tuho (Ném mũi tên Hàn Quốc) và Kendama (Nhật Bản).",
              "Quà tặng DIY & Công nghệ: Hướng dẫn khách trang trí Cover Passport da (Ngày 1), Bình nước thủy tinh (Ngày 2) và trải nghiệm Photobooth AI 'Chạm AI – Vi vu 5 châu'.",
              "Hậu cần Talkshow, Workshop & Ẩm thực: Setup và phục vụ khu vực Talkshow Visa Mỹ, Workshop Nước hoa Châu Âu và quầy trà – bánh – kem Iconic địa danh."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          },
          {
            id: "prudential-van-hoa-2026",
            tagType: "tag1",
            scaleTag: "04 GIAN HÀNG VĂN HÓA",
            partnerDate: "PRUDENTIAL VIETNAM • 19/11/2026",
            title: "Ngày Hội Văn Hóa Việt Nam",
            coverImage: "", // Điền tên file ảnh ngang .webp (vd: "prudential-1911.webp")
            fallbackStyle: "emerald-gold",
            stats: [
              { value: "100+", label: "Khách tham dự" },
              { value: "04 Trạm", label: "Văn hóa 3 miền" },
              { value: "06 Giờ", label: "Vận hành liên tục" }
            ],
            shortDesc: "Trực tiếp điều phối 04 cụm gian hàng trải nghiệm văn hóa truyền thống và kiểm soát vật tư tại tòa nhà Phú Mỹ Hưng, Quận 7.",
            location: "Tòa nhà Phú Mỹ Hưng – Số 8 Hoàng Văn Thái, Quận 7, TP.HCM",
            popupHighlights: [
              { label: "Không gian Di sản", text: "Thiết lập và vận hành đồng thời 4 điểm chạm nghệ thuật dân gian Việt Nam." },
              { label: "Trải nghiệm Cá nhân hóa", text: "Khách mời tự tay sáng tạo và mang về ấn phẩm thủ công mang dấu ấn riêng." },
              { label: "Kiểm soát Hậu cần", text: "Quản lý 100% vật tư mỹ thuật, đạo cụ chụp ảnh và điều phối luồng khách check-in." }
            ],
            operations: [
              "Trạm Trang trí Nón lá & Nặn Tò He: Hướng dẫn khách mời trải nghiệm vẽ họa tiết trên nón lá truyền thống và giao lưu cùng nghệ nhân nặn tò he.",
              "Trạm Thư pháp Câu liễn: Điều phối khu vực xin chữ ông đồ, chuẩn bị giấy liễn, mực tàu và bảo quản tác phẩm cho đại biểu.",
              "Khu vực Photobooth 3 Miền Bắc – Trung – Nam: Hỗ trợ đạo cụ, điều phối thứ tự chụp ảnh lưu niệm và giữ cảnh quan khu vực luôn gọn gàng."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          },
          {
            id: "vietravel-thuong-nguyet-2026",
            tagType: "tag1",
            scaleTag: "ĐA ĐIỂM CẦU TỈNH",
            partnerDate: "VIETRAVEL × BEEVENT • THÁNG 08 – 09/2026",
            title: "Chuỗi Sự Kiện Du Lịch 'Thưởng Nguyệt Á Đông'",
            coverImage: "",
            fallbackStyle: "emerald-gold",
            stats: [
              { value: "02 Tỉnh", label: "TP.HCM & Cần Thơ" },
              { value: "Lễ Hội", label: "Trải nghiệm Gia đình" },
              { value: "Full-Ops", label: "Vận hành hiện trường" }
            ],
            shortDesc: "Triển khai lưu động qua nhiều điểm cầu chi nhánh và không gian lễ hội Trung Thu kết hợp tư vấn hành trình du lịch.",
            location: "TP. Hồ Chí Minh & Chi nhánh Cần Thơ (103 Trần Văn Khéo)",
            popupHighlights: [
              { label: "Triển khai Lưu động", text: "Đồng bộ tiêu chuẩn vận hành giữa đầu cầu TP.HCM và miền Tây (Cần Thơ)." },
              { label: "Tương tác Gia đình", text: "Tổ chức trò chơi dân gian, mascot hoạt náo và khu vực ẩm thực bánh Trung Thu." },
              { label: "Hỗ trợ Chốt Tour", text: "Điều phối luồng khách tham gia minigame sang khu vực tư vấn hành trình." }
            ],
            operations: [
              "Vận hành hiện trường khu vực trò chơi tương tác và gian hàng quà tặng tri ân khách hàng.",
              "Điều phối nhân sự hoạt náo mascot, hướng dẫn khách check-in booth chụp ảnh lễ hội.",
              "Kiểm kê POSM, quà tặng chi nhánh và báo cáo tổng kết hình ảnh sau từng điểm cầu."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          }
        ],
        // TẦNG 2: THẺ NHỎ NỀN GRADIENT (Không cần ảnh)
        smallCards: [
          {
            id: "vietravel-roadshow-2026",
            tagType: "tag1",
            gradientType: "grad-dawn-gold",
            title: "Chuỗi Activation Chi Nhánh Mở Mùa Thu",
            time: "15 – 16/08/2026",
            venue: "Hà Nội, Đà Nẵng, Nha Trang, Bình Dương, Huế",
            role: "Đồng bộ kịch bản & Vận hành điểm bán",
            location: "Hệ thống Chi nhánh & TTTM Vietravel toàn quốc",
            popupHighlights: [
              { label: "Phạm vi", text: "Triển khai đồng loạt tại các chi nhánh trọng điểm và trung tâm thương mại." },
              { label: "Hoạt động", text: "DIY bình thủy tinh, móc khóa nón lá, quay số Lucky Draw & ẩm thực địa phương." },
              { label: "Tiêu chuẩn", text: "Tuân thủ nghiêm ngặt bộ nhận diện và kịch bản khung của chiến dịch Mở Mùa Thu." }
            ],
            operations: [
              "Phối hợp điều phối các trạm hoạt náo cổng, phát bóng bóng và thu hút khách vãng lai.",
              "Hỗ trợ khu vực quà tặng DIY và lồng cầu quay số trúng thưởng cho khách đặt tour."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          },
          {
            id: "prudential-champion-2026",
            tagType: "tag1",
            gradientType: "grad-dawn-gold",
            title: "Chương Trình Huấn Luyện Champion Prudential",
            time: "12/10/2026",
            venue: "TP. Hồ Chí Minh",
            role: "Check-in đại biểu & Điều phối Backstage",
            location: "Trung tâm Hội nghị tại TP. Hồ Chí Minh",
            popupHighlights: [
              { label: "Đối tượng", text: "Đội ngũ quản lý và chuyên viên kinh doanh cấp cao Prudential." },
              { label: "Trọng tâm", text: "Đón tiếp chuẩn mực doanh nghiệp, quản lý danh sách đại biểu và hậu đài sân khấu." },
              { label: "Hiệu quả", text: "Đảm bảo tiến độ khai mạc đúng giờ và hỗ trợ diễn giả xuyên suốt chương trình." }
            ],
            operations: [
              "Vận hành quầy check-in đại biểu, cấp phát tài liệu và hướng dẫn vị trí hội trường.",
              "Trực cánh gà (Backstage), điều phối mic, quà vinh danh và hỗ trợ kỹ thuật sân khấu."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          },
          {
            id: "corporate-partners-2026",
            tagType: "tag1",
            gradientType: "grad-dawn-gold",
            title: "Chuỗi Sự Kiện Đối Tác: Acecook, MC Feed & AEF",
            time: "Năm 2026",
            venue: "TP.HCM, Thanh Hóa & Cà Mau",
            role: "Cung cấp Nhân sự & Hỗ trợ Vận hành",
            location: "Nhiều địa điểm sự kiện doanh nghiệp & diễn đàn",
            popupHighlights: [
              { label: "Thương hiệu", text: "Đồng hành cùng Acecook, MC Feed, Diễn đàn AEF 2026 & Lễ hội Ẩm thực." },
              { label: "Linh hoạt", text: "Đáp ứng nhanh nhân sự PG/PB, Staff hiện trường và hỗ trợ hậu cần tỉnh." },
              { label: "Cam kết", text: "Tác phong chuyên nghiệp, đúng giờ và xử lý tình huống linh hoạt tại điểm chạm." }
            ],
            operations: [
              "Bố trí nhân sự đón tiếp, hỗ trợ gian hàng dùng thử sản phẩm và tương tác khách tham quan.",
              "Hỗ trợ công tác hậu cần, sắp xếp khu vực sự kiện và thu dọn trả mặt bằng sau chương trình."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          }
        ]
      },

      // =====================================================================
      // GÓI 2: GIÁO DỤC & HỌC ĐƯỜNG
      // =====================================================================
      {
        groupId: "education",
        groupTitle: "Gói II • Giáo Dục & Học Đường",
        groupSubtitle: "Ngày hội kỹ năng, trại hè học sinh & thể thao gắn kết gia đình",
        largeWidgets: [
          {
            id: "fteam-nam-chau-2026",
            tagType: "tag2",
            scaleTag: "290 HỌC SINH KHỐI 5",
            partnerDate: "FTEAM × TH NGUYỄN BỈNH KHIÊM • 26/05/2026",
            title: "Ngày Hội Tổng Kết 'Năm Châu'",
            coverImage: "", // Điền tên file ảnh ngang .webp (vd: "fteam-namchau.webp")
            fallbackStyle: "teal-dawn",
            stats: [
              { value: "290", label: "Học sinh tham gia" },
              { value: "08 Trại", label: "Tiểu trại quốc gia" },
              { value: "07 Giờ", label: "13:00 – 20:00" }
            ],
            shortDesc: "Phối hợp cùng FTeam vận hành 4 chặng khép kín từ dựng tiểu trại, teambuilding trạm nước luân chuyển đến đại chiến sân và đêm lửa trại.",
            location: "Trường Tiểu học Nguyễn Bỉnh Khiêm, Quận 1, TP.HCM",
            popupHighlights: [
              { label: "Đội hình Vận hành", text: "08 Coach tuyến đầu, 04 Trưởng trạm chuyên trách và đội ngũ điều phối tổng." },
              { label: "Tính điểm Công bằng", text: "Áp dụng công thức Thời gian trung bình/người (tự động cộng thời gian phạt lỗi)." },
              { label: "An toàn Tuyệt đối", text: "Bố trí 01 trạm dự phòng chống ùn tắc và giám sát an toàn vòng ngoài 7 tiếng liên tục." }
            ],
            operations: [
              "Chặng 1 – Thiết kế Tiểu trại: Hỗ trợ 08 đội hoàn thiện không gian trưng bày bản sắc quốc gia đúng tiến độ.",
              "Chặng 2 – Teambuilding 4 Trạm Nước Luân Chuyển: Điều phối vòng quay 20 phút/lượt, đảm bảo không ùn ứ giữa các trạm.",
              "Chặng 3 & 4 – Đại chiến toàn sân & Đêm lửa trại: Quản lý đạo cụ tập thể, giữ trật tự vòng tròn lửa trại và bàn giao học sinh an toàn cho phụ huynh."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          },
          {
            id: "sunshine-sport-day-2026",
            tagType: "tag2",
            scaleTag: "62 BÉ MẦM NON & PHỤ HUYNH",
            partnerDate: "MN SUNSHINE ÁNH THÁI DƯƠNG • 18/04/2026",
            title: "Ngày Hội Thể Thao Gia Đình 'Sport Day 2026'",
            coverImage: "", // Điền tên file ảnh ngang .webp (vd: "sunshine-sport.webp")
            fallbackStyle: "teal-dawn",
            stats: [
              { value: "62 Bé", label: "12 tháng – 6 tuổi" },
              { value: "05 Nhóm", label: "Phân theo độ tuổi" },
              { value: "100%", label: "An toàn vận động" }
            ],
            shortDesc: "Thiết kế và điều phối chuỗi vận động phân hóa theo 5 nhóm độ tuổi mầm non kết hợp trò chơi giao hữu gắn kết phụ huynh.",
            location: "Trường Mầm non Sunshine Ánh Thái Dương (09:00 – 11:00)",
            popupHighlights: [
              { label: "Phân hóa Độ tuổi", text: "Chia 5 lộ trình vận động riêng biệt phù hợp thể chất từng lứa tuổi từ 12 tháng đến 6 tuổi." },
              { label: "Gắn kết Gia đình", text: "Tổ chức 02 trò chơi giao hữu sôi nổi dành riêng cho phụ huynh và giáo viên." },
              { label: "Kiểm soát Rủi ro", text: "Bọc lót dụng cụ mềm, kiểm soát mặt sân và hỗ trợ sát sao từng lượt thi." }
            ],
            operations: [
              "Setup đường chạy vận động an toàn, phân chia khu vực chờ râm mát cho từng lớp mầm non.",
              "Điều phối trọng tài trạm, hướng dẫn phụ huynh phối hợp cùng bé vượt chướng ngại vật.",
              "Hỗ trợ trao huy chương lưu niệm và chụp ảnh tổng kết từng gia đình."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          }
        ],
        smallCards: [
          {
            id: "tet-toa-sang-2026",
            tagType: "tag2",
            gradientType: "grad-teal-sunset",
            title: "Tất Niên & Trải Nghiệm Văn Hóa 'Tết Tỏa Sáng'",
            time: "11:00 – 14:00 • 30/01/2026",
            venue: "486 Nguyễn Thị Minh Khai, Quận 1, TP.HCM",
            role: "Vận hành 05 Gian hàng Dân gian & Got Talent",
            location: "Bò Tơ Quán Mộc – 486 Nguyễn Thị Minh Khai, Quận 1, TP.HCM",
            popupHighlights: [
              { label: "Quy mô", text: "40 người tham dự ấm cúng (25 học sinh cùng 15 phụ huynh)." },
              { label: "05 Trạm Dân gian", text: "Tò he/Ông đồ, Ô ăn quan, Bịt mắt bắt dê, Ném vòng cổ chai, Chưng mâm ngũ quả." },
              { label: "Sân khấu", text: "Điều phối 05 thử thách biểu diễn tài năng Got Talent 2026." }
            ],
            operations: [
              "Bố trí và trực 05 gian hàng trò chơi dân gian Tết cổ truyền cho học sinh và phụ huynh.",
              "Hỗ trợ âm thanh, đạo cụ và điều phối thứ tự tiết mục sân khấu Got Talent."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          },
          {
            id: "fteam-chuoi-ky-nang-2026",
            tagType: "tag2",
            gradientType: "grad-teal-sunset",
            title: "Chuỗi Ngày Hội Dân Gian & Kỹ Năng FTeam",
            time: "31/01/2026 & 18/04/2026",
            venue: "Hệ thống Trường học đối tác FTeam",
            role: "Trưởng trạm Trò chơi & Chăm sóc Học sinh",
            location: "TP. Hồ Chí Minh",
            popupHighlights: [
              { label: "Chuỗi Chương trình", text: "Gian hàng dân gian (31/01) & Chương trình trải nghiệm giữ trẻ kỹ năng (18/04)." },
              { label: "Chuyên môn", text: "Đội ngũ Coach năng lượng cao, am hiểu tâm lý lứa tuổi tiểu học." },
              { label: "Kỷ luật", text: "Đảm bảo điểm danh quân số chặt chẽ trước và sau mỗi lượt luân chuyển." }
            ],
            operations: [
              "Vận hành các gian hàng trò chơi dân gian ngày Tết, hướng dẫn luật chơi và phát phiếu thưởng.",
              "Theo sát nhóm học sinh trong suốt hoạt động trải nghiệm, đảm bảo vệ sinh và an toàn."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          },
          {
            id: "edu-house-2026",
            tagType: "tag2",
            gradientType: "grad-teal-sunset",
            title: "Ngày Hội Trải Nghiệm The Edu House",
            time: "30/05/2026",
            venue: "The Edu House – TP.HCM",
            role: "Điều phối Hoạt động & Hỗ trợ Hiện trường",
            location: "Cơ sở The Edu House, TP. Hồ Chí Minh",
            popupHighlights: [
              { label: "Mô hình", text: "Sự kiện tổng kết và trải nghiệm kỹ năng dành cho học viên trung tâm." },
              { label: "Nhiệm vụ", text: "Hỗ trợ đón tiếp phụ huynh, điều phối các góc trải nghiệm và hậu cần sân khấu." },
              { label: "Kết quả", text: "Chương trình diễn ra mạch lạc, nhận phản hồi tích cực từ ban giám đốc trung tâm." }
            ],
            operations: [
              "Đón tiếp phụ huynh – học sinh tại cổng, hướng dẫn lộ trình các góc trải nghiệm.",
              "Phối hợp MC giữ nhịp tương tác và hỗ trợ trao giấy chứng nhận cuối chương trình."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          }
        ]
      },

      // =====================================================================
      // GÓI 3: ESPORTS & CỘNG ĐỒNG
      // =====================================================================
      {
        groupId: "esports",
        groupTitle: "Gói III • eSports & Cộng Đồng",
        groupSubtitle: "Chuỗi giải đấu Liên Quân Mobile & Offline Viewing Party",
        largeWidgets: [
          {
            id: "tu-phuong-dai-chien-dong-2026",
            tagType: "tag3",
            scaleTag: "12 ĐỘI THI ĐẤU • 60 TUYỂN THỦ",
            partnerDate: "LIÊN QUÂN MOBILE • 30/08 & 04/09/2026",
            title: "Vòng Loại Tứ Phương Đại Chiến Mùa Đông",
            coverImage: "", // Điền tên file banner ngang 30/8 .webp (vd: "lq-tuphuong-dong.webp")
            fallbackStyle: "crimson-ember",
            stats: [
              { value: "12 Đội", label: "60 Tuyển thủ" },
              { value: "02 Ngày", label: "Thi đấu & Chung kết" },
              { value: "B52Hub", label: "Sân khấu Offline" }
            ],
            shortDesc: "Tổ chức và vận hành giải đấu cộng đồng quy mô đỉnh 12 đội thi đấu trực tiếp tại B52Hub Café 24h với hệ thống trọng tài chuyên trách.",
            location: "B52Hub Café 24h – Gò Vấp, TP. Hồ Chí Minh",
            popupHighlights: [
              { label: "Quy mô Đỉnh", text: "Quy tụ 12 đội tuyển phong trào (60 tuyển thủ) tranh tài trực tiếp trên sân khấu." },
              { label: "Trọng tài & Luật", text: "Kiểm tra tài khoản, giám sát cấm/chọn và xử lý khiếu nại theo chuẩn giải đấu." },
              { label: "Truyền thông", text: "Có trọn bộ ấn phẩm banner dọc/ngang, livestream và album ảnh tuyển thủ." }
            ],
            operations: [
              "Check-in đội tuyển, kiểm tra thiết bị thi đấu, đường truyền mạng và bốc thăm chia nhánh.",
              "Bố trí trọng tài theo dõi từng cặp đấu, cập nhật tỷ số trực tiếp lên bảng đấu.",
              "Điều phối lễ trao giải, chụp ảnh vinh danh nhà vô địch và tổng kết bài Recap."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          },
          {
            id: "offline-10-nam-mlbb-2026",
            tagType: "tag3",
            scaleTag: "VIEWING PARTY & CỘNG ĐỒNG",
            partnerDate: "CỘNG ĐỒNG ESPORTS • 17/10/2026",
            title: "Offline 10 Năm Liên Quân & Viewing Party MLBB",
            coverImage: "", // Điền tên file ảnh ngang 17/10 .webp (vd: "offline-1710.webp")
            fallbackStyle: "crimson-ember",
            stats: [
              { value: "30+ Khách", label: "Cổ vũ trực tiếp" },
              { value: "Màn Lớn", label: "Trình chiếu HD" },
              { value: "Minigame", label: "Dự đoán & Bốc thăm" }
            ],
            shortDesc: "Không gian theo dõi trực tiếp giải đấu trên màn hình lớn kết hợp minigame dự đoán tỷ số và bốc thăm quà tặng giữ nhiệt xuyên suốt trận đấu.",
            location: "B52Hub Café 24h – Gò Vấp, TP. Hồ Chí Minh",
            popupHighlights: [
              { label: "Không khí Sân vận động", text: "Kết nối cộng đồng game thủ cùng cổ vũ trực tiếp các trận đấu tâm điểm." },
              { label: "Hoạt náo Giữa giờ", text: "Tổ chức minigame dự đoán MVP, đố vui kiến thức game và quay số may mắn." },
              { label: "Quà tặng Tương tác", text: "Phát quà check-in và ấn phẩm lưu niệm cho 100% khán giả tham dự." }
            ],
            operations: [
              "Kiểm tra tín hiệu trình chiếu màn hình lớn, âm thanh bình luận và bố trí chỗ ngồi khán giả.",
              "Đón tiếp check-in, phát phiếu dự đoán kết quả và điều phối minigame giữa các ván đấu.",
              "Trao quà bốc thăm trúng thưởng và ghi hình khoảnh khắc ăn mừng của cộng đồng."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          }
        ],
        smallCards: [
          {
            id: "lq-cung-ban-be-0504",
            tagType: "tag3",
            gradientType: "grad-sunset-ember",
            title: "Giải LQ – Cùng Bạn Bè Chiến Liên Quân",
            time: "13:00 • 05/04/2026",
            venue: "7h30 Coffee & Tea",
            role: "Tổ chức & Trọng tài",
            location: "7h30 Coffee & Tea, TP. Hồ Chí Minh",
            popupHighlights: [
              { label: "Hình thức", text: "Giải đấu giao lưu đồng đội dành cho cộng đồng sinh viên và bạn trẻ." },
              { label: "Ấn phẩm", text: "Thiết kế đồng bộ bộ nhận diện banner dọc & banner ngang truyền thông." },
              { label: "Vận hành", text: "Điều phối trọng tài trực tiếp, đảm bảo tiến độ thi đấu gọn gàng trong buổi chiều." }
            ],
            operations: [
              "Tiếp nhận đăng ký đội thi, điểm danh tại quán và phổ biến thể thức loại trực tiếp.",
              "Giám sát trận đấu, ghi nhận kết quả và trao thưởng cho các đội đạt thứ hạng cao."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          },
          {
            id: "lq-tet-khai-xuan-1801",
            tagType: "tag3",
            gradientType: "grad-sunset-ember",
            title: "Giải Khai Xuân Tết Liên Quân 2026",
            time: "18/01/2026",
            venue: "TP. Hồ Chí Minh",
            role: "Điều phối Giải đấu & Truyền thông",
            location: "TP. Hồ Chí Minh",
            popupHighlights: [
              { label: "Cột mốc", text: "Giải đấu mở màn năm 2026 của hệ thống eSports cộng đồng Chạm Crew." },
              { label: "Tinh thần", text: "Sân chơi giao lưu đầu năm gắn kết các thành viên nòng cốt và game thủ." },
              { label: "Tư liệu", text: "Lưu giữ trọn vẹn bộ ảnh team điều phối hiện trường và các đội tham dự." }
            ],
            operations: [
              "Xây dựng thể lệ, thiết kế banner ngang thông báo giải và quản lý danh sách đăng ký.",
              "Điều phối trọng tài các bảng đấu và tổ chức trao lì xì/quà khai xuân cho tuyển thủ."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          },
          {
            id: "lq-ngay-hoi-thang7",
            tagType: "tag3",
            gradientType: "grad-sunset-ember",
            title: "Chuỗi Ngày Hội Liên Quân V1 & V2",
            time: "05/07/2026 & 25/07/2026",
            venue: "B52Hub Café 24h",
            role: "Tổ chức Định kỳ & Trọng tài",
            location: "B52Hub Café 24h – Gò Vấp, TP.HCM",
            popupHighlights: [
              { label: "Tần suất", text: "Tổ chức liên tiếp 2 kỳ trong tháng 7 duy trì sức nóng cộng đồng." },
              { label: "Nhận diện", text: "Bộ poster dọc chuyên biệt cho từng kỳ đấu." },
              { label: "Quy trình", text: "Vận hành chuẩn hóa từ khâu check-in đến trao thưởng chỉ với đội ngũ tinh gọn." }
            ],
            operations: [
              "Mở cổng đăng ký, chia bảng đấu và điều phối trọng tài giám sát trực tiếp tại B52Hub.",
              "Chụp ảnh trao giải và đăng tải bài viết tổng kết trên Fanpage sau mỗi kỳ."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          },
          {
            id: "lq-mua-xuan-he-2026",
            tagType: "tag3",
            gradientType: "grad-sunset-ember",
            title: "Tứ Phương Mùa Xuân, Liên CLB & Hè Cháy LQ",
            time: "21/03 • 17/05 • 13/06/2026",
            venue: "B52Hub Café 24h",
            role: "Vận hành Chuỗi Giải Cộng đồng",
            location: "B52Hub Café 24h – Gò Vấp, TP.HCM",
            popupHighlights: [
              { label: "Chuỗi 3 Giải", text: "Tứ Phương Mùa Xuân (21/03), Giải Liên CLB (17/05) & Hè Cháy Liên Quân (13/06)." },
              { label: "Tính ổn định", text: "Duy trì sân chơi định kỳ hàng tháng cho cộng đồng Liên Quân khu vực TP.HCM." },
              { label: "Chuyên môn", text: "Tích lũy kinh nghiệm xử lý kỹ thuật, điều phối thời gian và quản lý cộng đồng." }
            ],
            operations: [
              "Tổ chức thi đấu tập trung, kiểm soát luật thi đấu công bằng giữa các câu lạc bộ.",
              "Điều phối không gian quán, phát quà tương tác và tổng kết thành tích từng tháng."
            ],
            recapUrl: "https://www.facebook.com/chamcrewne?locale=vi_VN"
          }
        ]
      }
    ],

    // =======================================================================
    // NĂM 2027: KHI CÓ DỰ ÁN MỚI BẠN THÊM VÀO MẢNG NÀY, WEB SẼ TỰ KÍCH HOẠT
    // =======================================================================
    "2027": []
  },

  // 5. DANH MỤC 3 GÓI DỊCH VỤ CHÍNH
  services: [
    {
      num: "01",
      title: "Vận Hành Hiện Trường & Nhân Sự Chuyên Trách",
      badge: "Nhân sự Thực chiến",
      shortDesc: "Đội ngũ điều phối viên, trưởng trạm trò chơi, lễ tân đón tiếp và nhân sự vận hành được đào tạo bài bản theo quy chuẩn SOP.",
      detail: "Cung cấp nhân sự hiện trường tác phong chuyên nghiệp: Trưởng trạm trò chơi, Coach dẫn đoàn, PG/PB đón tiếp, MC hoạt náo và điều phối viên BOH/FOH. Đảm bảo luồng trải nghiệm mượt mà, giữ trật tự khu vực và kiểm soát an toàn tuyệt đối tại các điểm chạm đông người."
    },
    {
      num: "02",
      title: "Quản Trị Hậu Cần & Kỹ Thuật Số",
      badge: "Hệ thống & Runsheet",
      shortDesc: "Thiết lập kịch bản vận hành (Runsheet), sơ đồ mặt bằng BOH và kiểm kê chặt chẽ vật tư, trang thiết bị POSM.",
      detail: "Số hóa quy trình tổ chức thông qua biểu mẫu đăng ký trực tuyến, hệ thống Check-in mã QR, bảng tính phân bổ nhân sự theo khung giờ và báo cáo kiểm kê xuất – nhập quà tặng minh bạch sau sự kiện."
    },
    {
      num: "03",
      title: "Sản Xuất Sự Kiện Cộng Đồng & eSports",
      badge: "Tổ chức Trọn gói",
      shortDesc: "Thiết kế và tổ chức trọn gói các giải đấu eSports, Viewing Party, ngày hội học đường và sự kiện tương tác văn hóa.",
      detail: "Vận hành khép kín từ khâu lên ý tưởng trò chơi, truyền thông thu hút người tham dự trước sự kiện, điều phối trọng tài/thi đấu trực tiếp đến sản xuất hình ảnh Recap tổng kết trên mạng xã hội."
    }
  ]
};
