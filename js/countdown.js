var h;
var m;
var s;

webcg.on("data", function (data) {
  document.querySelector(".f0").innerHTML = data.f0
    ? data.f0.text || data.f0
    : "";
  document.querySelector(".f1").innerHTML = data.f1
    ? data.f1.text || data.f1
    : "";
  h = data.f2 ? data.f2.text || data.f2 : "";
  m = data.f3 ? data.f3.text || data.f3 : "";
  s = data.f4 ? data.f4.text || data.f4 : "";
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

  document.querySelector(".countdown").innerHTML = hh + ":" + mm + ":" + ss;
}

webcg.on("play", function () {
  const overlay = document.querySelector(".overlay");
  overlay.style.opacity = 1;

  updateCountdown();
  setInterval(updateCountdown, 1000);
});

webcg.on("stop", function () {
  const overlay = document.querySelector(".overlay");
  overlay.style.opacity = 0;
});
