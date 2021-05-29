//
//  * Функциональные выражения и объявление функции
//  * Аргументы и параметры, параметры по умолчанию
//  * Возврат значения
//

const add = function (a, b) {
  console.log('a: ', a);
  console.log('b: ', b);

  const result = a + b;

  return result;
};

const r1 = add(2, 5);
console.log(r1);

const r2 = add(10, 20);
console.log(r2);

const r3 = add(100, 250);
console.log(r3);

//
// Функция logItems для перебора массивa
//

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
const numbers = [1, 2, 3, 4, 5];

const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(friends);
logItems(numbers);

//
// Функция findFriend для поиска друзей
//

const friends2 = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
const nameToFind1 = 'Poly';

const findFriends = function (allFriends, name) {
  console.log('allFriends: ', allFriends);
  console.log('name: ', name);

  for (const friend of allFriends) {
    if (friend === name) {
      return 'Нашли такого друга';
    }
  }
  return 'Не нашли такого друга';
};

const res1 = findFriends(friends2, 'Poly');
console.log(res1);

const res2 = findFriends(friends2, 'Chelsy');
console.log(res2);

//
// * Делаем slug в URL из названия статьи (например на dev.to)
//  * Data Protection and protecting your users in light of GDPR
//  * How to Find Unique and Memorable Name for Your Product
//  * Build Mean Stack Application
//  * 11 fruitful resources to improve Javascript knowledge
//

const slugify = function (string) {
  const words = string.toLowerCase().split(' ');
  const slug = words.join('-');

  return slug;
};

// const slug1 = slugify('Top 10 benefits of React framework');
// console.log(slug1);

// const slug2 = slugify(
//   'Data Protection and protecting your users in light of GDPR',
// );
// console.log(slug2);

// Делаем массив слагов

const articles = [
  'Top 10 benefits of React framework',
  'Data Protection and protecting your users in light of GDPR',
  'How to Find Unique and Memorable Name for Your Product',
  'Build Mean Stack Application',
  '11 fruitful resources to improve Javascript knowledge',
];

let slugs = [];

for (const article of articles) {
  const slug = slugify(article);

  slugs.push(slug);
}

console.log(slugs);

//
// Функция findSmallestNumber поиска самого маленького элемента массива
//

const findSmallestNumber = function (arr) {
  let smallestNumber = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    // console.log('items[i]: ', items[i]);
    // console.log('smallestNumber: ', smallestNumber);

    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }

  return smallestNumber;
};

const r10 = findSmallestNumber([10, 34, 2, 56, -1]);
console.log(r10);

const r11 = findSmallestNumber([100, 4, 32, 6, -10]);
console.log(r11);

//
//  * Работем с коллекцией карточек в trello
//  * Удалить, добавить, обновить
//

const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];

const removeCard = function (allCards, cardToRemove) {
  const index = allCards.indexOf(cardToRemove);

  if (index === -1) {
    console.log('Такой карточки нету');
    return;
  }

  allCards.splice(index, 2);
};

removeCard(cards, 'card-13');
console.log(cards);

removeCard(cards, 'card-3');
console.log(cards);

// Добавляем карточку

const addCart = function (allCards, cardToInsert, index) {
  allCards.splice(index, 0, cardToInsert);
};

addCart(cards, 'card-100', 2);
console.log(cards);

//
// Псевдомассив arguments и Array.from и ...
//

const fn = function () {
  console.log([]);
  console.log(arguments);
};

fn(1, 2, 3, 4, 5, 6, 7);

//
// Функция сложения произвольного количества элементов
//

const add2 = function (...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

// OLD SCHOOL
// const add2 = function () {
//   const args = Array.from(arguments);
//   //   console.log(arguments);
//   //   console.log(args);
//   let total = 0;

//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }

//   return total;
// };

console.log(add2(1, 2, 3));

console.log(add2(1, 2, 4, 5, 6));

//
// Функция прикрепления тега к строке
//

const posts = ['post-1', 'post-2', 'post-3', 'post-4'];
const tag = '#jqueryrules';

// OLD SCHOOL
// const postsWithTag = [];

// for (const post of posts) {
//   postsWithTag.push(`${post}${tag}`);
// }

// console.log(postsWithTag);

const addTag = function (tag, ...args) {
  const postsWithTag = [];

  for (const arg of args) {
    postsWithTag.push(`${arg}${tag}`);
  }

  return postsWithTag;
};

console.log(addTag('#jqueryrules', 'post-1', 'post-2'));
console.log(addTag('#react', 'post-1', 'post-2', 'post-3'));
console.log(addTag('#redux', 'post-1', 'post-2', 'post-3', 'post-4'));
