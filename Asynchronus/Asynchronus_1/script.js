let msec = 0;
let sec = 0;
let min = 0;
let intervalId;

function startTime(){
    clearInterval(intervalId)
    
    intervalId = setInterval(myFun,10)
}

function myFun(){
        msec = msec +1;
        if(msec==100){
            sec = sec + 1;
            msec = 0
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
    let msecStr = msec<10? `0${msec}` : msec;
    let secStr = sec<10? `0${sec}` : sec
    let minStr = min<10? `0${min}` : min

    document.getElementById('watch').innerText = `${minStr} : ${secStr} : ${msecStr}`
   
}
function stopTime(){
    clearInterval(intervalId)
}

function resetTime(){
    clearInterval(intervalId)
    msec = 0;
     sec = 0;
     min = 0;
    document.getElementById('watch').innerText = `00 : 00 : 00`
    
}


