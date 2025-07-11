document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("terminal-input"), res = document.getElementById("terminal-response");
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const cmd = input.value.trim().toLowerCase();
      if (cmd === "help") {
        res.innerText = `About:
Experimenting with digital art since I got my first computer at 10. From 2D, photo/video editing to 3D art since 2019. Music is also a big part — I learned instruments and production, and I approach music like I do 3D art.

Art:
A curious mind always ready to experiment. Influenced by 90s films, games, psychedelic and op‑art styles. Joining the blockchain in 2021 and minting on Tezos transformed my creative process.`;
      } else {
        res.innerText = `Unknown command: ${cmd}`;
      }
      input.value = '';
    }
  });
});

// Wireframe canvas and cursor distortion
const canvas = document.getElementById("wireframe-canvas"), ctx = canvas.getContext("2d");
let w = canvas.width = window.innerWidth, h = canvas.height = window.innerHeight;
let mouse = { x: w/2, y: h/2 };
window.addEventListener("mousemove", e => mouse = { x: e.clientX, y: e.clientY });
window.addEventListener("resize", () => { w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight; });

function draw(){
  ctx.clearRect(0,0,w,h);
  ctx.strokeStyle = "#33ff33";
  ctx.lineWidth = 0.4;
  for(let x=0;x<w;x+=30){
    for(let y=0;y<h;y+=30){
      const dx = (x - mouse.x) * 0.02;
      const dy = (y - mouse.y) * 0.02;
      ctx.strokeRect(x + dx, y + dy, 28, 28);
    }
  }
  requestAnimationFrame(draw);
}

draw();
