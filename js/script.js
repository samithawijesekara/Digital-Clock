setInterval(updateDigitalClock, 1000);

function updateDigitalClock() {

    var updateDate = new Date();
    var updateHours = updateDate.getHours();
    var updateMinutes = updateDate.getMinutes();
    var updateSeconds = updateDate.getSeconds();

    if (updateHours < 10) { updateHours = "0" + updateHours };
    if (updateMinutes < 10) { updateMinutes = "0" + updateMinutes };
    if (updateSeconds < 10) { updateSeconds = "0" + updateSeconds };

    var updateClock = updateHours + ":" + updateMinutes + ":" + updateSeconds

    document.getElementById("DigitalClock").innerText = updateClock;

    if (updateHours <= 12) {
        document.getElementById("greeting").innerHTML = "Good Mornig.!!";
    } else {
        document.getElementById("greeting").innerHTML = "Good Afternon.!!";
    }
}