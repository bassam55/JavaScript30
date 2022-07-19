//event listener for each key stroke
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[key="${e.key}"]`);
    const key = document.querySelector(`.key[key="${e.key}"]`);
    if(!audio)  return; // stop function if a key with no note is pressed
    audio.currentTime = 0; //rewind to start/ start playing again on each press
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e){

     if(e.propertyName !== 'transform') return;
     this.classList.remove('playing');

}
const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));