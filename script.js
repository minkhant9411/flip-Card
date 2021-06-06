const cardTag = document.getElementsByClassName('card');
const resultTag = document.querySelector('.result');
let flip = false;
let click = 0;
let imgHolder1;
let imgHolder2;
let temp;
let score = 0;
for (let i = 0; i < cardTag.length; i++) {
  const innerCardTag = document.getElementsByClassName('inner-card')[i];
  const imageClassName = document.getElementsByTagName('img')[i].className;
  const parentOfimageTag =
    document.getElementsByTagName('img')[i].parentElement.parentElement;
  innerCardTag.addEventListener('click', () => {});
}
