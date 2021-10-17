/*
 * mouseenter и mouseleave
 * mouseover и mouseout
 * mousemove (chatty event - болтливое событие)
 * Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 */

const boxRef = document.querySelector('.js-box');

 
boxRef.addEventListener('mouseenter', handleHoverBox);
boxRef.addEventListener('mouseleave', handleHoverLeaveBox);

function handleHoverBox(event) {
    const box = event.target;
    box.classList.add('box--active');
}

function handleHoverLeaveBox(event) {
  const box = event.target;
  box.classList.remove('box--active');
}