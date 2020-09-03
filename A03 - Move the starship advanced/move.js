function move() {
	// Rotate 30 degrees around an arbitrary axis passing through (1,1,0). The x-axis can be aligned to the arbitrary axis after a rotation of 15 degrees around the z-axis, and then 45 degrees around the y-axis.
	var R1 =  [0.928,  0.365,  0.067, -0.293,
			   -0.318,  0.876, -0.365, 0.442,
			-0.192,  0.318,  0.928, -0.126,
			0.000,  0.000,  0.000, 1.000];
			   
	// Double the size of an object, using as fixed point (1,1,0)
	var S1 =  [2.0,		0.0,		0.0,		-1.0,
			   0.0,		2.0,		0.0,		-1.0,
			   0.0,		0.0,		2.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Mirror the starship along a plane passing through (1,2,0), and obtained rotating 38 degree around the y axis the xy plane
	var S2 =  [0.2419,	0.0,		-0.9703,		0.7581,
			   0.0,		1.0,		0.0,		0.0,
			   -0.9703,	0.0,		-0.2419,		0.9703,
			   0.0,		0.0,		0.0,		1.0];
			   
	// The ship has been doubled in size, rotated 45 degrees around the x axis, 30 degrees around the y axis, and moved to (1,1,-2). Return the ship in its original position
	var I1 =  [0.433,		0.0,		-0.250,		-0.933,
			   0.177,		0.354,		0.307,		0.083,
			   0.177,		-0.354,		0.307,		0.791,
			   0.0,		0.0,		0.0,		1.0];

	return [R1, S1, S2, I1];
}

