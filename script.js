let theShader;
let shaderCanvas;

function preload() {
  theShader = loadShader('shader.js', 'shader.js'); // same for vert and frag
}

function setup() {
  shaderCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
  shaderCanvas.id('shader-canvas');
  noStroke();
}

function draw() {
  theShader.setUniform("u_resolution", [width, height]);
  theShader.setUniform("u_time", millis() / 1000.0);
  theShader.setUniform("u_mouse", [mouseX, height - mouseY]);

  shader(shaderCanvas, theShader);
  rect(-width / 2, -height / 2, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
