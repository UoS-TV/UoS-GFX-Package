webcg.on("data", function (data) {
  document.querySelector(".team-a").innerHTML = data.f0
    ? data.f0.text || data.f0
    : "";
  document.querySelector(".score-a").innerHTML = data.f1
    ? data.f1.text || data.f1
    : "0";

  document.querySelector(".team-b").innerHTML = data.f2
    ? data.f2.text || data.f2
    : "";
  document.querySelector(".score-b").innerHTML = data.f3
    ? data.f3.text || data.f3
    : "0";
});

webcg.on("play", function () {
  const overlay = document.querySelector(".overlay");
  // Swap intro and outro classes
  overlay.style.opacity = 1;
});
webcg.on("stop", function () {
  const overlay = document.querySelector(".overlay");
  // Swap intro and outro classes
  overlay.style.opacity = 0;
});
