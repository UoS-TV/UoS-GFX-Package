// Set initial data for webcg-devtools
window.debugData = {
  f0: "Lower third with a subtitle",
  f1: "and CSS animations",
};

webcg.on("data", function (data) {
  document.querySelector(".l3rd-1").innerHTML = data.f0
    ? data.f0.text || data.f0
    : "";
  document.querySelector(".l3rd-2").innerHTML = data.f1
    ? data.f1.text || data.f1
    : "";
});

webcg.on("play", function () {
  const overlay = document.querySelector(".overlay");
  // Swap intro and outro classes
  overlay.classList.add("intro");
  overlay.classList.remove("outro");
  // Return promise that is resolved when the animation is over. WebCG will wait for this promise.
  return new Promise((resolve) => {
    // Add the animationend event listener once
    overlay.addEventListener("animationend", resolve, { once: true });
  });
});

webcg.on("stop", function () {
  const overlay = document.querySelector(".overlay");
  // Swap intro and outro classes
  overlay.classList.remove("intro");
  overlay.classList.add("outro");
  // Return promise that is resolved when the animation is over. WebCG will wait for this promise.
  return new Promise((resolve) => {
    // Add the animationend event listener once
    overlay.addEventListener("animationend", resolve, { once: true });
  });
});
