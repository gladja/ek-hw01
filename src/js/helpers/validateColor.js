const valueColor = document.querySelector('.card__value');
const messageWarning = document.querySelector('.card__value-warning');

const btnFormMomo = document.querySelector('.btn__mono');
const btnFormGpay = document.querySelector('.btn__gpay');

export const validateColor = value => {
  if (value < 10 || value > 29999) {
    messageWarning.classList.add('active-warning');
    valueColor.classList.add('active-color');

    btnFormMomo.style.backgroundColor = 'grey';
    btnFormGpay.style.backgroundColor = 'grey';
    btnFormMomo.setAttribute('disabled', '');
    btnFormGpay.setAttribute('disabled', '');
  } else {
    messageWarning.classList.remove('active-warning');
    valueColor.classList.remove('active-color');

    btnFormMomo.style.backgroundColor = '#000';
    btnFormGpay.style.backgroundColor = '#000';
    btnFormMomo.removeAttribute('disabled');
    btnFormGpay.removeAttribute('disabled');
  }
  valueColor.classList.add('active');
};
