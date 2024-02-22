webcg.on("data", function (data) {
  document.querySelector(".f0").innerHTML = data.f0
    ? data.f0.text || data.f0
    : "";
  document.querySelector(".f1").innerHTML = data.f1
    ? data.f1.text || data.f1
    : "";
});

function pad(num) {
  return ("0" + parseInt(num)).substr(-2);
}

function updateTime() {
  var clock = document.querySelector(".clock");
  var d = new Date();
  clock.textContent =
    pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
}

webcg.on("play", function () {
  document.querySelector(".overlay").style.opacity = 1;
  updateTime();
  setInterval(updateTime, 1000);
});
webcg.on("stop", function () {
  document.querySelector(".overlay").style.opacity = 0;
});
