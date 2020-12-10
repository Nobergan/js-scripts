// Параметры и аргументы
// В круглых скобках после имени функции идут параметры - перечисление данных, которые функция ожидает при вызове.

// Параметры - это локальные переменные доступные только в теле функции. Они разделяются запятыми. Параметров может быть несколько или вообще их может не быть, тогда записываются просто пустые круглые скобки.

// При вызове функции, в круглых скобках можно передать аргументы - значения для объявленных параметров функции.

// // 1. Объявление параметров x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// // 2. Передача аргументов
// multiply(2, 3, 5); // Результат умножения равен 30
// multiply(4, 8, 12); // Результат умножения равен 384
// multiply(17, 6, 25); // Результат умножения равен 2550
// Порядок передачи аргументов должен соответствует порядку объявленых параметров: значение первого аргумента будет присвоено первому параметру, второго аргумента второму параметру и т. д.

// Задание
// Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.

// Дополни console.log() так, чтобы он логировал строку 'Результат сложения равен <результат>', где <результат> это сумма переданных чисел.

// Тесты
// Объявлена функция add(a, b, c)
// Вызов add(15, 27, 10) выводит в консоль 'Результат сложения равен 52'
// Вызов add(10, 20, 30) выводит в консоль 'Результат сложения равен 60'
// Вызов add(5, 10, 15) выводит в консоль 'Результат сложения равен 30'

// Пиши код ниже этой строки
function add(a, b, c) {
  console.log(`Результат сложения равен ${a + b + c}`);
  // Пиши код выше этой строки
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);
