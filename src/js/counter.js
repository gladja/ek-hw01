import { validateColor } from './helpers/validateColor';
import { changeImg } from './helpers/changeImg';

const btnAdd_100 = document.querySelector('button[data-action="add_100"]');
const btnAdd_500 = document.querySelector('button[data-action="add_500"]');
const btnAdd_1000 = document.querySelector('button[data-action="add_1000"]');
const valueEl = document.querySelector('.card__value-sum');

const inputName = document.querySelector('.card__name');
const inputComment = document.querySelector('.card__comment');
const btnFormMomo = document.querySelector('.btn__mono');
const btnFormGpay = document.querySelector('.btn__gpay');

const statsValue = document.querySelector('.stats__data');

btnAdd_100.addEventListener('click', sumValue);
btnAdd_500.addEventListener('click', sumValue);
btnAdd_1000.addEventListener('click', sumValue);
valueEl.addEventListener('click', changeValue);

btnFormMomo.addEventListener('click', formValue);
btnFormGpay.addEventListener('click', formValue);

let counterValue = 0;
let valueStatus = 0;

const gerLocalStorege = () => {
  const value = JSON.parse(localStorage.getItem('value'));
  if (!value) {
    statsValue.textContent = 0;
    localStorage.setItem('value', '0');
    return;
  }
  statsValue.textContent = value;
  valueStatus = value;
  changeImg(valueStatus);
};

gerLocalStorege();

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
    const inputValue = Number(valueEl.textContent);

    if (!isNaN(inputValue)) {
      counterValue = inputValue;
      validateColor(counterValue);
      updateValue();
    } else {
      updateValue();
      validateColor(counterValue);
    }
  });
}

function formValue(e) {
  e.preventDefault();

  const value = {
    sum: counterValue,
    name: inputName.value,
    comment: inputComment.value,
  };
  console.log(value);

  valueStatus += counterValue;
  statsValue.textContent = valueStatus;
  localStorage.setItem('value', JSON.stringify(valueStatus));

  inputName.value = '';
  inputComment.value = '';
  counterValue = 0;
  updateValue();
  changeImg(valueStatus);
}
