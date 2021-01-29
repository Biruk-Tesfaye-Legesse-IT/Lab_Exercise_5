var answers = [window.location.href, window.location.protocol, window.location.host, window.location.port, window.location.hostname, window.location.pathname, navigator.appName, navigator.appVersion, navigator.platform, navigator.language, navigator.cookieEnabled, navigator.appCodeName, navigator.vendor, screen.height, screen.width, screen.pixelDepth, screen.colorDepth, history.length, history.state];
var questions = document.querySelectorAll('.badge');
var counter = 0;
for (var i in questions) {
    questions[counter].innerHTML = answers[counter];
    counter++;
}