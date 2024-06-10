const playlist = [
    { name: "Baby Shark", src: "./assets/audio/song1.mp3" },
    { name: "Ragatanga - Rouge", src: "./assets/audio/song2.mp3" },
    { name: "Estátua - Xuxa", src: "./assets/audio/song3.mp3" }
];

const audioPlayer = document.getElementById('audioPlayer');
    const playPauseButton = document.querySelector('.bi-play-fill');
    const progressBar = document.querySelector('.progress-bar');
    const currentTime = document.querySelector('.current-time');
    const duration = document.querySelector('.duration');
    const playlistContainer = document.getElementById('playlist');
    let currentSongIndex = 0;

    function loadSong(index) {
        audioPlayer.src = playlist[index].src;
        audioPlayer.play();
    }

    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
    }

    playlist.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = song.name;
        listItem.addEventListener('click', function() {
            currentSongIndex = index;
            loadSong(currentSongIndex);
        });
        playlistContainer.appendChild(listItem);
    });

    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.classList.remove('bi-play-fill');
            playPauseButton.classList.add('bi-pause-fill');
        } else {
            audioPlayer.pause();
            playPauseButton.classList.remove('bi-pause-fill');
            playPauseButton.classList.add('bi-play-fill');
        }
    }

    function skipForward() {
        audioPlayer.currentTime += 10; // Skips forward 10 seconds
    }

    function skipBackward() {
        audioPlayer.currentTime -= 10; // Skips backward 10 seconds
    }

    audioPlayer.addEventListener('timeupdate', () => {
        const currentTimeMinutes = Math.floor(audioPlayer.currentTime / 60);
        const currentTimeSeconds = Math.floor(audioPlayer.currentTime % 60);
        const durationMinutes = Math.floor(audioPlayer.duration / 60);
        const durationSeconds = Math.floor(audioPlayer.duration % 60);

        currentTime.textContent = `${currentTimeMinutes}:${currentTimeSeconds < 10 ? '0' : ''}${currentTimeSeconds}`;
        duration.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;

        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
    });

    audioPlayer.addEventListener('ended', () => {
        playNextSong();
    });