const changeImgMoney = document.querySelector('.jar__glass');

export const changeImg = value => {
  if (value > 4000) {
    changeImgMoney.src = changeImgMoney.src.replace('/0.png', '/uah_33.png');
  }

  if (value > 12500) {
    changeImgMoney.src = changeImgMoney.src.replace(
      '/uah_33.png',
      '/uah_50.png'
    );
  }

  if (value > 24000) {
    changeImgMoney.src = changeImgMoney.src.replace(
      '/uah_50.png',
      '/uah_100.png'
    );
  }
};
