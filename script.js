let equal_pressed = 0;
let button_input = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    input.value += button_class.value;
    formatInputValue();
  });
});

equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    let solution = eval(inp_val);
    if (Number.isInteger(solution)) {
      input.value = addCommas(solution);
    } else {
      input.value = addCommas(solution.toFixed(2));
    }
  } catch (err) {
    alert("Invalid Input");
  }
});

clear.addEventListener("click", () => {
  input.value = "";
});

erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
  formatInputValue();
});

function addCommas(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatInputValue() {
  let inputValue = input.value.replace(/,/g, ''); // Remove existing commas
  input.value = addCommas(inputValue);
}
