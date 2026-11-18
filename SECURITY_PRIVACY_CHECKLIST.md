# SECURITY_PRIVACY_CHECKLIST.md

# SECURITY & PRIVACY CHECKLIST

## 1. Mục đích

Tài liệu ghi nhận các hạng mục bảo mật và quyền riêng tư đã được rà soát trong dự án Vườn Toán Lớp 3.

## 2. Checklist

| STT | Hạng mục | Trạng thái | Ghi chú |
|---|---|---|---|
| 1 | Hash mật khẩu | Đã rà soát | Source sử dụng bcrypt |
| 2 | Cookie HttpOnly | Đã rà soát | Có cấu hình HttpOnly |
| 3 | SameSite | Đã rà soát | Có cấu hình SameSite |
| 4 | Secure Cookie | Đã rà soát | Bật theo môi trường production |
| 5 | Authentication | Đã rà soát | Có cơ chế xác thực |
| 6 | Authorization | Đã rà soát | Có middleware kiểm tra quyền |
| 7 | SQL Injection | Đã rà soát một phần | Các truy vấn đã kiểm tra sử dụng parameterized queries |
| 8 | Bảo vệ đáp án | Đã rà soát | Đáp án estimate được chấm ở server |
| 9 | Secret | Cần xác minh | Không sử dụng secret mặc định khi triển khai production |
| 10 | Token phía client | Cần đánh giá | Kiểm tra rủi ro lưu token trong localStorage |
| 11 | Database | Cần kiểm tra | Xác minh dữ liệu trước khi chia sẻ hoặc nộp |
| 12 | Dữ liệu demo | Cần xác minh | Chỉ sử dụng dữ liệu giả lập |
| 13 | HTTPS | Chưa xác minh | Cần HTTPS khi triển khai production |
| 14 | Security scan | Chưa thực hiện | Chưa có kết quả scan được xác nhận |

## 3. Các vấn đề cần lưu ý

### Secret cấu hình
Không sử dụng secret mặc định trong môi trường production. Cần thiết lập SESSION_SECRET bằng biến môi trường có giá trị đủ mạnh.

### Token phía client
Cần đánh giá việc lưu token trong localStorage và nguy cơ bị truy cập nếu xảy ra XSS.

### Database và backup
Database, backup và các file dữ liệu cần được kiểm tra để đảm bảo không chứa thông tin cá nhân không cần thiết trước khi chia sẻ project.

### Dữ liệu học sinh
Không sử dụng thông tin thật của học sinh trong dữ liệu demo nếu không có sự cho phép phù hợp.

## 4. Khuyến nghị

- Sử dụng secret riêng cho môi trường triển khai.
- Không commit mật khẩu, token hoặc thông tin nhạy cảm.
- Kiểm tra phân quyền giữa tài khoản student và teacher.
- Sử dụng HTTPS khi triển khai.
- Kiểm tra dữ liệu demo trước khi nộp.
- Cập nhật dependencies khi cần thiết.

## 5. Giới hạn

Checklist này dựa trên rà soát source code ở phạm vi đã kiểm tra. Chưa thực hiện penetration testing, security scanning toàn diện hoặc kiểm thử trên môi trường production.
