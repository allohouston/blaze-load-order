sleep = function (milliseconds) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + milliseconds) { /* do nothing */ }
};