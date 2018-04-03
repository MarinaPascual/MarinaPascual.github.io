var RESOLUTION = 30;
var a;

function setup(){

	var canvas = createCanvas(window.innerWidth,window.innerHeight);
	canvas.parent('myCanvas');
	background(0, 100, 100);

	for(var y = 0; y < height + RESOLUTION; y += RESOLUTION){
		for(var x = 0; x < width + RESOLUTION; x += RESOLUTION){
		a = map(y, 0, height, 255, 0);
		fill(255, a);
		noStroke();
		ellipse(x,y,50,50);
		textSize(50);
		}
	}
}

