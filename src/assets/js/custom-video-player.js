const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('play', updatePlayButton);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);

function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayButton() {
  if (video.paused) {
    play.innerText = 'Play';
  } else {
    play.innerText = 'Pause';
  }
}

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

function setVideoProgress() {
  video.currentTime = (parseInt(progress.value) * video.duration) / 100;
}
