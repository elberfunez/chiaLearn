let count = 0;

const countEl = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

function render() {
  countEl.textContent = count;
}

incrementBtn.addEventListener('click', function () {
  count = count + 1;
  render();
});

decrementBtn.addEventListener('click', function () {
  count = count - 1;
  render();
});

resetBtn.addEventListener('click', function () {
  count = 0;
  render();
});
