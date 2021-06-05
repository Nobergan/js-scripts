//
// http://fecore.net.ua/books/m5ph3r-javascript/module-05/prototypes.html
//
// Прототип объекта
// Object.create()
// [[Prototype]] и __proto__
// Цепочка прототипов
//

// const objA = {
//   x: 1,
//   y: 2,
// };

const objB = {
  z: 10,
};

const objA = Object.create(objB);

objA.x = 1;
objA.y = 2;

console.log(objA);

//
//Правило поиска свойства в цепочке прототипов
//

console.log(objA.qwe);

//
// http://fecore.net.ua/books/m5ph3r-javascript/module-05/oop.html
//
// Основы ООП: класс, объект, интерфейс
//

//
// http://fecore.net.ua/books/m5ph3r-javascript/module-05/constructors.html
//
// Функции-конструкторы
// Свойство Function.prototype
//

const Manager = function (name, sales) {
  this.name = name;
  this.sales = sales;
};

Manager.prototype.sell = function () {
  this.sales += 1;
};

Manager.prototype.changeName = function (newName) {
  this.name = newName;
};

const mango = new Manager('Mango', 5);
console.log(mango);
mango.sell();
console.log(mango);
mango.changeName('Kongo');
console.log(mango);

const poly = new Manager('Poly', 23);
console.log(poly);
poly.sell();
console.log(poly);
poly.changeName('Lora');
console.log(poly);

console.log(mango.hasOwnProperty('x'));
console.log(poly.hasOwnProperty('sales'));
