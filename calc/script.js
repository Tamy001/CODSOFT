const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector("button.theme");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector("button.theme");
const container = document.querySelector(".container");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  container.classList.toggle("dark");
  
  isDark = !isDark;
};

function lightdark(icon) {
  var icon = document.querySelector("button.theme");
  i.classList.toggle('fa-plus');
  icon.classList.toggle('fa-minus');
}
