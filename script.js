const cardTag = document.getElementsByClassName('card');
const resultTag = document.querySelector('.result');
let flip = false;

for (let i = 0; i < cardTag.length; i++) {
  const innerCardTag = document.getElementsByClassName('inner-card')[i];
  const imageClassName = document.getElementsByTagName('img')[i].className;

  innerCardTag.addEventListener('click', function () {
    if (this.classList.contains('rotate')) {
      this.classList.remove('rotate');
    } else {
      this.classList.add('rotate');
    }
  });
}
