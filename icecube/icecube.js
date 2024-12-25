const images = [
    "img/ice_cube/ice_cube0001.png",
    "img/ice_cube/ice_cube0002.png",
    "img/ice_cube/ice_cube0003.png",
    "img/ice_cube/ice_cube0004.png",
    "img/ice_cube/ice_cube0005.png",
    "img/ice_cube/ice_cube0006.png",
    "img/ice_cube/ice_cube0007.png",
    "img/ice_cube/ice_cube0008.png",
    "img/ice_cube/ice_cube0009.png",
    "img/ice_cube/ice_cube0010.png",
    "img/ice_cube/ice_cube0011.png",
    "img/ice_cube/ice_cube0012.png",
    "img/ice_cube/ice_cube0013.png",
    "img/ice_cube/ice_cube0014.png",
    "img/ice_cube/ice_cube0015.png",
    "img/ice_cube/ice_cube0016.png",
    "img/ice_cube/ice_cube0017.png",
    "img/ice_cube/ice_cube0018.png",
    "img/ice_cube/ice_cube0019.png",
    "img/ice_cube/ice_cube0020.png",
    "img/ice_cube/ice_cube0021.png",
    "img/ice_cube/ice_cube0022.png",
    "img/ice_cube/ice_cube0023.png",
    "img/ice_cube/ice_cube0024.png",
  ];
  
// Elemen HTML
const imgElement = document.getElementById("animation");
const playForwardButton = document.getElementById("playForward");
const playBackwardButton = document.getElementById("playBackward");

// Variabel kontrol
let currentFrame = 0;
let intervalId = null;
let direction = null; // Arah animasi: 'forward' atau 'backward'

// Fungsi untuk memulai animasi
function startAnimation() {
  clearInterval(intervalId); // Hentikan animasi sebelumnya
  intervalId = setInterval(() => {
    if (direction === "forward") {
      currentFrame++;
      if (currentFrame >= images.length) {
        currentFrame = images.length - 1; // Tetap di frame terakhir
        clearInterval(intervalId); // Hentikan animasi
      }
    } else if (direction === "backward") {
      currentFrame--;
      if (currentFrame < 0) {
        currentFrame = 0; // Tetap di frame pertama
        clearInterval(intervalId); // Hentikan animasi
      }
    }
    imgElement.src = images[currentFrame];
  }, 41.666666666666664); // Ganti frame setiap 100ms
}

// Fungsi untuk mengganti frame maju
function playForward() {
  if (direction === "forward" && intervalId) return; // Jika sudah berjalan maju, tidak lakukan apa-apa
  direction = "forward";
  startAnimation();
}

// Fungsi untuk mengganti frame mundur
function playBackward() {
  if (direction === "backward" && intervalId) return; // Jika sudah berjalan mundur, tidak lakukan apa-apa
  direction = "backward";
  startAnimation();
}

// Event listener untuk tombol
playForwardButton.addEventListener("click", playForward);
playBackwardButton.addEventListener("click", playBackward);