# CONTRIBUTIONS.md

# PROJECT CONTRIBUTIONS

## 1. Project Overview

- **Project:** Vườn Toán Lớp 3 – Ước lượng trước khi tính
- **Track:** B
- **Repository:** ktpmud-bkt-vuontoan-starter

## 2. Contributions

### Requirement Analysis
- Phân tích yêu cầu bài toán và xác định chức năng hệ thống.
- Xác định các tiêu chí nghiệm thu và luồng nghiệp vụ.
- Xây dựng yêu cầu cho chức năng ước lượng trước khi tính chính xác.

### System Design
- Xây dựng cấu trúc dữ liệu cho câu hỏi và kết quả.
- Thiết kế luồng xử lý estimate và exact answer.
- Xác định các quyết định thiết kế và quy tắc xử lý dữ liệu.

### Implementation
- Triển khai chức năng ước lượng kết quả.
- Xử lý khoảng dung sai ±20%.
- Xây dựng logic đánh giá kết quả ước lượng và tính chính xác.
- Tích hợp xử lý kết quả vào hệ thống.

### Testing
- Xây dựng unit tests cho bộ chấm ước lượng.
- Kiểm tra các trường hợp đầu vào hợp lệ và không hợp lệ.
- Kiểm tra các trường hợp đúng/sai của estimate và exact answer.
- Chạy kiểm thử tự động bằng Node.js Test Runner.

### Data Validation
- Rà soát dữ liệu câu hỏi estimate.
- Kiểm tra tính nhất quán của khoảng dung sai.
- Cập nhật khoảng dung sai theo quy tắc ±20%.

### Documentation
- Cập nhật tài liệu yêu cầu.
- Cập nhật tài liệu quyết định thiết kế.
- Cập nhật báo cáo kiểm thử.
- Cập nhật checklist bảo mật và quyền riêng tư.
- Ghi nhận quá trình sử dụng AI hỗ trợ phát triển.
- Cập nhật báo cáo tiến độ.

## 3. Verification Results

| Item | Result |
|---|---|
| Unit tests | 12/12 PASS |
| Failed tests | 0 |
| Skipped tests | 0 |
| Estimation scorer | Tested |
| Input validation | Tested |
| Tolerance boundaries | Tested |
| Seed data | Updated |
| Database synchronization | Not yet verified |
| Integration testing | Not yet verified |
| UI testing | Not yet verified |

## 4. Summary

Các công việc đóng góp tập trung vào phân tích yêu cầu, thiết kế, triển khai chức năng ước lượng, kiểm thử, rà soát dữ liệu và hoàn thiện tài liệu dự án.

Kết quả kiểm thử unit hiện tại đạt 12/12 PASS. Các hạng mục kiểm thử tích hợp, giao diện và xác minh dữ liệu trên database cần tiếp tục được thực hiện trước khi hoàn thiện sản phẩm.
