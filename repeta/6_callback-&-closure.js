//
//  Функция обратного вызова (callback) и функция высшего порядка (hof)
//

const greet = function (name) {
  console.log(`Hello ${name}`);
};

const greetWithName = function (cb) {
  const name = 'Mango';

  //   console.log(cb);

  cb(name);
};

greetWithName(greet);

//
// Отложенный вызов: регистрация событий
//

const btnRef = document.querySelector('button');

const handleBtnClick = function () {
  console.log('Click');
};

btnRef.addEventListener('click', handleBtnClick);

//
// Отложенный вызов: интервалы
//

console.log('В коде перед таймаутом');

setTimeout(function () {
  console.log('Через 3 секунды внутри колбека в таймауте');
}, 3000);

console.log('В коде после таймаута');

//
// Отложенный вызов: http-запрос
//

const handleFetchSuccess = function (data) {
  console.log(data);
};

console.log('перед fetch');

fetch('http://swapi.dev/api/films/')
  .then(res => res.json())
  .then(handleFetchSuccess);

console.log('после fetch');

//
// Замыкания
//

const makeSheff = function (name) {
  return function (dish) {
    console.log(`${name} готовит ${dish}`);
  };
};

const mango = makeSheff('Mango');
const poly = makeSheff('Poly');

mango('рыбу');
poly('фрикадельки');
