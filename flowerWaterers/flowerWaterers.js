var ship;
var flowers = [];
var drops = [];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  //drop = new Drop(width/2, height/2);
  for (var i = 0; i < 6; i++) {
    flowers[i] = new Flower(i*80 + 80, 60);
  }
}

function draw() {
  background(51);
  ship.show();

  // loops for showing the water drops
  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();

    // check whether ith drop has hit any of the flower
    for (var j = 0; j < flowers.length; j++) {
      if (drops[i].hits(flowers[j])) { // if drop[i] hits flower[j], then make the flower bigger and drop disappear
        flowers[j].grow();
        drops[i].evaporate();

        console.log("Watering");
      }
    }
  }

  var edge = false; // check for if any of the flowers has hit the right edge
  // loops for showing and moving the flowers
  for (var i = 0; i < flowers.length; i++) {
    flowers[i].show();
    flowers[i].move();

    if (flowers[i].x > width || flowers[i].x < 0) {
      edge = true;
    }
  }

  // if any of the flowers has hit the right edge
  if (edge) {
    for (var i = 0; i < flowers.length; i++) {
      flowers[i].shiftDown();
    }
  }

  // delete the drop, which touched a flower
  // should remove element from an array backwards
  for (var i = drops.length - 1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1); // splice() will remove elements from ith index from array, here only one element will be removed.

    }
  }
}

function keyPressed() {
  // whenever "space" is pressed create a drop object and add it to the drop array
  if (key === ' ') {
    var drop = new Drop(ship.x, height);
    drops.push(drop);
  }

  // for moving the "ship"
  if (keyCode === RIGHT_ARROW) {
    ship.move(1);
  }
  else if (keyCode === LEFT_ARROW) {
    ship.move(-1);
  }
}