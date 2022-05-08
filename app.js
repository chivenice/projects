var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
  document.body.className = "body-state" + state;
  timer ==
    setInterval(function () {
      if (state == 2) {
        document.getElementById("countdown").innerHTML = countdownNumber;
        countdownNumber = countdownNumber - 1;
        if (countdownNumber <= 0) {
          clearInterval(timer);
          changeState(3);
        }
      }
    }, 1000);
};
