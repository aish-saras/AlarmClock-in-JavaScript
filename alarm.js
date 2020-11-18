console.log("this is alarm clock exercise");

const time = document.getElementById("time")

const dateDiv = document.getElementById('date')

const hour = document.getElementById('hour')

const min = document.getElementById('min')

const setBtn = document.getElementById('setBtn')

const hopt = document.getElementsByClassName('hopt')

const mopt = document.getElementsByClassName('mopt')

const setAlarm = document.getElementById('setAlarm')


showTime();
setOptions(hour, min);

setBtn.addEventListener('click', alarm);

function setOptions(hour, min) {
    for (let index = 0; index < 24; index++) {
        if (index < 10)
            hour.innerHTML += `<option class="mopt"value="${index}">0${index}</option>`;
        else
            hour.innerHTML += `<option class="mopt"value="${index}">${index}</option>`;

    }

    for (let index = 0; index < 60; index++) {
        if (index < 10)
            min.innerHTML += `<option class="mopt"value="${index}">0${index}</option>`;
        else
            min.innerHTML += `<option class="mopt"value="${index}">${index}</option>`;

    }

}


function showTime() {

    let date = new Date();
    let curD = date.getDate();
    let curM = date.getMonth();
    let curY = date.getFullYear();

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    let curDate = days[date.getDay()] + ", " + curD + " " + months[curM] + " " + curY + "(IST)";

    dateDiv.textContent = curDate;


    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();


    let session = "AM"
    if (h == 0) h = 12;
    if (h > 12) { h -= 12; session = "PM" };

    h = (h < 10) ? h = "0" + h : h;
    m = (m < 10) ? m = "0" + m : m;
    s = (s < 10) ? s = "0" + s : s;


    let t = h + ":" + m + ":" + s + " " + session;
    time.textContent = t;


    setTimeout(showTime, 1000);


}
let t;
function check() {
    console.log('check called')
    let date = new Date();

    t = setTimeout(check, 1000);
    if (hour.value == date.getHours() && min.value == date.getMinutes() && date.getSeconds() == 0) {
        setAlarm.innerHTML = `<p>Alarm is running!</p>
        <button id="stopBtn" class="btn btn-primary my-3 ml-4">Stop</button>`;

        stopBtnExist = true;

        let audio = new Audio('https://www.tones7.com/media/extreme_clock_alarm.mp3');
        audio.play();


        const stopBtn = document.getElementById('stopBtn');
        stopBtn.addEventListener('click', () => {
            // clearTime(t);


            audio.pause();


            restoreForm();

        })

    }

}



function alarm() {

    console.log('inside alarm');
    if (hour.value == "Select" || min.value == 'Select') alert('what');

    else {
        let h;
        let m;


        h = (hour.value < 10) ? "0" + hour.value : h;
        m = (min.value < 10) ? "0" + min.value : m;


        setAlarm.innerHTML = `<p>Alarm is set for ${h}:${m}</p>
        <button id="resetBtn" type="submit" class="btn btn-primary my-3 ml-4">Reset</button>`;


        const reset = document.getElementById('resetBtn');
        reset.addEventListener('click', restoreForm);

        check();

    }


}


function restoreForm() {

    window.location.reload();

}



