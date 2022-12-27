//Global variables for the functions
let hr 
let min 
let sec 
let day 
let month 
let year 
let tm 
let dmy 

//Array to show the days of the week
var week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

//Array to show the months of the year
var arrayMes = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"] 

//function to get date
function time(){
    let temp = new Date
    temp.toUTCString()
    
    hr = temp.getHours()
    min = temp.getMinutes()
    sec = temp.getSeconds()

    day = temp.getDay()
    month = temp.getMonth()
    year = temp.getFullYear()

    tm = hr + ':' + min + ':' + sec
    dmy = week[day] + '/ ' + arrayMes[month] + '/ ' + year

    

    horario()

    document.querySelector('.hour').textContent = tm
    document.querySelector('.date').textContent = dmy
}

//Function to add zero in front of time character
function horario(){
    if (sec < 10 && min < 10 && hr < 10){
        tm = '0' + hr + ':0' + min + ':0' + sec
    }else if(sec < 10 && min < 10){
        tm = hr + ':0' + min + ':0' + sec
    }else if(sec < 10 && hr < 10){
        tm = '0'  + hr + ':'+ min + ':0' + sec
    }else if (min < 10 && hr < 10){
        tm = '0' + hr + ':0' + min + ':' + sec
    }else if(hr < 10){
        tm = '0' + hr + ':' + min + ':' + sec
    }else if(min < 10){
        tm = hr + ':0' + min + ':' + sec
    }else if(sec < 10){
        tm = hr + ':' + min + ':0' + sec
    }
}


setInterval(time, 500)
