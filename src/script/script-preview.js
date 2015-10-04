var currTime = 30;

setInterval(function() {
    currTime++;
    if (currTime > 40) {
        currTime = 30;
    }

    $('#retail-time').text('4:' + currTime + ' PM');
}, 1000);

