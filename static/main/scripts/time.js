function pass_time() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    var format = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

    document.getElementsByClassName('time')[0].textContent = format;
}

pass_time();

setInterval(pass_time, 1000);