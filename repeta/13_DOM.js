const titleRef = document.querySelector('.page-title');
console.dir(titleRef);

titleRef.textContent = 'Hello friend!!!';

const linkRef = document.querySelector('.nav__link--active');
console.dir(linkRef);

const linksRef = document.querySelectorAll('.nav__link');
console.dir(linksRef);

const imgRef = document.querySelectorAll('.hero-image');
console.dir(imgRef);
imgRef.alt = 'it is my photo';

const activeLinkRef = document.querySelector('.nav__link--active');
activeLinkRef.href = '/blog';
activeLinkRef.style.color = 'red';
console.dir(activeLinkRef);

// ATRIBUTES

console.log(imgRef[0].getAttribute('src'));
console.log(imgRef[0].getAttribute('alt'));

imgRef[0].setAttribute('alt', '!!!!!!!!!!!!');

// CLASSLIST

console.log(activeLinkRef.classList.contains('nav__link--active'));
// console.log(activeLinkRef.classList.add('nav__link--primary'));
// console.log(activeLinkRef.classList.remove('nav__link--prim'));

// CREATEELEMENT

const title = document.createElement('h1');
title.textContent = 'Create <h1>';
title.classList.add('site-title');
title.id = 'title';

// const products = [
//   {
//     name: 'Сервоприводы',
//     description:
//       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//     price: 2000,
//     available: true,
//   },
//   {
//     name: 'Генератор поля',
//     description:
//       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//     price: 3000,
//     available: false,
//   },
//   {
//     name: 'Нулевой элемент',
//     description:
//       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//     price: 1500,
//     available: true,
//   },
//   {
//     name: 'Титаниум',
//     description:
//       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//     price: 2500,
//     available: true,
//   },
// ];
