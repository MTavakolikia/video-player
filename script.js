const video = document.querySelector('video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn=document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');
const fullscreenBtn = document.querySelector('.fullscreen');


// Play & Pause ----------------------------------- //
function togglePlay(){
    if(video.paused){
        video.play();
        playBtn.classList.replace('fa-play','fa-pause');
        playBtn.setAttribute('title','Pause');
    }else{
        video.pause();
        playBtn.classList.replace('fa-pause','fa-play');
        playBtn.setAttribute('title','Play');
    }
}

// On Video End
function showPlayIcon(){
    video.pause();
    playBtn.classList.replace('fa-pause','fa-play');
}

// Progress Bar ---------------------------------- //

// Update Progress Bar as video plays
function updateProgress() {
    progressBar.style.width=`${(video.currentTime/video.duration)*100}%`;
  }

// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //


// Event Listeners
playBtn.addEventListener('click',togglePlay);
video.addEventListener('click',togglePlay);
video.addEventListener('ended',showPlayIcon);
video.addEventListener('timeupdate',updateProgress);
video.addEventListener('canplay',updateProgress);