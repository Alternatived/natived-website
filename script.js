document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("terminal-input");
  const res = document.getElementById("terminal-response");

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = input.value.trim().toLowerCase();
      if (cmd === "help") {
        res.innerText = `About:
Experimenting with digital art since I got my first computer at 10. From 2D to photo/video editing, I discovered 3D art in 2019 and have been exploring it ever since. Music is a major influence too—learning instruments and production, I approach music like I do digital art.

Art:
A curious mind, constantly learning and experimenting. Influenced by 90s films, video games, psychedelic and op‑art styles. When I joined the blockchain in 2021 and minted my first work on Tezos, my creative practice evolved into a new medium.`;
      } else {
        res.innerText = `Unknown command: ${cmd}`;
      }
      input.value = "";
    }
  });
});

// 3D warp grid
const canvas = document.getElementById("wireframe-canvas");
const ctx = canvas.getContext("2d");
let w = (canvas.width = window.innerWidth);
let h = (canvas.height = window.innerHeight);
let mouse = { x: w / 2, y: h / 2 };

window.addEventListener("mousemove", (e) => mouse = { x: e.clientX, y: e.clientY });
window.addEventListener("resize", () => { w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight; });

function draw() {
  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = "#33ff33";
  ctx.lineWidth = 0.5;

  const centerX = w / 2, centerY = h;

  for (let i = 0; i < 40; i++) {
    const depth = i / 40;
    const y = centerY - depth * h;
    const spacing = 50 * (1 - depth);
    // horizontal lines
    ctx.beginPath();
    ctx.moveTo((mouse.x - centerX) * depth + 0, y);
    ctx.lineTo((mouse.x - centerX) * depth + w, y);
    ctx.stroke();
    // vertical lines
    for (let x = centerX % spacing; x < w; x += spacing) {
      const xOffset = (mouse.x - centerX) * depth;
      ctx.beginPath();
      ctx.moveTo(x + xOffset, y);
      ctx.lineTo(centerX + xOffset, h);
      ctx.stroke();
    }
  }

  requestAnimationFrame(draw);
}
draw();
