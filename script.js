const cardTag = document.getElementsByClassName('card');
const resultTag = document.querySelector('.result');
let click = 1;

let score = 0;
for (let i = 0; i < cardTag.length; i++) {
  const innerCardTag = document.getElementsByClassName('inner-card')[i];
  const imageTag = document.getElementsByTagName('img')[i].className;
  const imageTag_p = document.getElementsByTagName('img')[i];

  innerCardTag.addEventListener('click', () => {
    const rotatefun = () => {
      if (innerCardTag.classList.contains('rotate')) {
        innerCardTag.classList.remove('rotate');
      } else {
        innerCardTag.classList.add('rotate');
      }
    };
    const classRmWithTime = () => {
      setTimeout(() => {
        imgHolder1.classList.remove('rotate');
        imgHolder2.classList.remove('rotate');
      }, 1000);
    };
    rotatefun();
    click++;
  });
}
