// on click play the song
let playing = true;
let song = document.getElementById('audio');
let songTitle = document.getElementById('songTitle');
let artist = document.getElementById('artistName');
let progressBar = document.getElementById('progressBar');

let songIndex = 0;
let songs = ['music/bensound-energy.mp3', 'music/bensound-hey.mp3', 'music/bensound-perception.mp3']
songTitles = ["Lush Life", "Ruin My Life", "All the Time"];

let playTrack = document.getElementsByClassName('play-track')
let volumeSlider = document.getElementById('volumeSlider')

const playOrPause = () => {
  console.log(songIndex)
  if (playing) {
  	console.log(songIndex)
  	document.getElementById('playButton').style.display = 'none';
  	document.getElementById('pauseButton').style.display = 'inline-block';
  	song.src = songs[songIndex];
    song.play();
    songTitle.innerHTML = songTitles[songIndex];
    artist.innerHTML = 'Zara Larsson' 
    playing = false;

  } else {
  	document.getElementById('pauseButton').style.display = 'none';
  	document.getElementById('playButton').style.display = 'inline-block';
  	song.pause();
  	songTitle.innerHTML = songTitles[songIndex];
    artist.innerHTML = 'Zara Larsson'
    playing = true;
    console.log(songIndex)
  }
}

song.addEventListener('ended', function(){
	nextSong()
})

const nextSong = () => {
	songIndex++;
	if (songIndex > 2){
		songIndex = 0;
	}

	song.src = songs[songIndex];
	songTitle.innerHTML = songTitles[songIndex];

	playing = true;
	playOrPause(songIndex)
}

const previousSong = () => {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 2;
    };

    song.src = songs[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playOrPause(songIndex);
}

// update progressBar.max to display song duration
const updateProgressValue = () => {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
};

// update the progress bar as song goes on
setInterval(updateProgressValue, 500);

// change progressBar.value when dragging the progress bar slider
const changeProgressBar = () => {
    song.currentTime = progressBar.value;
}

// add event listener to every button in top tracks section

for (let i = 0; i < playTrack.length; i++){
	playTrack[i].addEventListener('click', function(){
		songIndex = i
		console.log(songIndex)
		playOrPause()
	})
}

// show volume bar when hovering over volume button and the bar itself */
document.getElementById('volumeButton').addEventListener('mouseover', function(){
	document.querySelector('.volume-bar-div').style.display = 'inline-block'
})

document.getElementById('volumeBar').addEventListener('mouseover', function(){
	document.querySelector('.volume-bar-div').style.display = 'inline-block'
})

document.getElementById('volumeBar').addEventListener('mouseout', function(){
	document.querySelector('.volume-bar-div').style.display = 'none'
})

// upon moving the volume slider increase or decrease volume
volumeSlider.addEventListener('mousemove', function(){
	song.volume = volumeSlider.value/100
})