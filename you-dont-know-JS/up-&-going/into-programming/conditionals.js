/*
const bank_balance = 302.13;
const amount = 99.99;

if (amount < bank_balance) {
  console.log('Я хочу купить этот телефон');
}
*/

let ACCESSORY_PRICE = 9.99;

let bank_balance = 302.13;
let amount = 99.99;

amount = amount * 2;

// может ли мы позволить себе дополнительную покупку?
if (amount < bank_balance) {
  console.log('Я возьму этот аксессуар!');
  amount = amount + ACCESSORY_PRICE;
  //   console.log(amount);
}
// иначе:
else {
  console.log('Нет, спасибо.');
}
