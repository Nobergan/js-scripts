//
// Собственные свойства и for...in
// Метод hasOwnProperty()
//

const objA = {
  q: 5,
  z: 6,
};

const objB = Object.create(objA);

objB.x = 1;
objB.y = 2;

// Как не нужно
for (const key in objB) {
  if (objB.hasOwnProperty(key)) {
    console.log(key);
  }
}

// Как нужно
const toDo = Object.keys(objB);

for (const key of toDo) {
  console.log(key);
}

//
// Повторяем функции-конструкторы. Пишем класс Hero
// Статические свойства и методы
//

const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

// Статические свойства конструктора
Hero.description = 'This is a Hero base class';

Hero.showStats = function (hero) {
  console.log('Logging stats from Hero.showStats: ', hero);
};

console.dir(Hero);
//

Hero.prototype.changeName = function (name) {
  this.name = name;
};

const mango = new Hero('Mango', 1000);
mango.changeName('Poly');

console.log(mango);

//
// Смотрим на классы. Переписываем Hero с новым синтаксисом
//

class HeroTwo {
  static description = 'This is a Hero base class';

  static showStats(hero) {
    console.log('Logging stats from Hero.showStats: ', hero);
  }

  constructor(name, xp) {
    this._name = name;
    this.xp = xp;
  }

  //   changeName(name) {
  //     this.name = name;
  //   }

  //   gainXp(amount) {
  //     console.log(`${this.name} получил ${amount} опыта`);
  //     this.xp += amount;
  //   }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

console.dir(HeroTwo);

const mangoTwo = new HeroTwo('Mango', 1000);
console.log(mangoTwo);

// mangoTwo.gainXp(3000);
// console.log(mangoTwo);

console.log(mangoTwo.name);

mangoTwo.name = 'Poly';

console.log(mangoTwo.name);

//
// Делаем систему классов с наследованием
//

class HeroThree {
  static description = 'This is a Hero base class';

  static showStats(hero) {
    console.log('Logging stats from Hero.showStats: ', hero);
  }

  constructor(name, xp) {
    this._name = name;
    this.xp = xp;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  gainXp(amount) {
    console.log(`${this.name} получил ${amount} опыта`);
    this.xp += amount;
  }
}

class Warrior extends HeroThree {
  constructor(name, xp, weapon) {
    super(name, xp);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}

const mangoThree = new Warrior('Mango', 1000, 'Алибарда');
console.log(mangoThree);
mangoThree.attack();
mangoThree.gainXp(2000);
console.log(mangoThree);

class Paladin extends Warrior {
  constructor(name, xp, weapon, spell) {
    super(name, xp, weapon);

    this.spell = spell;
  }

  cast() {
    console.log(`${this.name} кастует ${this.spell}`);
  }
}

const artur = new Paladin('Artur', 2000, 'Меч', 'Cleanse');
console.log(artur);
artur.attack();
artur.gainXp(3000);
console.log(artur.name);
artur.cast();
console.log(artur);
