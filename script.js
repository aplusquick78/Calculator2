// 변수 선언
let equal_pressed = 0;
// 버튼 선택
let button_input = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

// 페이지 로딩 시 입력 필드 초기화
window.onload = () => {
  input.value = "";
};

// 버튼 클릭 이벤트 리스너
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    input.value += button_class.value;
  });
});

// 계산 실행
equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    let solution = eval(inp_val);
    // 천 단위 구분자 포맷으로 변환하여 결과 표시
    input.value = Number(solution).toLocaleString('en-US', {maximumFractionDigits: 2});
  } catch (err) {
    alert("Invalid Input");
  }
});

// 전체 입력 지우기
clear.addEventListener("click", () => {
  input.value = "";
});

// 마지막 숫자 지우기
erase.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});
