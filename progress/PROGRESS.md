# PROGRESS — N43 — Track B

- Starter: `ktpmud-bkt-vuontoan-starter` · tag `bkt-2026-v1`
- Fork: https://github.com/HNM160206/ktpmud-bkt-vuontoan-starter

## PC-1 — 11/11/2026

### 1.1. Tiến độ theo Acceptance Criteria

| Mã | Trạng thái | Bằng chứng | Ghi chú |
|---|---|---|---|
| B-01 | Đang | README.md & kế hoạch tích hợp | Đã xác định vị trí tích hợp vào luồng bài học hiện có |
| B-02 | Đang | data/estimation_fixtures.json (phác thảo) | Chuẩn bị dữ liệu mẫu các phép nhân/chia |
| B-03 | Đang | server/estimationScorer.js (phác thảo) | Thuật toán chấm điểm tất định với biên độ sai số |
| B-04 | Đang | DECISIONS.md | Thiết kế DTO/API, đảm bảo không trả đáp án đúng về client trước khi submit |
| B-05 | Chưa | | Lưu trạng thái làm bài vào SQLite |
| B-06 | Chưa | | Xây dựng phản hồi sư phạm phân biệt ước lượng và kết quả chính xác |
| B-07 | Xong | server/auth.js (giữ nguyên gốc) | Không can thiệp vào cơ chế auth và session hiện tại |
| B-08 | Chưa | | Xây dựng test suite tự động cho các ca test |
| B-09 | Chưa | | Bổ sung script npm test vào package.json |
| B-10 | Chưa | | Cấu hình GitHub Actions CI chạy test tự động |
| B-11 | Xong | REQUIREMENTS.md & chính sách bảo mật | Cam kết không sử dụng dữ liệu thật, tuân thủ dữ liệu synthetic |
| B-12 | Chưa | | Thiết kế giao diện hỗ trợ điều hướng cơ bản bằng bàn phím |

### 1.2. Sửa đổi bắt buộc từ Checkpoint 1

| Mục | Trạng thái | Bằng chứng |
|---|---|---|
| Cập nhật tiến độ và kế hoạch tích hợp | Đã ghi nhận | README.md, PROGRESS.md |

### 1.3. Timeline

- Fixtures & `estimationScorer.js`: trước PC-1, 11/11
- Frontend nhập estimate: kế hoạch CP2 (15/11), dự kiến 14/11
- Unit tests & CI: M3, dự kiến 17/11
- Docs & final tests: Freeze, dự kiến 19/11

---

## PC-2 — 18/11/2026

### 2.1. Tiến độ công việc

| Hạng mục | Kế hoạch | Trạng thái tại PC-2 | Ghi chú |
|---|---|---|---|
| Fixtures & estimationScorer.js | Trước PC-1 | Đã triển khai | Có dữ liệu bài ước lượng và bộ chấm điểm; cần kiểm tra tích hợp cuối |
| Frontend nhập estimate | CP2, 14–15/11 | Đã triển khai | Luồng làm bài ước lượng đã được tích hợp; cần kiểm tra lại các luồng UI |
| Unit tests | M3, 17/11 | Đã triển khai | Có test suite; cần chạy lại và ghi nhận kết quả mới nhất |
| npm test | M3 | Đã triển khai | Script test đã có trong package.json; cần xác minh chạy thành công trên bản hiện tại |
| GitHub Actions CI | M3 | Cần xác minh | Kiểm tra workflow và trạng thái CI trên GitHub |
| Docs & final tests | Freeze, 19/11 | Đang thực hiện | Hoàn thiện báo cáo kiểm thử, checklist và rà soát tài liệu |

### 2.2. Tiến độ theo Acceptance Criteria

| Mã | Trạng thái | Bằng chứng / vị trí | Ghi chú |
|---|---|---|---|
| B-01 | Xong | README.md, giao diện bài học | Luồng tích hợp bài ước lượng đã triển khai |
| B-02 | Xong | data/seed.json, fixtures | Dữ liệu câu hỏi ước lượng đã có |
| B-03 | Xong | server/estimationScorer.js | Bộ chấm điểm ước lượng đã triển khai |
| B-04 | Xong | DECISIONS.md, API | Quyết định thiết kế DTO/API đã được ghi nhận |
| B-05 | Xong | server/db.js | Có lưu dữ liệu liên quan vào SQLite; cần kiểm tra lại luồng tích hợp |
| B-06 | Xong | Giao diện phản hồi bài làm | Có phản hồi cho hoạt động ước lượng; cần rà soát nội dung |
| B-07 | Xong | server/auth.js | Giữ nguyên cơ chế auth/session |
| B-08 | Xong | Test suite | Đã có kiểm thử tự động; cần chạy lại để xác nhận kết quả |
| B-09 | Xong | package.json | Đã có script `npm test` |
| B-10 | Cần xác minh | .github/workflows/ | Kiểm tra workflow và kết quả chạy CI trên GitHub |
| B-11 | Xong | REQUIREMENTS.md, dữ liệu seed | Dùng dữ liệu synthetic; không sử dụng dữ liệu cá nhân thật |
| B-12 | Cần hoàn thiện / xác minh | Giao diện frontend | Rà soát khả năng điều hướng bàn phím và trạng thái focus |

> Lưu ý: Bảng trên ghi nhận tiến độ triển khai tại PC-2. Các mục “Cần xác minh” chỉ được chuyển thành “Xong” sau khi kiểm tra thực tế. Không thay đổi nội dung hoặc tiêu chí của 12 Acceptance Criteria.

### 2.3. Deliverables

| Deliverable | Trạng thái | Ghi chú |
|---|---|---|
| README.md | Có | Hướng dẫn và mô tả dự án |
| REQUIREMENTS.md | Có | Yêu cầu và Acceptance Criteria |
| DECISIONS.md | Có | Các quyết định thiết kế |
| TEST_PLAN.md | Có | Kế hoạch kiểm thử |
| Test suite | Có | Cần chạy lại và ghi nhận kết quả |
| GitHub Actions CI | Cần xác minh | Kiểm tra workflow và trạng thái run |
| TEST_REPORT.md | Cần hoàn thiện | Tổng hợp kết quả kiểm thử thực tế |
| SECURITY_PRIVACY_CHECKLIST.md | Cần rà soát | Hoàn tất kiểm tra bảo mật và quyền riêng tư |
| AI_USE.md | Cần xác minh / hoàn thiện | Ghi nhận việc sử dụng AI theo yêu cầu môn học |
| CONTRIBUTIONS.md | Cần xác minh / hoàn thiện | Ghi nhận đóng góp thành viên |
| Slide / kịch bản demo | Chưa hoàn thiện | Chuẩn bị cho phần trình bày |

### 2.4. Công việc còn lại

- [ ] Chạy lại `npm test` trên phiên bản hiện tại và lưu kết quả.
- [ ] Kiểm tra tích hợp các luồng ước lượng → tính chính xác → phản hồi.
- [ ] Xác minh GitHub Actions CI chạy thành công.
- [ ] Rà soát điều hướng bàn phím, focus và các trạng thái UI.
- [ ] Hoàn thiện TEST_REPORT.md.
- [ ] Rà soát SECURITY_PRIVACY_CHECKLIST.md.
- [ ] Kiểm tra AI_USE.md và CONTRIBUTIONS.md.
- [ ] Chuẩn bị slide và kịch bản demo.
- [ ] Kiểm tra README và các tài liệu có thống nhất với phiên bản code cuối không.

### 2.5. Rủi ro và kế hoạch xử lý

| Rủi ro | Mức độ | Kế hoạch xử lý |
|---|---|---|
| Test tích hợp có thể chưa bao phủ hết luồng | Trung bình | Chạy lại test, kiểm tra các luồng chính và bổ sung test nếu cần |
| CI chưa được xác minh | Trung bình | Kiểm tra workflow và kết quả run trên GitHub |
| Điều hướng bàn phím chưa hoàn tất | Trung bình | Rà soát tab order, focus và thao tác bằng bàn phím |
| Tài liệu có thể chưa đồng bộ với code | Thấp–Trung bình | Rà soát README, REQUIREMENTS, DECISIONS và TEST_REPORT trước Freeze |
| Chưa hoàn thiện tài liệu trình bày | Trung bình | Hoàn thành slide và kịch bản demo trước hạn |

---

## PC-3 / Freeze — Dự kiến 19/11/2026

- Chốt code và tài liệu.
- Chạy kiểm thử cuối và ghi lại kết quả.
- Xác minh CI.
- Rà soát bảo mật, quyền riêng tư và dữ liệu synthetic.
- Hoàn thiện các deliverables còn thiếu.
- Chuẩn bị demo và xác nhận trạng thái cuối của Acceptance Criteria.
