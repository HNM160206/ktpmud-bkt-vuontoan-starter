# PROGRESS — N43 — Track B

- Starter: ktpmud-bkt-vuontoan-starter · tag bkt-2026-v1
- Fork: https://github.com/HNM160206/ktpmud-bkt-vuontoan-starter

## PC-1 — 11/11/2026

### 1.1. Tiến độ theo acceptance criteria
<!-- Track B: B-01…B-12 (theo đề thi Track B) -->
| Mã | Trạng thái (Chưa / Đang / Xong) | Bằng chứng (commit / CI / file) | Ghi chú |
|---|---|---|---|
| B-01 | Đang | File `README.md` & kế hoạch tích hợp | Đã xác định vị trí tích hợp vào luồng bài học hiện có |
| B-02 | Đang | File `data/estimation_fixtures.json` (phác thảo) | Chuẩn bị dữ liệu mẫu các phép nhân/chia |
| B-03 | Đang | File `server/estimationScorer.js` (phác thảo) | Thuật toán chấm điểm tất định với biên độ sai số |
| B-04 | Đang | Phân tích API DTO trong `DECISIONS.md` | Thiết kế đảm bảo không trả đáp án đúng về client trước khi submit |
| B-05 | Chưa | | Lưu trạng thái làm bài vào SQLite |
| B-06 | Chưa | | Xây dựng phản hồi sư phạm (Feedback) phân biệt ước lượng và kết quả chính xác |
| B-07 | Xong | File `server/auth.js` (giữ nguyên gốc) | Cam kết không can thiệp vào cơ chế auth và session hiện tại |
| B-08 | Chưa | | Xây dựng test suite tự động cho các ca test |
| B-09 | Chưa | | Bổ sung script `npm test` vào `package.json` |
| B-10 | Chưa | | Cấu hình GitHub Actions CI chạy test tự động |
| B-11 | Xong | File `REQUIREMENTS.md` & chính sách bảo mật | Cam kết không sử dụng dữ liệu thật, tuân thủ dữ liệu synthetic |
| B-12 | Chưa | | Thiết kế giao diện hỗ trợ điều hướng cơ bản bằng bàn phím |

### 1.2. Sửa đổi bắt buộc từ Checkpoint 1
| Mục | Trạng thái | Bằng chứng |
|---|---|---|
|  |  |  |

### 1.3. Timeline dự kiến đến khi hoàn thành
| Việc | Vai trò phụ trách | Mốc (CP2 15/11 · M3 · Freeze 19/11 · M4 20/11) | Ngày dự kiến |
|---|---|---|---|
| Hoàn thành 12 fixtures & module `estimationScorer.js` | Dev Backend | Trước PC-1 | 11/11/2026 |
| Xây dựng giao diện Frontend nhập ước lượng | Dev Frontend | CP2 (15/11) | 14/11/2026 |
| Viết unit test tự động & cấu hình CI | Dev Testing | M3 | 17/11/2026 |
| Hoàn thiện toàn bộ tài liệu & kiểm thử cuối | Team Lead | Freeze (19/11) | 19/11/2026 |

### 1.4. Rủi ro / đang vướng

### 1.5. Câu hỏi cho GV
- Q1
### 1.6. Phân công (alias hoặc vai trò, KHÔNG ghi họ tên/MSSV)
| Alias / vai trò | Đầu việc chính | Commit/PR tiêu biểu |
|---|---|---|
| Lead-BE | Thiết kế CSDL, thuật toán chấm điểm tất định | Commit `M0: Checkpoint 1 setup` |
| Dev-FE | Giao diện tương tác, luồng nhập ước lượng | - |

## PC-2 — 18/11/2026

### 2.1. Đối chiếu timeline PC-1
| Việc (theo bảng 1.3) | Kế hoạch | Thực tế | Lệch & lý do |
|---|---|---|---|

### 2.2. Tiến độ theo acceptance criteria (cập nhật toàn bộ bảng 1.1)
| Mã | Trạng thái | Bằng chứng | Ghi chú |
|---|---|---|---|

### 2.3. Sẵn sàng nộp bài (đề thi Mục 6)
| Deliverable | Có / Chưa | Đường dẫn |
|---|---|---|
| README.md (cài đặt / chạy / test) | | |
| REQUIREMENTS.md | | |
| DECISIONS.md / ADR | | |
| Test tự động + CI xanh | | |
| TEST_REPORT.md | | |
| SECURITY_PRIVACY_CHECKLIST.md | | |
| AI_USE.md | | |
| CONTRIBUTIONS.md | | |
| Slide / demo script ≤ 7 phút | | |

### 2.4. Việc còn lại đến Freeze (23:59 19/11)
| Việc | Vai trò phụ trách | Hạn |
|---|---|---|

### 2.5. Rủi ro / câu hỏi cho GV
