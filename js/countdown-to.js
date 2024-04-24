var h;
var m;
var s;
var pretext;
var shortly;
var countdownInterval;

webcg.on("data", function (data) {
  h = data.f0 ? data.f0.text || data.f0 : 0;
  m = data.f1 ? data.f1.text || data.f1 : 0;
  s = data.f2 ? data.f2.text || data.f2 : 0;
  pretext = data.f3 ? data.f3.text || data.f3 : "Starting in ";
  shortly = data.f4 ? data.f4.text || data.f4 : "Starting shortly";
});

function pad(num) {
  return ("0" + parseInt(num)).substr(-2);
}

function updateCountdown() {
  var start = new Date();
  start.setHours(h, m, s);

  var now = new Date();
  if (now > start) {
    // too late, go to tomorrow
    start.setDate(start.getDate() + 1);
  }

  var remain = (start - now) / 1000;
  var hh = pad((remain / 60 / 60) % 60);
  var mm = pad((remain / 60) % 60);
  var ss = pad(remain % 60);

  if (remain > 5) {
    // clearInterval(countdownInterval);
    document.querySelector(
      ".countdown"
    ).innerHTML = `${pretext}${hh}:${mm}:${ss}`;
  } else {
    document.querySelector(".countdown").innerHTML = shortly;
  }

  if (remain <= 0) {
    clearInterval(countdownInterval);
  }
}

webcg.on("play", function () {
  document.querySelector(".overlay").style.opacity = 1;

  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
});

webcg.on("stop", function () {
  document.querySelector(".overlay").style.opacity = 0;
  clearInterval(countdownInterval);
});
