//clock
function clock() {
    var nowTime = new Date();
    var nowHour = nowTime.getHours();
    nowHour = nowHour < 10 ? "0" + nowHour : nowHour;
    var nowMin  = nowTime.getMinutes();
    nowMin = nowMin < 10 ? "0" + nowMin : nowMin;
    var nowSec  = nowTime.getSeconds();
    nowSec = nowSec < 10 ? "0" + nowSec : nowSec;
    var time = nowHour + ":" + nowMin + ":" + nowSec;
    document.getElementById("clockMain").innerHTML = time;
}
setInterval('clock()',1);

//date
function date(){
    var nowDate = new Date();
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth() + 1;
    let date = nowDate.getDate();
    let dayNum = nowDate.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = weekday[dayNum];
    var today = `${year}.${month}.${date} ${day}`;
    document.getElementById("dateMain").innerHTML = today;
}
setInterval('date()',1);






//sounds
var startSound = new Audio("./start.mp3");
var resetSound = new Audio("./reset.mp3");
var finishSound = new Audio("./finish.mp3");






var tSet = [3000, 3000, 3000, 3000];
var t1 = tSet[0];
var t2 = tSet[1];
var t3 = tSet[2];
var t4 = tSet[3];

function timer1Main() {
    t1 = t1 > 599999 ? 599999 : t1;
    var t1Min = Math.floor(t1 / 6000);
    t1Min = t1Min < 10 ? "0" + t1Min : t1Min;
    var t1Sec = Math.ceil((t1 % 6000) / 100);
    t1Sec = t1Sec < 10 ? "0" + t1Sec : t1Sec;
    t1Min = t1Sec == 60 ? Number(t1Min) + 1 : t1Min;
    t1Min = Number(t1Min) < 10 ? "0" + Number(t1Min) : t1Min;
    t1Sec = t1Sec == 60 ? "00" : t1Sec;
    document.getElementById("t1").innerHTML = t1Min + ":" + t1Sec;
    if(t1 == 0){
        document.getElementById("t1").style.color = '#ff0000';
        clearInterval(timer1);
        startSound.pause();
        startSound.currentTime = 0;
        resetSound.pause();
        resetSound.currentTime = 0;
        finishSound.pause();
        finishSound.currentTime = 0;
        finishSound.play();
    }
    else{
        document.getElementById("t1").style.color = '#333333';
    }
    t1 =  t1 > 0 ? t1 - 1 : t1;
}
timer1Main();

function timer2Main() {
    t2 = t2 > 599999 ? 599999 : t2;
    var t2Min = Math.floor(t2 / 6000);
    t2Min = t2Min < 10 ? "0" + t2Min : t2Min;
    var t2Sec = Math.ceil((t2 % 6000) / 100);
    t2Sec = t2Sec < 10 ? "0" + t2Sec : t2Sec;
    t2Min = t2Sec == 60 ? Number(t2Min) + 1 : t2Min;
    t2Min = Number(t2Min) < 10 ? "0" + Number(t2Min) : t2Min;
    t2Sec = t2Sec == 60 ? "00" : t2Sec;
    document.getElementById("t2").innerHTML = t2Min + ":" + t2Sec;
    if(t2 == 0){
        document.getElementById("t2").style.color = '#ff0000';
        clearInterval(timer2);
        startSound.pause();
        startSound.currentTime = 0;
        resetSound.pause();
        resetSound.currentTime = 0;
        finishSound.pause();
        finishSound.currentTime = 0;
        finishSound.play();
    }
    else{
        document.getElementById("t2").style.color = '#333333';
    }
    t2 =  t2 > 0 ? t2 - 1 : t2;
}
timer2Main();

function timer3Main() {
    t3 = t3 > 599999 ? 599999 : t3;
    var t3Min = Math.floor(t3 / 6000);
    t3Min = t3Min < 10 ? "0" + t3Min : t3Min;
    var t3Sec = Math.ceil((t3 % 6000) / 100);
    t3Sec = t3Sec < 10 ? "0" + t3Sec : t3Sec;
    t3Min = t3Sec == 60 ? Number(t3Min) + 1 : t3Min;
    t3Min = Number(t3Min) < 10 ? "0" + Number(t3Min) : t3Min;
    t3Sec = t3Sec == 60 ? "00" : t3Sec;
    document.getElementById("t3").innerHTML = t3Min + ":" + t3Sec;
    if(t3 == 0){
        document.getElementById("t3").style.color = '#ff0000';
        clearInterval(timer3);
        startSound.pause();
        startSound.currentTime = 0;
        resetSound.pause();
        resetSound.currentTime = 0;
        finishSound.pause();
        finishSound.currentTime = 0;
        finishSound.play();
    }
    else{
        document.getElementById("t3").style.color = '#333333';
    }
    t3 =  t3 > 0 ? t3 - 1 : t3;
}
timer3Main();

function timer4Main() {
    t4 = t4 > 599900 ? 599900 : t4;
    var t4Min = Math.floor(t4 / 6000);
    t4Min = t4Min < 10 ? "0" + t4Min : t4Min;
    var t4Sec = Math.ceil((t4 % 6000) / 100);
    t4Sec = t4Sec < 10 ? "0" + t4Sec : t4Sec;
    t4Min = t4Sec == 60 ? Number(t4Min) + 1 : t4Min;
    t4Min = Number(t4Min) < 10 ? "0" + Number(t4Min) : t4Min;
    t4Sec = t4Sec == 60 ? "00" : t4Sec;
    document.getElementById("t4").innerHTML = t4Min + ":" + t4Sec;
    if(t4 == 0){
        document.getElementById("t4").style.color = '#ff0000';
        clearInterval(timer4);
        startSound.pause();
        startSound.currentTime = 0;
        resetSound.pause();
        resetSound.currentTime = 0;
        finishSound.pause();
        finishSound.currentTime = 0;
        finishSound.play();
    }
    else{
        document.getElementById("t4").style.color = '#333333';
    }
    t4 =  t4 > 0 ? t4 - 1 : t4;
}
timer4Main();




var t1Active = true;
var t2Active = true;
var t3Active = true;
var t4Active = true;

$("#timer1").click(function(){
    if(t1Active){
        document.getElementById("timer1").innerHTML = '<i class="fa-solid fa-pause"></i>';
        t1Active = !t1Active;
        startSound.pause();
        startSound.currentTime = 0;
        resetSound.pause();
        resetSound.currentTime = 0;
        finishSound.pause();
        finishSound.currentTime = 0;
        startSound.play();
        timer1 = setInterval("timer1Main()", 10);
    }
    else{
        document.getElementById("timer1").innerHTML = '<i class="fa-solid fa-play"></i>';
        t1Active = !t1Active;
        clearInterval(timer1);
    }
});

$("#timer2").click(function(){
    if(t2Active){
        document.getElementById("timer2").innerHTML = '<i class="fa-solid fa-pause"></i>';
        t2Active = !t2Active;
        startSound.pause();
        startSound.currentTime = 0;
        resetSound.pause();
        resetSound.currentTime = 0;
        finishSound.pause();
        finishSound.currentTime = 0;
        startSound.play();
        timer2 = setInterval("timer2Main()", 10);
    }
    else{
        document.getElementById("timer2").innerHTML = '<i class="fa-solid fa-play"></i>';
        t2Active = !t2Active;
        clearInterval(timer2);
    }
});

$("#timer3").click(function(){
    if(t3Active){
        document.getElementById("timer3").innerHTML = '<i class="fa-solid fa-pause"></i>';
        t3Active = !t3Active;
        startSound.pause();
        startSound.currentTime = 0;
        resetSound.pause();
        resetSound.currentTime = 0;
        finishSound.pause();
        finishSound.currentTime = 0;
        startSound.play();
        timer3 = setInterval("timer3Main()", 10);
    }
    else{
        document.getElementById("timer3").innerHTML = '<i class="fa-solid fa-play"></i>';
        t3Active = !t3Active;
        clearInterval(timer3);
    }
});

$("#timer4").click(function(){
    if(t4Active){
        document.getElementById("timer4").innerHTML = '<i class="fa-solid fa-pause"></i>';
        t4Active = !t4Active;
        startSound.pause();
        startSound.currentTime = 0;
        resetSound.pause();
        resetSound.currentTime = 0;
        finishSound.pause();
        finishSound.currentTime = 0;
        startSound.play();
        timer4 = setInterval("timer4Main()", 10);
    }
    else{
        document.getElementById("timer4").innerHTML = '<i class="fa-solid fa-play"></i>';
        t4Active = !t4Active;
        clearInterval(timer4);
    }
});

$("#timer1-re").click(function(){
    t1Active = true;
    t1 = tSet[0];
    timer1Main();
    document.getElementById("timer1").innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(timer1);
    startSound.pause();
    startSound.currentTime = 0;
    resetSound.pause();
    resetSound.currentTime = 0;
    finishSound.pause();
    finishSound.currentTime = 0;
    resetSound.play();
});

$("#timer2-re").click(function(){
    t2Active = true;
    t2 = tSet[1];
    timer2Main();
    document.getElementById("timer2").innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(timer2);
    startSound.pause();
    startSound.currentTime = 0;
    resetSound.pause();
    resetSound.currentTime = 0;
    finishSound.pause();
    finishSound.currentTime = 0;
    resetSound.play();
});

$("#timer3-re").click(function(){
    t3Active = true;
    t3 = tSet[2];
    timer3Main();
    document.getElementById("timer3").innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(timer3);
    startSound.pause();
    startSound.currentTime = 0;
    resetSound.pause();
    resetSound.currentTime = 0;
    finishSound.pause();
    finishSound.currentTime = 0;
    resetSound.play();
});

$("#timer4-re").click(function(){
    t4Active = true;
    t4 = tSet[3];
    timer4Main();
    document.getElementById("timer4").innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(timer4);
    startSound.pause();
    startSound.currentTime = 0;
    resetSound.pause();
    resetSound.currentTime = 0;
    finishSound.pause();
    finishSound.currentTime = 0;
    resetSound.play();
});

$("#timer1-set").click(function(){
    modal.showModal();
});

$("#timer2-set").click(function(){
    modal.showModal();
});

$("#timer3-set").click(function(){
    modal.showModal();
});

$("#timer4-set").click(function(){
    modal.showModal();
});

const modal = document.querySelector("dialog");
$("#close").click(function(){
    modal.close();

    var t1SetMin = document.getElementById("t1-set-min");
    var t1SetSec = document.getElementById("t1-set-sec");
    tSet[0] = (Number(t1SetMin.value) * 60 + Number(t1SetSec.value)) * 100;
    var t2SetMin = document.getElementById("t2-set-min");
    var t2SetSec = document.getElementById("t2-set-sec");
    tSet[1] = (Number(t2SetMin.value) * 60 + Number(t2SetSec.value)) * 100;
    var t3SetMin = document.getElementById("t3-set-min");
    var t3SetSec = document.getElementById("t3-set-sec");
    tSet[2] = (Number(t3SetMin.value) * 60 + Number(t3SetSec.value)) * 100;
    var t4SetMin = document.getElementById("t4-set-min");
    var t4SetSec = document.getElementById("t4-set-sec");
    tSet[3] = (Number(t4SetMin.value) * 60 + Number(t4SetSec.value)) * 100;

    t1Active = true;
    t1 = tSet[0];
    timer1Main();
    document.getElementById("timer1").innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(timer1);
    t2Active = true;
    t2 = tSet[1];
    timer2Main();
    document.getElementById("timer2").innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(timer2);
    t3Active = true;
    t3 = tSet[2];
    timer3Main();
    document.getElementById("timer3").innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(timer3);
    t4Active = true;
    t4 = tSet[3];
    timer4Main();
    document.getElementById("timer4").innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(timer4);
    
    startSound.pause();
    startSound.currentTime = 0;
    resetSound.pause();
    resetSound.currentTime = 0;
    finishSound.pause();
    finishSound.currentTime = 0;
    resetSound.play();
});