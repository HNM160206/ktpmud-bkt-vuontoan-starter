# TEST_REPORT.md

# BÁO CÁO KIỂM THỬ

## 1. Thông tin chung

- Dự án: Vườn Toán Lớp 3 – Ước lượng trước khi tính
- Loại kiểm thử: Unit Testing
- Công cụ: Node.js Built-in Test Runner
- Lệnh thực hiện: `npm test`

## 2. Kết quả kiểm thử

| Nội dung | Kết quả |
|---|---|
| Tổng số test | 12 |
| Passed | 12 |
| Failed | 0 |
| Skipped | 0 |
| Kết quả | PASS |

Thời gian chạy theo log gần nhất: 124.1434 ms.

## 3. Danh sách kiểm thử

| STT | Nội dung kiểm thử | Kết quả |
|---|---|---|
| 1 | Tạo khoảng dung sai ±20% | PASS |
| 2 | Chấp nhận giá trị tại hai biên và bên trong khoảng | PASS |
| 3 | Từ chối giá trị ngoài khoảng | PASS |
| 4 | Từ chối đầu vào không phải số và bỏ trống | PASS |
| 5 | Phân tích khoảng sai định dạng | PASS |
| 6 | Từ chối đáp án tham chiếu hoặc dung sai không hợp lệ | PASS |
| 7 | Ước lượng đúng và tính chính xác đúng | PASS |
| 8 | Ước lượng đúng nhưng tính chính xác sai | PASS |
| 9 | Ước lượng sai nhưng tính chính xác đúng | PASS |
| 10 | Ước lượng sai và tính chính xác sai | PASS |
| 11 | Từ chối chuỗi chỉ chứa khoảng trắng | PASS |
| 12 | Kiểm tra 12 fixtures theo quy tắc ±20% | PASS |

## 4. Cập nhật dữ liệu

Các khoảng dung sai của câu hỏi estimate trong seed được rà soát theo công thức:

L = ceil(R × 0.8)

U = floor(R × 1.2)

Trong đó:
- R: kết quả chính xác.
- L: cận dưới.
- U: cận trên.

Script cập nhật dữ liệu đã được tạo và người dùng xác nhận đã chạy thành công.

## 5. Các kiểm thử chưa xác minh

- API Integration Testing.
- UI Testing.
- Kiểm thử đăng nhập và phân quyền trên môi trường thực tế.
- Kiểm tra dữ liệu seed đã được cập nhật vào database hiện tại.
- Kiểm tra GitHub Actions.
- Kiểm tra toàn bộ luồng estimate trên giao diện.

## 6. Kết luận

Bộ unit tests hiện có đạt kết quả 12/12 PASS. Các kiểm thử tích hợp và giao diện cần được thực hiện bổ sung để đánh giá đầy đủ hoạt động của hệ thống.
