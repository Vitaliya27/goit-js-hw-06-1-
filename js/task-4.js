const form = document.querySelector(".login-form");
const button = document.querySelector("button");

form.addEventListener("submit", handleSubmit);

function handleSubmit (event) {
    event.preventDefault();
    const {email, password} = event.currentTarget.elements;

    if (email.value.length == "" || password.value.length == "") {
        alert ("All fields must be completed!");
        return;
    }

    const info = {
        email: email.value,
        password: password.value,
    }

    console.log(info);
    form.reset();
}
