'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { parseRange, isReasonableEstimate, scoreEstimate, buildToleranceRange } = require('../server/estimationScorer');

test('tạo khoảng dung sai ±20% xác định', () => {
  assert.deepEqual(buildToleranceRange(100), { lo: 80, hi: 120 });
});
test('chấp nhận đúng tại hai biên và bên trong khoảng', () => {
  assert.equal(isReasonableEstimate(80, '80-120'), true);
  assert.equal(isReasonableEstimate(100, '80-120'), true);
  assert.equal(isReasonableEstimate(120, '80-120'), true);
});
test('từ chối giá trị nằm ngoài khoảng', () => {
  assert.equal(isReasonableEstimate(79, '80-120'), false);
  assert.equal(isReasonableEstimate(121, '80-120'), false);
});
test('từ chối đầu vào không phải số và bỏ trống', () => {
  assert.equal(isReasonableEstimate('abc', '80-120'), false);
  assert.equal(isReasonableEstimate('', '80-120'), false);
  assert.equal(isReasonableEstimate(null, '80-120'), false);
});
test('phân tích khoảng sai định dạng phải báo lỗi', () => {
  assert.throws(() => parseRange('120-80'), /không hợp lệ/);
  assert.throws(() => parseRange('80:120'), /định dạng/);
});
test('không chấp nhận đáp án tham chiếu hoặc dung sai không hợp lệ', () => {
  assert.throws(() => buildToleranceRange(-1));
  assert.throws(() => buildToleranceRange(10, 1));
});


test('phản hồi trường hợp ước lượng đúng và tính chính xác đúng', () => {
  const result = scoreEstimate('96', '96', '77-115', '96');
  assert.equal(result.estimateReasonable, true);
  assert.equal(result.exactCorrect, true);
});

test('phản hồi trường hợp ước lượng đúng nhưng tính chính xác sai', () => {
  const result = scoreEstimate('100', '95', '77-115', '96');
  assert.equal(result.estimateReasonable, true);
  assert.equal(result.exactCorrect, false);
});

test('phản hồi trường hợp ước lượng sai nhưng tính chính xác đúng', () => {
  const result = scoreEstimate('150', '96', '77-115', '96');
  assert.equal(result.estimateReasonable, false);
  assert.equal(result.exactCorrect, true);
});

test('phản hồi trường hợp cả ước lượng và tính chính xác đều sai', () => {
  const result = scoreEstimate('150', '95', '77-115', '96');
  assert.equal(result.estimateReasonable, false);
  assert.equal(result.exactCorrect, false);
});

test('từ chối chuỗi chỉ chứa khoảng trắng', () => {
  assert.equal(isReasonableEstimate('   ', '77-115'), false);
});

test('12 fixtures có khoảng dung sai khớp với đáp án chính xác ±20%', () => {
  const fixtures = require('../data/estimation_fixtures.json');
  for (const question of fixtures.questions) {
    const expectedRange = buildToleranceRange(Number(question.category), fixtures.tolerance);
    assert.equal(question.correctAnswer, `${expectedRange.lo}-${expectedRange.hi}`, question.id);
  }
});
