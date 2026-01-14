class Planet {
  draw() {
    this.#createExamplePlanet();
  }

  #createExamplePlanet() {
    let orbitRadius = 80;
    let x = sin(theta) * orbitRadius;
    let y = cos(theta) * orbitRadius;
    theta++;
    // console.log(theta);
    fill(100, 150, 250);
    circle(x, y, 40);
    noFill();
    strokeWeight(5);
    circle(0, 0, orbitRadius * 2);
  }
}
