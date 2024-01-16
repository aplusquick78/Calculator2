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
    // 추가: 숫자를 1000 단위에 쉼표로 표시
    input.value = formatNumber(input.value);
  });
});

equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    let solution = eval(inp_val);
    if (Number.isInteger(solution)) {
      input.value = formatNumber(solution);
    } else {
      input.value = formatNumber(solution.toFixed(2));
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
  // 추가: 숫자를 1000 단위에 쉼표로 표시
  input.value = formatNumber(input.value);
});

// 추가: 숫자를 1000 단위에 쉼표로 표시하는 함수
function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
