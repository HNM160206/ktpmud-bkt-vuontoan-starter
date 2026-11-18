'use strict';

/**
 * Chấm ước lượng theo khoảng ±20% quanh kết quả chính xác.
 * correct_answer vẫn lưu định dạng lo-hi theo ADR-002.
 */
function parseRange(value) {
  const match = /^\s*(-?\d+(?:\.\d+)?)\s*-\s*(-?\d+(?:\.\d+)?)\s*$/.exec(String(value));
  if (!match) throw new TypeError('Khoảng đáp án phải có định dạng lo-hi.');
  const lo = Number(match[1]);
  const hi = Number(match[2]);
  if (!Number.isFinite(lo) || !Number.isFinite(hi) || lo > hi) {
    throw new TypeError('Khoảng đáp án không hợp lệ.');
  }
  return { lo, hi };
}

function isReasonableEstimate(value, range) {
  if (value === null || value === undefined || String(value).trim() === '') return false;
  const n = Number(value);
  if (!Number.isFinite(n)) return false;
  const { lo, hi } = typeof range === 'string' ? parseRange(range) : range;
  return n >= lo && n <= hi;
}

function scoreEstimate(estimate, exact, range, exactAnswer) {
  const estimateReasonable = isReasonableEstimate(estimate, range);
  const submittedNumber = Number(exact);
  const expectedNumber = Number(exactAnswer);
  const exactCorrect = exact !== null && exact !== undefined && String(exact).trim() !== '' &&
    Number.isFinite(submittedNumber) && Number.isFinite(expectedNumber) && submittedNumber === expectedNumber;
  return {
    estimateReasonable,
    exactCorrect,
    feedback: estimateReasonable
      ? (exactCorrect ? 'Ước lượng hợp lý và tính chính xác đúng.' : 'Ước lượng hợp lý nhưng phép tính chưa đúng.')
      : (exactCorrect ? 'Phép tính đúng nhưng cần cải thiện khả năng ước lượng.' : 'Cần xem lại cả ước lượng và phép tính.'),
  };
}

function buildToleranceRange(exact, tolerance = 0.2) {
  const n = Number(exact);
  if (!Number.isFinite(n) || n < 0 || !Number.isFinite(tolerance) || tolerance < 0 || tolerance >= 1) {
    throw new TypeError('Giá trị tham chiếu hoặc dung sai không hợp lệ.');
  }
  return { lo: Math.ceil(n * (1 - tolerance)), hi: Math.floor(n * (1 + tolerance)) };
}

module.exports = { parseRange, isReasonableEstimate, scoreEstimate, buildToleranceRange };
