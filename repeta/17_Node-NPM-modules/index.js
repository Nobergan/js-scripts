
// импорт с другого модуля => greeter.js
const greeter = require('./greeter');

// импорт с node.modules => напрямую с пакетов
const validator = require('validator');

greeter('Hello friends!!!')

const validateEmail = email => {
  return validator.isEmail(email);
};

console.log(
  'Is mango@mail.com a valid email?: ',
  validateEmail('mango@mail.com'),
);

console.log(
  'Is Mangozedog.com a valid email?: ',
  validateEmail('Mangozedog.com'),
);