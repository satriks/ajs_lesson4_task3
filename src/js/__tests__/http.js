import http from '../http';

test('test http', () => {
  expect(() => { http(42); }).toThrow(Error);
});

test('test url', () => {
  expect(http(45)).toBe(45);
});
