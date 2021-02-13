let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

let img;
function preload() {
	img = loadImage('elephant.png');
}
function setup() {
	createCanvas(windowWidth - 5, windowHeight - 5);
	noStroke();
	frameRate(60);
	ellipseMode(RADIUS);
  
	// Set the starting position of the shape
	xpos = width / 2;
	ypos = height / 2;
}

function draw() {
  background(0);

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  image(5, 5, 500, 306);
}
