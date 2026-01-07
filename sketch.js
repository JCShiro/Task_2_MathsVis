//=========Global Variables=========\\

//=========MAIN CODE=========\\
function preload() {
  //load any external files here
  img = loadImage("images/Stars.jpeg");
}

function setup() {
  const canvas =createCanvas(750, 750);

  canvas.parent('canvasContainer');
  imageMode(CENTER);
  image(img, 0, 0);
}

function draw() {
  // background(1);
}
