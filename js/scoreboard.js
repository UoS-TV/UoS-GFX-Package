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

// Listen for incoming data events from webcg
webcg.on("data", function (data) {
  // Update debugData with the received data
  Object.assign(window.debugData, data);

  // Get the overlay container
  const overlay = document.querySelector(".overlay");
  // Clear existing content to prepare for new data
  overlay.innerHTML = "";

  // Determine the number of persons based on the received data
  const numberOfPersons = Object.keys(data).filter(
    (key) => key.startsWith("f") && !isNaN(key.substring(1))
  ).length / 2;

  // Define the total width to distribute the divs (as a percentage of the viewport)
  const totalWidth = 80; // Use 80% of the viewport width
  // Calculate base step to evenly space the divs
  const baseStep = totalWidth / (numberOfPersons + 1);
  // Calculate the offset to center the group of divs within the viewport
  const offset = (100 - totalWidth) / 2; // Starting offset for centering

  // Loop through the number of persons and create a div for each person
  for (let index = 0; index < numberOfPersons; index++) {
    const personDiv = document.createElement("div");
    // Set the div to be positioned absolutely
    personDiv.style.position = "absolute";
    // Position the div at the bottom with some margin
    personDiv.style.bottom = "var(--margin)";
    // Set a fixed width for the person div
    personDiv.style.width = "15vw"; // 15% of the viewport width
    // Center the div horizontally
    personDiv.style.transform = "translate(-50%, 0)";
    // Add a unique class for identification
    personDiv.classList.add(`person${index + 1}`);

    // Calculate the left position with the offset for centering
    const leftPercentage = offset + (index + 1) * baseStep;
    personDiv.style.left = `${leftPercentage}vw`; // Set the calculated left position

    // Create a div for the name and add corresponding classes
    const nameDiv = document.createElement("div");
    nameDiv.classList.add(`line`, "line-upper", `f${2 * index}`, "grad-1");
    // Set the name based on the received data
    nameDiv.innerHTML = data[`f${2 * index}`].text || data[`f${2 * index}`];

    // Create a div for the score and add classes
    const scoreDiv = document.createElement("div");
    scoreDiv.classList.add(
      `line`,
      "line-lower",
      `f${2 * index + 1}`,
      `grad-light`
    );
    // Set the font size for the score
    scoreDiv.style.fontSize = "8vh"; // 8% of viewport height

    // Set the score text based on the received data
    scoreDiv.innerHTML = data[`f${2 * index + 1}`].text || data[`f${2 * index + 1}`];

    // Append the name and score divs to the person div
    personDiv.appendChild(nameDiv);
    personDiv.appendChild(scoreDiv);

    // Append the person div to the overlay container
    overlay.appendChild(personDiv);
  }
});

// Handle "play" event by making the overlay visible
webcg.on("play", function () {
  document.querySelector(".overlay").style.opacity = 1; // Set opacity to 1 to make it visible
});

// Handle "stop" event by making the overlay invisible
webcg.on("stop", function () {
  document.querySelector(".overlay").style.opacity = 0; // Set opacity to 0 to hide it
});
