// $(window).on("load", function () {
//   var soundSpin = new Audio("img/november-rain.mp3");
//   soundSpin.muted = false;
//   soundSpin.play();
//   soundSpin.addEventListener(
//     "ended",
//     function () {
//       soundSpin.currentTime = 0;
//       soundSpin.play();
//     },
//     false
//   );
// });

// audioElement.play();

var btn = document.querySelectorAll(".image");
function click() {
  this.classList.toggle("active");
  // btn.forEach((item) => item.classList.add("active"));
  // this.classList.add("active");
  if (this.classList === "active") {
    this.classList = remove("active");
  }
}
var btn1 = document.getElementById("image");
var btn2 = document.getElementById("detail");

// btn3.onclick = function () {
//   btn2.classList.remove("active");
// };
btn1.onclick = function () {
  btn2.classList.add("active");
};
document.onclick = function (e) {
  if (e.target.id == "closee") {
    btn2.classList.remove("active");
  }
};

// btn.onclick = function () {
//   btn.classList.toggle("active");
// };
btn.forEach((item) => item.addEventListener("click", click));

// var btn = document.getElementById("image");
// btn.onclick = function () {
//   btn.classList.toggle("active");
// };
// for (let i = 0; i < image.length; i++) {
//   btn[i].onclick = function () {
//     let j = 0;
//     while (j < image.length) {
//       btn[j++].className = "image";
//     }
//     btn[i].className = "image active";
//   };
// }
let allMusic = [
  {
    name: "November Rain",
    artist: "Guns N Roses",
    img: "img/GnR--UseYourIllusion1.jpg",
    src: "november-rain",
  },

  {
    name: "Hotel California",
    artist: "Eagels",
    img: "img/eagles1-812x609.jpg",
    src: "hotel-california-live-1977-official-video-hd",
  },
  {
    name: "Sweet Child O' Mine",
    artist: "Guns N Roses",
    img: "img/71h9zr6egfl-ac-sl1400.jpg",
    src: "sweet-child-o-mine-official-music-video",
  },

  {
    name: "Don't Cry",
    artist: "Guns N Roses",
    img: "img/GnR--UseYourIllusion1.jpg",
    src: "dont-cry",
  },

  {
    name: "Straiway to Heaven",
    artist: "Led Zeppelin",
    img: "img/Untitled-design-812x609.jpg",
    src: "stairway-to-heaven-official-audio",
  },
  {
    name: "Comfortably Numb",
    artist: "Pink Floyd",
    img: "img/ab67616d0000b2735d48e2f56d691f9a4e4b0bdf.jpg",
    src: "comfortably-numb",
  },
];

const wrap = document.querySelector(".wrap"),
  spin = wrap.querySelector(".img-area #spin"),
  musicImg = wrap.querySelector(".img-area img"),
  musicName = wrap.querySelector(".song .name"),
  musicArtist = wrap.querySelector(".song .artist"),
  mainAudio = wrap.querySelector("#main-audio"),
  playPauseBtn = wrap.querySelector(".pause"),
  preBtn = wrap.querySelector("#pre"),
  nextBtn = wrap.querySelector("#next"),
  progressArea = wrap.querySelector(".progress-area"),
  progressBar = wrap.querySelector(".progress-bar"),
  musicList = wrap.querySelector(".music-list"),
  moreMusicBtn = wrap.querySelector("#more-music"),
  closemoreMusic = musicList.querySelector("#close");

const volumeControl = document.querySelector(".volume-control");
const volumePanel = document.querySelector(".volume-panel");
const volumeRange = volumePanel.querySelector("input");
const volumeProgress = volumePanel.querySelector(".volume-progress");
const volumeButton = document.querySelector(".volume-btn");
const volumeControls = document.querySelector(".vcontrols");
const unmute = document.querySelector("#volumeup");
const muted = document.querySelector("#volumeoff");
// const materialicons = document.querySelector(".material-icons");
// materialicons.setAttribute("id", "volumeup active");
// mute.addEventListener("click", () => {
//   mute.innerText = "volume_off";
//   volumeProgress.style.width = volumeRange.value + "%";
//   volumeRange.value = 0;
// });
muted.style.display = "none";

// unmute.onclick = function () {
//   // mute.classList.toggle("active");
//   // mute.classList.toggle("acitve");
//   mainAudio.muted = !mainAudio.muted;
//   // if (mainAudio.muted) {
//   muted.style.display = "";
//   unmute.style.display = "none";
//   mainAudio.volume = 0;
//   volumeRange.value = 0;
//   // } else {
//   //   volumeRange.value = mainAudio.volume * 100;
//   // }

//   //   // volumeProgress.style.width = volumeRange.value + "%";
// };
// muted.onclick = function () {
//   // mute.classList.toggle("active");
//   // mute.classList.toggle("acitve");
//   muted.style.display = "none";
//   unmute.style.display = "";
// };
// setInterval(function () {
//   volumeProgress.style.width = volumeRange.value + "%";
// });
const toggleMute = () => {
  mainAudio.muted = !mainAudio.muted;
  if (mainAudio.muted) {
    unmute.style.display = "none";
    muted.style.display = "";
    volumeRange.value = "0";
    volumeProgress.style.width = volumeRange.value + "%";
  } else {
    volumeRange.value = mainAudio.volume * 100;
    volumeProgress.style.width = volumeRange.value + "%";
    muted.style.display = "none";
    unmute.style.display = "";
  }
};
volumeButton.addEventListener("click", toggleMute);
volumeRange.addEventListener("input", () => {
  volumeProgress.style.width = volumeRange.value + "%";
  mainAudio.volume = volumeRange.value / 100;
  if (volumeRange.value == 0) {
    unmute.innerText = "volume_off";
    // volumeRange.value = 0;
    // volumeProgress.style.width = volumeRange.value + "%";
  } else {
    volumeRange.value = mainAudio.volume * 100;
    volumeProgress.style.width = volumeRange.value + "%";
    unmute.innerText = "volume_up";
  }
});

// mute.onclick = function () {
//   mainAudio.volume.toggle = 0;
//   mute.innerText.toggle = "volume_off";
// };
volumeButton.addEventListener("mouseenter", () => {
  volumeControl.style.margin = "0px 2px 0px 0px";
  volumePanel.style.width = "52px";
});
volumeControls.addEventListener("mouseleave", () => {
  volumeControl.style.margin = "0px 0px 0px 0px";
  volumePanel.style.width = "0px";
});

// const volume_slider = document.querySelector(".volume-slider");
// const volumeDown = document.querySelector("#volume-down");
// const volumeUp = document.querySelector("#volume-up");
// volumeDown.addEventListener("click", () => {
//   mainAudio.volume = 0;
//   volume_slider.value = 0;
// });
// volumeUp.addEventListener("click", () => {
//   mainAudio.volume = 1;
// });
// function setVolume() {
//   mainAudio.value = volume_slider.value;
//   mainAudio.volume = volume_slider.value / 100;
// }
// spinning.pause();

moreMusicBtn.addEventListener("click", () => {
  musicList.classList.toggle("show");
});
closemoreMusic.addEventListener("click", () => {
  moreMusicBtn.click();
});
// hideMusic.addEventListener("click", () => {
//   musicList.click();
// });
const repeatBtn = wrap.querySelector("#repeat");

let musicIndex = 1;

window.addEventListener("load", () => {
  loadMusic(musicIndex);
  playingNow();
});
function loadMusic(indexNumb) {
  musicName.innerText = allMusic[indexNumb - 1].name;
  musicArtist.innerText = allMusic[indexNumb - 1].artist;
  musicImg.src = `${allMusic[indexNumb - 1].img}`;
  mainAudio.src = `${allMusic[indexNumb - 1].src}.mp3`;
}
const spinning = spin.animate(
  [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
  {
    duration: 20000,
    iterations: Infinity,
  }
);
spinning.pause();
function playMusic() {
  wrap.classList.add("paused");
  playPauseBtn.querySelector("i").innerText = "pause";
  // spin.style.transform = "rotate(0deg)";

  spinning.play();
  mainAudio.play();
  // imgRoll();
  playingNow();
}
function pauseMusic() {
  wrap.classList.remove("paused");
  playPauseBtn.querySelector("i").innerText = "play_arrow";
  mainAudio.pause();
  spinning.pause();
  // imgRoll();
}

playPauseBtn.addEventListener("click", () => {
  const isMusic = wrap.classList.contains("paused");

  isMusic ? pauseMusic() : playMusic();
  playingNow();
});

function nextMusic() {
  musicIndex++;
  musicIndex > allMusic.length ? (musicIndex = 1) : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  playMusic();
  playingNow();
}
function randomMusic() {
  let randomIndex = Math.floor(Math.random() * allMusic.length + 1);
  do {
    randomIndex = Math.floor(Math.random() * allMusic.length + 1);
  } while (musicIndex === randomIndex);

  musicIndex = randomIndex;
  loadMusic(musicIndex);
  playMusic();
  playingNow();
}
nextBtn.addEventListener("click", () => {
  if (repeatBtn.innerText == "shuffle") {
    randomMusic();
  } else {
    nextMusic();
  }
});
function preMusic() {
  musicIndex--;
  musicIndex < 1 ? (musicIndex = allMusic.length) : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  playMusic();
  playingNow();
}

// nextBtn.addEventListener("click", () => {
//   nextMusic();
// });
preBtn.addEventListener("click", () => {
  if (repeatBtn.innerText == "shuffle") {
    randomMusic();
  } else {
    preMusic();
  }
});
mainAudio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  // console.log("currentTime");
  // console.log("duration");
  let Width = (currentTime / duration) * 100;
  progressBar.style.width = `${Width}%`;

  let musicCurrentTime = wrap.querySelector(".current"),
    musicDuration = wrap.querySelector(".duration");
  mainAudio.addEventListener("loadeddata", () => {
    let audioDuration = mainAudio.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    musicDuration.innerText = `${totalMin}:${totalSec}`;
  });
  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});
progressArea.addEventListener("click", (e) => {
  let progressWidth = progressArea.clientWidth;
  let click = e.offsetX;
  let songDuration = mainAudio.duration;
  mainAudio.currentTime = (click / progressWidth) * songDuration;
});

repeatBtn.addEventListener("click", () => {
  let getText = repeatBtn.innerText;
  switch (getText) {
    case "repeat":
      repeatBtn.innerText = "repeat_one";
      break;
    case "repeat_one":
      repeatBtn.innerText = "shuffle";
      break;
    case "shuffle":
      repeatBtn.innerText = "repeat";
      break;
  }
});
mainAudio.addEventListener("ended", () => {
  let getText = repeatBtn.innerText;
  switch (getText) {
    case "repeat":
      nextMusic();
      playingNow();
      break;
    case "repeat_one":
      mainAudio.currentTime = 0;
      loadMusic(musicIndex);
      playMusic();
      playingNow();
      break;
    case "shuffle":
      let randomIndex = Math.floor(Math.random() * allMusic.length + 1);
      do {
        randomIndex = Math.floor(Math.random() * allMusic.length + 1);
      } while (musicIndex == randomIndex);

      musicIndex = randomIndex;

      loadMusic(musicIndex);
      // randomMusic();
      playMusic();
      playingNow();
      break;
  }
});

const ulTag = wrap.querySelector("ul");
for (let i = 0; i < allMusic.length; i++) {
  let liTag = `<li li-index="${i + 1}">
  <div class="row">
    <span>${allMusic[i].name}</span>
    <p>${allMusic[i].artist}</p>
  </div>
  <span id="${allMusic[i].src}" class="audio-duartion"></span>
  <audio class="${allMusic[i].src}" src="${allMusic[i].src}.mp3"></audio>
</li>`;
  ulTag.insertAdjacentHTML("beforeend", liTag);
  let liAudioDuartionTag = ulTag.querySelector(`#${allMusic[i].src}`);
  let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);
  liAudioTag.addEventListener("loadeddata", () => {
    let duration = liAudioTag.duration;
    let totalMin = Math.floor(duration / 60);
    let totalSec = Math.floor(duration % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`;
    liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`);
  });
}
// console.log(allMusic.length);

const allLiTags = ulTag.querySelectorAll("li");
function playingNow() {
  for (let j = 0; j < allLiTags.length; j++) {
    let audioTag = allLiTags[j].querySelector(".audio-duartion");
    if (allLiTags[j].classList.contains("playing")) {
      allLiTags[j].classList.remove("playing");
      let adDuration = audioTag.getAttribute("t-duration");
      audioTag.innerText = adDuration;
    }
    if (allLiTags[j].getAttribute("li-index") == musicIndex) {
      allLiTags[j].classList.add("playing");
      audioTag.innerText = "PLAYING";
    }
    allLiTags[j].setAttribute("onclick", "clicked(this)");
  }
}

function clicked(element) {
  let getLi = element.getAttribute("li-index");
  musicIndex = getLi;
  loadMusic(musicIndex);
  playMusic();
  playingNow();
}

// mainAudio.volume = 0.1;
