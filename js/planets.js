let environments = [
  [(Value = ""), 255, 255, 255],
  [(Value = "desert"), 191, 117, 75],
  [(Value = "forest"), 63, 90, 54],
  [(Value = "ice"), 185, 232, 234],
  [(Value = "ocean"), 118, 182, 196],
  [(Value = "volcanic"), 149, 10, 1],
];

// let theta = 0;
planetsArray = [];

class Planet {
  draw() {
    this.#createExamplePlanet();
    this.#drawPlanet();
  }

  #createExamplePlanet() {
    let theta;
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

  #drawPlanet() {
    for (let i = 0; i < planetsArray.length; i++) {
      let theta;
      let x = cos(theta) * planetsArray[i].orbitRadius;
      let y = sin(theta) * planetsArray[i].orbitRadius;
      if(planetsArray[i].direction == "right"){
        theta +=1;
      }else{
        theta -=1;
      }
      console.log(planetsArray[i]);
      fill(planetsArray[i].planetColorRed, planetsArray[i].planetColorGreen, planetsArray[i].planetColorBlue);
      circle(x,y,planetsArray[i].radius)
    }
  }
}
