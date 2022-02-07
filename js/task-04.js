let counterValue = 0;

const onIncrFunc = event => {
    valueRef.textContent = counterValue -= 1;
}
const onDecrFunc = event => {
    valueRef.textContent = counterValue += 1;
}

const valueRef = document.querySelector('#value');

console.log(counterValue)
const incrementBtn = document.querySelector('button[data-action="decrement"]')
console.log(incrementBtn);
const decrementBtn = document.querySelector('button[data-action="increment"]')
console.log(decrementBtn);
incrementBtn.addEventListener('click', (onIncrFunc));
decrementBtn.addEventListener('click', (onDecrFunc));

