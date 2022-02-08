const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', (onFormSubmit));

function onFormSubmit (event) {
    event.preventDefault();
    // alert('hbkj')
    const email = event.currentTarget.elements.email.value;
const password = event.currentTarget.elements.password.value;
    // console.dir(emailVal)
    if (email === "" || password === "") {
        alert('Заполните пустые поля');
    }
else {
    // const formData = new FormData(event.currentTarget);
    const formData = {
email,
password
    }
    console.log(formData);
form.reset();
}}
