function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.move = function() {
    this.y = this.y - 6;
  }

  this.evaporate = function() {
    this.toDelete = true;
  }

  // If the distance between two circles' center is equal to
  // or less then their sum of radii, than means they rouched each other.
  this.hits = function(flower) {
    var d = dist(this.x, this.y, flower.x, flower.y)

    if (d < this.r + flower.r) {
      return true;
    }
    else {
      return false;
    }
  }
}