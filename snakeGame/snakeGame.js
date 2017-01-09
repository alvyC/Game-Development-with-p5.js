var snake;
var scl = 20;
var food;

function setup() {
  createCanvas(600, 400);
  snake = new Snake();
  frameRate(10);
  food = createVector(random(width), random(height));
}

function draw() {
  background(51);
  snake.update();
  snake.show();

  snake.eat(food);

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function pickLocation() {
  var cols = floor(width/ scl);
  var rows = floor(height/ scl);
  food = createVector(random(width), random(height));
  food.mult(scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1); // 0 on the x-axis and 1 on the up (so -1)
  }
  else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  }
  else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  }
  else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  }
}