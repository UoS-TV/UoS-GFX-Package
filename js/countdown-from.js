var remaining;
var countdownInterval;
var nextCountdownValue;
var showColon;

webcg.on("data", function (data) {
  remaining = data.f0 ? parseInt(data.f0.text || data.f0) : 0;
  nextCountdownValue = remaining;
  showColon = remaining > 60;
  updateOverlay();
});

webcg.on("play", function (data) {
  document.querySelector(".overlay").style.opacity = 1;
  resetCountdown(nextCountdownValue);
  startCountdown();
});

webcg.on("stop", function (data) {
  document.querySelector(".overlay").style.opacity = 0;
  stopCountdown();
});

function startCountdown() {
  stopCountdown();
  remaining--;
  countdownInterval = setInterval(function () {
    updateOverlay();
    if (remaining <= 0) {
      remaining = 0;
      stopCountdown();
    } else {
      remaining--;
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
}

function resetCountdown(initialValue) {
  stopCountdown();
  remaining = initialValue || 0;
  showColon = remaining > 60;
  updateOverlay();
}

function updateOverlay() {
  const overlay = document.querySelector(".overlay");

  if (remaining > 60 || showColon) {
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    overlay.innerHTML = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  } else {
    overlay.innerHTML = String(remaining).padStart(2, "0");
  }
}
