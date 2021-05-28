// Проверка синтаксиса
// важность: 2
// Каким будет результат выполнения этого кода?

// let user = {
//   name: "Джон",
//   go: function() { alert(this.name) }
// }

// (user.go)()
// P.S. Здесь есть подвох :)

let user = {
  name: 'Джон',
  go: function () {
    console.log(this.name);
  },
};

// console.log(user.go()); // Джон
user.go();

// Объясните значение "this"
// важность: 3
// В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.

// Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

// let obj, method;

// obj = {
//   go: function() { alert(this); }
// };

// obj.go();               // (1) [object Object]

// (obj.go)();             // (2) [object Object]

// (method = obj.go)();    // (3) undefined

// (obj.go || obj.stop)(); // (4) undefined

let obj, method;

obj = {
  go: function () {
    console.log(this);
  },
};

obj.go(); // (1) [object Object]

obj.go(); // (2) [object Object]

(method = obj.go)(); // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

// Использование "this" в литерале объекта
// важность: 5
// Здесь функция makeUser возвращает объект.

// Каким будет результат при обращении к свойству объекта ref? Почему?

// function makeUser() {
//   return {
//     name: "Джон",
//     ref: this
//   };
// };

// let user = makeUser();

// alert( user.ref.name ); // Каким будет результат?

function makeUser() {
  return {
    name: 'Джон',
    ref() {
      return this;
    },
  };
}

let user2 = makeUser();

console.log(user2.ref().name); // Джон

// Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// Цепь вызовов
// важность: 2
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep(); // 1
// Такой подход широко используется в библиотеках JavaScript.

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().up().down().showStep(); // 1
