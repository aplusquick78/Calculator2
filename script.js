document.addEventListener("DOMContentLoaded", function () {
  let equal_pressed = false;
  let button_input = document.querySelectorAll(".input-button");
  let input = document.getElementById("input");
  let equal = document.getElementById("equal");
  let clear = document.getElementById("clear");
  let erase = document.getElementById("erase");

  // Event listener for each button click
  button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
      if (equal_pressed) {
        input.value = "";
        equal_pressed = false;
      }

      input.value += button_class.value;
    });
  });

  // Event listener for equal button click
  equal.addEventListener("click", () => {
    equal_pressed = true;
    try {
      let result = eval(input.value);
      input.value = formatNumber(result);
    } catch (err) {
      input.value = "Error";
    }
  });

  // Event listener for clear button click
  clear.addEventListener("click", () => {
    input.value = "";
  });

  // Event listener for erase button click
  erase.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
  });

  // Format number with thousands separator
  function formatNumber(number) {
    return Number(number).toLocaleString();
  }
});
