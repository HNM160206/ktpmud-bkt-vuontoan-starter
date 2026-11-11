# KẾ HOẠCH KIỂM THỬ (TEST PLAN - M1)
**Hệ thống:** Vườn Toán Lớp 3  
**Nhóm thực hiện:** Nhóm 43 

## 1. Mục tiêu
Kiểm thử tính chính xác của hàm ước lượng toán học, tính hợp lệ của giao diện người dùng và đảm bảo không gây lỗi hồi quy (regression) cho các dạng bài cũ.

## 2. Bảng ca kiểm thử dự kiến (Test Cases)

| Mã test | Tên ca kiểm thử | Dữ liệu đầu vào | Kết quả mong đợi |
| :--- | :--- | :--- | :--- |
| **TC-01** | Ước lượng phép nhân (làm tròn lên) | Phép tính `23 x 4`, nhập ước lượng `100` | Hệ thống báo Hợp lý |
| **TC-02** | Ước lượng phép nhân (làm tròn xuống) | Phép tính `32 x 3`, nhập ước lượng `100` | Hệ thống báo Hợp lý |
| **TC-03** | Ước lượng phép chia có dư | Phép tính `47 : 4`, nhập ước lượng `10` | Hệ thống báo Hợp lý |
| **TC-04** | Nhập sai khoảng ước lượng | Phép tính `21 x 4`, nhập ước lượng `120` | Báo Chưa hợp lý, yêu cầu thử lại |
| **TC-05** | Bỏ qua bước ước lượng | Để trống ô ước lượng và bấm nộp đáp án đúng | Chặn nộp bài, hiện cảnh báo |
| **TC-06** | Nhập ký tự không phải số | Nhập chữ "abc" vào ô ước lượng | Báo lỗi định dạng dữ liệu |
