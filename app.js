
    var h1 = document.getElementsByTagName('h1')[0],

    start = document.getElementById('start'),

    stop = document.getElementById('stop'),

    clear = document.getElementById('clear'),

    hours = 0, days = 0, weeks = 0,

    totalHours = 0.00,

    t;

    speed = 1000;

    //var box1 = document.getElementById('box1');





function add() {

    totalHours++;

    hours++;

    if (hours >= 8) {

        hours = 0;

        days++;

        if (days >= 5) {

            days = 0;

            weeks++;

        }

    }









        h1.innerHTML = (weeks ? (weeks > 9 ? weeks : "0" + weeks) : "00") + " weeks " + "<br>" + (days ? (days> 9 ? days : "0" + days) : "00") +" days " +  "<br>" + (hours > 9 ? hours : "0" + hours) + " hours";



    whitemale.innerHTML = "$" + (14.93 * totalHours).toFixed(2);

    whitefemale.innerHTML = "$" + (12.82 * totalHours).toFixed(2);

    blackfemale.innerHTML = "$" + (11.70 * totalHours).toFixed(2);

    asianfemale.innerHTML = "$" + (13.80 * totalHours).toFixed(2);

    hispanicfemale.innerHTML = "$" + (11.08 * totalHours).toFixed(2);

   

}

function timer(sp) {

    t = setInterval(add, sp);

    console.log(t);

}




/* Start button */

start.onclick = function(){
    
   timer(speed);
}


/* Stop button */

stop.onclick = function() {

    console.log(t);

    clearTimeout(t);

}



/* Clear button */

clear.onclick = function() {

    hours = 0; days = 0; weeks = 0;

        h1.innerHTML = (weeks ? (weeks > 9 ? weeks : "0" + weeks) : "00") + " weeks " + "<br>" + (days ? (days> 9 ? days : "0" + days) : "00") +" days " +  "<br>" + (hours > 9 ? hours : "0" + hours) + " hours";


}

speedup.onclick = function() {
    
    speed = speed/2;
    clearTimeout(t);
    timer(speed);

    console.log(t + " speedup");
     console.log(speed);
}

slowdown.onclick = function() {
    speed = speed * 2;
    clearTimeout(t);
    timer(speed);
    
    console.log(speed);
}

