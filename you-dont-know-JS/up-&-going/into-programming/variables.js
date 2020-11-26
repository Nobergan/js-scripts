/* let amount = 99.99;

amount = amount * 2;

console.log(amount);

// преобразует `amount` в строку и
// добавляет "$" в начало

amount = '$' + String(amount);
// или // amount = '$' + amount;
console.log(amount);
*/

const TAX_RATE = 0.08; // 8% налог с продаж

let amount = 99.99;

amount = amount * 2;

amount = amount + amount * TAX_RATE;

console.log(amount); // 215.9784
console.log(amount.toFixed(2)); // "215.98"
