let environments = [
  [(Value = ""), 255, 255, 255],
  [(Value = "desert"), 191, 117, 75],
  [(Value = "forest"), 63, 90, 54],
  [(Value = "ice"), 185, 232, 234],
  [(Value = "ocean"), 118, 182, 196],
  [(Value = "volcanic"), 149, 10, 1],
];

// let theta = 0;

class Planet {
  planetsArray = [];
  draw() {
    this.#createExamplePlanet();
  }

  #theta = 0
  #createExamplePlanet() {
    let orbitRadius = 80;
    let x = cos(this.#theta) * orbitRadius;
    let y = sin(this.#theta) * orbitRadius;
    this.#theta += 1;
    // console.log(theta);
    fill(100, 150, 250);
    circle(x, y, 40);
    noFill();
    strokeWeight(5);
    circle(0, 0, orbitRadius * 2);
  }
}
