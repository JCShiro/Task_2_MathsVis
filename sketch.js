//=========Global Variables=========\\
//Creates the variables that will hold X and Y of the mouse
let xPos = 0;
let yPos = 0;
//Variable for angles for rotations
let theta = 0;
//radius of the sun
let radius = 60;

let planets = [];
//=========MAIN CODE=========\\
/**
 * Preloads external files before the program starts.
 */
function preload() {
  //load any external files here
  img = loadImage(
    "images/night-sky-with-stars-stars-background_172933-69.avif"
  );
}
/**
 * Sets up the canvas and initial settings.
 */
function setup() {
  //Creates a canvas 600px X 600px and places it in the div with the id 'canvasContainer'
  const canvas = createCanvas(600, 600);
  canvas.parent("canvasContainer");
  //Set angle mode to degrees
  angleMode(DEGREES);
}
/**
 * Draws the main loop of the program.
 */
function draw() {
  //assigns the mouseX and mouseY to the global variables
  xPos = mouseX;
  yPos = mouseY;
  //Sets the background to image
  image(img, 0, 0);
  //sets the background to white (For testing purposes)
  // background(255);
  //Sets the origin to the center of the canvas and rotates the canvas -90 degrees
  translate(width / 2, height / 2);
  rotate(-90);
  //Sets the stroke to black with a weight of 0.5
  strokeWeight(0.5);
  //Calls the function to create the sun
  createSun();
  //Calls the function to create the planet
  createPlanet();
}
//=========FUNCTIONS=========\\
/**
 * Creates a sun at the center of the canvas.
 */
function createSun() {
  let g = map(xPos, 0, 600, 30, 125, true);
  let r = map(yPos, 0, 600, 200, 230, true);
  fill(r, g, 50);
  circle(0, 0, radius);
}
/**
 * Creates a planet that orbits around the sun.
 */
function createPlanet() {
  let orbitRadius = 80;
  let x = sin(theta) * orbitRadius;
  let y = cos(theta) * orbitRadius;
  theta += 1;
  fill(100, 150, 250);
  circle(x, y, 40);
  noFill();
  strokeWeight(5);
  circle(0, 0, orbitRadius * 2);
}
/**
 * Logs the mouse coordinates to the console when the mouse is clicked.
 * For debugging purposes.
 */
mouseClicked = () => {
  console.log(`Mouse X: ${mouseX.toFixed(3)}
Mouse Y: ${mouseY.toFixed(3)}`);
};
