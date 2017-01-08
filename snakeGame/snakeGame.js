var snake;
var scl = 20;

function setup() {
  createCanvas(600, 400);
  snake = new Snake();
  frameRate(10);
}

function draw() {
  background(51);
  snake.update();
  snake.show();
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