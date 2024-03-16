// JavaScript for custom audio player controls
const audio = document.getElementById("music");
const playButton = document.getElementById("playButton");
const volumeSlider = document.getElementById("volumeSlider");
const muteButton = document.getElementById("muteButton");

playButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playButton.classList.remove("play");
    playButton.classList.add("pause");
  } else {
    audio.pause();
    playButton.classList.remove("pause");
    playButton.classList.add("play");
  }
});

volumeSlider.addEventListener("input", function () {
  audio.volume = volumeSlider.value;
});

muteButton.addEventListener("click", function () {
  if (audio.muted) {
    audio.muted = false;
    muteButton.classList.remove("muted");
    volumeSlider.disabled = false;
    volumeSlider.value = audio.volume; // Restore previous volume
  } else {
    audio.muted = true;
    muteButton.classList.add("muted");
    volumeSlider.disabled = true;
    volumeSlider.value = 0; // Set volume to 0 when muted
  }
});
