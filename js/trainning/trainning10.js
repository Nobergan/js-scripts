// Написать цикл для вывода квадратов всех чисел от 1 до 7.

// В итоге должен получиться такой результат:

// Квадрат 1 = 1
// Квадрат 2 = 4
// Квадрат 3 = 9
// Квадрат 4 = 16
// Квадрат 5 = 25
// Квадрат 6 = 36
// Квадрат 7 = 49

// Сначала нужно установить счетчик i = 1;

// Число 8 будет ограничением для счетчика i < 8;

// Действие будет заключаться в том, что сначала нужно вывести текущее значение переменной i, затем квадрат этого значения i*i (умножение значение счетчика на себя же)

// Далее следует увеличить значение счетчика на единицу i++

for (let i = 1; i < 8; i += 1) {
  console.log(`Квадрат + ${i} = ${i * i} \n`);
}
