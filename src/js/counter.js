const btnAdd_100 = document.querySelector('button[data-action="add_100"]');
const btnAdd_500 = document.querySelector('button[data-action="add_500"]');
const btnAdd_1000 = document.querySelector('button[data-action="add_1000"]');
const valueEl = document.querySelector('.card__value-sum');
const valueColor = document.querySelector('.card__value');

btnAdd_100.addEventListener('click', sumValue);
btnAdd_500.addEventListener('click', sumValue);
btnAdd_1000.addEventListener('click', sumValue);

let counterValue = 0;

function sumValue(e) {
  const value = e.target.dataset.action;
  switch (value) {
    case 'add_100':
      counterValue += 100;
      valueEl.textContent = counterValue.toLocaleString('ua-UA');
      break;
    case 'add_500':
      counterValue += 500;
      valueEl.textContent = counterValue.toLocaleString('ua-UA');
      break;
    case 'add_1000':
      counterValue += 1000;
      valueEl.textContent = counterValue.toLocaleString('ua-UA');
      break;
    default:
      0;
  }
  valueColor.classList.add('active');
}
