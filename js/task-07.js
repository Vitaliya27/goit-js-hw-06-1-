const textSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

textSize.addEventListener("change", function(event) {
    text.style.fontSize = this.value + "px";
});