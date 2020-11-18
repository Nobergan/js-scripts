// Есть массив, про который заранее известно, что в нем точно больше одного элемента. Но неизвестно сколько именно!!!

// Пусть им будет такой массив с фруктами: var fruits = ["яблоко", "апельсин", "груша", "гранат"].

// Не забывайте, что по условию неизвестно, сколько точно в нем элементов, их может быть и 100 и 200.

// Задача состоит в том, чтобы с помощью метода splice заменить в массиве предпоследний фрукт на "ананас" и вывести весь массив на экран.

// Когда это будет сделано, следует проверить получившийся код на таком массиве: var fruits = ["банан", "мандарин", "манго"], в котором мандарин должен быть заменен на ананас.

const fruits = ['яблоко', 'апельсин', 'груша', 'гранат'];
// console.log(fruits);

fruits.splice(-2, 1, 'ананас');
console.log(fruits);

const fruits2 = ['банан', 'мандарин', 'манго'];
// console.log(fruits2);

fruits2.splice(-2, 1, 'ананас');
console.log(fruits2);