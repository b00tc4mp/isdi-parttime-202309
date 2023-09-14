let btns = [
  { text: "AC" },
  { text: "+/-" },
  { text: "√" },
  { text: "/" },
  { text: "9" },
  { text: "8" },
  { text: "7" },
  { text: "*" },
  { text: "4" },
  { text: "5" },
  { text: "6" },
  { text: "-" },
  { text: "1" },
  { text: "2" },
  { text: "3" },
  { text: "+" },
  { text: "0" },
  { text: "." },
  { text: "C" },
  { text: "=" },
];

let grid = document.querySelector(".grid");
let input = document.querySelector(".input");
let operators = ["+", "-", "*", "/"];

btns.forEach((btn) => {
  let button = document.createElement("button");
  button.textContent = btn.text;
  button.value = btn.value;
  button.classList.add("btn");
  grid.appendChild(button);
});

const update = (total) => {
    if(input.length > 1) {
      input.textContent = total % 2 !== 0 ? total.toFixed(3) : total;
    } else {
      input.textContent = total
    }
    

  
};

const getSum = () => {
  let numbers = input.textContent.split("+");
  let total = numbers.reduce((total, n) => (total += +n), 0);
  update(total);
};

const getSubs = () => {
  let total;
  let numbers = input.textContent.split("-");

  numbers.forEach((n, i) => {
    if (i === 0) {
      total = n;
    } else {
      total -= n;
    }
  });
  update(total);
};

const getMultiply = () => {
  let total;
  let numbers = input.textContent.split("*");

  numbers.forEach((n, i) => {
    if (i === 0) {
      total = n;
    } else {
      total *= n;
    }
  });
  update(total);
};

const getSplit = () => {
  let total;
  let numbers = input.textContent.split("/");
  if (numbers.some((n) => n === "0")) return update("Error");
  numbers.forEach((n, i) => {
    if (i === 0) {
      total = n;
    } else {
      total /= n;
    }
  });
  update(total);
};

const getSqrt = () => {
  let number = Math.sqrt(+input.textContent.slice(1, input.textContent.length));
  update(number);
};

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (input.textContent === "0") {
      input.textContent = "";
    }

    if (btn.textContent !== "AC" && btn.textContent !== "C") {
      if (input.textContent.length > 8 && input.textContent.length < 16) {
        input.classList.add("font");
      } else if (input.textContent.length > 12) {
        btn.classList.add("red");
        setTimeout(() => {
          btn.classList.remove("red");
        }, 500);
        return;
      }
    }

    if (btn.textContent === "√") {
      if (input.textContent === "") {
        return update(btn.textContent);
      } else {
        return update(`Err ej.√5 =`);
      }
    }

    if (btn.textContent === "C") {
      return update(input.textContent.slice(0, -1));
    }

    if (btn.textContent === "AC") {
      input.classList.remove("font");
      return (input.textContent = 0);
    }

    if (input.length > 5) {
      console.log(input.length);
      return btn.classList.add("red");
    }

    if (btn.textContent === ".") {
      if (input.textContent.includes("+")) {
        let check = input.textContent.split("+");
        if (check[check.length - 1].includes(".")) return;
      } else if (input.textContent.includes("-")) {
        let check = input.textContent.split("-");
        if (check[check.length - 1].includes(".")) return;
      } else if (input.textContent.includes("*")) {
        let check = input.textContent.split("*");
        if (check[check.length - 1].includes(".")) return;
      } else if (input.textContent.includes("/")) {
        let check = input.textContent.split("/");
        if (check[check.length - 1].includes(".")) return;
      } else if (input.textContent.includes(".")) {
        return;
      }
    }

    if (btn.textContent === "+/-") {
      if (input.textContent === "Error") return;

      if (
        input.textContent
          .split("")
          .some((t) => t === "+" || t === "*" || t === "/")
      ) {
        return update("Error");
      }

      if (input.textContent.includes("-")) {
        return update(input.textContent.slice(1));
      } else {
        return update("-" + input.textContent);
      }
    }

    if (btn.textContent === "=") {
      if (input.textContent.includes("+")) {
        getSum();
      } else if (
        input.textContent
          .substring(1, input.textContent.length)
          .includes("-") &&
        !input.textContent
          .split("")
          .some((t) => t === "+" || t === "*" || t === "/")
      ) {
        getSubs();
      } else if (input.textContent.includes("*")) {
        getMultiply();
      } else if (input.textContent.includes("/")) {
        getSplit();
      } else if (input.textContent.includes("√")) {
        getSqrt();
      }
    } else {
      input.textContent += btn.textContent;
    }
  });
});
