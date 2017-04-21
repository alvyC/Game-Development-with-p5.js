var cols = 5;
var rows = 5;
var grid = new Array(cols);

var openSet = [];
var closedSet = [];
var start;
var end;

var w, h;

function setup() {
	createCanvas(400, 400);
	console.log('A*');

	w = width/ cols;
	h = height / rows;

	for (var i = 0; i < cols; i++) {
		grid[i] = new Array(rows);
	}

	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			grid[i][j] = new Spot();
		}
	}

	start = grid[0][0];
	end = grid[cols - 1][rows - 1];

	openSet.push(start);

	console.log(grid);
}

function draw() {

	if (openSet.length > 0) {
		// we can keep going
	}
	else {
		// no solution
	}

	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			grid[i][j].show();
		}
	}

	background(0);
}