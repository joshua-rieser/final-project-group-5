const videoContainer = document.querySelector(".video-container");
const playPauseBtn = document.querySelector(".playPauseBtn");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");

function togglePlay() {
  if (videoContainer.paused || videoContainer.ended) {
    videoContainer.play();
  } else {
    videoContainer.pause();
  }
}

function updatePlayBtn() {
  playPauseBtn.innerHTML = videoContainer.paused ? "▶" : "⏸";
}

function handleProgress() {
  const progressPercentage = (videoContainer.currentTime / videoContainer.duration) * 100;
  progressBar.style.flexBasis = `${progressPercentage}%`;
}

function jump(e) {
  const position = (e.offsetX / progress.offsetWidth) * videoContainer.duration;
  videoContainer.currentTime = position;
}

playPauseBtn.addEventListener("click", togglePlay);
videoContainer.addEventListener("click", togglePlay);
videoContainer.addEventListener("play", updatePlayBtn);
videoContainer.addEventListener("pause", updatePlayBtn);
videoContainer.addEventListener("timeupdate", handleProgress);

let mousedown = false;
progress.addEventListener("click", jump);
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mousemove", (e) => mousedown && jump(e));
progress.addEventListener("mouseup", () => (mousedown = false));





const videoContainer2 = document.querySelector(".video-container2");
const playPauseBtn2 = document.querySelector(".playPauseBtn2");
const progress2 = document.querySelector(".progress2");
const progressBar2 = document.querySelector(".progress__filled2");

function togglePlay2() {
  if (videoContainer2.paused || videoContainer2.ended) {
    videoContainer2.play();
  } else {
    videoContainer2.pause();
  }
}

function updatePlayBtn2() {
  playPauseBtn2.innerHTML = videoContainer2.paused ? "►" : "❚❚";
}

function handleProgress2() {
  const progressPercentage2 = (videoContainer2.currentTime / videoContainer2.duration) * 100;
  progressBar2.style.flexBasis = `${progressPercentage2}%`;
}

function jump(e) {
  const position2 = (e.offsetX / progress2.offsetWidth) * videoContainer2.duration;
  videoContainer2.currentTime = position2;
}

playPauseBtn2.addEventListener("click", togglePlay2);
videoContainer2.addEventListener("click", togglePlay2);
videoContainer2.addEventListener("play", updatePlayBtn2);
videoContainer2.addEventListener("pause", updatePlayBtn2);
videoContainer2.addEventListener("timeupdate", handleProgress2);

let mousedown2 = false;
progress2.addEventListener("click", jump);
progress2.addEventListener("mousedown", () => (mousedown2 = true));
progress2.addEventListener("mousemove", (e) => mousedown2 && jump(e));
progress2.addEventListener("mouseup", () => (mousedown2 = false));





const videoContainer3 = document.querySelector(".video-container3");
const playPauseBtn3 = document.querySelector(".playPauseBtn3");
const progress3 = document.querySelector(".progress3");
const progressBar3 = document.querySelector(".progress__filled3");

function togglePlay3() {
  if (videoContainer3.paused || videoContainer3.ended) {
    videoContainer3.play();
  } else {
    videoContainer3.pause();
  }
}

function updatePlayBtn3() {
  playPauseBtn3.innerHTML = videoContainer3.paused ? "►" : "❚❚";
}

function handleProgress3() {
  const progressPercentage3 = (videoContainer3.currentTime / videoContainer3.duration) * 100;
  progressBar3.style.flexBasis = `${progressPercentage3}%`;
}

function jump(e) {
  const position3 = (e.offsetX / progress3.offsetWidth) * videoContainer3.duration;
  videoContainer3.currentTime = position3;
}

playPauseBtn3.addEventListener("click", togglePlay3);
videoContainer3.addEventListener("click", togglePlay3);
videoContainer3.addEventListener("play", updatePlayBtn3);
videoContainer3.addEventListener("pause", updatePlayBtn3);
videoContainer3.addEventListener("timeupdate", handleProgress3);

let mousedown3 = false;
progress3.addEventListener("click", jump);
progress3.addEventListener("mousedown", () => (mousedown3 = true));
progress3.addEventListener("mousemove", (e) => mousedown3 && jump(e));
progress3.addEventListener("mouseup", () => (mousedown3 = false));





const videoContainer4 = document.querySelector(".video-container4");
const playPauseBtn4 = document.querySelector(".playPauseBtn4");
const progress4 = document.querySelector(".progress4");
const progressBar4 = document.querySelector(".progress__filled4");

function togglePlay4() {
  if (videoContainer4.paused || videoContainer4.ended) {
    videoContainer4.play();
  } else {
    videoContainer4.pause();
  }
}

function updatePlayBtn4() {
  playPauseBtn4.innerHTML = videoContainer4.paused ? "►" : "❚❚";
}

function handleProgress4() {
  const progressPercentage4 = (videoContainer4.currentTime / videoContainer4.duration) * 100;
  progressBar4.style.flexBasis = `${progressPercentage4}%`;
}

function jump(e) {
  const position4 = (e.offsetX / progress4.offsetWidth) * videoContainer4.duration;
  videoContainer4.currentTime = position4;
}

playPauseBtn4.addEventListener("click", togglePlay4);
videoContainer4.addEventListener("click", togglePlay4);
videoContainer4.addEventListener("play", updatePlayBtn4);
videoContainer4.addEventListener("pause", updatePlayBtn4);
videoContainer4.addEventListener("timeupdate", handleProgress4);

let mousedown4 = false;
progress4.addEventListener("click", jump);
progress4.addEventListener("mousedown", () => (mousedown4 = true));
progress4.addEventListener("mousemove", (e) => mousedown4 && jump(e));
progress4.addEventListener("mouseup", () => (mousedown4 = false));






const videoContainer5 = document.querySelector(".video-container5");
const playPauseBtn5 = document.querySelector(".playPauseBtn5");
const progress5 = document.querySelector(".progress5");
const progressBar5 = document.querySelector(".progress__filled5");

function togglePlay5() {
  if (videoContainer5.paused || videoContainer5.ended) {
    videoContainer5.play();
  } else {
    videoContainer5.pause();
  }
}

function updatePlayBtn5() {
  playPauseBtn5.innerHTML = videoContainer5.paused ? "►" : "❚❚";
}

function handleProgress5() {
  const progressPercentage5 = (videoContainer5.currentTime / videoContainer5.duration) * 100;
  progressBar5.style.flexBasis = `${progressPercentage5}%`;
}

function jump(e) {
  const position5 = (e.offsetX / progress5.offsetWidth) * videoContainer5.duration;
  videoContainer5.currentTime = position5;
}

playPauseBtn5.addEventListener("click", togglePlay5);
videoContainer5.addEventListener("click", togglePlay5);
videoContainer5.addEventListener("play", updatePlayBtn5);
videoContainer5.addEventListener("pause", updatePlayBtn5);
videoContainer5.addEventListener("timeupdate", handleProgress5);

let mousedown5 = false;
progress5.addEventListener("click", jump);
progress5.addEventListener("mousedown", () => (mousedown5 = true));
progress5.addEventListener("mousemove", (e) => mousedown5 && jump(e));
progress5.addEventListener("mouseup", () => (mousedown5 = false));
