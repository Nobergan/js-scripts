// Метод строк split()
// Метод split(delimeter) позволяет превратить строку в массив, «разбив» его по разделителю delimeter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.

// const name = 'Манго';
// console.log(name.split('')); // ['M', 'a', 'н', 'г', 'о']

// const message = 'JavaScript это интересно';
// console.log(message.split(' ')); // ['JavaScript', 'это', 'интересно']
// Задание
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// Тесты
// Объявлена функция splitMessage(message, delimeter).
// Вызов splitMessage('Манго спешит на поезд', ' ') возвращает ['Манго', 'спешит', 'на', 'поезд'].
// Вызов splitMessage('Манго', '') возвращает ['М', 'а', 'н', 'г', 'о'].
// Вызов splitMessage('лучшее_за_неделю', '_') возвращает ['лучшее', 'за', 'неделю'].

function splitMessage(message, delimeter) {
  let words;
  // Пиши код ниже этой строки

  words = message.split(delimeter);

  // Пиши код выше этой строки
  return words;
}

console.log(splitMessage('Манго спешит на поезд', ' '));
console.log(splitMessage('Манго', ''));
console.log(splitMessage('лучшее_за_неделю', '_'));
