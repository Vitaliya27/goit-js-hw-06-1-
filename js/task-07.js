const textSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const numberLine = textSize.value;

text.style.fontSize = `${numberLine}px`;

textSize.addEventListener('input', () => {
    const number = textSize.value;
    text.style.fontSize = `${number}px`;
});