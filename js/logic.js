
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const artist = document.querySelector(`.Artist[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running all together

    const audios = document.querySelectorAll('audio');
    audios.forEach( audio => audio.pause() );

    audio.currentTime = 0; //rewind to the start
    audio.play();

    artist.classList.add('Playing');
}

function removeTransition(e) {
    if( e.propertyName !== 'transform' ) return; // skip it if it's not a transform
    this.classList.remove('Playing');
}

const artists = document.querySelectorAll('.Artist');
artists.forEach( artist => artist.addEventListener('transitionend', removeTransition) );

window.addEventListener('keydown', playSound);

