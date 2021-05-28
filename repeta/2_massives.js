//
// Обьявление, индексация, переопределение и длина
//

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

console.log(friends);
console.log(friends[2]);

friends[2] = 'Chelsy';

console.log(friends);
console.log(friends[2]);
console.log(friends.length);

friends[4] = 'Kongo';

console.log(friends);
console.log(friends[4]);
console.log(friends.length);

//
// Итерация по масиву
//

const friends2 = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

for (let i = 0; i < friends2.length; i += 1) {
  console.log(i);
  console.log(friends2[i]);
}

for (const friend of friends) {
  console.log(friend);
}

//
// Логика с break и continue
//

const friends3 = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
const nameToFind = 'Poly';
let message = 'Такого друга нету';

// for (let i = 0; i < friends3.length; i += 1) {
//   const friend = friends3[i];

//   if (nameToFind === friend) {
//     console.log('Нашли такого друга');
//   }
// }

for (const friend of friends3) {
  if (nameToFind === friend) {
    message = 'Нашли такого друга';
    break;
  }
}

console.log(message);

//
//
// Методы масивов
//
//

//
// PUSH
//

const valueInputRef = document.querySelector('.js-value');
const addValueBtn = document.querySelector('.js-add-value');
const calcBtn = document.querySelector('.js-calculate');
const numbers = [];
let total = 0;

addValueBtn.addEventListener('click', function () {
  const value = Number(valueInputRef.value);

  numbers.push(value);

  valueInputRef.value = '';

  console.log(numbers);
});

calcBtn.addEventListener('click', function () {
  for (const number of numbers) {
    total += number;
  }

  console.log('Total: ', total);
});

//
// Split and Join
//
/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 *
 * Должно получиться top-10-benefits-of-react-framework
 *
 * После чего сделать руками через for с if...else и тернарником
 */

//  Лучшее решение
const title = 'Top 10 benefits of React framework';

const words = title.toLowerCase().split(' ');
const slug = words.join('-');

console.log(slug);

// Join руками для практики циклов
const title2 = 'Top 10 benefits of React framework';
const words2 = title.toLowerCase().split(' ');

let slug2 = '';

for (let i = 0; i < words2.length; i += 1) {
  const isNotLastValue = i !== words2.length - 1;

  slug2 += isNotLastValue ? words2[i] + '-' : words2[i];
}

console.log(slug2);

//
// Includes
//

/*
 * Проверяем наличие работника на месте
 * Сначала через for, потом includes
 */

const staff = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
const query = 'Ajax';

const result = staff.includes(query)
  ? 'Такой сотрудник есть'
  : 'Такого сотрудника нету';

console.log(result);

//
// Concat
//

const oldStaff = ['Mango', 'Poly', 'Ajax'];
const newStaff = ['Chelsy', 'Kiwi'];

const staff2 = oldStaff.concat(newStaff);

console.log('oldStaff: ', oldStaff);
console.log('newStaff: ', newStaff);

console.log('staff2: ', staff2);

//
// Slice & Splice
//

/*
 * Работем с коллекцией карточек в trello
 * Удалить, добавить, обновить
 */

const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];
console.log(cards);

// Удаление
const cardToRemove = 'card-3';
const index = cards.indexOf(cardToRemove);

cards.splice(index, 2);

console.log(cards);

// Вставка
const cardToInsert = 'card-3';
const index2 = cards.indexOf(cardToInsert);

cards.splice(index2, 0, cardToInsert);

console.log(cards);

// Обновление
cards.splice(1, 2, 'card-333');

console.log(cards);
