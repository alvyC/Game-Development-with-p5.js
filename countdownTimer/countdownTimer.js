var counter = 0;
var timeLeft = 10;

function convertSeconds(s) {
  var min = floor(s/ 60);
  var sec = s % 60;

  if (min != 0 ) {
    return nf(min, 2) + " minutes : " + nf(sec, 2) + " seconds";
  }
  else { // min == 0
    if (sec == 0) {
      return "Time up";
    }
    else {
      return nf(sec, 2) + " seconds";
    }
  }
}

var ding;
function preload() {
  ding = loadSound("ding.mp3");
}

function setup() {
  noCanvas();

  var params = getURLParams();
  console.log();

  if (params.minute) {
    var min = params.minute;
    timeLeft = min * 60;
  }

  var timer = select('#timer');
  timer.html(convertSeconds(timeLeft - counter));

  var interval = setInterval(timeIt, 1000);

  function timeIt() {
    counter++;
    timer.html(convertSeconds(timeLeft - counter));

    if (counter == timeLeft) {
      ding.play();
      clearInterval(interval);
      counter = 0;
    }
  }
}