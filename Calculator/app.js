const cal = document.querySelector(".calculator");
const outputDiv = document.querySelector(".output");
let input;
let input2;
let results = "";
firstInput = true;
secondInput = false;
enable = true;
isEqual = false;
let temp = "";
let number;
let temp2 = "";
let operator;
clear = true;
cal.addEventListener("click", getValues);
function getValues(e) {
  input = event.target.id;
  if (input < 10) {
    if (firstInput) {
      if (clear) {
        outputDiv.innerText = results;
        clear = false;
      }
      temp += input;
      outputDiv.innerText += input;
      enable = true;
    }

    if (secondInput) {
      temp2 += input;
      outputDiv.innerText += input;
      console.log(temp2);
      isEqual = true;
    }
  }
  if (enable)
    switch (input) {
      case "+":
        firstInput = false;
        secondInput = true;
        enable = false;
        operator = "plus";
        outputDiv.innerText += "+";

        break;
      case "-":
        operator = "-";

        break;
      case "*":
        operator = "*";

        break;
      case "/":
        operator = "/";

        break;
    }
  if (isEqual) {
    if (input == "equals") {
      operate();
      isEqual = false;
      secondInput = false;
    }
  }
}

function operate() {
  switch (operator) {
    case "plus":
      results = parseInt(temp) + parseInt(temp2);
      outputDiv.innerText = results;

      break;
    case "-":
      break;
    case "*":
      break;
    case "/":
      break;
  }

  firstInput = true;
  clear = true;
  temp2 = "";
  temp = "";
  results = "";
}
