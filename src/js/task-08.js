const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', (onFormSubmit));

function onFormSubmit (event) {
    event.preventDefault();
    // alert('hbkj')
    const emailVal = event.currentTarget.elements.email.value;
const passwordVal = event.currentTarget.elements.password.value;
    // console.dir(emailVal)
    if (emailVal === "" || passwordVal === "") {
        alert('Заполните пустые поля');
    }
else {
    const formData = new FormData(event.currentTarget);
    console.log(formData);

}}
