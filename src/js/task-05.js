const refs = {
    input : document.querySelector('#name-input'),
    output : document.querySelector('#name-output')
}
refs.input.addEventListener('input', (onInputChange))
console.log(refs.input)
function onInputChange (event) {
console.log(event);
if (event.currentTarget.value === '') {
    refs.output.textContent = 'Anonymous'
} else { 
    refs.output.textContent = event.currentTarget.value
}
}

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>