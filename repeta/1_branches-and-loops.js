// ТЕРНАРНЫЙ ОПЕРАТОР

const age = 16;

const category = age >= 20 ? 'adult' : 'child';

console.log(category);

// SWITCH

const stars = 2;

// if (stars === 1) {
//   console.log('1');
// } else if (stars === 2) {
//   console.log('2');
// } else if (stars === 3) {
//   console.log('3');
// } else if (stars === 4) {
//   console.log('4');
// } else if (stars === 5) {
//   console.log('5');
// } else {
//   console.log('Неверный ввод!!!');
// }

let result;

switch (stars) {
  case 1:
    result = '1';
    break;

  case 2:
    result = '2';
    break;

  case 3:
    result = '3';
    break;

  case 4:
    result = '4';
    break;

  case 5:
    result = '5';
    break;

  default:
    result = 'Такого нету!!!';
}

console.log(result);

// ЦИКЛ "FOR"

let userInput = prompt('Юличка, введи любое число и я все посчитаю :)');
userInput = Number(userInput);

let total = 0;

for (let i = 1; i <= userInput; i += 1) {
  total += i;
}

console.log(`Вот сумма - ${total}`);

// ЦИКЛ "WHILE"

const number = 3;
let totalWhile = 0;
let i = 1;

while (i <= number) {
  totalWhile += i;

  i += 1;
}

console.log(`Total = ${totalWhile}`);

// ЦИКЛ "DO WHILE"

let userInputDoWhile;

do {
  userInputDoWhile = prompt('Введите 3');

  if (userInputDoWhile === null) {
    console.log('Выходим');
    break;
  }

  userInputDoWhile = String(userInputDoWhile);
} while (userInputDoWhile !== 'ok');

console.log(userInputDoWhile);

// Вывести только нечетные цифры

for (let j = 0; j <= 10; j += 1) {
  if (j % 2 === 0) {
    continue;
  }
  console.log(j);
}

// Алгоритм

// 1 - создать цикл который спрашивает пользователя ввести число
// 2 - если ввели null остановить
// 3 - если ввели не null преобразовать в число и добавить к total
// 4 - после цикла вывести сумму введенных чисел

let total3 = 0;

while (true) {
  let input = prompt('Введите число');

  if (input === null) {
    console.log('Отменено пользователем');
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    console.log('Было введено не число, пропускаем текущую итерацию');
    continue;
  }

  total3 += input;
}

console.log(`Общая сумма ${total3}`);
