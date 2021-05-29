//
// Литерал объекта, свойства, ключи (имя) и значения
//

const hotel = {
  name: 'Sunset resort',
  stars: 5,
  capacity: 200,
  location: 'Turkey',
};

//
// Доступ к свойству по obj.key и obj['key']
//

console.log(hotel);

console.log(hotel.stars);

const key = 'stars';
console.log(hotel[key]);

hotel.stars = 3;
hotel.guests = [];

console.log(hotel);

const country = 'location';
console.log(hotel[country]);

console.log(hotel);

//
// Ссылочный тип {} === {}
//

const a = { x: 1, y: 2 };

const b = a;

console.log(b === a);

//
// Массивы и функции = объекты
//

const arr = ['a', 'b', 'c'];

console.log(arr);

arr.hello = ':)';

console.log(arr);

const fn = function () {};

fn.hello = 'xD';

console.log(fn.hello);

//
// Методы объекта и this при обращении к свойствам в методах
//

const hotel2 = {
  name: 'Sunset resort',
  stars: 5,
  capacity: 200,
  location: 'Turkey',
  updateName(newName) {
    this.name = newName;

    this.someMethod();
  },

  someMethod() {
    console.log('Hello!');
  },
};

console.log(hotel2);

hotel2.updateName('Lagoon');
hotel2.someMethod();

console.log(hotel2);

//
// Перебор через for...in и Object.keys|values|entries
//

// Object.keys
const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const keys = Object.keys(feedback);

let totalFeedBack = 0;

for (const key of keys) {
  //   console.log(key);
  console.log(feedback[key]);

  totalFeedBack += feedback[key];
}

console.log('Total: ', totalFeedBack);

// Object.values
const feedback2 = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const values = Object.values(feedback2);

let totalFeedBack2 = 0;

for (const value of values) {
  console.log(value);

  totalFeedBack2 += value;
}

console.log('Total: ', totalFeedBack2);

//
// Ищем друга по имени
//

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

console.table(friends);

const findFriendByName = function (allFriends, name) {
  for (const friend of allFriends) {
    if (friend.name === name) {
      return 'Нашли друга :)';
    }
  }
  return 'Не нашли друга :(';
};

console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));

//
// Получаем имена всех друзей
//

const friends2 = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

console.table(friends2);

const getAllNames = function (allFriends) {
  const allFriendsName = [];

  for (const friend of allFriends) {
    allFriendsName.push(friend.name);
  }

  return allFriendsName;
};

console.log(getAllNames(friends));

//
// Получаем имена только друзей которые онлайн
//

const friends3 = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

console.table(friends3);

const getOnlineFriends = function (allFriends) {
  const allFriendsName = [];

  for (const friend of allFriends) {
    if (friend.online) {
      allFriendsName.push(friend.name);
    }
  }

  return allFriendsName;
};

console.log(getOnlineFriends(friends));

//
// * Работем с коллекцией товаров в корзине:
//  * - getItems()
//  * - add(product)
//  * - remove(productName)
//  * - clear()
//  * - countTotalPrice()
//  * - increaseQuantity(productName)
//  * - decreaseQuantity(productName)
//  *
//  * { name: '🍎', price: 50 }
//  * { name: '🍇', price: 70 }
//  * { name: '🍋', price: 60 }
//  * { name: '🍓', price: 110 }
//

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    console.log('Новый продукт, добавляем в корзину');

    for (const item of this.items) {
      if (item.name === product.name) {
        console.log('Такой продукт уже есть, увеличиваем quantity на 1');
        item.quantity += 1;
        return;
      }
    }

    this.items.push(product);
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];

      if (productName === item.name) {
        console.log('Нашли, удаляем');
        console.log('Индекс для удаления: ', i);

        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;

    for (const item of this.items) {
      total += item.price * item.quantity;
    }

    return total;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (productName === item.name) item.quantity += 1;
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (productName === item.name) {
        if (item.quantity - 1 === 0) {
          this.remove(productName);
          return;
        }
        item.quantity -= 1;
      }
    }
  },
};

console.log(cart.getItems());

// ADD
cart.add({ name: '🍎', price: 50, quantity: 1 });
cart.add({ name: '🍎', price: 50, quantity: 1 });
cart.add({ name: '🍎', price: 50, quantity: 1 });
cart.add({ name: '🍋', price: 60, quantity: 1 });
cart.add({ name: '🍋', price: 60, quantity: 1 });
cart.add({ name: '🍋', price: 60, quantity: 1 });
cart.add({ name: '🍋', price: 60, quantity: 1 });
console.table(cart.getItems());

// REMOVE
// cart.remove('🍋');
// console.table(cart.getItems());

// CLEAR
// cart.clear();
// console.table(cart.getItems());

// INCREASE_QUANTITY
// cart.increaseQuantity('🍎');
// cart.increaseQuantity('🍎');
// cart.increaseQuantity('🍎');
// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// DECREASE_QUANTITY
// cart.decreaseQuantity('🍎');
// cart.decreaseQuantity('🍎');
// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

export default cart;
