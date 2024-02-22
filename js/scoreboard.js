// Set initial data for webcg-devtools
window.debugData = {
  f0: "Person1",
  f1: "0",
  f2: "Person2",
  f3: "0",
  f4: "Person3",
  f5: "0",
  f6: "Person4",
  f7: "0",
};

webcg.on("data", function (data) {
  // Update debugData with the received data
  Object.assign(window.debugData, data);

  // Dynamically create HTML for each person
  const overlay = document.querySelector(".overlay");
  overlay.innerHTML = ""; // Clear existing content

  const numberOfPersons =
    Object.keys(data).filter(
      (key) => key.startsWith("f") && !isNaN(key.substring(1))
    ).length / 2;

  for (let index = 0; index < numberOfPersons; index++) {
    const personDiv = document.createElement("div");
    personDiv.style.position = "absolute";
    personDiv.style.bottom = "var(--margin)";
    personDiv.style.transform = "translate(-50%,-50%)";
    personDiv.classList.add(`person${index + 1}`);

    // Calculate dynamic horizontal position
    const leftPercentage = (index + 0.5) * (100 / numberOfPersons);
    personDiv.style.left = `${leftPercentage}vw`;

    const nameDiv = document.createElement("div");
    nameDiv.classList.add(`line`, "line-upper", `f${2 * index}`, `grad-1`);
    nameDiv.innerHTML = data[`f${2 * index}`].text || data[`f${2 * index}`];

    const scoreDiv = document.createElement("div");
    scoreDiv.classList.add(`line`, "line-lower", `f${2 * index + 1}`, `grad-light`);
    scoreDiv.style.width = "auto";
    scoreDiv.style.fontSize = "8vh";

    scoreDiv.innerHTML =
      data[`f${2 * index + 1}`].text || data[`f${2 * index + 1}`];

    personDiv.appendChild(nameDiv);
    personDiv.appendChild(scoreDiv);

    overlay.appendChild(personDiv);
  }
});

webcg.on("play", function () {
  document.querySelector(".overlay").style.opacity = 1;
});

webcg.on("stop", function () {
  document.querySelector(".overlay").style.opacity = 0;
});
