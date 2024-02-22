// Set initial data for webcg-devtools
window.debugData = {
  f0: "Lower third",
  f1: "with a subtitle",
};

webcg.on("data", function (data) {
  document.querySelector(".f0").innerHTML = data.f0
    ? data.f0.text || data.f0
    : "";
  document.querySelector(".f1").innerHTML = data.f1
    ? data.f1.text || data.f1
    : "";
});

webcg.on("play", function () {
  const overlay = document.querySelector(".overlay");
  // Swap intro and outro classes
  overlay.classList.add("intro");
  overlay.classList.remove("outro");
});

webcg.on("stop", function () {
  const overlay = document.querySelector(".overlay");
  // Swap intro and outro classes
  overlay.classList.remove("intro");
  overlay.classList.add("outro");
});
