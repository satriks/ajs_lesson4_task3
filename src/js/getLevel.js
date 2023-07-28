// Ваша функция:
import fetchData from './http';

// Пришлось добавить default что бы убрать ошибку Eslint
export default function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

  // TODO: логика обработки
  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }

  return 'Информация об уровне временно недоступна';
}
