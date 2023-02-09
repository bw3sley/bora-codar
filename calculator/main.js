const calculator = document.getElementById("calculator");
const display = document.getElementById("display");
const result = document.getElementById("result").querySelector("span");
const lastCalc = document.getElementById("last-calc");
const keyboard = document.getElementById("keyboard");

let currentExpression = "";
let lastExpression = "";

keyboard.addEventListener("click", handleClick);

function handleClick(event) {
  const target = event.target;

  if (!target.dataset.value) {
    return;
  }

  switch (target.dataset.value) {
    case "C":
      currentExpression = "0";
      break;
    case "CE":
      currentExpression = lastExpression;
      break;
    case "=":
      try {
        lastExpression = currentExpression;
        const evaluated = eval(currentExpression);
        currentExpression = evaluated;
      } catch (error) {
        currentExpression = "Error";
      }
      break;
    default:
      currentExpression += target.dataset.value;
  }

  result.textContent = currentExpression;
  lastCalc.textContent = lastExpression;
}