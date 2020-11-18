const checkForSpam = function (message) {
  const w = message.toLowerCase();
  console.log(w);

  let fullMessage = w.split(' ');

  let sale = 'sale';
  let spam = '[spam]';

  let result1 = fullMessage.includes(sale);
  let result2 = fullMessage.includes(spam);

  if (fullMessage.includes(sale)) {
    return result1;
  }

  return result2;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// function checkForSpam (str) {
//   'use strict';
//   // Write code under this line
// const message = str.toLowerCase();

// if (message.includes('sale') || message.includes('spam')) {
//   return true;
//  }
//   return false;
// }

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// Функция предикат
// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.
