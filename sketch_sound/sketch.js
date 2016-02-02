// makes a terrible noise

var frequency = 220;

function setup() {
	createCanvas(640, 360);

	carrier = new p5.Oscillator('sine');
	carrier.amp(1); // set amplitude
	carrier.freq(220); // set frequency
	carrier.start(); // start oscillating
}

function draw() {
	frequency += random(-10, 10); // vary frequency using brownian motion
	carrier.freq(frequency);
}
