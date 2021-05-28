const items = document.querySelectorAll('.items .item');

for (let i = 0; i < items.length; i++) {
  items[i].onclick = function () {
    fade(this, 1000, function () {
      this.style.display = 'none';
    });
  };
}

function fade(elem, t, f) {
  let fps = 50;
  let time = t || 500;
  let steps = time / fps;
  let op = 1;
  let d0 = op / steps;

  let callback = f || function () {};

  let timer = setInterval(function () {
    op -= d0;
    elem.style.opacity = op;
    steps--;

    if (steps === 0) {
      clearInterval(timer);
      callback.call(elem);
    }
  }, 1000 / fps);
}
