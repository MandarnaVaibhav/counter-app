let count = 0;
let incClicks = 0;
let decClicks = 0;

const countDisplay = document.getElementById("count");
const incDisplay = document.getElementById("incCount");
const resetButton = document.getElementById("reset");
const decDisplay = document.getElementById("decCount");

document.getElementById("increment").addEventListener("click", () => {
  count++;
  incClicks++;
  updateDisplay();
});

resetButton.addEventListener("click", () => {
  count = 0;
  incClicks = 0;
  decClicks = 0;
  updateDisplay();
});

document.getElementById("decrement").addEventListener("click", () => {
  count--;
  decClicks++;
  updateDisplay();
});

function updateDisplay() {
  countDisplay.textContent = count;
  incDisplay.textContent = incClicks;
  decDisplay.textContent = decClicks;
}
