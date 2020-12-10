// Проверка пароля (ранний возврат)
// Задание
// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

// удали переменную message;
// удали else;
// код должен работать так же, как и до оптимизации.
// Тесты
// Объявлена функция checkPassword(password).
// Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки

  if (password === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  }
  return 'Доступ запрещён, неверный пароль!';

  // Пиши код выше этой строки
}

console.log(checkPassword('mangohackzor'));
console.log(checkPassword('polyhax'));
console.log(checkPassword('jqueryismyjam'));
