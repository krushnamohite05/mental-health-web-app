/*const music = ['1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3', '6.mp3', '7.mp3', '8.mp3', '9.mp3', '10.mp3'];
const shuffle = document.getElementById("shuffle");
const folder = shuffle.getAttribute("data-folder");
console.log(shuffle)
console.log(folder)
const musicPlayer = new Audio();


//playMusic(0);

shuffle.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * music.length);
  playMusic(randomIndex);
  console.log("play")
});

function playMusic(index) {
  musicPlayer.src = `video/${folder}/${music[index]}`;
  console.log(`video/${folder}/${music[index]}`)
  musicPlayer.play();
}*/

const music = ['1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3', '6.mp3', '7.mp3', '8.mp3', '9.mp3', '10.mp3'];
const shuffleImg = document.getElementById("shuffle");
const folder = shuffleImg.getAttribute("data-folder");
const musicPlayer = new Audio();

playMusic(0);


function m1(){
    const randomIndex = Math.floor(Math.random() * music.length);
    console.log(randomIndex)
    playMusic(randomIndex);

}


function playMusic(index) {
  musicPlayer.src = `/audio/${folder}/${music[index]}`;
  console.log(`/audio/${folder}/${music[index]}`);
  musicPlayer.play();
}