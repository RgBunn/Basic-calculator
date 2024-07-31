const buttonsEl = document.querySelectorAll(".btn");
console.log(buttonsEl);
const inputContainer = document.querySelector("#result");

function clickHandler(e) {
  const buttonValue = e.target.textContent;
  console.log(buttonValue);
  if (buttonValue === "C") {
    inputContainer.value = "";
  } else if (buttonValue === "=") {
    inputContainer.value = eval(inputContainer.value);
  } else {
    appendValue(buttonValue);
  }
}
buttonsEl.forEach((button) => {
  button.addEventListener("click", clickHandler);
});

function appendValue(buttonValue) {
  inputContainer.value += buttonValue;
}
