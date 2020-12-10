// Заказ продукта 2.0
// Задание
// Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество дроидов в заказе
// pricePerDroid - цена одного дроида
// deliveryFee - стоимость доставки
// Дополни код функции так, чтобы она возвращала сообщение о заказе в формате Вы заказали дроидов на сумму <сумма заказа> кредитов. Доставка (<цена доставки> кредитов) включена в сумму заказа.. Не забудь о цене доставки при вычислениях общей стоимости.

// Тесты
// Объявлена функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee).
// Вызов makeOrderMessage(2, 100, 50) возвращает 'Вы заказали дроидов на сумму 250 кредитов. Доставка (50 кредитов) включена в сумму заказа.'.
// Вызов makeOrderMessage(4, 300, 100) возвращает 'Вы заказали дроидов на сумму 1300 кредитов. Доставка (100 кредитов) включена в сумму заказа.'.
// Вызов makeOrderMessage(10, 70, 200) возвращает 'Вы заказали дроидов на сумму 900 кредитов. Доставка (200 кредитов) включена в сумму заказа.'.

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Пиши код нижей этой строки

  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

  // Пиши код выше этой строки
  return message;
}

console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200));
