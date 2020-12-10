// Математические операторы 2.0
// Задание
// Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.
// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.

// Тесты
// Объявлена функция calculateTotalPrice (orderedQuantity, pricePerItem).
// Вызов calculateTotalPrice(5, 100) возвращает 500.
// Вызов calculateTotalPrice(8, 60) возвращает 480.
// Вызов calculateTotalPrice('3, 400) возвращает 1200.
// Вызов calculateTotalPrice(1, 3500) возвращает 3500.
// Вызов calculateTotalPrice(12, 70) возвращает 840.

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  // Пиши код ниже этой строки
  const totalPrice = orderedQuantity * pricePerItem;

  // Пиши код выше этой строки
  return totalPrice;
}

console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
console.log(calculateTotalPrice(1, 3500));
console.log(calculateTotalPrice(12, 70));
