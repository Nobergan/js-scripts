import products from './13_products.js';

const createProductCard = product => {
  const containerRef = document.createElement('div');
  containerRef.classList.add('product-card');
  //   console.log(containerRef);

  const productTitleRef = document.createElement('h2');
  productTitleRef.textContent = product.name;
  productTitleRef.classList.add('product-card__name');
  //   console.log(productTitleRef);

  const descrRef = document.createElement('p');
  descrRef.textContent = product.description;
  //   console.log(descrRef);

  const priceRef = document.createElement('p');
  priceRef.textContent = `Price ${product.price} credits`;
  //   console.log(priceRef);

  // containerRef.appendChild(productTitleRef);
  // containerRef.appendChild(descrRef);
  // containerRef.appendChild(priceRef);

  containerRef.append(productTitleRef, descrRef, priceRef);

  return containerRef;
};

const productCards = products.map(product => createProductCard(product));

console.log(productCards);

const cardRootRef = document.querySelector('#root');

cardRootRef.append(...productCards);
