/*
 * События input и change
 * Чекбоксы и свойство checked
 */

const btnRef = document.querySelector('.js-button');
const inputRef = document.querySelector('.js-input');
const licenseRef = document.querySelector('.js-license');
const nameLabelRef = document.querySelector('.js-button > span');

inputRef.addEventListener('focus', handleInputFocus);
inputRef.addEventListener('blur', handleInputBlur);
inputRef.addEventListener('input', handleInputChange);
licenseRef.addEventListener('change', handleLicenseChange);

function handleInputFocus () {
    console.log('TAKE FOCUS!!!');
}

function handleInputBlur() {
  console.log('LOSE FOCUS!!!');
}

function handleInputChange(event) {
  nameLabelRef.textContent = event.target.value;
}

function handleLicenseChange(event) {
    btnRef.disabled = !event.target.checked;
//   console.log(btnRef.disabled);
}