# DECISIONS.md

# Architecture Decision Records (ADR)
**Dự án:** Vườn Toán Lớp 3 – Ước lượng trước khi tính đúng  
**Phiên bản:** 1.0  
**Trạng thái:** Accepted

---

## ADR-001: Bổ sung loại câu hỏi `estimate`

**Trạng thái:** Accepted

### Bối cảnh
Hệ thống hiện tại hỗ trợ các dạng câu hỏi như `multiple-choice`, `input`, `compare` và `paint`. Tuy nhiên, chưa có dạng câu hỏi cho phép học sinh ước lượng kết quả trước khi thực hiện phép tính chính xác.

### Quyết định
Bổ sung loại câu hỏi mới có tên `estimate`. Học sinh phải nhập kết quả ước lượng trước, sau đó mới thực hiện bước tính chính xác.

### Lý do
- Phù hợp với mục tiêu sư phạm của dự án.
- Tách biệt rõ hoạt động ước lượng và tính toán chính xác.
- Có thể mở rộng thêm các dạng bài tập tương tự trong tương lai.

### Hệ quả
- Frontend cần nhận diện và hiển thị loại câu hỏi `estimate`.
- Backend cần xử lý và chấm điểm loại câu hỏi mới.
- Cần bổ sung dữ liệu kiểm thử tương ứng.

---

## ADR-002: Lưu khoảng đáp án trong `correct_answer`

**Trạng thái:** Accepted

### Bối cảnh
Câu hỏi ước lượng có thể chấp nhận nhiều kết quả nằm trong một khoảng giá trị hợp lý. Cấu trúc dữ liệu hiện tại sử dụng trường `correct_answer` để lưu đáp án chuẩn.

### Quyết định
Mã hóa khoảng giá trị hợp lệ trực tiếp trong trường `correct_answer` theo định dạng:

`lo-hi`

Trong đó:
- `lo`: giới hạn dưới của khoảng chấp nhận.
- `hi`: giới hạn trên của khoảng chấp nhận.

Ví dụ: `80-120` biểu thị các kết quả từ 80 đến 120 đều được chấp nhận.

Không thay đổi cấu trúc bảng SQLite hiện tại.

### Lý do
- Hạn chế tác động đến database hiện có.
- Không cần tạo migration mới.
- Dễ dàng bổ sung dữ liệu câu hỏi ước lượng.

### Hệ quả
- Backend phải phân tích và kiểm tra định dạng khoảng.
- Cần xác thực `lo` nhỏ hơn hoặc bằng `hi`.
- Dữ liệu không đúng định dạng phải được xử lý an toàn.

---

## ADR-003: Sử dụng quy tắc dung sai xác định

**Trạng thái:** Accepted

### Bối cảnh
Ước lượng không yêu cầu kết quả phải trùng khớp tuyệt đối với đáp án. Hệ thống cần đánh giá mức độ hợp lý của kết quả dựa trên khoảng dung sai.

### Quyết định
Sử dụng quy tắc dung sai xác định, không ngẫu nhiên.

Với giá trị đáp án tham chiếu `R`, khoảng dung sai ±20% được xác định như sau:

- Giới hạn dưới: `R × 0.8`.
- Giới hạn trên: `R × 1.2`.

Một kết quả ước lượng được xem là hợp lý nếu nằm trong khoảng chấp nhận.

Khi sử dụng khoảng `lo-hi` được lưu trong `correct_answer`, backend kiểm tra trực tiếp giá trị đầu vào với hai giới hạn này.

### Lý do
- Quy tắc dễ hiểu và phù hợp với bài toán ước lượng.
- Kết quả chấm điểm có thể tái lập.
- Hạn chế sự khác biệt giữa các lần chấm.

### Hệ quả
- Cần kiểm thử giá trị đúng tại hai biên.
- Cần xử lý đầu vào không phải số, số âm hoặc dữ liệu không hợp lệ theo quy tắc của từng câu hỏi.
- Backend là nơi thực hiện đánh giá cuối cùng.

---

## ADR-004: Thiết kế giao diện theo luồng hai bước

**Trạng thái:** Accepted

### Bối cảnh
Nếu học sinh nhìn thấy đáp án chính xác ngay từ đầu, mục tiêu rèn luyện khả năng ước lượng sẽ không đạt được.

### Quyết định
Thiết kế giao diện theo hai bước:

**Bước 1 – Ước lượng**
- Hiển thị đề bài.
- Học sinh nhập kết quả ước lượng.
- Gửi kết quả lên server để kiểm tra.
- Không hiển thị đáp án chính xác trước khi hoàn thành bước này.

**Bước 2 – Tính chính xác**
- Sau khi hoàn thành bước ước lượng, học sinh thực hiện phép tính chính xác.
- Gửi kết quả
