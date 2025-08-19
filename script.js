const states = [
  ["green"],         // Zöld
  ["yellow"],        // Sárga
  ["red"],           // Piros
  ["red", "yellow"]  // Piros + sárga
];

let currentState = 0;
let autoMode = null;

function updateLights() {
  document.querySelectorAll(".light").forEach(light => {
    light.classList.remove("on");
  });

  states[currentState].forEach(id => {
    document.getElementById(id).classList.add("on");
  });
}

document.getElementById("next").addEventListener("click", () => {
  currentState = (currentState + 1) % states.length;
  updateLights();
});

document.getElementById("auto").addEventListener("click", () => {
  if (autoMode) {
    clearInterval(autoMode);
    autoMode = null;
    document.getElementById("auto").innerText = "Automatikus indítás";
  } else {
    autoMode = setInterval(() => {
      currentState = (currentState + 1) % states.length;
      updateLights();
    }, 2000);
    document.getElementById("auto").innerText = "Leállítás";
  }
});

// induláskor zöld
updateLights();
