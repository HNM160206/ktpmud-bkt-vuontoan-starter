# Requirements & Acceptance Criteria — Track B: Vườn Toán Lớp 3 (Ước lượng trước khi tính đúng)

## 1. Tổng quan phạm vi (Scope)
Mở rộng hệ thống học toán lớp 3 hiện có bằng cách thêm dạng bài luyện tập **"Ước lượng trước khi tính đúng"** cho các phép nhân và phép chia. Yêu cầu học sinh phải đưa ra khoảng ước lượng hợp lý trước khi xem hoặc thực hiện bước tính kết quả chính xác. Toàn bộ logic kiểm tra và chấm điểm phải **tất định (deterministic)** trên server, không sử dụng LLM runtime.

## 2. Danh sách Acceptance Criteria (B-01 -> B-12)

| Mã AC | Tiêu chí | Mô tả chi tiết / Hướng triển khai |
| :--- | :--- | :--- |
| **B-01** | Tích hợp luồng học | Dạng bài mới hiển thị trực tiếp trong menu/luồng bài học sẵn có, không tạo trang demo rời. |
| **B-02** | Dữ liệu Fixtures | Cung cấp tối thiểu 12 câu hỏi/bài tập synthetic có thể tái lập được (seed data). |
| **B-03** | Chấm điểm tất định | Thuật toán backend kiểm tra giá trị ước lượng dựa trên ngưỡng sai số cho phép (ví dụ: $\pm 15\%$ so với kết quả chính xác hoặc làm tròn hàng chục/trăm). |
| **B-04** | Bảo mật đáp án | API trả về câu hỏi **không** kèm theo đáp án đúng; việc chấm điểm thực hiện hoàn toàn ở phía server. |
| **B-05** | Lưu trạng thái Server | Kết quả luyện tập và trạng thái làm bài được lưu vào SQLite; tải lại trang (F5) không mất dữ liệu. |
| **B-06** | Phản hồi sư phạm (Feedback) | Hệ thống trả về thông báo rõ ràng, phân biệt giữa **"Ước lượng hợp lý"** và **"Kết quả tính chính xác"**. |
| **B-07** | Không đổi Core/Auth | Giữ nguyên tệp `server/auth.js`, cơ chế session, tài khoản mẫu và kịch bản deployment hiện tại. |
| **B-08** | Automated Tests | Viết unit/integration test đầy đủ cho các ca: bình thường (normal), biên (boundary), dữ liệu sai (invalid) và chấm điểm (scoring). |
| **B-09** | Script `npm test` | Bổ sung script test vào `package.json`, chạy thành công từ clean checkout. |
| **B-10** | CI Workflow | Cấu hình GitHub Actions chạy tự động `npm ci` và `npm test` trên mọi Pull Request. |
| **B-11** | Bảo mật dữ liệu & PII | Không chứa thông tin cá nhân, secret, token; chỉ sử dụng tài khoản/dữ liệu synthetic. |
| **B-12** | Accessibility & UX | Giao diện hỗ trợ điều hướng cơ bản bằng bàn phím (Tab/Enter) và hiển thị lỗi thân thiện. |
