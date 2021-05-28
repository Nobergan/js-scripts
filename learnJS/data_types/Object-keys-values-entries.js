// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650
// Открыть песочницу с тестами для задачи.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }
//   return sum;
// }

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0); // 650
}

console.log(sumSalaries(salaries)); // 650

// Подсчёт количества свойств объекта
// важность: 5
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

let user = {
  name: 'John',
  age: 30,
};

function count(obj) {
  return Object.entries(obj).length;
}

console.log(count(user)); // 2
