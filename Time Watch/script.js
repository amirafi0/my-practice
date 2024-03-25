let [sec, min, hour] = [0,0,0]
let display = document.querySelector('.display');
let value = 0;

function watch(){
    sec++;
    if(sec == 60){
        sec = 0;
        min++;
        if(min == 60){
            min = 0;
            hour++;
        }
    }

    let h = hour < 10 ? '0' + hour : hour;
    let m = min < 10 ? '0' + min : min;
    let s = sec < 10 ? '0' + sec : sec;

    display.innerHTML=h + ':' + m + ':' + s;
}

function start(){

    if(value !== 0){

        clearInterval(value)
    }
  value =  setInterval(watch, 1000);
}

function pause(){
    clearInterval(value);
}

function reset(){
    clearInterval(value);
    [sec, min, hour] = [0,0,0]
    display.innerHTML = '00:00:00'
}

