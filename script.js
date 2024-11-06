const tracks = [
  { src: "./music/DIABLA.mp3", background: "./gif/diabla.gif", title: "DIABLA" },
  { src: "./music/NIÑOS MARAVILLA.mp3", background: "./gif/maravilla.gif", title: "NIÑOS MARAVILLA" },
  { src: "./music/XULOS.mp3", background: "./gif/xulos.gif", title: "XULOS " },
]

const audio = document.querySelector('audio')


const increaseVolume = () => {
  if (audio.volume < 1) {
    audio.volume = Math.min(1, audio.volume + 0.1)
  }
}

const decreaseVolume = () => {
  if (audio.volume > 0) {
    audio.volume = Math.max(0, audio.volume - 0.1)
  }
}

const muteAudio = () =>{
  
  console.log("cara");

  if (audio.volume === 0) {
    console.log(1);
    audio.volume = 0.5 
    btnMute.innerText = "MUTE"
  }else{
    console.log(2);
    audio.volume = 0
    btnMute.innerText = 'UNMUTE'
  }
} 




const changeTrackRandomly = () => {
  const TrackIndex = Math.floor(Math.random() * tracks.length);

  document.body.style.backgroundImage = `url(${tracks[TrackIndex].background})`
  document.querySelector("span").innerText = tracks[TrackIndex].title
  audio.src = tracks[TrackIndex].src;
  
  audio.play();
}

changeTrackRandomly()

document.addEventListener('keydown', (event) => {
  event.preventDefault()

  if (event.key === 'ArrowRight') {

    changeTrackRandomly()

  } else if (event.key === 'ArrowLeft') {

    changeTrackRandomly()

  }else if (event.key === 'ArrowUp') {

    increaseVolume()

  } else if (event.key === 'ArrowDown') {

    decreaseVolume()
    
  } else if (event.code === 'Space') {

    muteAudio()

  } 
})