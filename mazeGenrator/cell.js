function Cell(i, j) {
  // each cell has x, y coordinate and four walls
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true]; // status of top, right, bottom, left walls
  this.visited = false;

  this.index = function(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows -1) {
      return -1;
    }
    return i + j * cols;
  }

  this.checkNeighbors = function() {
    var neghbors = [];

    var top = grid[this.index(i, j - 1)];
    var right = grid[this.index(i+1, j)];
    var bottom = grid[this.index(i, j + 1)];
    var left = grid[this.index(i - 1, j)];

    if (top && !top.visited) {
      neghbors.push(top);
    }
    if (right && !right.visited) {
      neghbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neghbors.push(bottom);
    }
    if (left && !left.visited) {
      neghbors.push(left);
    }

    if  (neghbors.length > 0) {
      var r = floor(random(0, neghbors.length));
      return neghbors[r];
    }
    else {
      return undefined;
    }
  }

  this.highlight = function() {
    var x = this.i * w;
    var y = this.j * w;
    noStroke();
    fill(0, 0, 255, 100);
    rect(x, y, w, w);
  }

  this.show = function() {
    var x = this.i * w;
    var y = this.j * w;

    stroke(255);

    // check the status of the wall, if true draw the wall

    if (this.walls[0]) {
      line(x,     y,     x + w, y);     // draw top wall
    }

    if (this.walls[1]) {
      line(x + w, y,     x + w, y + w); // draw right wall
    }

    if (this.walls[2]) {
     line(x + w, y + w, x,     y + w); // draw bottom wall
    }

    if (this.walls[3]) {
      line(x,     y + w, x,     y);     // draw left wall
    }

    // if cell is visited, then draw a colored rectangle
    if (this.visited) {
      noStroke();
      fill(255, 0, 255, 100);
      rect(x, y, w, w);
    }

  }
}