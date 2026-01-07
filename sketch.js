//=========Global Variables=========\\
let xPos = 0;
let yPos = 0;
//=========MAIN CODE=========\\
function preload() {
  //load any external files here
  img = loadImage(
    "images/night-sky-with-stars-stars-background_172933-69.avif"
  );
}

function setup() {
  const canvas = createCanvas(600, 600);

  canvas.parent("canvasContainer");
  imageMode(COVER);
  image(img, 0, 0);
  angleMode(DEGREES);
}

function draw() {
  xPos = mouseX;
  yPos = mouseY;
  // background(1);
  let g = map(xPos, 0, 600, 30, 150);
  let r = map(yPos, 0, 600, 200, 230);
  fill(r, g, 50);
  circle(300, 300, 60);
  fill(255, 255, 255, 1);
  circle(300, 300, 300);
  createPlanet();
}
//=========FUNCTIONS=========\\
function createPlanet() {
  rotate(frameCount / -1);
  fill(100, 150, 250);
  circle(150, 300, 40);
}
