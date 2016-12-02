function Cell(i, j) {
  this.i = i;
  this.j = j;

  this.show = function() {
    var x = this.i * w;
    var y = this.j * w;
    this.walls = [true, true, true, true]; // top, right, bottom, left

    stroke(255);

    if (this.walls[0]) {
      line(x,     y,     x + w, y);     // top wall
    }

    if (this.walls[1]) {
      line(x + w, y,     x + w, y + w); // right wall
    }

    if (this.walls[2]) {
     line(x + w, y + w, x,     y + w); // bottom wall
    }

    if (this.walls[3]) {
      line(x,     y + w, x,     y);     // left wall
    }

    //noFill();
    //rect(x, y, w, w);

  }
}