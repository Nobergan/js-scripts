// Задача: проверка пароля
// Задание
// Функция checkPassword(password) сравнивает переданный ей пароль(параметр password) с сохранённым паролем администратора(константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

// Используя тернарный оператор дополни функцию так, что:

// Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку 'Доступ разрешен'.
// В противном случае, присвой message строку 'Доступ запрещён, неверный пароль!'.
//     Тесты
// Объявлена функция checkPassword(password).
// Использован тернарный оператор.
// Вызов checkPassword('jqueryismyjam') возвращает 'Доступ разрешен'.
// Вызов checkPassword('angul4r1sl1f3') возвращает 'Доступ запрещён, неверный пароль!'.
// Вызов checkPassword('r3actsux') возвращает 'Доступ запрещён, неверный пароль!'.

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Пиши код ниже этой строки
  message =
    password === ADMIN_PASSWORD
      ? 'Доступ разрешен'
      : 'Доступ запрещён, неверный пароль!';
  // Пиши код выше этой строки
  return message;
}

console.log(checkPassword('jqueryismyjam'));
console.log(checkPassword('angul4r1sl1f3'));
console.log(checkPassword('r3actsux'));
