// Требуется создать два массива.

// 1-й - это массив из пяти материков.

// 2-й массив - содержит информацию о протяжённости материков с Запада на Восток (этот массив состоит исключительно из цифр).

// Затем с помощью метода write() объекта document нужно вывести на экран пять строк, где каждая строка - это название материка и его протяжённость в километрах.

const mainLand = [
  'SouthAmerica - ',
  'NorthAmerica - ',
  'EurAsia - ',
  'Africa - ',
  'Australia - ',
];
// console.log(mainLand);

const lengthContinent = [
  5180 + ' км.',
  4700 + ' км.',
  17776 + ' км.',
  7700 + ' км.',
  4000 + ' км.',
];
// console.log(lengthContinent);

for (let i = 0; i < mainLand.length; i += 1) {
  let matericLength;
  for (let j = 0; j < lengthContinent.length; j += 1) {
    matericLength = `${mainLand[i]}${lengthContinent[i]}`;
  }
  console.log(matericLength);
}
