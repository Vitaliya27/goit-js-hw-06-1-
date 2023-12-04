const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
const number = document.querySelector('#value');

let counterValue = 0;

btnDec.addEventListener('click', function () {
    counterValue -= 1;
    number.textContent = counterValue;
});

btnInc.addEventListener('click', function () {
    counterValue += 1;
    number.textContent = counterValue;
});