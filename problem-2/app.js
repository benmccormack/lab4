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

// start timer function
function startTimer(hours, minutes, seconds){
    // everything has to be converted to seconds and added
    let hoursInSeconds = hours*3600;
    let minutesInSeconds = minutes*60;
    seondsInSeconds = seconds*1;

    //getting total number of seconds
    total = hoursInSeconds+minutesInSeconds+seondsInSeconds;
    
    // the time remaining is set to the total time
    let timeRemaining = total;
    
    // observable is called every second
    let observable = Observable;
    observable = interval(1000);
 
    observable.subscribe(x => {
            if(timeRemaining == 0){
                // form is reset when timer expires and the countdown has finished message is dispalyed.
                countdownForm.reset();
                countdownDiv.innerHTML = "Countdown has finished."
                return;
            }else{
                if(timeRemaining > 0){
                    timeRemaining = timeRemaining - 1;
                    // calling function to display the time remaining
                    showTimeRemaining(timeRemaining);
                } 
            }
        });

}

// function to display the time remaining in hours, minutes and seconds.
function showTimeRemaining(timeRemaining){
    // time remaining needs to be divided up into hours minutes and seconds - floor rounds down to nearest integer
    hours = Math.floor(timeRemaining/3600); 
    minutes = Math.floor(timeRemaining % 3600 / 60);
    seconds = Math.floor(timeRemaining % 3600 % 60);
    // setting the inner HTML of the countdown div to be that of the current time remaining in hours minutes and seconds
    countdownDiv.innerHTML = hours + 'h ' + minutes +'m ' + seconds +'s '; 
}