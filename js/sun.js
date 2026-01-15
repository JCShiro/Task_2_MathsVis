class Sun {
  draw() {
    this.#createsun();
  }

//radius of the sun
#radius = 60;
  #createsun() {
    let g = map(xPos, 0, 600, 129, 231, true);
    let r = map(yPos, 0, 600, 200, 230, true);
    fill(255, g, 0);
    circle(0, 0, this.#radius);
    // console.log("Sun Created") //console log for debugging
  }
}
