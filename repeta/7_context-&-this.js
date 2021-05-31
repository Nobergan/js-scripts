//
// Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
//

console.log('[] === []: ', [] === []);
console.log('{} === {}: ', {} === {});
console.log(
  'function() {} === function() {}: ',
  function () {} === function () {},
);

const fnA = function () {
  console.log('hello');
};
const fnB = fnA;

console.log('fnB === fnA: ', fnB === fnA);

//
// Контекст (this)
// - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
//  - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
//

//
// Как метод объекта. В контексте объекта.
//

const user = {
  tag: 'Mango',
  showTag() {
    console.log('this: ', this);
    console.log('this.tag: ', this.tag);
  },
};

user.showTag();

//
// Вызов без контекста
//

const foo = function () {
  console.log('this: ', this);
};

foo();

//
// Как метод объекта, но объявлена как внешняя функция. В контексте объекта.
//

const showTag = function () {
  console.log('this: ', this);
  console.log('this.tag: ', this.tag);
};

// showTag();

const user2 = {
  tag: 'Mango',
};

user2.a = showTag;

console.log(user2);
user2.a();

//
// Вызов без контекста, но объявлена как метод объекта.
//

const userThree = {
  tag: 'Mango',
  showTag() {
    console.log('this: ', this);
    console.log('this.tag: ', this.tag);
  },
};

userThree.showTag();

const outerShowTag = userThree.showTag;

console.log(outerShowTag);
// outerShowTag();

//
// Контекст в callback-функциях
//

const userFour = {
  tag: 'Mango',
  showTag() {
    console.log('this: ', this);
    console.log('this.tag: ', this.tag);
  },
};

const invokeAction = function (action) {
  console.log(action);

  //   action();
};

invokeAction(userFour.showTag);

//
// :))))))
//

const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log('this: ', this);
    this.color = color;
  };

  changeColor();

  const sweater = {
    color: 'teal',
  };

  sweater.changeColor = changeColor;

  sweater.changeColor();

  return sweater.changeColor;
};

// const changeColor = makeChangeColor();

// changeColor('blue');

//
// :))))))
//

const makeChangeColorTwo = function () {
  const changeColor = function (color) {
    console.log(this);
    this.color = color;
  };

  return changeColor;
};

const hat = {
  color: 'blue',
  changeColor: makeChangeColorTwo(),
};

hat.changeColor('orange');

//
// Call / Apply / Bind
//

const showTagCAB = function (arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
  console.log('this: ', this);
  console.log('this.tag: ', this.tag);
};

const mango = {
  tag: 'Mango',
};

const poly = {
  tag: 'Poly',
};

// showTagCAB.call(mango, 45, 78, 6);
// showTagCAB.call(poly, 52, 102, 7);

// showTagCAB.apply(mango, [45, 78, 6]);
// showTagCAB.apply(poly, [52, 102, 7]);

const showMangoTag = showTagCAB.bind(mango);
const showPolyTag = showTagCAB.bind(poly);

showMangoTag(1, 45, 753);
showPolyTag(43, 123, 8765);

//
// EXAMPLE (BIND)
//

const cart = {
  items: ['Телефон', 'Наушники'],
  showItems() {
    console.log('this: ', this);
    console.log('this.items: ', this.items);
  },
};

const btnRef = document.querySelector('.js-show-items');

btnRef.addEventListener('click', handleBtn);

function handleBtn() {
  const showCart = cart.showItems.bind(cart);
  return showCart();
}

// document
//   .querySelector('.js-show-items')
//   .addEventListener('click', cart.showItems.bind(cart));
