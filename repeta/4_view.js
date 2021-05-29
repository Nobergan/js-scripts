import cart from '../repeta/4_objects-part-1.js';

const showCartBtnRef = document.querySelector('.js-show-cart');
const addItemToCartRef = document.querySelector('[data-product="🍎"]');

showCartBtnRef.addEventListener('click', showCart);
addItemToCartRef.addEventListener('click', addItemToCart());

function showCart() {
  console.table(cart.getItems());
}

function addItemToCart() {
  return cart.add.bind(cart, { name: '🍎', price: 50 });
}

// document.querySelector('.js-show-cart').addEventListener('click', () => {
//   console.table(cart.getItems());
// });

// document
//   .querySelector('button[data-product="🍎"]')
//   .addEventListener('click', cart.add.bind(cart, { name: '🍎', price: 50 }));
