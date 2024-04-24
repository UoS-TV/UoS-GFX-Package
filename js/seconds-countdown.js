var s;

webcg.on("data", function (data) {
  s = data.f0 ? data.f0.text || data.f0 : "";
});

function pad(num) {
  return ("0" + parseInt(num)).substr(-2);
}

function updateCountdown() {
  document.querySelector(".countdown").innerHTML = pad(s);
  if (s <= 0) {
    s = 0;
  } else {
    s--;
  }
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
