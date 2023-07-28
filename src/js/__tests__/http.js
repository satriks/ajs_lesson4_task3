import http from '../http';

test('test http', () => {
  expect(() => { http(42); }).toThrow(Error);
});
