// function printAmount() {
//   console.log(amount.toFixed(2));
// }

// var amount = 99.99;

// printAmount(); // "99.99"

// amount = amount * 2;

// printAmount(); // "199.98"

// --------------------------------------------

// function printAmount(amt) {
//   console.log(amt.toFixed(2));
// }

// function formatAmount() {
//   return '$' + amount.toFixed(2);
// }

// var amount = 99.99;

// printAmount(amount * 2); // "199.98"

// amount = formatAmount();
// console.log(amount); // "$99.99"

// ----------------------------------------------

// const TAX_RATE = 0.08;

// function calculateFinalPurchaseAmount(amt) {
//   // вычисляем новую сумму с налогом
//   amt = amt + amt * TAX_RATE;

//   // возвращаем новую сумму
//   return amt;
// }

// let amount = 99.99;

// amount = calculateFinalPurchaseAmount(amount);

// console.log(amount.toFixed(2)); // "107.99"

function outer() {
  var a = 1;

  function inner() {
    var b = 2;

    // здесь у нас есть доступ и к `a`, и к `b`
    console.log(a + b); // 3
  }

  inner();

  // здесь у нас есть доступ только к  `a`
  console.log(a); // 1
}

outer();
