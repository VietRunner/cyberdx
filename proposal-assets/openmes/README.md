# Bộ ảnh năng lực OpenMES cho đề xuất PMS VSP

## Cách dùng trong proposal

- Các ảnh được chụp ngày 24/09/2026 từ instance demo self-hosted tại `http://localhost`, với dataset **Precision machine shop**. Nhận diện logo của nền tảng đã được gỡ khỏi toàn bộ ảnh.
- Dataset minh họa có công đoạn cưa phôi, CNC turning, CNC milling, nhiệt luyện, mài hoàn thiện và kiểm tra. Nó gần với nghiệp vụ sửa chữa/chế tạo cơ khí của Xí nghiệp Cơ điện hơn các dataset còn lại.
- Đây là minh chứng về năng lực nền tảng, không phải ảnh của hệ thống VSP đã hoàn thiện. Trong proposal phải ghi rõ các nhãn/tên gọi/dữ liệu sẽ được Việt hóa, đổi thương hiệu và cấu hình theo XNCĐ.
- Không đưa mật khẩu demo vào proposal hoặc tài liệu gửi khách hàng.

## Danh mục ảnh và chú thích đề xuất

| Ảnh | Dùng minh chứng cho | Chú thích có thể đặt dưới ảnh |
|---|---|---|
| [01-dashboard-kpi.png](01-dashboard-kpi.png) | Dashboard, KPI, điều hành | **Dashboard điều hành thời gian thực**. Tổng hợp tình trạng lệnh, tiến độ, cảnh báo và chỉ số hiệu suất; sẽ tùy biến KPI theo Ban/Xưởng/Cá nhân/XNCĐ. |
| [02-work-orders.png](02-work-orders.png) | Danh sách LSX/công việc, ưu tiên, trạng thái | **Quản lý danh mục lệnh công việc**. Danh sách, trạng thái, hạn hoàn thành, mức ưu tiên và bộ lọc là nền cho màn hình Lệnh sản xuất (LSX) của XNCĐ. |
| [03-work-order-detail.png](03-work-order-detail.png) | Chi tiết LSX, theo dõi thực hiện | **Hồ sơ lệnh công việc xuyên suốt vòng đời**. Hiển thị kế hoạch, trạng thái, routing, vật tư, kết quả và lịch sử thao tác; sẽ bổ sung luồng phê duyệt LSX đặc thù VSP. |
| [04-planning-gantt.png](04-planning-gantt.png) | Lập kế hoạch, Gantt, năng lực xưởng | **Lập kế hoạch và điều độ trực quan**. Phân lịch lệnh theo dây chuyền/xưởng, thời gian và năng lực; áp dụng cho điều độ công việc giữa Ban và Xưởng. |
| [05-routing-and-bom.png](05-routing-and-bom.png) | Routing, định mức, cấu trúc vật tư | **Quy trình công nghệ và định mức vật tư**. Quản lý công đoạn, cấu trúc vật tư nhiều cấp và yêu cầu đầu vào; là tham chiếu cho định mức sơ bộ, routing và hồ sơ kỹ thuật LSX. |
| [06-material-lots.png](06-material-lots.png) | Vật tư, lô, truy xuất | **Quản lý vật tư và truy xuất lô**. Theo dõi lô vật tư, trạng thái và nguồn gốc sử dụng; cần tích hợp master data/kho với ERP VSP. |
| [07-quality-inspections.png](07-quality-inspections.png) | Kiểm tra chất lượng, nghiệm thu | **Quản lý công việc kiểm tra chất lượng**. Theo dõi các điểm kiểm tra theo công đoạn và trạng thái xử lý; sẽ cấu hình checklist nghiệm thu theo từng nhóm dịch vụ XNCĐ. |
| [08-inspection-plans.png](08-inspection-plans.png) | Kế hoạch kiểm tra, trigger QC | **Thiết lập điểm kiểm soát chất lượng**. Tự động tạo yêu cầu kiểm tra theo sự kiện/công đoạn; phù hợp để mở rộng kiểm tra, thử nghiệm và phát hành chứng chỉ. |
| [09-maintenance.png](09-maintenance.png) | Bảo trì, thiết bị, lịch kiểm định | **Quản lý bảo trì và lịch công việc thiết bị**. Theo dõi kế hoạch bảo trì, hạn thực hiện và trạng thái; cần mở rộng hồ sơ kiểm định, chứng chỉ và tài sản theo chuẩn VSP. |
| [10-issues-alerts.png](10-issues-alerts.png) | Sự cố, cảnh báo, SLA | **Quản lý sự cố và hành động khắc phục**. Ghi nhận, phân loại, phân công và theo dõi xử lý điểm nghẽn/sự cố; là nền cho escalation và SLA liên đơn vị. |
| [11-shift-monitor.png](11-shift-monitor.png) | Theo dõi thời gian thực, ca làm, OEE | **Giám sát vận hành theo ca và thời gian thực**. Trạng thái trạm, dừng máy, năng suất và cảnh báo; đặc biệt phù hợp cho xưởng có PLC/IIoT và trạm thử. |
| [12-cost-report.png](12-cost-report.png) | Báo cáo chi phí | **Báo cáo chi phí theo lệnh công việc**. Minh chứng lớp báo cáo chi phí; phương pháp giá thành, phân bổ và quyết toán LSX phải được xây riêng theo quy định VSP. |
| [13-operators-mobile.png](13-operators-mobile.png) | Mobile/tablet cho tổ/nhân công | **Giao diện thao tác tại hiện trường**. Chọn khu vực/xưởng trước khi thao tác; là nền cho màn ghi nhận giờ công, vật tư, tiến độ và checklist trên tablet/điện thoại. |
| [14-integrations-api.png](14-integrations-api.png) | Tích hợp API, ERP/TCNS | **Quản trị kết nối và tích hợp hệ thống**. Nền tảng hỗ trợ tích hợp qua API; Oracle ERP, TCNS, kho và My VSP sẽ dùng adapter/API contract riêng và có nhật ký đồng bộ. |

## Mapping tính năng PMS

Quy ước:

- **Có sẵn/nền**: có chức năng nền trong OpenMES và được minh chứng bằng ảnh.
- **Cấu hình/tùy biến**: có thể kế thừa UI hoặc kỹ thuật nhưng cần đổi mô hình dữ liệu, thuật ngữ hoặc workflow cho VSP.
- **Xây mới PMS**: thuộc nghiệp vụ đặc thù VSP; nên đặt trong app `vsp_pms` trên Frappe.
- **Tích hợp**: phụ thuộc API, master data hoặc quy trình xác nhận của hệ thống VSP.

| # | Hạng mục trong backlog PMS | Đánh giá | Ảnh minh chứng / ghi chú proposal |
|---:|---|---|---|
| 1 | Phiếu yêu cầu dịch vụ/đơn hàng điện tử | Xây mới PMS | 02, 03. Dùng mô hình lệnh làm tham chiếu; form yêu cầu liên xí nghiệp xây trong `vsp_pms`. |
| 2 | Đánh giá khả năng thực hiện và phản hồi khách hàng | Xây mới PMS | 03. Cần workflow đánh giá kỹ thuật, nhân lực, tài chính và tiến độ. |
| 3 | Đơn vị đặt hàng theo dõi tiến độ | Cấu hình/tùy biến | 02, 03, 04. Cần portal/role riêng cho đơn vị đặt hàng. |
| 4 | Mở và phê duyệt LSX nhiều cấp | Xây mới PMS | 03. Workflow VSP quyết định số cấp duyệt và SLA. |
| 5 | Quản lý trạng thái LSX | Cấu hình/tùy biến | 02, 03. Kế thừa trạng thái lệnh; đổi thành trạng thái LSX VSP. |
| 6 | Định mức sơ bộ nhân công/vật tư | Cấu hình/tùy biến | 05. Nền BOM/routing; công thức định mức cần VSP xác nhận. |
| 7 | Routing và đính kèm bản vẽ | Có sẵn/nền | 05. Bổ sung quản lý phiên bản tài liệu/bản vẽ theo yêu cầu VSP. |
| 8 | Lập kế hoạch và xếp ưu tiên | Có sẵn/nền | 02, 04. Cần mapping ưu tiên và năng lực theo Ban/Xưởng. |
| 9 | Biểu đồ Gantt | Có sẵn/nền | 04. Cấu hình trường, màu trạng thái và thuật ngữ LSX. |
| 10 | Bảng Kanban | Cấu hình/tùy biến | 02. Nền trạng thái lệnh có thể thể hiện Kanban; cấu hình theo workflow LSX. |
| 11 | Cảnh báo trễ hạn/điểm nghẽn | Có sẵn/nền | 01, 10, 11. Tùy biến rule, recipient và SLA. |
| 12 | Import kế hoạch từ Excel/ERP | Tích hợp | 04. Có nền import/API; mapping Oracle ERP cần thiết kế riêng. |
| 13 | Phân công tới tổ/cá nhân | Cấu hình/tùy biến | 03, 13. Cần cấu trúc Ban - Xưởng - Tổ - Nhân công VSP. |
| 14 | Ghi nhận giờ công thực tế | Cấu hình/tùy biến | 03, 13. Có UI execution; cần timesheet, hiệu chỉnh và phê duyệt VSP. |
| 15 | Ghi nhận vật tư/thiết bị thực tế | Cấu hình/tùy biến | 03, 06, 13. Nền traceability; giao dịch kho chính thức do ERPNext/Oracle sở hữu. |
| 16 | Cập nhật phần trăm tiến độ | Có sẵn/nền | 02, 03, 04. Mở rộng cách tính tiến độ theo công đoạn/khối lượng. |
| 17 | Nhập liệu điện thoại/máy tính bảng | Có sẵn/nền | 13. Cần UX tiếng Việt-Nga và pilot theo thiết bị thực tế. |
| 18 | Tính giá thành theo từng LSX | Xây mới PMS | 12. Ảnh chỉ chứng minh reporting; engine giá thành theo LSX là custom trọng yếu. |
| 19 | So sánh dự toán và thực tế | Xây mới PMS | 12. Dựa trên định mức, giờ công, vật tư, thiết bị và chi phí nhận từ ERP. |
| 20 | Báo cáo chi phí đa chiều | Xây mới PMS | 01, 12. Query/report theo LSX, lô, nhiệm vụ, kế hoạch năm. |
| 21 | Quản lý nhân lực và workload | Cấu hình/tùy biến | 01, 04, 13. Nhân sự chuẩn nhận từ TCNS; workload tính ở PMS. |
| 22 | Tham chiếu/quản lý vật tư | Tích hợp | 05, 06. ERPNext/Oracle/kho là nguồn dữ liệu chủ. |
| 23 | Quản lý thiết bị và hạn kiểm định | Cấu hình/tùy biến | 09, 11. Bổ sung hồ sơ thiết bị, hạn kiểm định, chứng chỉ và asset master. |
| 24 | Hồ sơ nghiệm thu/checklist | Cấu hình/tùy biến | 07, 08. Cần thư viện checklist và mẫu biên bản theo nhóm dịch vụ. |
| 25 | Nhập/xuất kho thành phẩm | Tích hợp | 06. Giao dịch tồn kho chính thức nên thực hiện ở ERPNext/Oracle. |
| 26 | Sản phẩm vô hình: chứng chỉ/biên bản | Xây mới PMS | 07, 08, 09. Xây DocType chứng chỉ, biên bản và hồ sơ bàn giao. |
| 27 | Bảng giá thành/quyết toán | Xây mới PMS | 12. Yêu cầu quy tắc phân bổ chi phí và quy trình phê duyệt VSP. |
| 28 | Dashboard điều hành/workload/KPI | Có sẵn/nền | 01, 11, 12. Dashboard VSP sẽ tùy biến theo Ban/Xưởng/Cá nhân/XNCĐ. |
| 29 | Báo cáo, xuất PDF/Excel, biểu đồ | Cấu hình/tùy biến | 01, 12. Xây template báo cáo và biểu mẫu VSP. |
| 30 | Song ngữ Việt-Nga | Cấu hình/tùy biến | Toàn bộ UI. Cần bộ thuật ngữ được VSP nghiệm thu. |
| 31 | Đẩy dashboard sang My VSP | Tích hợp | 01, 14. API/DeepLink/WebView theo contract My VSP. |
| 32 | Giao việc và theo dõi chéo liên xí nghiệp | Xây mới PMS | 02, 03, 10. Workflow, subscriber và thông báo xây trong `vsp_pms`. |
| 33 | Escalation/theo dõi SLA | Cấu hình/tùy biến | 10, 11. Xây SLA matrix, scheduler và escalation chain VSP. |
| 34 | Phân quyền theo vai trò | Có sẵn/nền | 02, 13. Cần ma trận quyền VSP và mapping SSO group. |
| 35 | Low-code/no-code và Template API | Xây mới PMS | Frappe là nền đề xuất chính cho cấu hình DocType, workflow, report và API. |
| 36 | Quản lý danh mục | Có sẵn/nền | 02, 05, 06, 09. Đồng bộ/mapping danh mục với hệ thống chủ. |
| 37 | Tích hợp Oracle ERP một chiều | Tích hợp | 06, 12, 14. Cần adapter, staging, retry, audit log và đối soát. |
| 38 | Tích hợp TCNS | Tích hợp | 13, 14. Đồng bộ nhân sự, tổ chức, đơn giá công theo API được phê duyệt. |
| 39 | Tích hợp quản lý kho | Tích hợp | 06, 14. Nguồn tồn kho và quyền ghi giao dịch phải chốt trước. |
| 40 | SSO OIDC/OAuth2 + MFA | Cấu hình/tùy biến | 14. Tích hợp Keycloak/IdP VSP, claim và role mapping. |
| 41 | Web responsive và mobile | Có sẵn/nền | 13. Cần kiểm thử iOS/Android và mạng tại xưởng/công trình biển. |
| 42 | Chuyển đổi dữ liệu MIS/Excel | Tích hợp | 02, 05, 06. ETL, làm sạch, mapping và migrate thử sớm. |
| 43 | Đào tạo và bàn giao source/tài liệu | Dịch vụ triển khai | Dùng bộ ảnh này trong tài liệu đào tạo/pilot; bàn giao theo phạm vi hợp đồng và license. |

## Thông điệp giải pháp nên dùng

> CyberDX đề xuất nền tảng PMS tích hợp: `vsp_pms` trên Frappe quản lý quy trình nghiệp vụ, phê duyệt LSX, nghiệm thu, chứng chỉ, giá thành và tích hợp doanh nghiệp; ERPNext/Oracle quản lý dữ liệu vật tư - kho - chi phí theo phân quyền; OpenMES cung cấp lớp điều hành và thực thi thời gian thực tại xưởng. Các thành phần giao tiếp bằng API có nhật ký, đối soát và cơ chế xử lý lỗi, không dùng chung cơ sở dữ liệu.

## Lưu ý pháp lý và thương mại

- OpenMES dùng giấy phép AGPL-3.0. Nếu triển khai OpenMES đã sửa đổi để người dùng truy cập qua mạng, cần rà soát nghĩa vụ cung cấp mã nguồn tương ứng theo AGPL-3.0.
- Không mô tả ảnh OpenMES là sản phẩm độc quyền hoặc hoàn chỉnh 100% cho VSP.
- Các nhóm cần báo giá/tính effort riêng: workflow LSX, giá thành/quyết toán, chứng chỉ/nghiệm thu, SSO VSP, Oracle ERP, TCNS, kho, My VSP, migration và song ngữ Việt-Nga.
