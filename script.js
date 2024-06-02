const toggleSound = () => {
    const audio = document.getElementById('ocean-audio');
    audio.volume = 0.7;

    if (audio.paused) {
        audio.play();
        document.querySelector('.toggle__sound img').setAttribute('src', './assets/images/withoutsound.svg');
    } else {
        audio.pause();
        document.querySelector('.toggle__sound img').setAttribute('src', './assets/images/sound.svg');
    }
} 