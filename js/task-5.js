function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const showColor = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

function onChangeColor() {
  const bgColor = getRandomHexColor();
  body.style.backgroundColor = bgColor;
  showColor.textContent = bgColor;

  console.log(showColor.textContent);
}

changeColorButton.addEventListener("click", onChangeColor);