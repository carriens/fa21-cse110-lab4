{
let d = new Date();
let time = d.toLocaleTimeString();

function printTime() {
    console.log(time);
}

var intervalID = setInterval(printTime, [1000]);

}