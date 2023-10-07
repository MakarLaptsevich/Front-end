function randomRange(myMin, myMax) {
    let myMinn = Math.ceil(myMin);
    let myMaxx = Math.floor(myMax);
    let result = Math.floor(Math.random() * (myMaxx - myMinn + 1)) + myMinn;
    return result;
  }