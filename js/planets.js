class Planet {
  draw() {
    this.#createExamplePlanet();
  }

  #createExamplePlanet() {
    let orbitRadius = 80;
    let x = cos(theta) * orbitRadius;
    let y = sin(theta) * orbitRadius;
    theta += 1;
    // console.log(theta);
    fill(100, 150, 250);
    circle(x, y, 40);
    noFill();
    strokeWeight(5);
    circle(0, 0, orbitRadius * 2);
  }
}
