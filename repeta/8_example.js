const Manager = function (name, sales) {
  this.name = name;
  this.sales = sales;
};

Manager.prototype.sell = function () {
  this.sales += 1;
};

Manager.prototype.changeName = function (newName) {
  this.name = newName;
};

const mango = new Manager('Mango', 4);
// console.log(mango);

const btnRef = document.querySelector('.js-add-method');

btnRef.addEventListener('click', handleBtn);

function handleBtn() {
  Manager.prototype.addMethod = function () {
    console.log(this);
    console.log('Hello!!!');
  };

  console.log(Manager.prototype);
  mango.addMethod();
}

console.log(Manager.prototype);
