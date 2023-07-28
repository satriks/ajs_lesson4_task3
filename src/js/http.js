// Демо-реализация функции fetchData (модуль http):
export default function fetchData(url) {
// Добавил использование url для Eslint, что бы не выдавал ошибки
  if (url === 45) {
    return url;
  }
  throw new Error('Mock this!');
}
