
/** @type {HTMLDivElement} */
const secondsHand = document.querySelector('.second-hand');

/** @type {HTMLDivElement} */
const minutesHand = document.querySelector('.min-hand');

/** @type {HTMLDivElement} */
const hoursHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegree = ((seconds/60)*360)+90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutesDegree = ((minutes/60)*360)+90;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hoursDegree = ((hours/12)*360)+90;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;



}
 setInterval(setDate, 1000 );