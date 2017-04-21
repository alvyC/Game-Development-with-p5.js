function Spot(i, j) {
	this.x = i;
	this.y = j;

	this.f = 0;
	this.g = 0;
	this.h = 0;

	this.show = function(col) {
		fill(col);
		noStroke();
		rect(this.x*w, this.y*h);
	}
}