const btn_prev = document.querySelector('.prev');
const btn_next = document.querySelector('.next');

const images = document.querySelectorAll('#gallery .photos img');
let i = 0;

// btn_prev.onclick = function () {
//   images[i].className = '';
//   i--;

//   if (i < 0) {
//     i = images.length - 1;
//   }

//   images[i].className = 'shown';
// };

// btn_next.onclick = function () {
//   images[i].className = '';
//   i++;

//   if (i >= images.length) {
//     i = 0;
//   }

//   images[i].className = 'shown';
// };

// ---------------------------------------------------------------

btn_prev.addEventListener('click', handlePrevImg);
btn_next.addEventListener('click', handleNextImg);

function handlePrevImg() {
  images[i].classList.remove('shown');
  i--;

  if (i < 0) {
    i = images.length - 1;
  }

  images[i].classList.add('shown');
}

function handleNextImg() {
  images[i].classList.remove('shown');
  i++;

  if (i >= images.length) {
    i = 0;
  }

  images[i].classList.add('shown');
}

// ------------------------------------------------------------------
