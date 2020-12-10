// Метод массива join()
// Метод массивов join(delimeter) позволяет соединить элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimeter. То есть это операция обратная методу строк split(delimeter).

// const words = ['JavaScript', 'это', 'интересно'];
// console.log(words.join('')); // 'JavaScriptэтоинтересно'
// console.log(words.join(' ')); // 'JavaScript это интересно'
// console.log(words.join('*')); // 'JavaScript*это*интересно'
// Задание
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

// Тесты
// Объявлена функция makeStringFromArray(array, delimeter).
// Вызов makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' ') возвращает 'Манго спешит на поезд'.
// Вызов makeStringFromArray(['М', 'а', 'н', 'г', 'о'], '')) возвращает 'Манго'.
// Вызов makeStringFromArray(['лучшее', 'за', 'неделю'], '_') возвращает 'лучшее_за_неделю'.

function makeStringFromArray(array, delimeter) {
  let string;
  // Пиши код ниже этой строки

  string = array.join(delimeter);

  // Пиши код выше этой строки
  return string;
}

console.log(makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' '));
console.log(makeStringFromArray(['М', 'а', 'н', 'г', 'о'], ''));
console.log(makeStringFromArray(['лучшее', 'за', 'неделю'], '_'));
