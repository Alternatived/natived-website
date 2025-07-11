// Terminal commands
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("terminal-input");
  const response = document.getElementById("terminal-response");

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = input.value.trim().toLowerCase();
      handleCommand(cmd);
      input.value = "";
    }
  });
});

function handleCommand(cmd) {
  const res = document.getElementById("terminal-response");
  switch (cmd) {
    case "help":
      res.innerText = `About:
Experimenting with digital art since I got my first computer at 10 years old. From 2D drawings to photo/video editing, I discovered 3D art in 2019 and have been exploring it ever since. I'm also a huge fan of music, which led me to learn instruments and music production — I approach music the same way I create art.

Art:
I'm a curious mind constantly looking to learn and experiment. Influenced by 90s movies, video games, psychedelic artists, and op art masters. When I joined the blockchain space in 2021 and minted my first work on Tezos, my creative vision evolved drastically — adapting to this new medium.`;
      break;
    default:
      res.innerText = `Unknown command: ${cmd}`;
  }
}

// Wireframe cursor animation
const canvas = document.getElementById('wireframe-canvas');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

let mouse = { x: w / 2, y: h / 2 };
window.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function drawGrid() {
  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = '#33ff33';
  ctx.lineWidth = 0.2;

  for (let x = 0; x < w; x += 30) {
    for (let y = 0; y < h; y += 30) {
      const dx = (x - mouse.x) * 0.005;
      const dy = (y - mouse.y) * 0.005;
      ctx.beginPath();
      ctx.rect(x + dx * 20, y + dy * 20, 28, 28);
      ctx.stroke();
    }
  }

  requestAnimationFrame(drawGrid);
}

drawGrid();
