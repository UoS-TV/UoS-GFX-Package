var stopwatchInterval;
var milliseconds = 0;

webcg.on("play", function () {
  document.querySelector(".overlay").style.opacity = 1;
  startStopwatch();
});

webcg.on("stop", function () {
  document.querySelector(".overlay").style.opacity = 0;
  stopStopwatch();
});

webcg.on("next", function () {
  stopStopwatch();
});

function startStopwatch() {
  stopStopwatch();
  milliseconds = 0;
  stopwatchInterval = setInterval(function () {
    updateStopwatch();
    milliseconds++;
  }, 10);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function updateStopwatch() {
  const overlay = document.querySelector(".overlay");
  const seconds = Math.floor(milliseconds / 100);
  const centiseconds = milliseconds % 100;

  overlay.innerHTML = `${String(seconds).padStart(2, "0")}.${String(
    centiseconds
  ).padStart(2, "0")}`;
}
