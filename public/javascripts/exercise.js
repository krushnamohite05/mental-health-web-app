let currentMusic = null;
const musicPlayer = new Audio();

const cardContainer = document.getElementById('card-container');
const cards = document.querySelectorAll('.card');
const nav = document.querySelector('nav');
const videoElement = document.getElementById('myVideo');

cardContainer.addEventListener("click", (event) => {
  const clickedCard = event.target.closest('.card');
  if (clickedCard) {
    const musicFile = clickedCard.getAttribute('data-music');
    const musicPath = `https://sidhharth-bucket-for-project.s3.ap-south-1.amazonaws.com/audio/${musicFile}`;

    if (currentMusic === musicPath) {
      if (musicPlayer.paused) {
        musicPlayer.play();
        console.log("play");
      } else {
        musicPlayer.pause();
        console.log("pause");
      }
    } else {
      currentMusic = musicPath;
      musicPlayer.src = currentMusic;
      musicPlayer.play();
    }

    cards.forEach((card) => {
      card.classList.remove('fade');
    });
    nav.classList.remove('fade-nav');
    videoElement.classList.remove('bright-video');
  } else {
    cards.forEach((card) => {
      card.classList.add('fade');
    });
    nav.classList.add('fade-nav');
    videoElement.classList.add('bright-video');
  }
});