function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector('body');
console.log(bodyRef)
const btnRef = document.querySelector('.change-color');
console.log(btnRef);
  const spanRef = document.querySelector('.color');

  btnRef.addEventListener('click', (onChangeColor));

  function onChangeColor (event) {
    const color = bodyRef.style.backgroundColor = getRandomHexColor();
    spanRef.textContent = `${color}`
  }