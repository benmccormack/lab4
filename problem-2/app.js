// timer tutorial used to understand how observable would work in the context of a timer
// https://www.youtube.com/watch?v=NjsHNZW8SFk&ab_channel=developer.school

const { fromEvent } = rxjs;
const { Observable } = rxjs;
const { interval } = rxjs;
const { timer } = rxjs;

let countdownDiv = document.getElementById("countdown");
let countdownForm = document.getElementById("countdownForm");


startButton = document.getElementById("startCountdownButton");
// on button click the getTime operation is called.
fromEvent(startButton, 'click')
    .subscribe(()=> {getTime();})

// function to get the fields from the form
function getTime(){
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let seconds = document.getElementById("seconds").value;

    startTimer(hours, minutes, seconds);
}