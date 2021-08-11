// 1.	Дано початковий масив та аргументи після нього. Прибрати всі значення з масиву, які співпадають з аргументами та повернути масив.
// як приклад:
// foo([1, 2, 3, 1, 2, 3], 2, 3) має повернути [1, 1].
// foo([1, 2, 3, 5, 1, 2, 3], 2, 3) має повернути [1, 5, 1].
// foo([2, 3, 2, 3], 2, 3) має повернути [].

// 2.	Написати функцію, яка приймає два або більше масивів і повертає унікальні значення в тому ж порядку як передано масиви.
// як приклад:
// foo([1, 3, 2], [5, 2, 1, 4], [2, 1]) має повернути [1, 3, 2, 5, 4].
// foo([1, 2, 3], [5, 2, 1]) має повернути [1, 2, 3, 5].
// foo([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) має повернути [1, 2, 3, 5, 4, 6, 7, 8].

// Первое задание

// function filterArray(array, arg1, arg2) {
//   const filteredNumbers = [];
//   array.forEach(number => {
//     if (number !== arg1 && number !== arg2) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 1, 2, 3], 2, 3));
// console.log(filterArray([1, 2, 3, 5, 1, 2, 3], 2, 3));
// console.log(filterArray([2, 3, 2, 3], 2, 3));

// // Второе задание

// function filterAllArrays(...args) {
//   const allNumbers = args.flat();

//   const uniqueNums = [];

//   for (let number of allNumbers) {
//     if (!uniqueNums.includes(number)) {
//       uniqueNums.push(number);
//     }
//   }

//   return uniqueNums;
// }

// console.log(filterAllArrays([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// console.log(filterAllArrays([1, 2, 3], [5, 2, 1]));
// console.log(filterAllArrays([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

(function () {
  return typeof arguments;
})();
