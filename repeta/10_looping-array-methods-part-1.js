/*
 * Array.prototype.forEach()
 * Поэлементо перебирает оригинальный массив
 * Ничего не возвращает
 * Заменяет классический for, если не нужно прерывать цикл
 */

const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (element, index, array) {
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });

numbers.forEach((element, index, array) => {
  console.log(element);
  console.log(index);
  console.log(array);
});

/*
 * Array.prototype.map()
 * Поэлементо перебирает оригинальный массив
 * Возвращает новый массив такой же длины
 */

const numbersTwo = [5, 10, 15, 20, 25];

const mappedNumbers = numbersTwo.map(number => number * 2);

console.log(numbersTwo);
console.log(mappedNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// Получаем массив имен всех игроков
const playersName = players.map(player => player.name);

console.log(playersName);

// Увеличиваем кол-во поинтов каждого игрока
const updatedPlayers = players.map(player => {
  return { ...player, points: player.points + player.points * 0.1 };
});

console.table(players);
console.table(updatedPlayers);

// Увеличиваем кол-во часов игрока по id
const playerIdToUpdate = 'player-4';

const updatedIdPlayers = players.map(player => {
  if (player.id === playerIdToUpdate) {
    return { ...player, timePlayed: player.timePlayed + 50 };
  }
  return player;
});

console.table(players);
console.table(updatedIdPlayers);

/*
 * Array.prototype.filter()
 * Поэлементо перебирает оригинальный массив
 * Возвращает новый массив
 * Добавляет в возвращаемый массив элементы которые удовлетворяют условию
 */

const numbersThree = [5, 10, 15, 20, 25];

const filteredNumbrs = numbersThree.filter(number => number > 15);

console.log(filteredNumbrs);

const playersTwo = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

// Получаем массив всех онлайн игроков
const onlinePlayers = playersTwo.filter(player => player.online);

console.table(onlinePlayers);

// Получаем массив всех оффлайн игроков
const offlinePlayers = playersTwo.filter(player => !player.online);

console.table(offlinePlayers);

// Получаем список хардкорных игроков с временем больше 250 кол-во поинтов каждого игрока
const hardcorePlayers = playersTwo.filter(player => player.timePlayed > 250);

console.table(hardcorePlayers);

/*
 * Array.prototype.find()
 * Поэлементо перебирает оригинальный массив
 * Возвращает первый элемент удовлетворяющий условию или undefined
 */

const numbersFour = [5, 10, 15, 20, 25];

const numToFind = numbersFour.find(number => number === 15);

console.log(numToFind);

const playersThree = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

// Ищем игрока по id
const playerIdToFind = 'player-4';

const player = playersThree.find(player => player.id === playerIdToFind);

console.log(player);

/*
 * Array.prototype.every()
 * Поэлементо перебирает оригинальный массив
 * Возвращает true если все элементы массива удовлетворяют условию
 */

const playersFour = [
  {
    id: 'player-1',
    name: 'Mango',
    timePlayed: 310,
    points: 54,
    online: false,
  },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  {
    id: 'player-5',
    name: 'Chelsy',
    timePlayed: 280,
    points: 48,
    online: true,
  },
];

const isAllOnline = playersFour.every(player => player.online);

console.log('isAllOnline: ', isAllOnline);

const avaragedInPlayTime = playersFour.every(player => player.timePlayed > 100);

console.log('avaragedInPlayTime: ', avaragedInPlayTime);

/*
 * Array.prototype.some()
 * Поэлементо перебирает оригинальный массив
 * Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */

const playersFive = [
  {
    id: 'player-1',
    name: 'Mango',
    timePlayed: 310,
    points: 54,
    online: false,
  },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  {
    id: 'player-5',
    name: 'Chelsy',
    timePlayed: 280,
    points: 48,
    online: true,
  },
];

const isAnyOnline = playersFive.some(player => player.online);

console.log('isAnyOnline: ', isAnyOnline);

const anyHardcorePlayers = playersFive.some(player => player.timePlayed > 500);

console.log('anyHardcorePlayers: ', anyHardcorePlayers);

/*
 * map своими руками
 */

const numbersFive = [5, 10, 15, 20, 25];

// - создает и возвращает новый массив
// - перебирает оригинальный массив
// - вызывает колбек для каждого элемента и кидает туда аргументы
// - записывает результат вызова функции в новый массив

const map = function (array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    const result = callback(array[i], i, array);
    newArray.push(result);
  }

  return newArray;
};

const doubledNumbers = map(numbers, function (number, index, array) {
  console.log(number);
  console.log(index);
  console.log(array);

  return number * 2;
});

console.log(doubledNumbers);

/*
 * Пишем руками на Array.prototype.map
 */

Array.prototype.map = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i += 1) {
    const result = callback(this[i], i, this);
    newArray.push(result);
  }

  return newArray;
};

const numbersSix = [5, 10, 15, 20, 25];

const doubled = numbersSix.map(function (number) {
  return number * 2;
});

console.log(doubled);

/*
 * filter своими руками
 */

// - создает новый массив и возаращает
// - колбек для каждого элемента
// - Если колбек вернул true пишет элемент в новый массив

const filter = function (array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    const passed = callback(array[i], i, array);

    if (passed) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

const numbersSeven = [5, 10, 15, 20, 25];

const filteredNumbers = filter(numbersSeven, function (number, index, array) {
  return number > 15;
});

console.log(filteredNumbers);
