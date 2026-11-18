# TEST_PLAN.md — Kế hoạch kiểm thử

**Dự án:** Vườn Toán Lớp 3 — Ước lượng trước khi tính đúng  
**Nhóm:** N43 · Track B

## 1. Mục tiêu
Kiểm tra quy tắc dung sai ±20%, tính đúng đắn khi phân tích khoảng `lo-hi`, bảo mật đáp án, phản hồi hai phần và không gây hồi quy cho bốn dạng câu hỏi hiện có.

## 2. Unit tests
Chạy bằng `npm test` (Node.js built-in test runner), không cần database:
- Tạo khoảng ±20% với làm tròn biên dưới lên và biên trên xuống.
- Chấp nhận đúng tại hai biên và trong khoảng.
- Từ chối giá trị ngoài khoảng.
- Từ chối chuỗi không phải số, rỗng và null.
- Từ chối khoảng sai định dạng, biên dưới lớn hơn biên trên.
- Từ chối giá trị tham chiếu/dung sai không hợp lệ.

## 3. API / Integration tests cần thực hiện
| Mã | Kịch bản | Kết quả mong đợi |
|---|---|---|
| API-01 | GET bộ câu hỏi estimate | Không có `correct_answer` hoặc `category` chứa kết quả chính xác |
| API-02 | POST estimate-check với giá trị trong khoảng | Chỉ trả kết luận hợp lý, không trả khoảng/đáp án |
| API-03 | Nộp estimate trong khoảng, exact đúng | Cả hai cờ đánh giá true |
| API-04 | Estimate hợp lý, exact sai | Phản hồi phân biệt hai phần |
| API-05 | Estimate ngoài khoảng, exact đúng | Báo phép tính đúng, ước lượng chưa hợp lý |
| API-06 | Cả estimate và exact sai | Phản hồi yêu cầu xem lại cả hai |
| API-07 | Nộp dạng input/compare/paint cũ | Quy tắc so sánh chuỗi cũ không đổi |
| API-08 | Nộp bài | Kết quả được lưu vào attempts/progress hiện có; total_count tính cả hai phần estimate |

## 4. Manual UI / Security
- Mở Mục lục SGK → Bài 10 → chọn liên kết 'Luyện ước lượng trước khi tính (±20%)'.
- Xác nhận bước 2 chưa hiện trước khi nhập ước lượng; bấm tiếp tục mới hiện ô tính chính xác; nút quay lại giữ nguyên dữ liệu bước 1.
- Hoàn thành cả hai bước rồi nộp; xác nhận phản hồi hiển thị đủ bốn tổ hợp.
- Thử bỏ trống từng bước và xác nhận cảnh báo trước khi chuyển bước/nộp bài.
- Đăng nhập bằng tài khoản synthetic có sẵn.
- Kiểm tra điều hướng bàn phím và thông báo lỗi đầu vào.
- Kiểm tra DevTools/Network: API lấy câu hỏi không để lộ đáp án.
- Kiểm tra tải lại trang sau khi nộp: điểm đã lưu vẫn được thể hiện qua API tiến độ.
- Không sửa `server/auth.js`, session, tài khoản mẫu hoặc deployment.

## 5. CI
Workflow `.github/workflows/test.yml` chạy `npm ci` và `npm test` trên Node.js 18 và 20 cho Pull Request và push lên nhánh main/master.

## 6. Lệnh chạy
```bash
npm ci
npm test
```

**Giới hạn xác minh:** Unit tests tự động có trong repository. Các kịch bản API và UI trong mục 3–4 là checklist cần chạy trên môi trường tích hợp; không coi là đã pass chỉ vì unit tests thành công.
