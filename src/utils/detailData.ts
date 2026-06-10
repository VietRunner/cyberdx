export interface DetailItem {
  slug: string;
  category: "Ngành Nghề" | "Giải Pháp AI" | "Thư Viện";
  title: string;
  subtitle: string;
  description: string;
  metrics: { value: string; label: string }[];
  features: string[];
  workflow: string[];
  conclusion: string;
}

export const DETAIL_DATA: Record<string, DetailItem> = {
  // --- INDUSTRIES (NGÀNH NGHỀ) ---
  "san-xuat-nha-may": {
    slug: "san-xuat-nha-may",
    category: "Ngành Nghề",
    title: "Sản xuất & Nhà máy",
    subtitle: "Tối ưu hóa an toàn lao động và hiệu suất quy trình bằng AI Video",
    description: "Môi trường sản xuất công nghiệp luôn tiềm ẩn nhiều rủi ro an toàn và thách thức trong kiểm soát quy trình. Hệ thống phân tích video AI thời gian thực giúp giám sát tự động việc chấp hành bảo hộ, kiểm soát khu vực hạn chế và phát hiện sớm các nguy cơ sự cố trên băng chuyền.",
    metrics: [
      { value: "24/7", label: "Giám sát chủ động liên tục" },
      { value: "99.2%", label: "Độ chính xác nhận diện PPE" },
      { value: "< 2s", label: "Thời gian phát tín hiệu cảnh báo" }
    ],
    features: [
      "Nhận diện không tuân thủ đồ bảo hộ (mũ, áo phản quang, găng tay)",
      "Xác thực định danh nhân viên và khách ra vào khu vực nhạy cảm",
      "Giám sát an toàn xung quanh xe nâng và máy móc nguy hiểm",
      "Đếm sản phẩm tự động trên băng chuyền đóng gói xuất khẩu"
    ],
    workflow: [
      "Khảo sát thực tế quy trình sản xuất và bố trí góc camera phù hợp",
      "Thiết kế và cấu hình mô hình AI nhận diện PPE, khu vực cấm",
      "Tích hợp luồng camera RTSP hiện có vào bộ xử lý Edge AI",
      "Hệ thống gửi cảnh báo tức thì đến quản đốc khi phát hiện vi phạm"
    ],
    conclusion: "Bảo vệ tối đa tính mạng người lao động và giảm thiểu gián đoạn sản xuất do sự cố vận hành."
  },
  "kho-van-hang-hoa": {
    slug: "kho-van-hang-hoa",
    category: "Ngành Nghề",
    title: "Kho vận & Hàng hóa",
    subtitle: "Giám sát chuỗi cung ứng minh bạch, ngăn ngừa thất thoát",
    description: "Nhà kho và trung tâm phân phối diện tích lớn rất khó kiểm soát thủ công. Giải pháp AI Camera giúp quản lý xe ra vào tự động, theo dõi lộ trình bốc dỡ hàng hóa và gửi cảnh báo xâm nhập khu vực lưu trữ giá trị cao.",
    metrics: [
      { value: "98.5%", label: "Tự động hóa kiểm soát cổng xe" },
      { value: "-45%", label: "Giảm tỷ lệ thất thoát hàng hóa" },
      { value: "100%", label: "Báo cáo dòng lưu thông thời gian thực" }
    ],
    features: [
      "Tự động nhận diện biển số xe (LPR) đối chiếu tải trọng trạm cân",
      "Bản đồ nhiệt (Heatmap) tối ưu hóa lộ trình xe nâng di chuyển",
      "Cảnh báo xâm nhập trái phép khu vực lưu trữ hàng hóa nhạy cảm",
      "Phát hiện nhiệt độ bất thường và khói cháy giai đoạn sớm nhất"
    ],
    workflow: [
      "Kết nối hệ thống camera tại trạm cân, cổng kho và khu vực kệ hàng",
      "Cấu hình AI nhận diện biển số, phát hiện hàng rào ảo cấm xâm nhập",
      "Đồng bộ hóa dữ liệu xe và tải trọng với phần mềm WMS/ERP của doanh nghiệp",
      "Hiển thị trạng thái hoạt động của kho trên Dashboard quản trị tập trung"
    ],
    conclusion: "Nâng cao năng lực giám sát kho bãi toàn diện, đảm bảo an toàn tuyệt đối cho tài sản doanh nghiệp."
  },
  "ban-le-dich-vu": {
    slug: "ban-le-dich-vu",
    category: "Ngành Nghề",
    title: "Bán lẻ & Dịch vụ",
    subtitle: "Thấu hiểu hành vi khách hàng để tối đa hóa doanh số cửa hàng",
    description: "Thay vì chỉ dựa vào dữ liệu bán hàng tại quầy POS, AI Video Analytics giúp các chuỗi cửa hàng giải mã hành trình mua sắm thực tế của khách hàng: từ lúc đi qua cửa, bước vào, tương tác với kệ hàng đến khi thanh toán.",
    metrics: [
      { value: "2.5 Lần", label: "Tăng hiệu quả trưng bày sản phẩm" },
      { value: "90%", label: "Giảm thời gian chờ đợi tại quầy thu ngân" },
      { value: "+18%", label: "Tăng tỷ lệ mua sắm ngẫu hứng" }
    ],
    features: [
      "Đếm lượng khách vào/ra (People Counting) chính xác loại trừ nhân viên",
      "Bản đồ nhiệt mật độ khách hàng (Heatmap) và đo lường thời gian dừng chân",
      "Cảnh báo ùn tắc hàng đợi tại quầy thu ngân để điều phối hỗ trợ",
      "Phân tích tỷ lệ chuyển đổi từ khách tham quan thành khách mua hàng"
    ],
    workflow: [
      "Lắp đặt camera góc thẳng đứng tại cửa ra vào để đếm lưu lượng",
      "Kết nối camera góc rộng tại các gian hàng để vẽ bản đồ nhiệt hành vi",
      "Xử lý dữ liệu Edge AI tại chỗ đảm bảo quyền riêng tư của khách hàng",
      "Cung cấp báo cáo phân tích so sánh hiệu suất giữa các chi nhánh chuỗi"
    ],
    conclusion: "Biến camera an ninh thành công cụ phân tích kinh doanh sắc bén tại từng điểm bán lẻ."
  },
  "giao-duc-dao-tao-2": {
    slug: "giao-duc-dao-tao-2",
    category: "Ngành Nghề",
    title: "Giáo dục & Đào tạo",
    subtitle: "Kiến tạo môi trường học đường an toàn, thông minh và tin cậy",
    description: "An toàn học sinh và an ninh khuôn viên là nền tảng cốt lõi của các trường học. Hệ thống giám sát AI tự động phát hiện xâm nhập trái phép, theo dõi mật độ giao thông nội khu và phát hiện nhanh các tình huống khẩn cấp hoặc sự cố.",
    metrics: [
      { value: "100%", label: "Ngăn chặn người lạ đột nhập tự động" },
      { value: "Zero", label: "Rủi ro an ninh trong giờ học" },
      { value: "< 3s", label: "Cảnh báo khói lửa tại phòng lab, ký túc xá" }
    ],
    features: [
      "Kiểm soát truy cập tại cổng trường học và các lối vào nội trú",
      "Phát hiện hành vi xâm nhập ngoài giờ quy định bằng hàng rào ảo",
      "Cảnh báo sớm khói và lửa tại các phòng thí nghiệm hoặc bếp ăn",
      "Nhận diện phương tiện đỗ sai quy định gây cản trở lối thoát hiểm"
    ],
    workflow: [
      "Thiết lập hàng rào ảo quanh chu vi trường học và khu vực hạn chế",
      "Kết nối luồng camera với bộ xử lý an ninh trung tâm",
      "AI tự động nhận diện các đối tượng di chuyển bất thường ngoài giờ học",
      "Gửi cảnh báo tức thì kèm hình ảnh trực tiếp đến điện thoại đội bảo vệ"
    ],
    conclusion: "Đảm bảo sự an tâm tuyệt đối cho phụ huynh và nâng tầm hình ảnh chuyên nghiệp của nhà trường."
  },
  "khach-san-du-lich": {
    slug: "khach-san-du-lich",
    category: "Ngành Nghề",
    title: "Khách sạn & Du lịch",
    subtitle: "Cá nhân hóa trải nghiệm khách hàng và tối ưu hóa vận hành dịch vụ",
    description: "Nâng cao chất lượng phục vụ và đảm bảo an toàn chủ động cho du khách. AI Camera hỗ trợ nhận diện khách VIP tại sảnh, quản lý mật độ khu vực hồ bơi/nhà hàng và phát hiện nhanh các sự cố té ngã của khách lưu trú.",
    metrics: [
      { value: "95%", label: "Độ hài lòng trải nghiệm khách VIP" },
      { value: "< 5s", label: "Phát hiện sự cố trượt ngã tại sảnh/hồ bơi" },
      { value: "30%", label: "Tiết kiệm chi phí nhân lực tuần tra" }
    ],
    features: [
      "Nhận diện khách VIP để thông báo ngay cho quản lý sảnh chào đón",
      "Phát hiện và cảnh báo trượt ngã tại khu vực ẩm ướt, sảnh đá hoa cương",
      "Theo dõi mật độ khách tại nhà hàng ăn sáng để phân bổ nhân viên",
      "Giám sát an ninh bãi đỗ xe và tự động hóa barie lối ra vào"
    ],
    workflow: [
      "Tích hợp camera tại quầy lễ tân và sảnh đón khách với AI nhận diện",
      "Cấu hình mô hình phân tích hành vi té ngã cho các khu vực công cộng",
      "Hệ thống gửi cảnh báo khẩn cấp đến đội ngũ y tế/bảo vệ khi phát hiện ngã",
      "Phân tích dữ liệu mật độ theo giờ để tối ưu hóa lịch làm việc nhân sự"
    ],
    conclusion: "Mang lại dịch vụ tinh tế, chu đáo và bảo vệ an toàn cho du khách trong suốt kỳ nghỉ."
  },
  "benh-vien-co-so-y-te": {
    slug: "benh-vien-co-so-y-te",
    category: "Ngành Nghề",
    title: "Bệnh viện & Cơ sở y tế",
    subtitle: "Bảo vệ an toàn bệnh nhân, tối ưu quy trình kiểm soát nhiễm khuẩn",
    description: "Trong môi trường y khoa áp lực cao, AI Video đóng vai trò như một trợ lý giám sát đắc lực. Hệ thống giúp phát hiện bệnh nhân tự ý rời giường, cảnh báo té ngã tại phòng chờ và kiểm tra việc tuân thủ khẩu trang/PPE tại khu vô trùng.",
    metrics: [
      { value: "99.8%", label: "Độ tin cậy phát hiện té ngã bệnh nhân" },
      { value: "100%", label: "Kiểm soát ra vào khu vô trùng/phòng thuốc" },
      { value: "24/7", label: "Giám sát hành lang và lối thoát hiểm" }
    ],
    features: [
      "Nhận diện hành vi ngã té của bệnh nhân tại hành lang và phòng bệnh",
      "Giám sát việc trang bị khẩu trang và đồ bảo hộ y tế bắt buộc",
      "Kiểm soát truy cập tự động bằng khuôn mặt vào kho dược và phòng cách ly",
      "Cảnh báo phương tiện đỗ cản trở lối xe cấp cứu 24/7"
    ],
    workflow: [
      "Lắp đặt camera góc tối ưu tại các hành lang điều trị và phòng chờ lớn",
      "Cấu hình AI nhận diện tư thế ngã và ranh giới cấm đỗ xe cấp cứu",
      "Tích hợp hệ thống chuông cảnh báo tại phòng trực điều dưỡng",
      "Phát âm thanh cảnh báo tự động tại khu vực cấm đỗ xe khi phát hiện vi phạm"
    ],
    conclusion: "Đảm bảo sự an toàn tốt nhất cho bệnh nhân và nâng cao tiêu chuẩn kiểm soát chất lượng y tế."
  },

  // --- SOLUTIONS (GIẢI PHÁP AI) ---
  "nhan-dien-khuon-mat": {
    slug: "nhan-dien-khuon-mat",
    category: "Giải Pháp AI",
    title: "Nhận diện khuôn mặt",
    subtitle: "Kiểm soát ra vào thông minh và chấm công tự động không tiếp xúc",
    description: "Sử dụng công nghệ học sâu tiên tiến nhất để nhận diện khuôn mặt thời gian thực với độ chính xác vượt trội. Ứng dụng hiệu quả cho chấm công tự động, mở cửa văn phòng bảo mật và phát hiện đối tượng lạ đột nhập.",
    metrics: [
      { value: "99.9%", label: "Độ chính xác nhận diện khuôn mặt" },
      { value: "< 200ms", label: "Tốc độ đối sánh cơ sở dữ liệu" },
      { value: "Liveness", label: "Chống giả mạo bằng ảnh/video" }
    ],
    features: [
      "Nhận diện chính xác ngay cả khi đeo khẩu trang hoặc điều kiện thiếu sáng",
      "Phát hiện thực thể sống (Liveness detection) ngăn chặn gian lận bằng hình ảnh",
      "Tích hợp trực tiếp mở khóa cổng Speed Gate hoặc cửa văn phòng số",
      "Nhập dữ liệu nhanh chóng qua hình ảnh hoặc camera điện thoại"
    ],
    workflow: [
      "Hệ thống camera ghi nhận hình ảnh khuôn mặt tại lối ra vào",
      "Thuật toán AI trích xuất các điểm đặc trưng khuôn mặt tại chỗ (Edge)",
      "So sánh và đối chiếu thời gian thực với dữ liệu nhân sự đã đăng ký",
      "Kích hoạt mở cửa và ghi nhận giờ chấm công lên hệ thống quản trị"
    ],
    conclusion: "Giải pháp bảo mật hiện đại, loại bỏ hoàn toàn thẻ từ vật lý và tình trạng chấm công hộ."
  },
  "nhan-dien-bien-so-xe-tu-dong": {
    slug: "nhan-dien-bien-so-xe-tu-dong",
    category: "Giải Pháp AI",
    title: "Nhận diện biển số xe tự động",
    subtitle: "Quản lý bãi đỗ xe thông minh và kiểm soát giao thông ra vào",
    description: "Giải pháp OCR chuyên sâu tích hợp AI cho phép nhận diện biển số xe ô tô, xe máy chính xác cực cao dưới mọi điều kiện thời tiết hay ánh sáng ban đêm, tối ưu hóa quy trình kiểm soát xe ra vào bãi đỗ, nhà máy, kho vận.",
    metrics: [
      { value: "98.9%", label: "Tỷ lệ nhận dạng ký tự biển số" },
      { value: "100%", label: "Tự động ghi chép lịch sử xe ra vào" },
      { value: "< 1s", label: "Tốc độ xử lý mở barie tự động" }
    ],
    features: [
      "Đọc được biển số xe máy, xe tải, ô tô (kể cả biển số dài/ngắn, biển nước ngoài)",
      "Hoạt động ổn định bất kể ban đêm nhờ camera tích hợp hồng ngoại/starlight",
      "Tự động đối chiếu danh sách trắng (Whitelist) để mở barrier tự động",
      "Cảnh báo xe lạ đỗ quá thời gian quy định tại khu vực cấm"
    ],
    workflow: [
      "Camera LPR chụp ảnh biển số khi xe đến gần vòng cảm biến cổng",
      "AI xử lý hình ảnh, tách lọc vùng biển số và trích xuất chuỗi văn bản",
      "Đối soát dữ liệu với danh sách đăng ký thuê bao hoặc xe nội bộ",
      "Điều khiển barie mở tự động và lưu trữ ảnh chụp phương tiện"
    ],
    conclusion: "Tự động hóa hoàn toàn luồng xe, giảm ùn tắc giờ cao điểm tại các cổng cơ quan, nhà máy."
  },
  "phat-hien-khoi-chay": {
    slug: "phat-hien-khoi-chay",
    category: "Giải Pháp AI",
    title: "Phát hiện khói & cháy",
    subtitle: "Cảnh báo hỏa hoạn sớm bằng hình ảnh trước khi đầu báo khói trần kích hoạt",
    description: "Nhận diện đám khói hoặc tia lửa nhỏ từ camera an ninh thông thường chỉ trong vài giây. Giải pháp cực kỳ hiệu quả tại các nhà kho trần cao, bãi đỗ xe rộng hoặc khu sản xuất nơi các cảm biến truyền thống phản ứng rất chậm.",
    metrics: [
      { value: "< 10s", label: "Thời gian phát hiện từ khi có đám khói" },
      { value: "-80%", label: "Giảm rủi ro thiệt hại do cháy nổ" },
      { value: "95%", label: "Độ chính xác phân biệt khói thực tế" }
    ],
    features: [
      "Nhận diện cột khói mờ và tia lửa nhỏ ở khoảng cách xa",
      "Phân biệt chính xác khói hỏa hoạn với khói bụi, sương mù thông thường",
      "Giám sát liên tục 24/7 kể cả khu vực ngoài trời hoặc bán lộ thiên",
      "Gửi cảnh báo khẩn cấp kèm đoạn clip cắt ngắn 5 giây mô tả sự cố"
    ],
    workflow: [
      "AI quét liên tục luồng hình ảnh từ các camera giám sát an ninh",
      "Phân tích sự thay đổi pixel của làn khói và sự phân bổ màu sắc của lửa",
      "Kích hoạt còi hú báo động tại khu vực và gửi thông báo khẩn cho bảo vệ",
      "Hiển thị vị trí xảy ra sự cố trên sơ đồ mặt bằng trực quan của tòa nhà"
    ],
    conclusion: "Giải pháp phòng ngừa hỏa hoạn chủ động, bảo vệ tính mạng và tài sản quý giá trước khi quá muộn."
  },
  "phat-hien-xam-nhap": {
    slug: "phat-hien-xam-nhap",
    category: "Giải Pháp AI",
    title: "Phát hiện xâm nhập",
    subtitle: "Thiết lập hàng rào ảo bảo vệ an ninh chu vi 24/7",
    description: "Vẽ ranh giới an ninh ảo ngay trên màn hình giám sát camera. AI tự động phân biệt chuyển động của con người, phương tiện với động vật hoặc lá cây rơi, giúp loại bỏ 95% cảnh báo giả của các hệ thống an ninh cũ.",
    metrics: [
      { value: "95%", label: "Giảm thiểu tỷ lệ báo động giả" },
      { value: "24/7", label: "Giám sát chu vi liên tục" },
      { value: "Instant", label: "Thông báo đẩy kèm video sự kiện" }
    ],
    features: [
      "Thiết lập đường ranh giới (Virtual Line) và vùng cấm (Secure Zone) linh hoạt",
      "Phân loại đối tượng thông minh (người đi bộ, xe máy, xe tải, động vật)",
      "Tích hợp loa phóng thanh cảnh báo tự động khi có xâm nhập",
      "Kết hợp camera hồng ngoại để giám sát ban đêm hoàn hảo"
    ],
    workflow: [
      "Quản trị viên vẽ vùng cấm trên phần mềm camera giám sát",
      "AI phân tích luồng chuyển động đi qua ranh giới đã thiết lập",
      "Xác định đối tượng là người/phương tiện có hành vi xâm nhập",
      "Hệ thống gửi cảnh báo kèm video trực tiếp đến bộ phận an ninh trực ca"
    ],
    conclusion: "Thiết lập lá chắn an ninh chủ động xung quanh nhà máy, kho bãi và biệt thự riêng tư."
  },
  "giam-sat-ppe-dong-phuc": {
    slug: "giam-sat-ppe-dong-phuc",
    category: "Giải Pháp AI",
    title: "Giám sát PPE & Đồng phục",
    subtitle: "Tự động hóa kiểm soát kỷ luật an toàn lao động tại công trường, nhà máy",
    description: "Nhận diện tự động việc trang bị thiết bị bảo hộ cá nhân (PPE) như mũ bảo hiểm, áo phản quang, găng tay, ủng và khẩu trang của nhân công trước và trong suốt ca làm việc, đảm bảo tuân thủ nghiêm ngặt quy định an toàn.",
    metrics: [
      { value: "99%", label: "Tỷ lệ tuân thủ bảo hộ tăng cao" },
      { value: "100ms", label: "Tốc độ quét nhận dạng bảo hộ" },
      { value: "Zero", label: "Sai sót bỏ sót từ giám sát thủ công" }
    ],
    features: [
      "Nhận dạng đồng thời nhiều thiết bị bảo hộ (mũ bảo hộ, áo phản quang, găng tay)",
      "Kiểm duyệt an toàn tự động tại cổng soát vé/cửa xoay ra vào",
      "Báo cáo thống kê chỉ số tuân thủ PPE chi tiết theo từng ca/phân xưởng",
      "Cảnh báo tức thời qua loa tại chỗ khi phát hiện công nhân tháo mũ bảo hộ"
    ],
    workflow: [
      "Công nhân đi qua khu vực camera quét nhận diện an toàn trước cửa xưởng",
      "Hệ thống AI nhận diện khuôn mặt và quét tình trạng trang bị PPE",
      "Mở cửa xoay tự động nếu đủ điều kiện, hoặc phát loa nhắc nhở tháo thiếu",
      "Ghi nhận chỉ số tuân thủ của từng nhân sự vào hệ thống dữ liệu"
    ],
    conclusion: "Xây dựng văn hóa tuân thủ an toàn lao động chủ động, giảm thiểu rủi ro pháp lý cho doanh nghiệp."
  },
  "giai-phap-dem-nguoi": {
    slug: "giai-phap-dem-nguoi",
    category: "Giải Pháp AI",
    title: "Giải pháp đếm người",
    subtitle: "Thống kê lưu lượng khách ra vào và quản lý mật độ không gian",
    description: "Giải pháp People Counting sử dụng thuật toán học sâu để đếm chính xác số lượng người đi qua các lối cửa ra vào, tự động phân biệt và loại trừ nhân viên, giúp doanh nghiệp đo lường chính xác hiệu quả vận hành kinh doanh.",
    metrics: [
      { value: "98.8%", label: "Độ chính xác đếm người ra vào" },
      { value: "100%", label: "Mã hóa danh tính khách hàng" },
      { value: "Real-time", label: "Thống kê mật độ người trong phòng" }
    ],
    features: [
      "Đếm người đi hai chiều (In/Out) độc lập cùng lúc tại nhiều lối cửa",
      "Thuật toán thông minh tự động loại trừ nhân viên cửa hàng (qua đồng phục)",
      "Cảnh báo quá tải mật độ người trong phòng họp hoặc khu vui chơi",
      "Tích hợp báo cáo tự động gửi định kỳ hàng ngày, hàng tuần"
    ],
    workflow: [
      "Lắp đặt camera giám sát hướng từ trên xuống tại các khu vực cửa",
      "AI vẽ đường phân ranh giới đếm người ảo để bắt chuyển động",
      "Hệ thống ghi nhận và đếm số lượt đi qua ranh giới theo thời gian thực",
      "Xuất dữ liệu lưu lượng tích hợp với doanh thu POS để tính tỷ lệ mua hàng"
    ],
    conclusion: "Dữ liệu lưu lượng chính xác giúp tối ưu hóa nhân sự trực ca và đo lường marketing hiệu quả."
  },
  "giam-sat-do-xe-sai-quy-dinh": {
    slug: "giam-sat-do-xe-sai-quy-dinh",
    category: "Giải Pháp AI",
    title: "Giám sát đỗ xe sai quy định",
    subtitle: "Phát hiện và cảnh báo phương tiện dừng đỗ trái phép",
    description: "Tự động phát hiện phương tiện đỗ sai vị trí, đỗ quá thời gian quy định tại các khu vực cấm đỗ như cổng bệnh viện, lối thoát hiểm nhà máy, sảnh khách sạn hoặc lòng đường cấm đỗ, duy trì trật tự giao thông thông suốt.",
    metrics: [
      { value: "24/7", label: "Giám sát khu vực cấm dừng đỗ" },
      { value: "< 30s", label: "Thời gian phát cảnh báo đỗ xe trái phép" },
      { value: "LPR", label: "Chụp ảnh lưu biển số xe vi phạm" }
    ],
    features: [
      "Phát hiện mọi loại xe dừng đỗ trái phép (xe máy, taxi, ô tô con, xe tải)",
      "Tự động trích xuất biển số xe vi phạm thông qua camera LPR",
      "Kích hoạt còi loa phát thanh thông báo di dời xe tự động tại chỗ",
      "Báo cáo lịch sử vi phạm chi tiết kèm hình ảnh làm bằng chứng"
    ],
    workflow: [
      "AI khoanh vùng khu vực cấm dừng đỗ trên khung cảnh camera",
      "Hệ thống phát hiện phương tiện đi vào vùng cấm và đứng im quá 30 giây",
      "Tự động chụp biển số xe và kích hoạt loa phóng thanh cảnh báo tại chỗ",
      "Gửi thông tin vi phạm đến thiết bị di động của bảo vệ hoặc đội trật tự"
    ],
    conclusion: "Giải quyết triệt để vấn nạn đỗ xe bừa bãi gây ùn tắc lối thoát hiểm và sảnh đón tiếp."
  },
  "nhan-dien-phan-tich-hanh-vi": {
    slug: "nhan-dien-phan-tich-hanh-vi",
    category: "Giải Pháp AI",
    title: "Nhận diện hành vi",
    subtitle: "Phân tích chuyển động để phát hiện sự cố té ngã và xô xát",
    description: "Phân tích tư thế và chuyển động của cơ thể người để nhận diện tức thì các hành vi nguy hiểm như té ngã đột ngột, đánh nhau, tụ tập đông người bất thường hoặc rời vị trí làm việc quá lâu trong giờ trực ca.",
    metrics: [
      { value: "96.5%", label: "Độ chính xác nhận diện tư thế té ngã" },
      { value: "< 3s", label: "Thời gian gửi cảnh báo khẩn cấp" },
      { value: "24/7", label: "Giám sát liên tục các khu vực công cộng" }
    ],
    features: [
      "Phát hiện té ngã nhanh chóng trong bệnh viện, viện dưỡng lão, lối đi bộ",
      "Nhận diện hành vi đánh nhau, xô xát bằng cách phân tích nhịp chuyển động",
      "Cảnh báo tụ tập đông người bất thường tại các khu vực nhạy cảm",
      "Phát hiện rời vị trí làm việc hoặc ngủ gật của nhân viên an ninh trực ca"
    ],
    workflow: [
      "AI liên tục phân tích bộ khung xương (skeletal model) của người trên video",
      "Nhận diện sự thay đổi đột ngột về độ cao và tư thế cơ thể (hành vi ngã)",
      "Phát tín hiệu cảnh báo khẩn cấp kèm vị trí chính xác đến phòng điều hành",
      "Lưu trữ clip sự cố để phục vụ công tác rà soát và nâng cao chất lượng"
    ],
    conclusion: "Giải pháp nhân văn hỗ trợ phản ứng cấp cứu kịp thời trong các tình huống tai nạn khẩn cấp."
  },
  "ban-do-nhiet-lo-trinh": {
    slug: "ban-do-nhiet-lo-trinh",
    category: "Giải Pháp AI",
    title: "Bản đồ nhiệt & Lộ trình",
    subtitle: "Trực quan hóa mật độ di chuyển và luồng lưu thông khách hàng",
    description: "Vẽ sơ đồ mật độ dừng chân (Heatmap) và lộ trình di chuyển (Pathway) của con người trong một không gian vật lý, giúp tối ưu hóa cách trưng bày sản phẩm, quy hoạch luồng giao thông và cải thiện trải nghiệm khách hàng.",
    metrics: [
      { value: "Real-time", label: "Trực quan hóa bản đồ nhiệt" },
      { value: "Pathway", label: "Vẽ lộ trình di chuyển phổ biến" },
      { value: "Dwell Time", label: "Đo lường thời gian tương tác sản phẩm" }
    ],
    features: [
      "Biểu diễn mật độ dừng chân bằng dải màu trực quan (đỏ cho vùng nóng, xanh cho vùng lạnh)",
      "Theo dõi thời gian dừng chân trung bình (Average Dwell Time) tại từng kệ hàng",
      "Vẽ sơ đồ lộ trình di chuyển để phát hiện các 'điểm nghẽn' trong lối đi",
      "So sánh hiệu quả thu hút khách hàng giữa các gian trưng bày khác nhau"
    ],
    workflow: [
      "AI phân tích luồng di chuyển của toàn bộ khách hàng trong khu vực",
      "Ghi nhận vị trí tọa độ dừng chân và thời gian lưu lại của từng người",
      "Hợp nhất dữ liệu để tạo ra bản đồ nhiệt theo ngày, tuần, tháng",
      "Cung cấp insight giúp nhà quản lý tối ưu hóa cách sắp đặt không gian"
    ],
    conclusion: "Ứng dụng khoa học dữ liệu hình ảnh để tối đa hóa giá trị thương mại của từng mét vuông mặt bằng."
  },

  // --- LIBRARY (THƯ VIỆN) ---
  "cau-hoi-thuong-gap": {
    slug: "cau-hoi-thuong-gap",
    category: "Thư Viện",
    title: "Câu Hỏi Thường Gặp (FAQs)",
    subtitle: "Giải đáp các thắc mắc phổ biến về giải pháp AI Video Analytics",
    description: "Tổng hợp các giải đáp chi tiết về công nghệ phân tích video AI, quy trình lắp đặt, yêu cầu phần cứng và chính sách bảo mật dữ liệu hình ảnh của chúng tôi dành cho khách hàng doanh nghiệp.",
    metrics: [
      { value: "15+", label: "Chủ đề giải đáp chi tiết" },
      { value: "24/7", label: "Kênh hỗ trợ giải đáp trực tuyến" },
      { value: "99.9%", label: "Mức độ hài lòng của khách hàng" }
    ],
    features: [
      "Giải pháp có hoạt động được với hệ thống camera IP hiện có không? (Có, hỗ trợ RTSP/ONVIF)",
      "Hệ thống Edge AI Box và Server hoạt động như thế nào?",
      "Dữ liệu hình ảnh có được bảo mật không? (Xử lý Edge tại chỗ, không truyền hình ảnh ra ngoài)",
      "Quy trình triển khai lắp đặt mất bao lâu? (Thông thường từ 3 - 5 ngày làm việc)"
    ],
    workflow: [
      "Người dùng truy cập trang FAQs để tìm kiếm câu trả lời nhanh theo danh mục",
      "Hệ thống chia sẵn các bộ câu hỏi dành cho Kỹ thuật, Vận hành và Bảo mật",
      "Nếu cần tư vấn chi tiết hơn, khách hàng có thể gửi biểu mẫu liên hệ nhanh",
      "Đội ngũ kỹ sư giải pháp sẽ liên hệ lại trong vòng 2 giờ làm việc"
    ],
    conclusion: "Cung cấp đầy đủ thông tin minh bạch giúp doanh nghiệp đưa ra quyết định nâng cấp hệ thống an ninh hiệu quả."
  },
  "case-studies": {
    slug: "case-studies",
    category: "Thư Viện",
    title: "Dự Án Tiêu Biểu (Case Studies)",
    subtitle: "Khám phá các dự án triển khai AI Camera thực tế thành công",
    description: "Tổng hợp các dự án thực tế triển khai giải pháp phân tích video AI giúp các đối tác trong ngành sản xuất công nghiệp, kho vận logistics và chuỗi bán lẻ tối ưu hóa chi phí vận hành và nâng cao an toàn.",
    metrics: [
      { value: "50+", label: "Doanh nghiệp đã triển khai thành công" },
      { value: "-45%", label: "Giảm rủi ro mất an toàn lao động" },
      { value: "99.8%", label: "Độ chính xác kiểm soát thực tế" }
    ],
    features: [
      "Case Study 1: Tối ưu hóa vận hành & giảm thiểu rủi ro cho chuỗi Kho vận & Logistics lớn",
      "Case Study 2: Triển khai giám sát an toàn PPE & đếm sản phẩm tại nhà máy nông sản xuất khẩu",
      "Case Study 3: Hb Boutique: Tối ưu hóa trưng bày và tăng doanh thu chuỗi thời trang nhờ Heatmap",
      "Case Study 4: Gifts From Nature: Cải thiện trải nghiệm phục vụ khách hàng nhờ People Counting"
    ],
    workflow: [
      "Khách hàng chia sẻ thách thức vận hành thực tế đang gặp phải",
      "Chúng tôi tiến hành khảo sát, thiết kế giải pháp AI Camera demo thực tế",
      "Đo lường các chỉ số hiệu suất (KPI) trước và sau khi triển khai hệ thống",
      "Biên soạn và công bố Case Study chia sẻ kinh nghiệm thành công với cộng đồng"
    ],
    conclusion: "Những con số thực tế chứng minh giá trị kinh tế to lớn mà công nghệ trí tuệ nhân tạo mang lại."
  },
  "dieu-khoan-su-dung": {
    slug: "dieu-khoan-su-dung",
    category: "Thư Viện",
    title: "Điều khoản sử dụng",
    subtitle: "Quy định pháp lý khi sử dụng dịch vụ và thông tin trên website",
    description: "Tài liệu quy định các điều khoản, quyền lợi và nghĩa vụ pháp lý của người sử dụng khi truy cập website và đăng ký tư vấn giải pháp AI Video Analytics của chúng tôi.",
    metrics: [
      { value: "2026", label: "Năm cập nhật phiên bản mới nhất" },
      { value: "100%", label: "Tuân thủ quy định luật pháp Việt Nam" },
      { value: "Bảo mật", label: "Cam kết quyền sở hữu trí tuệ công nghệ" }
    ],
    features: [
      "Chấp nhận điều khoản: Người dùng đồng ý tuân thủ khi truy cập website",
      "Quyền sở hữu trí tuệ: Các công nghệ, mô hình AI, thương hiệu thuộc tài sản của chúng tôi",
      "Giới hạn trách nhiệm: Dịch vụ thông tin cung cấp theo nguyên trạng ('as is')",
      "Luật áp dụng: Mọi tranh chấp được điều chỉnh theo pháp luật nước CHXHCN Việt Nam"
    ],
    workflow: [
      "Người dùng đọc kỹ các điều khoản sử dụng được công khai trên website",
      "Bằng cách tiếp tục truy cập, người dùng xác nhận đồng ý với các điều khoản",
      "Các bản cập nhật điều khoản mới sẽ được thông báo hiển thị trên trang chủ",
      "Đội ngũ pháp lý sẵn sàng giải đáp các thắc mắc về quyền sở hữu và nghĩa vụ"
    ],
    conclusion: "Xây dựng môi trường hợp tác minh bạch, rõ ràng và tuân thủ đúng pháp luật."
  },
  "chinh-sach-bao-mat": {
    slug: "chinh-sach-bao-mat",
    category: "Thư Viện",
    title: "Chính sách bảo mật",
    subtitle: "Cam kết bảo mật dữ liệu thông tin khách hàng tuyệt đối",
    description: "Chính sách bảo mật quy định cách thức chúng tôi thu thập, xử lý và bảo vệ thông tin cá nhân/doanh nghiệp khi khách hàng đăng ký tư vấn và sử dụng giải pháp an ninh của chúng tôi.",
    metrics: [
      { value: "Zero-Trust", label: "Chuẩn an toàn dữ liệu áp dụng" },
      { value: "100%", label: "Không chia sẻ dữ liệu cho bên thứ ba" },
      { value: "Mã hóa", label: "Bảo vệ thông tin truyền tải cấp cao" }
    ],
    features: [
      "Thu thập thông tin cá nhân cơ bản (họ tên, email, sđt) chỉ phục vụ tư vấn liên hệ",
      "Cam kết không lưu trữ luồng hình ảnh/video camera của khách hàng trên máy chủ ngoài",
      "Xử lý phân tích video AI trực tiếp tại Edge Box nội bộ của khách hàng",
      "Quyền của chủ thể dữ liệu: Khách hàng có quyền truy cập, yêu cầu chỉnh sửa hoặc xóa thông tin"
    ],
    workflow: [
      "Khách hàng cung cấp thông tin liên hệ qua biểu mẫu yêu cầu tư vấn",
      "Thông tin được lưu trữ bảo mật bằng hệ thống cơ sở dữ liệu mã hóa",
      "Dữ liệu chỉ sử dụng để nhân viên kỹ thuật liên hệ hỗ trợ giải pháp",
      "Chúng tôi thực hiện rà soát an toàn thông tin định kỳ để ngăn chặn xâm nhập trái phép"
    ],
    conclusion: "Chúng tôi luôn coi trọng sự riêng tư và đặt an toàn thông tin của bạn lên hàng đầu."
  }
};
