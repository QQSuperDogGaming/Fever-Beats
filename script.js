let currentTrack = null;
let audio = null;
let notes = [];

const noteMaps = {
  dystopia: [
    { lane: 1, time: 1000 },
    { lane: 2, time: 1500 },
    { lane: 3, time: 2500 },
    { lane: 4, time: 2800 }
  ],
  surreal: [
    { lane: 2, time: 800 },
    { lane: 4, time: 1600 },
    { lane: 1, time: 2400 },
    { lane: 3, time: 3200 }
  ],
  cirrus: [
    { lane: 3, time: 1000 },
    { lane: 2, time: 1800 },
    { lane: 1, time: 2600 },
    { lane: 4, time: 3400 }
  ],
  forest: [
    { lane: 1, time: 900 },
    { lane: 4, time: 1800 },
    { lane: 2, time: 2700 },
    { lane: 3, time: 3600 }
  ],
  fever: [
    { lane: 2, time: 1200 },
    { lane: 3, time: 2000 },
    { lane: 1, time: 2800 },
    { lane: 4, time: 3600 }
  ]
};

// Handle track selection
document.querySelectorAll("#track-list button").forEach(button => {
  button.addEventListener("click", () => {
    currentTrack = button.dataset.track;
    notes = noteMaps[currentTrack];
    document.body.className = currentTrack;

    audio = new Audio(`assets/audio/${currentTrack}.mp3`);
    audio.play();

    document.getElementById("menu").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    audio.addEventListener("canplaythrough", () => {
      startGame();
    });
  });
});

function startGame() {
  notes.forEach(note => {
    setTimeout(() => {
      createNote(note.lane);
    }, note.time);
  });
}

function createNote(lane) {
  const note = document.createElement("div");
  note.classList.add("note");
  document.getElementById("lane" + lane).appendChild(note);
}
