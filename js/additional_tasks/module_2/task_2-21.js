// Поиск самого длинного слова
// Задание
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string).
// Вызов функции findLongestWord('The quick brown fox  jumped over the lazy dog') возвращает jumped.
// Вызов функции findLongestWord('Google do a roll') возвращает Google.
// Вызов функции findLongestWord('May the force be with you') возвращает force.
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.

function findLongestWord(string) {
  // Пиши код ниже этой строки
  let words = string.split(' ');
  let theBiggestLength = 0;
  let theBiggestWord = '';

  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > theBiggestLength) {
      theBiggestLength = words[i].length;
      theBiggestWord = words[i];
    }
  }

  return theBiggestWord;

  // Пиши код выше этой строки
}

console.log(findLongestWord('The quick brown fox  jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
console.log(findLongestWord(' '));
