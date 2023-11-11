// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
let counter = 0;
const counterEl = document.getElementById('counter');
const plusEl = document.getElementById('plus');
const minusEl = document.getElementById('minus');

const setCounter = (counter) => {
    counterEl.innerHTML = counter;
}

plusEl.addEventListener('click', (e) => {
    counter++;
    setCounter(counter);
});

minusEl.addEventListener('click', (e) => {
    counter--;
    setCounter(counter);
});

setCounter(counter);