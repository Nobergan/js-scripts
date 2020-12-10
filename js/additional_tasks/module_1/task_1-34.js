// Методы toLowerCase() и toUpperCase()
// Бывают ситуации когда все символы в строке необходимо преобразовать в один регистр, верхний или нижний. Например, при поиске по ключевому слову, когда пользователь вводит строку 'saMsUng', а сравнить её надо со строкой 'samsung' или 'SAMSUNG'.

// console.log('saMsUng' === 'samsung'); // false
// console.log('saMsUng' === 'SAMSUNG'); // false
// Чтобы не требовать абсолютно точный ввод можно сделать «нормализацию» введённой пользователем строки, то есть преобразовать все её символы в верхний или нижний регистр. Методы строки toLowerCase() и toUpperCase() вернут новую строку в соответствующем регистре, не изменяя оригинальную.

// const BRAND_NAME = 'SAMSUNG';
// const userInput = 'saMsUng';
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true
// Задание
// Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

// Тесты
// Объявлена функция normalizeInput(input).
// Вызов функции normalizeInput('Привет мир') возвращает 'привет мир'.
// Вызов функции normalizeInput('Это НЕ СпаМ') возвращает 'это не спам'.
// Вызов функции normalizeInput('Большие СКИДКИ') возвращает 'большие скидки'.

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Дополни эту строку
  return normalizedInput;
}

console.log(normalizeInput('Привет мир'));
console.log(normalizeInput('Это НЕ СпаМ'));
console.log(normalizeInput('Большие СКИДКИ'));
