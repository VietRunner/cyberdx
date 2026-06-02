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
    title: "Sản xuất Công nghiệp",
    subtitle: "Tuyển dụng & Cung ứng Công nhân Nhà máy Quy mô lớn bằng AI",
    description: "Các nhà máy sản xuất yêu cầu dòng cung nhân sự ổn định và nhanh chóng để duy trì băng chuyền hoạt động liên tục. CyberDX giúp tự động hóa khâu sàng lọc tay nghề lắp ráp, hàn, vận hành thiết bị cơ bản và kết nối trực tiếp với nguồn lao động dồi dào tại địa phương.",
    metrics: [
      { value: "75%", label: "Giảm tỷ lệ trống ca" },
      { value: "24h", label: "Thời gian lấp đầy vị trí" },
      { value: "92%", label: "Độ gắn kết lâu dài" }
    ],
    features: [
      "Khớp lao động địa phương tối ưu theo tọa độ địa lý",
      "Tổ chức bài kiểm tra tay nghề cơ khí tự động trên di động",
      "Quản lý lịch ca làm việc thông minh cho quản đốc phân xưởng",
      "Bảo hiểm tai nạn lao động tích hợp thời gian thực"
    ],
    workflow: [
      "Nhà máy đăng mô tả công việc (JD) và chỉ tiêu tay nghề lên hệ thống",
      "CyberDX quét radar định vị ứng viên phù hợp trong bán kính 10km",
      "Ứng viên thực hiện bài test tay nghề nhanh trên điện thoại dưới sự giám sát của AI",
      "Doanh nghiệp duyệt hồ sơ trực tuyến, ký hợp đồng số và ứng viên đi làm ngay"
    ],
    conclusion: "Tối ưu hóa chi phí tuyển dụng hàng loạt, đảm bảo năng lực sản xuất luôn duy trì ở mức tối đa."
  },
  "kho-bai-logistics": {
    slug: "kho-bai-logistics",
    category: "Ngành Nghề",
    title: "Kho bãi & Logistics",
    subtitle: "Cung ứng Nhân sự Bốc xếp, Đóng gói & Tài xế Xe nâng Tức thời",
    description: "Kho bãi và chuỗi cung ứng thường xuyên đối mặt với sự biến động nhân sự đột ngột theo mùa mua sắm. Giải pháp AI của chúng tôi cung cấp kết nối cung - cầu tức thời giúp doanh nghiệp logistics lấp đầy ca làm việc trong vòng vài tiếng đồng hồ.",
    metrics: [
      { value: "500+", label: "Lao động cung ứng ca cao điểm" },
      { value: "< 4h", label: "Thời gian điều phối khẩn cấp" },
      { value: "60%", label: "Tiết kiệm chi phí trung gian" }
    ],
    features: [
      "Điều phối ca làm việc linh hoạt 24/7 theo thời gian thực",
      "Kiểm tra nhanh hồ sơ sức khỏe và lý lịch tư pháp ứng viên",
      "Bản đồ lộ trình di chuyển tối ưu giúp giảm thiểu đi trễ",
      "Báo cáo chi ngân sách nhân sự chi tiết theo từng ca"
    ],
    workflow: [
      "Điều phối viên kho bãi phát lệnh tuyển 50 công nhân bốc xếp khẩn cấp",
      "Thuật toán so khớp AI tự động gửi thông báo đến các ứng viên đang rảnh ca gần nhất",
      "Ứng viên xác nhận đi làm trực tuyến bằng chữ ký điện tử một chạm",
      "Hệ thống ghi nhận ca làm và tự động đối soát thanh toán sau khi hoàn thành công việc"
    ],
    conclusion: "Linh hoạt tối đa trong việc điều phối dòng nhân sự thời vụ, không còn nỗi lo đứt gãy chuỗi cung ứng."
  },
  "ban-le-dich-vu": {
    slug: "ban-le-dich-vu",
    category: "Ngành Nghề",
    title: "Bán lẻ & Dịch vụ",
    subtitle: "Tuyển dụng Chuỗi Cửa hàng Tiện lợi, Siêu thị & Tư vấn viên",
    description: "Nhà bán lẻ cần những nhân sự có kỹ năng giao tiếp tốt và thái độ phục vụ khách hàng chuẩn mực. CyberDX ứng dụng AI để phân tích hành vi và trắc nghiệm tính cách nhanh, đảm bảo lựa chọn ứng viên có độ tương thích cao nhất với văn hóa dịch vụ của bạn.",
    metrics: [
      { value: "85%", label: "Tăng mức độ hài lòng khách hàng" },
      { value: "3 Lần", label: "Giảm số vòng phỏng vấn trực tiếp" },
      { value: "98%", label: "Tỷ lệ đi làm đúng hẹn phỏng vấn" }
    ],
    features: [
      "Bộ câu hỏi trắc nghiệm thái độ dịch vụ tự động",
      "Trợ lý AI phỏng vấn sơ loại qua voice/chat thông minh",
      "Sắp xếp lịch hẹn phỏng vấn tự động đồng bộ hóa lịch cá nhân",
      "Hệ thống chấm điểm độ tin cậy ứng viên dựa trên lịch sử phỏng vấn"
    ],
    workflow: [
      "Đăng tin tuyển dụng nhân viên bán hàng / thu ngân cho chuỗi cửa hàng",
      "Ứng viên tham gia bài phỏng vấn sơ tuyển ngắn với AI Assistant",
      "AI phân tích câu trả lời, đánh giá giọng nói và thái độ ứng xử",
      "Hệ thống chuyển tiếp danh sách đạt yêu cầu kèm lịch phỏng vấn chốt trực tiếp"
    ],
    conclusion: "Xây dựng đội ngũ dịch vụ tận tâm, mang lại trải nghiệm mua sắm hoàn hảo cho khách hàng."
  },
  "giao-duc-dao-tao": {
    slug: "giao-duc-dao-tao",
    category: "Ngành Nghề",
    title: "Giáo dục & Đào tạo",
    subtitle: "Tuyển dụng Giáo viên, Trợ giảng & Nhân sự Khối Hành chính",
    description: "An toàn học đường và trình độ chuyên môn là hai yếu tố cốt lõi trong ngành giáo dục. CyberDX thiết lập bộ rà soát tự động thông tin bằng cấp, chứng chỉ hành nghề và lý lịch ứng viên một cách nghiêm ngặt, đảm bảo hồ sơ giáo dục luôn đạt chuẩn.",
    metrics: [
      { value: "100%", label: "Xác thực bằng cấp & chứng chỉ" },
      { value: "0 Rủi ro", label: "Về hồ sơ ứng viên ảo" },
      { value: "90%", label: "Độ phù hợp năng lực sư phạm" }
    ],
    features: [
      "Quét kiểm tra bằng cấp trực tuyến bằng OCR kết hợp AI",
      "Tự động rà soát lý lịch tư pháp trên cơ sở dữ liệu quốc gia",
      "Hệ thống lưu trữ hồ sơ giảng dạy bảo mật tuyệt đối",
      "Báo cáo chỉ số đạo đức nghề nghiệp và cam kết sư phạm"
    ],
    workflow: [
      "Trường học đăng tin tuyển giáo viên hợp đồng hoặc trợ giảng",
      "Ứng viên tải ảnh bằng cấp và thực hiện eKYC để xác thực danh tính số",
      "AI quét và kiểm duyệt tính pháp lý của toàn bộ chứng chỉ chuyên môn",
      "Nhà trường tiếp nhận bộ hồ sơ giảng dạy hoàn hảo đã qua kiểm duyệt chuẩn xác"
    ],
    conclusion: "Giữ vững uy tín giáo dục và sự an tâm của phụ huynh bằng quy trình sàng lọc hồ sơ tối tân."
  },
  "nha-hang-khach-san": {
    slug: "nha-hang-khach-san",
    category: "Ngành Nghề",
    title: "Nhà hàng & Khách sạn",
    subtitle: "Cung ứng Đầu bếp, Phục vụ & Lễ tân theo Giờ và theo Ca",
    description: "Biến động lượng khách hàng tại các nhà hàng, khách sạn đòi hỏi lực lượng nhân viên phục vụ, lễ tân phải cực kỳ linh động. Chúng tôi kết nối bạn với hàng nghìn ứng viên có kinh nghiệm làm việc theo giờ trong khu vực lân cận.",
    metrics: [
      { value: "40%", label: "Giảm chi phí vận hành nhân sự" },
      { value: "15 Phút", label: "Tìm thấy nhân viên thay thế ca" },
      { value: "94%", label: "Tỷ lệ ứng viên hoàn thành ca tốt" }
    ],
    features: [
      "Tìm kiếm nhân viên thay thế khẩn cấp khi có ca nghỉ đột xuất",
      "Đối soát tiền lương ca tự động minh bạch, nhanh chóng",
      "Hệ thống đánh giá chéo 5 sao giữa quản lý và nhân viên",
      "Quản lý lịch làm việc chuỗi nhiều chi nhánh tập trung"
    ],
    workflow: [
      "Quản lý nhà hàng phát lệnh tuyển 5 nhân viên phục vụ bàn cho tối cuối tuần",
      "AI gửi thông báo khẩn cấp kèm thông tin ca làm và mức lương thưởng",
      "Ứng viên nhận ca, thực hiện check-in định vị GPS khi đến điểm làm",
      "Hoàn thành ca làm, quản lý chấm điểm hiệu suất và duyệt lương ngay"
    ],
    conclusion: "Tối ưu hóa nhân sự theo giờ cao điểm thực tế, không lãng phí chi phí nhân công nhàn rỗi."
  },
  "y-te-suc-khoe": {
    slug: "y-te-suc-khoe",
    category: "Ngành Nghề",
    title: "Y tế & Chăm sóc Sức khỏe",
    subtitle: "Tuyển dụng Điều dưỡng viên, Hộ lý & Chăm sóc gia đình",
    description: "Nhân sự ngành y tế đòi hỏi sự chính xác tuyệt đối về chứng chỉ y khoa và đạo đức nghề nghiệp. Giải pháp AI CyberDX hỗ trợ rà soát chuyên môn điều dưỡng, hộ lý và kết nối đáng tin cậy cho các bệnh viện, phòng khám, dịch vụ chăm sóc gia đình.",
    metrics: [
      { value: "99.8%", label: "Hồ sơ xác thực chứng chỉ hành nghề" },
      { value: "98%", label: "Độ hài lòng của bệnh nhân" },
      { value: "30%", label: "Tối ưu thời gian sàng lọc y khoa" }
    ],
    features: [
      "Xác thực chứng chỉ hành nghề y tế chuyên sâu",
      "Bài test đạo đức chăm sóc sức khỏe và xử lý tình huống khẩn cấp",
      "Lưu trữ bảo mật hồ sơ ứng viên theo tiêu chuẩn Zero-Trust",
      "Kết nối bán kính địa lý tối ưu phục vụ chăm sóc tại nhà"
    ],
    workflow: [
      "Đơn vị y tế đăng tuyển điều dưỡng viên hoặc hộ lý chăm sóc sức khỏe",
      "AI rà soát chứng chỉ hành nghề và lịch sử hoạt động y tế của ứng viên",
      "Ứng viên làm bài kiểm tra tình huống y khoa mô phỏng trên nền tảng AI",
      "Doanh nghiệp ký hợp đồng trực tuyến và bố trí lịch trực ca thông minh"
    ],
    conclusion: "Nâng tầm chất lượng y khoa và chăm sóc sức khỏe bằng đội ngũ nhân sự chuẩn năng lực."
  },

  // --- SOLUTIONS (GIẢI PHÁP AI) ---
  "ekyc-verification": {
    slug: "ekyc-verification",
    category: "Giải Pháp AI",
    title: "Định danh eKYC Ứng Viên",
    subtitle: "Bảo Vệ Doanh Nghiệp & Người Lao Động Bằng Định Danh Số",
    description: "Xóa bỏ triệt để tình trạng hồ sơ giả danh, giấy tờ ảo trong thị trường lao động. CyberDX tích hợp giải pháp định danh eKYC ứng dụng AI sinh trắc học để xác thực danh tính chính xác của ứng viên trước khi giới thiệu tuyển dụng.",
    metrics: [
      { value: "100%", label: "Ngăn chặn hồ sơ lừa đảo" },
      { value: "< 10s", label: "Thời gian định danh số" },
      { value: "Zero", label: "Rò rỉ dữ liệu (Zero-Trust)" }
    ],
    features: [
      "Quét trích xuất thông tin giấy tờ tùy thân (OCR) siêu nhanh",
      "Sinh trắc học nhận diện khuôn mặt và phát hiện ảnh động (Liveness)",
      "Kiểm tra trùng khớp khuôn mặt ứng viên với ảnh chụp CCCD/CMND",
      "Mã hóa thông tin cá nhân theo chuẩn an ninh cấp cao"
    ],
    workflow: [
      "Ứng viên tải ảnh CCCD/CMND khi đăng ký tài khoản CyberDX",
      "Camera quét khuôn mặt trực tiếp của ứng viên để thực hiện so khớp",
      "Hệ thống tự động phát hiện các dấu hiệu giả mạo hoặc giấy tờ hết hạn",
      "Hồ sơ được đóng dấu 'Đã Xác Thực' giúp tăng 4 lần tỷ lệ duyệt phỏng vấn"
    ],
    conclusion: "Thiết lập môi trường tuyển dụng minh bạch, an toàn và đáng tin cậy hàng đầu Việt Nam."
  },
  "ai-matcher": {
    slug: "ai-matcher",
    category: "Giải Pháp AI",
    title: "Quét So Khớp AI (Matcher)",
    subtitle: "Thuật Toán Đối Sánh Đa Chiều Siêu Tốc Dưới 100ms",
    description: "Trái tim của hệ sinh thái CyberDX. Thay vì bộ lọc từ khóa tĩnh đơn giản, AI Matcher sử dụng mô hình học sâu (Deep Learning) để phân tích đồng thời kỹ năng thực tế, hành vi cam kết, mức lương mong muốn và khoảng cách di chuyển.",
    metrics: [
      { value: "< 100ms", label: "Tốc độ xử lý so khớp" },
      { value: "4 Lần", label: "Tăng tỷ lệ nhận việc thành công" },
      { value: "95%", label: "Giảm thời gian đọc duyệt CV" }
    ],
    features: [
      "Mô hình đối sánh ngữ nghĩa mô tả công việc và hồ sơ ứng viên",
      "Chấm điểm độ tương thích (%) chi tiết cho từng chỉ số năng lực",
      "Tự động tính toán bán kính di chuyển lý tưởng giữa nhà và nơi làm",
      "Cập nhật trạng thái dòng hồ sơ liên tục thời gian thực"
    ],
    workflow: [
      "Tin tuyển dụng và hồ sơ ứng viên được đưa vào mạng lưới neuron AI",
      "Hệ thống tính toán ma trận độ phù hợp dựa trên 30 chỉ số đặc trưng",
      "Tự động tạo danh sách ứng viên xuất sắc nhất sắp xếp theo điểm số",
      "Gửi thông báo đề xuất việc làm cho ứng viên và hồ sơ cho nhà tuyển dụng"
    ],
    conclusion: "Kết nối chính xác tuyệt đối, tiết kiệm hàng nghìn giờ sàng lọc thủ công."
  },
  "anti-fraud-recruitment": {
    slug: "anti-fraud-recruitment",
    category: "Giải Pháp AI",
    title: "Phát Hiện Tin Tuyển Dụng Ảo",
    subtitle: "Lọc Sạch 99% Tin Lừa Đảo, Đa Cấp Và Spam Nhân Sự",
    description: "Người lao động phổ thông thường là nạn nhân của các vụ lừa đảo việc làm, đa cấp biến tướng. CyberDX ứng dụng hệ thống NLP để quét và phân tích nội dung tin đăng, tự động phát hiện hành vi mờ ám trước khi hiển thị cho người dùng.",
    metrics: [
      { value: "99%", label: "Tỷ lệ phát hiện tin ảo tự động" },
      { value: "100%", label: "Tin tuyển dụng thật uy tín" },
      { value: "Zero", label: "Rủi ro pháp lý cho ứng viên" }
    ],
    features: [
      "Quét tìm từ khóa nhạy cảm và mô hình trả lương bất thường",
      "Kiểm tra chéo giấy phép đăng ký kinh doanh của nhà tuyển dụng",
      "Hệ thống gắn cờ cảnh báo tin tuyển dụng có dấu hiệu khả nghi",
      "Báo cáo vi phạm tin tuyển dụng thời gian thực từ cộng đồng ứng viên"
    ],
    workflow: [
      "Nhà tuyển dụng gửi mô tả công việc mới lên cổng đăng tin",
      "AI phân tích cú pháp mô tả, phát hiện các điều khoản mập mờ hoặc phí ẩn",
      "Hệ thống xác thực mã số thuế và tình trạng hoạt động doanh nghiệp",
      "Phê duyệt tự động nếu tin an toàn, hoặc chuyển qua đội ngũ kiểm duyệt thủ công"
    ],
    conclusion: "Bảo vệ tuyệt đối uy tín của nền tảng và sự an toàn tài chính của người lao động."
  },
  "routing-geofence": {
    slug: "routing-geofence",
    category: "Giải Pháp AI",
    title: "Bản Đồ Bán Kính Tìm Việc",
    subtitle: "Tối Ưu Hóa Quãng Đường Di Chuyển Giúp Hạn Chế Đi Trễ",
    description: "Một trong những lý do lớn nhất khiến lao động phổ thông nghỉ việc là quãng đường di chuyển quá xa. CyberDX tích hợp bản đồ số thông minh giúp định vị và gợi ý các công việc nằm trong bán kính di chuyển lý tưởng nhất của ứng viên.",
    metrics: [
      { value: "50%", label: "Tiết kiệm chi phí xăng xe di chuyển" },
      { value: "90%", label: "Giảm tỷ lệ đi làm muộn" },
      { value: "< 5km", label: "Bán kính công việc lý tưởng" }
    ],
    features: [
      "Tính toán thời gian di chuyển thực tế dựa trên lưu lượng giao thông",
      "Gợi ý phương tiện công cộng hoặc tuyến đường tối ưu nhất",
      "Thiết lập Geofencing báo động check-in tại địa điểm làm việc",
      "Giao diện bản đồ nhiệt (Heatmap) trực quan trên điện thoại"
    ],
    workflow: [
      "Ứng viên bật định vị GPS trên điện thoại khi tìm kiếm việc làm",
      "CyberDX vẽ vòng tròn bán kính 5km - 10km quanh vị trí hiện tại",
      "Lọc và hiển thị các vị trí đang tuyển dụng nằm ngay trong khu vực",
      "Hướng dẫn đường đi chi tiết và dự kiến thời gian di chuyển cho ứng viên"
    ],
    conclusion: "Giúp người lao động tìm thấy công việc 'gần nhà - tiện đi lại', cải thiện chất lượng cuộc sống."
  },
  "skills-assessment": {
    slug: "skills-assessment",
    category: "Giải Pháp AI",
    title: "Đánh Giá Tay Nghề Tự Động",
    subtitle: "Chuẩn Hóa Chất Lượng Đầu Vào Bằng Trắc Nghiệm Mô Phỏng",
    description: "Nhà tuyển dụng thường mất nhiều thời gian thử việc để đánh giá tay nghề thực tế. Nền tảng của chúng tôi cung cấp bộ bài test chuyên môn và tình huống thực hành mô phỏng tự động, chấm điểm bằng thuật toán AI chuẩn xác.",
    metrics: [
      { value: "95%", label: "Độ chính xác đánh giá tay nghề" },
      { value: "3 Lần", label: "Tăng tốc quy trình thử việc" },
      { value: "90%", label: "Ứng viên đạt yêu cầu phỏng vấn" }
    ],
    features: [
      "Thư viện bài test tay nghề đa dạng ngành nghề (hàn, may, lắp ráp, phục vụ...)",
      "Chấm điểm tự động và nhận xét chi tiết điểm mạnh/yếu của ứng viên",
      "Giám sát chống gian lận trong quá trình kiểm tra bằng camera AI",
      "Hệ thống cấp chứng chỉ số hoàn thành kỹ năng trên CyberDX"
    ],
    workflow: [
      "Doanh nghiệp lựa chọn bài test tay nghề đi kèm tin đăng tuyển dụng",
      "Ứng viên nhận thử thách kiểm tra trực tuyến trên ứng dụng",
      "AI ghi nhận kết quả thực hành, chấm điểm độ phù hợp của kỹ năng",
      "Hồ sơ ứng viên được gửi đi kèm bảng phân tích tay nghề chi tiết"
    ],
    conclusion: "Đảm bảo tuyển đúng người có năng lực thật, giảm thiểu rủi ro thử việc thất bại."
  },
  "smart-dashboard": {
    slug: "smart-dashboard",
    category: "Giải Pháp AI",
    title: "Báo Cáo Phân Tích Dashboard",
    subtitle: "Trực Quan Hóa 100% Chỉ Số Nhân Sự & Chi Phí Cơ Hội",
    description: "Cung cấp bảng phân tích dữ liệu hợp nhất dành cho Admin và doanh nghiệp. Hệ thống tự động theo dõi phễu chuyển đổi ứng viên từ lúc nộp hồ sơ, phỏng vấn, nhận việc đến báo cáo dòng tiền chi phí tuyển dụng thời gian thực.",
    metrics: [
      { value: "100%", label: "Dữ liệu cập nhật liên tục" },
      { value: "2 Lần", label: "Ra quyết định tuyển dụng nhanh hơn" },
      { value: "4.0", label: "Chỉ số hài lòng quản trị UI" }
    ],
    features: [
      "Biểu đồ trực quan hóa dòng chảy hồ sơ và giao dịch tài chính",
      "Dự báo xu hướng cung - cầu nhân sự tại từng khu vực địa lý",
      "Xuất báo cáo tài chính, báo cáo nhân sự định dạng PDF/Excel một chạm",
      "Tự động tính toán chi phí trung bình để tuyển thành công 1 nhân sự"
    ],
    workflow: [
      "Mọi thao tác nhận hồ sơ, thanh toán hoa hồng được ghi nhận tự động",
      "Hệ thống tổng hợp dữ liệu đưa vào kho phân tích tập trung",
      "Smart Dashboard hiển thị các biểu đồ biến động dưới dạng thời gian thực",
      "Admin và HR theo dõi báo cáo để tối ưu hóa chiến lược phân bổ nguồn lực"
    ],
    conclusion: "Nắm trọn dòng chảy dữ liệu nhân sự trong lòng bàn tay để đưa ra các quyết định chính xác."
  },
  "interactive-chat": {
    slug: "interactive-chat",
    category: "Giải Pháp AI",
    title: "Trò Chuyện Trực Tuyến AI",
    subtitle: "Hỗ Trợ Giải Đáp 24/7 & Tự Động Lên Lịch Hẹn Phỏng Vấn",
    description: "Nhà tuyển dụng tốn hàng giờ gọi điện xác nhận lịch hẹn. Trợ lý ảo AI Chatbot của CyberDX sẽ tự động thay thế khâu giao tiếp sơ bộ, trò chuyện và lên lịch hẹn phỏng vấn trực tiếp phù hợp với khung giờ trống của nhà tuyển dụng.",
    metrics: [
      { value: "90%", label: "Cuộc hội thoại được chatbot tự xử lý" },
      { value: "24/7", label: "Phục vụ giải đáp thắc mắc liên tục" },
      { value: "< 2s", label: "Tốc độ phản hồi ứng viên" }
    ],
    features: [
      "Nhận diện ngôn ngữ tự nhiên hiểu đúng ý định của ứng viên",
      "Tự động đặt câu hỏi sơ loại theo tiêu chuẩn của nhà tuyển dụng",
      "Lên lịch hẹn và gửi tin nhắn nhắc nhở tự động qua SMS/Zalo",
      "Hỗ trợ kênh trò chuyện bảo mật không chia sẻ dữ liệu nhạy cảm"
    ],
    workflow: [
      "Ứng viên click 'Ứng Tuyển Nhanh' và bắt đầu trò chuyện với AI Assistant",
      "Trợ lý hỏi các thông tin cốt lõi (độ tuổi, kinh nghiệm, phương tiện đi lại...)",
      "Đề xuất các khung giờ phỏng vấn trống của HR để ứng viên chọn lựa",
      "Lịch hẹn được lưu vào Google Calendar và thông báo nhắc nhở tự động cho cả hai"
    ],
    conclusion: "Tinh giản khâu liên lạc, loại bỏ tình trạng 'quên lịch hẹn' hoặc 'bùng phỏng vấn'."
  },

  // --- LIBRARY (THƯ VIỆN) ---
  "case-studies": {
    slug: "case-studies",
    category: "Thư Viện",
    title: "Dự Án Tiêu Biểu (Case Studies)",
    subtitle: "Cách CyberDX Cung Ứng 200 Lao Động Logistics Trong 3 Ngày",
    description: "Khám phá hành trình CyberDX đồng hành cùng tập đoàn Logistics hàng đầu miền Nam giải quyết nút thắt nhân sự thời vụ bốc xếp khẩn cấp trong đợt cao điểm mua sắm cuối năm, tối ưu hóa toàn diện ngân sách vận hành.",
    metrics: [
      { value: "200", label: "Lao động cung ứng thành công" },
      { value: "3 Ngày", label: "Thời gian hoàn thành mục tiêu" },
      { value: "60%", label: "Tiết kiệm ngân sách nhân sự" }
    ],
    features: [
      "Bài toán: Sự thiếu hụt nhân sự bốc xếp khẩn cấp giờ cao điểm",
      "Giải pháp: Áp dụng AI Matcher quét radar ứng viên tự do bán kính 5km",
      "Kết quả: 100% ca làm được lấp đầy đúng giờ, không xảy ra trễ chuyến hàng",
      "Đánh giá từ khách hàng: Năng lực điều phối vượt trội, minh bạch tài chính"
    ],
    workflow: [
      "Khách hàng gửi yêu cầu nhân sự khẩn cấp lên cổng thông tin CyberDX",
      "Hệ thống tự động kích hoạt chiến dịch quét radar tìm kiếm lao động nhàn rỗi",
      "Ứng viên nhận ca làm việc và check-in GPS trực tiếp tại bãi kho vận",
      "Tự động tính toán lương và thanh toán hoa hồng sau ca hoàn thành"
    ],
    conclusion: "Một minh chứng thực tế khẳng định sức mạnh điều phối vượt trội của trí tuệ nhân tạo."
  },
  "news-events": {
    slug: "news-events",
    category: "Thư Viện",
    title: "Tin Tức & Sự Kiện",
    subtitle: "CyberDX Nhận Giải Thưởng Giải Pháp Công Nghệ Nhân Sự 2026",
    description: "Cập nhật các sự kiện nổi bật của CyberDX. Nền tảng vừa vinh dự được Hiệp hội Nhân sự Việt Nam trao tặng giải thưởng đột phá công nghệ xuất sắc nhất năm 2026 nhờ giải quyết hiệu quả bài toán cung ứng lao động phổ thông.",
    metrics: [
      { value: "Top 1", label: "Giải thưởng TechHR Việt Nam" },
      { value: "2026", label: "Năm vinh danh đột phá" },
      { value: "50+", label: "Đơn vị báo chí đưa tin" }
    ],
    features: [
      "CyberDX tham gia triển lãm Công nghệ Nhân sự Quốc tế",
      "Chia sẻ triết lý 'Đổi mới có ý thức' trước 500 chuyên gia nhân sự",
      "Ký kết hợp tác chiến lược cùng Hiệp hội Doanh nghiệp vừa và nhỏ",
      "Công bố lộ trình nâng cấp AI Matcher thế hệ mới tích hợp bản đồ nhiệt"
    ],
    workflow: [
      "Hội đồng thẩm định đánh giá thực tế năng lực giải quyết việc làm của CyberDX",
      "Khảo sát ý kiến hài lòng của 10.000 ứng viên lao động tự do",
      "Chính thức vinh danh CyberDX tại đêm Gala TechHR Awards",
      "CyberDX cam kết tiếp tục đồng hành kiến tạo giá trị bền vững cho lao động Việt"
    ],
    conclusion: "Cột mốc tự hào khẳng định vị thế dẫn đầu trong hành trình cách mạng hóa thị trường lao động."
  },
  "blog-recruitment": {
    slug: "blog-recruitment",
    category: "Thư Viện",
    title: "Cẩm Nang Tuyển Dụng (Blog)",
    subtitle: "Bí Quyết Viết JD Thu Hút 100% Lao Động Phổ Thông Đi Làm Ngay",
    description: "Làm thế nào để tin tuyển dụng của bạn không bị trôi đi giữa hàng nghìn tin đăng khác? Blog chia sẻ cẩm nang chi tiết về cách tinh giản quy trình nộp hồ sơ, viết JD ngắn gọn, minh bạch mức lương và định danh eKYC tiện lợi.",
    metrics: [
      { value: "10 Vạn+", label: "Lượt đọc và chia sẻ từ HR" },
      { value: "5 Phút", label: "Thời gian đọc áp dụng ngay" },
      { value: "100%", label: "Miễn phí cẩm nang kiến thức" }
    ],
    features: [
      "Tại sao lao động phổ thông lười nộp những CV rườm rà?",
      "Công thức vàng: Địa điểm rõ ràng + Lương minh bạch + Ứng tuyển một chạm",
      "Cách viết mô tả công việc (JD) thu hút chuẩn SEO trên CyberDX",
      "Ứng dụng AI Chatbot hỗ trợ sàng lọc ứng viên tự động giảm tải cho HR"
    ],
    workflow: [
      "Tìm hiểu thói quen và hành vi tìm kiếm việc làm của người lao động tự do",
      "Tối ưu tiêu đề công việc ngắn gọn, tránh các thuật từ chuyên môn rườm rà",
      "Đưa các quyền lợi cốt lõi (lương ca, phụ cấp, hỗ trợ xăng xe) lên hàng đầu",
      "Tích hợp nút ứng tuyển nhanh bằng số điện thoại không cần tạo CV giấy"
    ],
    conclusion: "Tuyển dụng thông minh bắt đầu từ việc thấu hiểu nhu cầu thực tế của ứng viên."
  },
  "faqs": {
    slug: "faqs",
    category: "Thư Viện",
    title: "Câu Hỏi Thường Gặp (FAQs)",
    subtitle: "Giải Đáp Tất Cả Thắc Mắc Về Nền Tảng Tuyển Dụng AI CyberDX",
    description: "Tổng hợp các câu hỏi phổ biến nhất từ ứng viên tìm việc và doanh nghiệp tuyển dụng khi tham gia hệ sinh thái CyberDX. Từ quy trình bảo mật Zero-Trust, cách tính phí dịch vụ đến hướng dẫn xác thực tài khoản.",
    metrics: [
      { value: "24/7", label: "Kênh hỗ trợ giải đáp liên tục" },
      { value: "99.9%", label: "Tỷ lệ khách hàng hài lòng" },
      { value: "10+", label: "Chủ đề câu hỏi chi tiết" }
    ],
    features: [
      "Câu hỏi 1: CyberDX có thu phí của người tìm việc không? (Trả lời: Hoàn toàn MIỄN PHÍ)",
      "Câu hỏi 2: Dữ liệu định danh eKYC có bị chia sẻ không? (Bảo mật Zero-Trust tuyệt đối)",
      "Câu hỏi 3: Làm thế nào doanh nghiệp đăng ký tài khoản tuyển dụng chuyên nghiệp?",
      "Câu hỏi 4: Thuật toán AI so khớp dựa trên những yếu tố cốt lõi nào?"
    ],
    workflow: [
      "Truy cập mục FAQs để tra cứu câu hỏi theo từng chủ đề (Ứng viên / Nhà tuyển dụng)",
      "Nếu chưa tìm thấy câu trả lời, gửi thắc mắc trực tiếp qua cổng AI Chat trực tuyến",
      "Hệ thống tự động phản hồi giải đáp trong vòng dưới 2 giây",
      "Kết nối hỗ trợ viên trực tiếp nếu câu hỏi cần xử lý thủ tục y khoa / pháp lý chuyên sâu"
    ],
    conclusion: "Chúng tôi luôn ở đây để đồng hành và hỗ trợ bạn trên từng bước của hành trình tuyển dụng."
  }
};
