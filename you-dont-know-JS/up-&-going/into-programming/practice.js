// Напишите программу для вычисления общей стоимости покупки телефона. Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете. Вы также будете покупать аксессуары для каждого из телефонов до тех пор, пока сумма покупки не превысит ваш мысленный предел трат.
// После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран вычисленную сумму покупки, правильно отформатировав её.
// Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.
// Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара» и «предела трат», также как и переменную для вашего «баланса банковского счета».
// Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты и округлением до двух знаков после запятой.
// Бонусная задача: Попробуйте включить ввод данных в вашу программу, например с помощью функции prompt(..), рассмотренной ранее в разделе «Ввод». Вы можете, например, запросить у пользователя баланс банковского счета. Развлекайтесь и будьте изобретательны!

const TAX_RATE = 0.09;
const PHONE_PRICE = 90.99;
const ACCESSORY_PRICE = 7.99;
const SPENDING_THRESHOLD = 300;

let bankBalance = 385.45;
let amount = 0;

function calculateTax(amount) {
  return amount * TAX_RATE;
}

function formatAmount(amount) {
  return '$' + amount.toFixed(2);
}

while (amount < bankBalance) {
  // покупаем новый телефон!
  amount = amount + PHONE_PRICE;

  // можем ли мы позволить себе аксессуар?
  if (amount < SPENDING_THRESHOLD) {
    amount = amount + ACCESSORY_PRICE;
  }
}

// не забудьте заплатить налог
amount = amount + calculateTax(amount);

console.log('Ваша покупка: ' + formatAmount(amount));
// Ваша покупка: $334.76

// можете ли вы в самом деле позволить себе эту покупку?
if (amount > bankBalance) {
  console.log('Вы не можете позволить себе эту покупку. :(');
}
// Вы не можете позволить себе эту покупку. :(

function foo() {
  var a = 1;

  if (a >= 1) {
    let b = 2;

    while (b < 5) {
      let c = b * 2;
      b++;

      console.log(a + c);
    }
  }
}
