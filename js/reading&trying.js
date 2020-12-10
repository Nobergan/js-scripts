// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// const names = users.map(user => user.name);
// console.log(names);

// const numbers = [1, 2, 3];
// const doubleNumbers = numbers.map(num => num * 2);
// console.log(doubleNumbers);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.filter(num => num > 5)); // [6, 7, 8, 9]

// console.log(numbers.filter(num => num < 5)); // [0, 1, 2, 3, 4]

// console.log(numbers.filter(num => num === 5)); // [5]
// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];

// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.find(num => num > 5)); // 6

// console.log(numbers.find(num => num < 5)); // 0

// console.log(numbers.find(num => num === 5)); // 5

// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// const user = users.find(user => user.id === '003');
// console.log(user);

// const getUserById = (arr, id) => arr.find(user => user.id === id);
// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));

// const isBigEnough = val => val >= 10;

// console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
// console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// const allAvailable = fruits.every(fruit => fruit.amount > 0);
// console.log(allAvailable);

// const allAvailable = fruits.some(fruit => fruit.amount > 0);
// console.log(allAvailable);

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes);

// const countLikes = tweets =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(countLikes(tweets));

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);
//   return allTags;
// }, []);
// console.log(tags);

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);

const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);

const users = [
  { name: 'Mango', daysActive: 15 },
  { name: 'Poly', daysActive: 4 },
  { name: 'Ajax', daysActive: 27 },
  { name: 'Chelsey', daysActive: 2 },
];

const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

console.log(users.sort(sortByActiveDays));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const even = numbers.filter(x => x % 2 === 0);

// const doubled = even.map(x => x * 2);

// const reversed = doubled.reverse();

// console.log(reversed);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

/*
 * Фильтруем четные числа. Далее, на результате метода filter,
 * вызываем map и множим на 2. После чего на результате
 * метода map вызываем reverse.
 */

const result = numbers
  .filter(x => x % 2 === 0)
  .map(y => y * 2)
  .reverse();

console.log(result);
