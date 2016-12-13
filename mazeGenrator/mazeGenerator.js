var rows, cols;
var w = 10; // so we have a canvas of 400 by 400, and row, columns are 40 by 40
            // so there will be 10 rows and  10 cols

var grid = [];

var current;

var stack = [];

function setup() {
  createCanvas(400, 400);
  cols = floor(width/ w);
  rows = floor(width/ w);
  frameRate(4);

  for (var j = 0; j < cols; j++) {
    for (var i = 0; i < rows; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];
}

function draw() {
  background(51);
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  current.highlight();

  // step 1: pick a random neighbor of "current" cell
  var next = current.checkNeighbors();

  if (next) {
    next.visited = true;

    // step 2
    stack.push(current);

    // step 3
    removeWalls(current, next);

    // step 4
    current = next;
  }
  else if (stack.length > 0) {
    current = stack.pop();
  }
}

function removeWalls(a, b) {
  console.log("removeWalls");
  var x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  }
  else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }

  var y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  }
  else if(y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}
