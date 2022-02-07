function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesRef = document.querySelector('#boxes');
console.log(boxesRef);
const createBtnRef = document.querySelector('[data-create]');
console.log(createBtnRef);
const destroyBtnRef = document.querySelector('[data-destroy]');
console.log(destroyBtnRef);
const inputRef = document.querySelector('input');
console.log(inputRef)

// createBtnRef.addEventListener('click', (onElemCreate));

// destroyBtnRef.addEventListener('click', (onElementsDestr));
const amount = inputRef.value;
console.log(amount)
// function createBoxes(amount) {
  
// }