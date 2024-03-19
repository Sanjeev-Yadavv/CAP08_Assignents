 
 let timeRemaining;
 let timeIntervalID;
 
 function start(){
    clearInterval(timeIntervalID);

let hours = Number(document.getElementById("hours").value)
let minutes = Number(document.getElementById("minutes").value)
let seconds = Number(document.getElementById("seconds").value)
timeRemaining = (hours*3600)+(minutes*60)+seconds;
// console.log(timeRemaining)
timeIntervalID = setInterval(function(){
    timeRemaining--;

    let hrs = Math.floor(timeRemaining/3600);
let min = Math.floor((timeRemaining%3600)/60);
let sec = Math.floor(timeRemaining%60)

document.getElementById('hours').value = hrs
document.getElementById('minutes').value = min
document.getElementById('seconds').value = sec

if(timeRemaining<=0){
    reset()
    alert("Time is up");
}
},1000)



}

function pause(){
    clearInterval(timeIntervalID)
    timeIntervalID = null
}

function reset(){
    pause()
    document.getElementById('hours').value = 0
document.getElementById('minutes').value = 0
document.getElementById('seconds').value = 0
}