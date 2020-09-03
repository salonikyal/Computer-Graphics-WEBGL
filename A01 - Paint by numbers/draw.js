function draw() {
	// Line(x1,y1, x2,y2)
	// Draws a line from a point at Normalized screen coordinates x1,y1 to Normalized screen coordinates x2,y2
	line(0, 0.8,-0.5,0.5);
	line(0, 0.8,0.5,0.5);
	line(-0.5,0.5,-0.5, -0.7);
	line(0.5,0.5,0.5,-0.7);
	line(-0.5,-0.7,0.5,-0.7);
	
	//Windows	
	line(-0.4,0.4,-0.1,0.4);
	line(-0.4,0.4,-0.4,0.2);
	line(-0.1,0.4,-0.1,0.2);
	line(-0.4,0.2,-0.1,0.2);
	
	line(0.4,0.4,0.1,0.4);
	line(0.4,0.4,0.4,0.2);
	line(0.1,0.4,0.1,0.2);
	line(0.4,0.2,0.1,0.2);
	
	//Door	
	line(-0.1,-0.7,-0.1,-0.2);
	line(-0.1,-0.2,0.1,-0.2);
	line(0.1,-0.7,0.1,-0.2);
	
	//Chimney
	line(0.3,0.75,0.4,0.75);
	line(0.3,0.75,0.3,0.62);
	line(0.4,0.75,0.4,0.56);	
}

