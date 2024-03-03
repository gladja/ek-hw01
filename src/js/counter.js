import { validateColor } from './helpers/validateColor';

const btnAdd_100 = document.querySelector('button[data-action="add_100"]');
const btnAdd_500 = document.querySelector('button[data-action="add_500"]');
const btnAdd_1000 = document.querySelector('button[data-action="add_1000"]');
const valueEl = document.querySelector('.card__value-sum');

btnAdd_100.addEventListener('click', sumValue);
btnAdd_500.addEventListener('click', sumValue);
btnAdd_1000.addEventListener('click', sumValue);
valueEl.addEventListener('click', changeValue);

let counterValue = 0;

const updateValue = () => {
  valueEl.textContent = counterValue;
};

function sumValue(e) {
  updateValue();
  const value = e.target.dataset.action;
  switch (value) {
    case 'add_100':
      counterValue += 100;
      updateValue();
      break;
    case 'add_500':
      counterValue += 500;
      updateValue();
      break;
    case 'add_1000':
      counterValue += 1000;
      updateValue();
      break;
    default:
      0;
  }
  validateColor(counterValue);
}

function changeValue() {
  valueEl.contentEditable = true;
  valueEl.addEventListener('input', function inputHandler() {
    counterValue = Number(valueEl.textContent);
    updateValue();
    validateColor(counterValue);
  });
}
