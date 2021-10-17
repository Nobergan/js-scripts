const refs = {
  tags: document.querySelector('.js-tags'),
  output: document.querySelector('.js-active-tag'),
};

refs.tags.addEventListener('click', onTagsClick);

function onTagsClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    console.log('NOT BUTTON CLICK1!!!');
    return;
  }

  setActiveTag(event.target);
  updateOutput();
  deleteActiveTag();
}

function setActiveTag(target) {
  const activeBtn = refs.tags.querySelector('.tags__btn--active');
  target.classList.toggle('tags__btn--active');

  if (activeBtn && activeBtn.classList.contains('tags__btn--active')) {
    activeBtn.classList.remove('tags__btn--active');
  }
}

function updateOutput() {
  const nextTarget = event.target;
  const activeTag = nextTarget.dataset.value;

  refs.output.textContent = activeTag;
}

function deleteActiveTag() {
  const activeBtn = refs.tags.querySelector('.tags__btn--active');
  if (!activeBtn) {
    refs.output.textContent = '';
  }
}

// function onTagsClick(event) {
//   // console.log(event.target);
//   if (event.target.nodeName !== 'BUTTON') {
//     console.log('NOT BUTTON CLICK1!!!');
//     return;
//   }

//   const nextTarget = event.target;
//   const activeTag = nextTarget.dataset.value;

//   setActiveTag(nextTarget);
//   updateOutput(activeTag);
// }

// function setActiveTag(nextTarget) {
//   const currentTarget = refs.tags.querySelector('.tags__btn--active');

//   if (currentTarget) {
//     currentTarget.classList.remove('tags__btn--active');
//   }

//   nextTarget.classList.add('tags__btn--active');
// }

// function updateOutput(activeTag) {
// refs.output.textContent = activeTag;
// }
