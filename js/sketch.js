let newSun = new Sun();
let setupPlanet = new Planet();

// let planet = new Planet
// let newPlanet = new Planet();

//=========Global Variables=========\\
//Creates the variables that will hold X and Y of the mouse
let xPos = 0;
let yPos = 0;
//Variable for angles for rotations

let previewBtn = document.getElementById("preview_button");
let radiusSlider = document.getElementById("radius_slider");
let orbitalSlider = document.getElementById("orbital_slider");
let spinDirection = document.getElementById("rotate_direction");
let environmentSelect = document.getElementById("environment");
let createBtn = document.getElementById("create_button");
let preview = false;
//=====Event Listeners=====\\
previewBtn.addEventListener("click", createPreviewBtn);
createBtn.addEventListener("click", storePlanet);

let orbitRadius;
let radius;
let direction;
let planetColorRed;
let planetColorGreen;
let planetColorBlue;
let theta;

let previewArray = [];

//=========MAIN CODE=========\\
/**
 * Preloads external files before the program starts.
 */
function preload() {
  //load any external files here
  img = loadImage(
    "images/night-sky-with-stars-stars-background_172933-69.avif",
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
function createPreviewBtn() {
  if (preview == false) {
    preview = !preview;
  } else {
    preview = !preview;
  }
}

function createPreview() {
  previewBtn.value = "Exit Preview";
  // console.log("Running"); //Console for debugging
  orbitRadius = orbitalSlider.value;
  radius = radiusSlider.value;
  direction = spinDirection.value;

  for (let e of environments) {
    if (environmentSelect.value == e[0]) {
      e[(1, 2, 3)]; // colour
      planetColorRed = e[1];
      planetColorGreen = e[2];
      planetColorBlue = e[3];
    }
  }

  fill(planetColorRed, planetColorGreen, planetColorBlue, 200);
  circle(orbitRadius, 0, radius);

  console.log(
    orbitRadius,
    radius,
    direction,
    planetColorRed,
    planetColorGreen,
    planetColorBlue,
  );
}

function storePlanet() {
  let newPlanet = new Planet(
    (planetColorRed.value),
    (planetColorGreen.value),
    (planetColorBlue.value),
    (orbitRadius.value),
    (radius.value),
    (direction.value),
  );
  planetsArray.push(newPlanet);
  preview = false;
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
  newSun.draw();
  //Calls the function to create the planet
  if (planetsArray.length >= 1) {
    setupPlanet.draw();
  }
  // for (let planet of planets) {
  //  planet.draw(); plaent.move(); planet.update();
  //}

  if (preview === true) {
    createPreview();
  } else {
    preview = false;
    previewBtn.value = "Preview New Planet";
  }
}
//=========FUNCTIONS=========\\

/**
 * Logs the mouse coordinates to the console when the mouse is clicked.
 * For debugging purposes.
 */
// mouseClicked = () => {
//   console.log(`Mouse X: ${mouseX.toFixed(3)}
// Mouse Y: ${mouseY.toFixed(3)}`);
// console.log(planetsArray);
// };

// on click what you want to do is:
// let newPlanet = new Planet();
// planets.push(newPlanet);
