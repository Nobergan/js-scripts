const refs = {
  parent: document.querySelector('#parent'),
  child: document.querySelector('#child'),
  innerChild: document.querySelector('#inner-child'),
};

const parentHandler = event => {
  console.log('PARENT click handler');
  console.log('target: ', event.target);
  console.log('currentTarget: ', event.currentTarget);
};

const childHandler = event => {
  console.log('CHILD click handler');
  console.log('target: ', event.target);
  console.log('currentTarget: ', event.currentTarget);
};

const innerChildHandler = event => {
  console.log('INNER-CHILD click handler');
  console.log('target: ', event.target);
  console.log('currentTarget: ', event.currentTarget);

  // event.stopPropagation();
};

refs.parent.addEventListener('click', parentHandler);
refs.child.addEventListener('click', childHandler);
refs.innerChild.addEventListener('click', innerChildHandler);
