// const add = function (a, b) {
//   return a + b;
// };

/*
 * Синтаксис стрелочной функции
 * - с параметрами
 * - с одним параметром
 * - без параметров
 */

const add = (a, b) => {
  return a + b;
};

console.log(add(3, 6));

const logMessage = message => {
  console.log(message);
};

logMessage('Hello!');

const greet = () => {
  console.log('Hi!');
};

greet();

/*
 * Явный и неявный возврат
 */

const addTwo = (a, b) => a + b;

console.log(addTwo(5, 6));

/*
 * Псевдомассив arguments
 */

const addThree = (...args) => {
  return args;
};

console.log(addThree(1, 2, 2, 3, 6, 4));

/*
 * Контекст стрелки
 *
 * Контекст внутри стрелки определяется местом ее объявления, а не вызова,
 * и ссылается на контекст родительской функции.
 */

const showThis = () => {
  console.log('this in showThis: ', this);
};

showThis(); // this in showThis: window

const user = { name: 'Mango' };
user.showContext = showThis;

user.showContext(); // this in showThis: window

const userTwo = {
  fullName: 'Mango',
  showName() {
    console.log('this: ', this);
    console.log('this.fullName: ', this.fullName);

    const inner = () => {
      console.log('this in inner: ', this);
    };

    inner();
  },
};

userTwo.showName();

/*
 * 💩 Стрелки как методы объекта НЕ РАБОТАЮТ
 */

const userThree = {
  fullName: 'Mango',
  showName: () => {
    console.log('this: ', this);
    console.log('this.fullName: ', this.fullName);
  },
};

// userThree.showName();

/*
 *  💩 Стрелка-конструктор НЕ РАБОТАЮТ
 */

const User = name => {
  this.name = name;
};

// console.log(new User('Mango'));

/*
 * еще разок стрелка как метод обьекта
 */

const objA = {
  x: 5,
  showX() {
    console.log('this в objA.showX: ', this);
    console.log(this.x);

    const objB = {
      y: 10,
      // 💩
      showThis: () => {
        console.log('this в objB.showThis: ', this);
      },
    };

    objB.showThis();
  },
};

objA.showX();
