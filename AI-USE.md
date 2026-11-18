# AI_USE.md

## 1. Mục đích sử dụng AI

AI được sử dụng như công cụ hỗ trợ trong quá trình phân tích, phát triển, kiểm thử và hoàn thiện dự án Vườn Toán Lớp 3 – Ước lượng trước khi tính.

## 2. Các hoạt động có AI hỗ trợ

- Phân tích yêu cầu và đề xuất hướng triển khai chức năng.
- Hỗ trợ giải thích mã nguồn và tìm lỗi trong quá trình phát triển.
- Hỗ trợ xây dựng và rà soát unit tests.
- Kiểm tra tính nhất quán của dữ liệu câu hỏi ước lượng với quy tắc dung sai ±20%.
- Hỗ trợ cập nhật dữ liệu seed.
- Hỗ trợ soạn thảo README, báo cáo kiểm thử, checklist bảo mật và báo cáo tiến độ.

## 3. Kiểm tra kết quả AI

Các nội dung do AI đề xuất được kiểm tra thông qua:

- Đọc và rà soát mã nguồn.
- Chạy các bài kiểm thử tự động.
- Đối chiếu với yêu cầu và quyết định thiết kế của dự án.
- Kiểm tra kết quả thực tế khi chạy ứng dụng.

AI không thay thế trách nhiệm của thành viên nhóm trong việc hiểu, kiểm tra và xác nhận mã nguồn.

## 4. Kết quả kiểm thử

Sau khi cập nhật dữ liệu khoảng dung sai, bộ unit tests được chạy bằng lệnh:

`npm test`

Kết quả:
- Tổng số test: 12
- Passed: 12
- Failed: 0
- Skipped: 0

## 5. Trách nhiệm

Nhóm phát triển chịu trách nhiệm về mã nguồn, dữ liệu, kết quả kiểm thử và nội dung cuối cùng của sản phẩm. Các đề xuất của AI chỉ được sử dụng sau khi kiểm tra phù hợp.

## 6. Giới hạn

Các kết quả kiểm thử được ghi nhận trong tài liệu này chỉ phản ánh những bài kiểm thử thực sự đã chạy. Các kiểm thử tích hợp, UI, CI và hoạt động trên database cần được xác minh riêng.
