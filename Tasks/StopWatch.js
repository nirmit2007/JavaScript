let seconds = 0;
let interval = null;

function start() {

    if (interval != null) 
    {
        return;
    }

    interval = setInterval(function () 
    {
        seconds++;
        let hrs = Math.floor(seconds / 3600);
        let mins = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;

        document.getElementById("display").innerHTML = hrs + ":" + mins + ":" + secs;

    }, 1000);
}

function stop() 
{
    clearInterval(interval);
    interval = null;
}