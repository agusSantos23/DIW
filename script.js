// Array de pistas de audio, cada una con su archivo de audio, fondo en formato gif y título de la cancion
const tracks = [
  { src: "./music/DIABLA.mp3", background: "./gif/diabla.gif", title: "DIABLA" },
  { src: "./music/NIÑOS MARAVILLA.mp3", background: "./gif/maravilla.gif", title: "NIÑOS MARAVILLA" },
  { src: "./music/XULOS.mp3", background: "./gif/xulos.gif", title: "XULOS " },
]
// Array de estados de carga
const loadingStates = ["JOINING SERVER", "PREPARING ASSETS", "ESTABLISHING CONNECTION"]

// Elementos seleccionados del DOM
const audio = document.querySelector('audio')
const textElement = document.querySelector('h3')
let index = 0 // Indice para cambiar entre los estados de carga

// Función para aumentar el volumen del audio
const increaseVolume = () => {
  if (audio.volume < 1) {
    audio.volume = Math.min(1, audio.volume + 0.1) // Aumenta el volumen hasta un máximo de 1
  }
}

// Funcion para disminuir el volumen del audio
const decreaseVolume = () => {
  if (audio.volume > 0) {
    audio.volume = Math.max(0, audio.volume - 0.1) // Disminuye el volumen hasta un minimo de 0
  }
}

// Funcion para silenciar o desmutear el audio
const muteAudio = () =>{
  if (audio.volume === 0) {
    audio.volume = 0.5 // Restaura el volumen a 0.5
    document.getElementById('btnMute').innerText = "MUTE" // Cambia el texto del boton
  }else{
    audio.volume = 0 // Si no está silenciado, pon el volumen a 0
    document.getElementById('btnMute').innerText = 'UNMUTE' // Cambia el texto del boton
  }
} 

// Funcion para cambiar la pista de audio aleatoriamente
const changeTrackRandomly = () => {
  const TrackIndex = Math.floor(Math.random() * tracks.length) // Genera un indice aleatorio dentro del rango de las pistas disponibles

  // Cambia el fondo de la pagina con la imagen asociada a la pista seleccionada
  document.body.style.backgroundImage = `url(${tracks[TrackIndex].background})`
  // Cambia el texto del <span> al título de la pista seleccionada
  document.querySelector("span").innerText = tracks[TrackIndex].title
  // Cambia la fuente del audio a la pista seleccionada
  audio.src = tracks[TrackIndex].src
  
  // Inicia la reproducción del nuevo audio
  audio.play()
}

// Llama a la funcion para cargar una pista aleatoria al inicio
changeTrackRandomly()

// Escucha eventos de teclado para controlar la reproducción de audio y los cambios de pista
document.addEventListener('keydown', (event) => {

  if (event.key === 'ArrowRight') {

    changeTrackRandomly()

  } else if (event.key === 'ArrowLeft') {

    changeTrackRandomly()

  }else if (event.key === 'ArrowUp') {

    increaseVolume()

  } else if (event.key === 'ArrowDown') {

    decreaseVolume()
    
  } else if (event.code === 'Space') {
    event.preventDefault()

    muteAudio()
  } 
})

// Intervalo para cambiar el estado de carga cada 3 segundos (3000ms)
setInterval(() => {
  // Quita la clase para reiniciar la animación
  textElement.classList.remove("fade")

  // Cambia el texto del estado de carga después de un pequeño retardo
  setTimeout(() => {
    // Actualiza el indice para mostrar el siguiente estado y cuando termine de recorrer el array vuelva al inicio
    index = (index + 1) % loadingStates.length

    // Cambia el texto mostrado al nuevo estado
    textElement.innerText = loadingStates[index]

    // Agrega la clase para aplicar la animación de transición
    textElement.classList.add("fade")
    
  }, 50) // Tiempo suficiente para reiniciar la animación
  
}, 3000) // Cambia el texto cada 3 segundos