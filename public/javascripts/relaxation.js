let currentMusic = null;
const musicPlayer = new Audio();
const videoElement = document.getElementById('myVideo');

const cardContainer = document.getElementById('card-container');
const cards = document.querySelectorAll('.card');
const nav = document.querySelector('nav');

cardContainer.addEventListener("click", (event) => {
  const clickedCard = event.target.closest('.card');
  if (clickedCard) {
    const musicFile = clickedCard.getAttribute('data-music');
    const musicPath = `/audio/${musicFile}`;
    const videoFile = clickedCard.getAttribute('data-video');
    const videoPath = `/video/${videoFile}`;

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

    videoElement.src = videoPath;
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