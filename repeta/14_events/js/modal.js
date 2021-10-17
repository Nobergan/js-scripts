/*
 * Открыть и закрыть по кнопке
 * Закрыть по клику в бекдроп
 * Закрыть по ESC
 */

const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector('button[data-action="close-modal"]');
const backdropref = document.querySelector('.js-backdrop');
  
openModalBtn.addEventListener('click', handleOpenModal);
closeModalBtn.addEventListener('click', handleCloseModal);
backdropref.addEventListener('click', handleBackdropPress);

function handleOpenModal() {
    window.addEventListener('keydown', handleESCPress);
    document.body.classList.add('show-modal');
}

function handleCloseModal() {
    window.removeEventListener('keydown', handleESCPress);
  document.body.classList.remove('show-modal');
}

function handleBackdropPress(event) {
    // console.log('event.target: ', event.target);
    // console.log('event.currentTarget: ', event.currentTarget);

    if (event.target === event.currentTarget) {
        handleCloseModal();
    }
}

function handleESCPress (event) {
    if (event.code === 'Escape') {
        console.log('Pressed ESCAPE!!!!!!!');
        handleCloseModal();
    }
}