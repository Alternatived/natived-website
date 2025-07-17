let cols, rows;
let gridSize = 40;
let margin = 60;
let points = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id('shader-canvas');
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  noFill();
  stroke(0, 255, 0, 80);
  strokeWeight(1);
  cols = ceil(width / gridSize);
  rows = ceil(height / gridSize);
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      points.push({ x: x * gridSize, y: y * gridSize });
    }
  }
}

function draw() {
  clear();
  background(0, 0, 0, 0);
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    let d = dist(mouseX, mouseY, pt.x, pt.y);
    let strength = 150;
    let maxDisplace = 25;

    if (d < strength) {
      let angle = atan2(pt.y - mouseY, pt.x - mouseX);
      let force = map(d, 0, strength, maxDisplace, 0);
      let dx = cos(angle) * force;
      let dy = sin(angle) * force;
      ellipse(pt.x + dx, pt.y + dy, 2);
    } else {
      ellipse(pt.x, pt.y, 2);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  points = [];
  cols = ceil(width / gridSize);
  rows = ceil(height / gridSize);
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      points.push({ x: x * gridSize, y: y * gridSize });
    }
  }
}
