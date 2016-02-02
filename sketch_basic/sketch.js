// just draws a circle

function setup() {
	// create a place to draw
	createCanvas(640, 360);
}


function draw() {
	// clear the background
	background(0, 0, 0);

	// set drawing styles
	stroke(255, 0, 0);
	fill(255, 255, 255);
	strokeWeight(10);

	// draw a circle
	ellipse(320, 180, 100, 100);
}
