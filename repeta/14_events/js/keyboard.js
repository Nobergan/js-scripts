/*
 * Типы событий: keypress, keydown, keyup
 * Ограничения keypress
 * Свойства обьекта события клавиатуры
 */

const outputRef = document.querySelector('.js-output');
const clearBtnRef = document.querySelector('.js-clear');

window.addEventListener('keypress', handleKeypress);
clearBtnRef.addEventListener('click', handleClearOutput);

function handleKeypress (event) {
    console.log('key: ', event.key);
    console.log('code: ', event.code);

    outputRef.textContent += event.key;
}

function handleClearOutput() {
  outputRef.textContent = '';
}