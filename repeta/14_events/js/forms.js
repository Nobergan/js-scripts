/*
 * Событие submit
 * Действия браузера по умолчанию
 * Свойство elements
 * Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const formRef = document.querySelector('.js-register-form');
 
formRef.addEventListener('submit', event => {
    event.preventDefault();
    
    const formRefTarget = event.target;
    // console.dir(formRefTarget);

    const formData = new FormData(formRefTarget);
    // console.dir(formData);

    const submittedData = {};

    formData.forEach((value, key) => {
        console.log('value; ', value);
        console.log('key; ', key);

        submittedData[key] = value;
    });

    console.log(submittedData);
    console.log(formRefTarget.elements);
});