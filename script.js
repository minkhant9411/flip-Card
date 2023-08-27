const cardTag = document.getElementsByClassName('card');
const resultTag = document.querySelector('.result');
const scoreTag = document.querySelector('.score');
const flipCountTag = document.querySelector('.flip-count');
const playAgainBut = document.querySelector('.play-again-btn');
const images = [
  {
    id: 1,
    src: 'https://robohash.org/OTL.png?set=set1&size=100x100',
    class: 'img1',
  },
  {
    id: 2,
    src: 'https://robohash.org/R43.png?set=set1&size=100x100',
    class: 'img2',
  },
  {
    id: 3,
    src: 'https://robohash.org/OTR.png?set=set1&size=100x100',
    class: 'img3',
  },
  {
    id: 4,
    src: 'https://robohash.org/OTB.png?set=set1&size=100x100',
    class: 'img4',
  },
  {
    id: 5,
    src: 'https://robohash.org/OTM.png?set=set1&size=100x100',
    class: 'img5',
  },
  {
    id: 6,
    src: 'https://robohash.org/N60.png?set=set1&size=100x100',
    class: 'img6',
  },
  {
    id: 7,
    src: 'https://robohash.org/OTL.png?set=set1&size=100x100',
    class: 'img1',
  },
  {
    id: 8,
    src: 'https://robohash.org/R43.png?set=set1&size=100x100',
    class: 'img2',
  },
  {
    id: 9,
    src: 'https://robohash.org/OTR.png?set=set1&size=100x100',
    class: 'img3',
  },
  {
    id: 10,
    src: 'https://robohash.org/OTB.png?set=set1&size=100x100',
    class: 'img4',
  },
  {
    id: 11,
    src: 'https://robohash.org/OTM.png?set=set1&size=100x100',
    class: 'img5',
  },
  {
    id: 12,
    src: 'https://robohash.org/N60.png?set=set1&size=100x100',
    class: 'img6',
  },
];
const imagesTemp = [];
imagesTemp.concat(images);
console.log(imagesTemp);
const imageTag = document.querySelectorAll('img');
let click = 1;
let flipCount = 20;
let matchCards = 0;
let firstClick;
let secondClick;

// open the web first time
const restartgame = () => {
  for (let q = 0; q < imageTag.length; q++) {
    const imageTagq = imageTag[q];
    imageTagq.parentElement.parentElement.classList.add('rotate');
  }
  setTimeout(() => {
    for (let d = 0; d < imageTag.length; d++) {
      const imageTagw = imageTag[d];
      imageTagw.parentElement.parentElement.classList.remove('rotate');
    }
  }, 1500);
};
restartgame();

//random the image div
const randomImgDiv = () => {
  for (let r = 0; r < imageTag.length; r++) {
    let random = Math.floor(Math.random() * images.length - 1);
    let randomImgs = images.splice(random, 1);
    imageTag[r].src = randomImgs[0].src;
    imageTag[r].classList.add(randomImgs[0].class);
  }
};
randomImgDiv();
// make image div
for (let i = 0; i < cardTag.length; i++) {
  const innerCardTag = document.getElementsByClassName('inner-card')[i];

  // add click event to img div
  innerCardTag.addEventListener('click', function () {
    //make rotatation the card
    const rotateCard = () => {
      if (this.classList.contains('rotate')) {
        this.classList.remove('rotate');
      } else {
        this.classList.add('rotate');
      }
    };

    // remove rotation with time 1s
    const removeWithTime = () => {
      firstClick == secondClick ? matchCards++ : matchCards;
      setTimeout(() => {
        firstClick != secondClick ? firstClickClass.remove('rotate') : '';
        firstClick != secondClick ? secondClickClass.remove('rotate') : '';
        firstClick = undefined;
        secondClick = undefined;
        click = 1;
      }, 500);
    };

    //check equal or not
    if (click == 1) {
      rotateCard();
      firstClickClass = this.classList;
      firstClick = this.children[0].children[0].className;
    } else if (click == 2) {
      rotateCard();
      secondClickClass = this.classList;
      secondClick = this.children[0].children[0].className;
      removeWithTime();
    } else if (click > 2) {
      return;
    }
    click++;
    flipCount--;
    flipCountTag.innerHTML = flipCount;

    // show game over page
    const winOrLose = message => {
      document.querySelector('.game-over-h1').innerHTML = message;
      document.querySelector('.game-over-msg-container').style.display =
        'inline';
    };
    if (flipCount == 0) {
      winOrLose('You Lose!');
    } else if (matchCards == 6) {
      winOrLose('You Win!');
    }

    // playagain button
    playAgainBut.addEventListener('click', () => {
      restartgame();
      randomImgDiv();
      document.querySelector('.game-over-msg-container').style.display = 'none';
      click = 1;
      flipCount = 20;
      matchCards = 0;
      flipCountTag.innerHTML = flipCount;
    });
  });
}
