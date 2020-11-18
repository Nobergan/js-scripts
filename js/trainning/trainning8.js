// Дан массив mas. Выведите его на страницу HTML в формате индекс элемента — значение (через три дефиса). Каждый элемент с новой строки.
// {
// 	mas = [15, 'hello', 'trump', 23, 'world', 999, 176];
// }

const mas = [15, 'hello', 'trump', 23, 'world', 999, 176];

let result = '';

for (let i = 0; i < mas.length; i += 1) {
  result += `${i} --- ${mas[i]}\n`;
}

console.log(result);
