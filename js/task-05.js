const userNameIn = document.querySelector('#name-input');
const userNameOut = document.querySelector('#name-output');

userNameIn.addEventListener ("input", (event) => {
    const inputValue = event.currentTarget.value.trim();

    if (inputValue !== "") {
        userNameOut.textContent = inputValue;
    } else {
        userNameOut.textContent = "Anonymous";
    }
});