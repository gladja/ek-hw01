const valueColor = document.querySelector('.card__value');
const messageWarning = document.querySelector('.card__value-warning');

export const validateColor = value => {
  if (value < 10 || value > 29999) {
    messageWarning.classList.add('active-warning');
    valueColor.classList.add('active-color');
  } else {
    messageWarning.classList.remove('active-warning');
    valueColor.classList.remove('active-color');
  }
  valueColor.classList.add('active');
};
