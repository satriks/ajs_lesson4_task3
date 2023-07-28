import getLevel from '../getLevel';
import http from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('test call http status', () => {
  http.mockReturnValue(542);
  getLevel(1);
  expect(http).toBeCalledWith('https://server/user/1');
});

test('test call http status2', () => {
  http.mockReturnValue({});
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});

test('test call http status2', () => {
  http.mockReturnValue({ status: 'ok', level: 1 });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 1');
});
