// 1. Создайте массив с фруктами: апельсин, банан, груша.

// 2. Выведите на экран, сколько на данный момент у вас фруктов в массиве.

// 3. Добавьте в конец массива два фрукта - яблоко и ананас, а в начало массива - грейпфрут.

// 4. Выведите на экран, сколько на данный момент у вас фруктов в массиве.

// 5. Удалите из массива последний и первый элемент.

// 6. Выведите на экран, сколько на данный момент у вас фруктов в массиве.

const fruits = [' Апельсин', ' Банан', ' Груша'];
console.log(fruits);

const countFruits = fruits.length;
console.log('Число фруктов в моей корзине:', countFruits);
// console.log(fruits);

fruits.push(' Яблоко', ' Ананас');
fruits.unshift(' Грейпфрут');

console.log(fruits);
console.log('Число фруктов в моей корзине:', fruits.length);

fruits.pop();
fruits.shift();

console.log(fruits);
console.log('Число фруктов в моей корзине:', fruits.length);