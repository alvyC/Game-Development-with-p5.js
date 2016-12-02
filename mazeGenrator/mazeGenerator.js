var rows, cols;
var w = 40; // so we have a canvas of 400 by 400, and row, columns are 40 by 40
            // so there will be 10 rows and  10 cols

var grid = [];

function setup() {
  createCanvas(400, 400);
  cols = floor(width/ w);
  rows = floor(width/ w);

  for (var j = 0; j < cols; j++) {
    for (var i = 0; i < rows; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }
}

function draw() {
  background(51);
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }
}
