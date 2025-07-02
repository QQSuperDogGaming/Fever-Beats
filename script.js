let notes = [
  { lane: 1, time: 1000 },
  { lane: 2, time: 1500 },
  { lane: 3, time: 2000 },
  { lane: 4, time: 2500 },
  { lane: 2, time: 3000 },
  { lane: 1, time: 3500 }
];

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  startGame();
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
