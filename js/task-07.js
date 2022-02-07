const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector("#text");
let fontValue = textRef.style.fontSize 

console.dir(inputRef);
console.dir(fontValue);
inputRef.addEventListener('input', onFontChange);
function onFontChange (event) {
    // console.log(this.value);
    let fontValue = textRef.style.fontSize = `${this.value}px `;
}