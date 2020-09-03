function axonometry() {
	// Make an isometric view, w = 40, a = 16/9, n = 1, f = 101.
	/*var A1 =  [0.018,	0.0,		0.018,		0.0,
			   -0.018,		0.036,		0.018,		0.0,
			   0.012,		0.012,		-0.012,		-1.02,
			   0.0,		0.0,		0.0,		1.0];*/
	var A1= utils.multiplyMatrices(
				utils.multiplyMatrices(
					utils.MakeParallel(40,16/9,1,101),
						utils.MakeRotateXMatrix(35.26)),
							utils.MakeRotateYMatrix(45));
			   
	// Make a dimetric view, w = 40, a = 16/9, n = 1, f = 101, rotated 20 around the x-axis
	/*var A2 =  [0.01775,	0.0,		0.01775,		0.0,
			   -0.01066,		0.04177,		0.01066,		0.0,
			   0.0132,		0.0068,		-0.0132,		-1.02,
			   0.0,		0.0,		0.0,		1.0];*/
			   
	var A2 = utils.multiplyMatrices(
				utils.multiplyMatrices(
					utils.MakeParallel(40,16/9,1,101),
						utils.MakeRotateXMatrix(20)),
							utils.MakeRotateYMatrix(45));
			   
	// Make a trimetric view, w = 40, a = 16/9, n = 1, f = 101, rotated -30 around the x-axis and 30 around the y-axis
	var A3 =  utils.multiplyMatrices(
				utils.multiplyMatrices(
					utils.MakeParallel(40,16/9,1,101),
						utils.MakeRotateXMatrix(-30)),
							utils.MakeRotateYMatrix(30));
	
	/*[0.022,	0.0,		0.013,		0.0,
			   0.011,		0.038,		-0.019,		0.0,
			   0.009,		-0.010,		-0.015,		-1.02,
			   0.0,		0.0,		0.0,		1.0];*/
			   
	// Make an cavalier projection view, w = 40, a = 16/9, n = 1, f = 101, at 45 degrees
	var O1 =  [0.025,	0.0,		-0.018,		0.0,
			   0.0,		0.044,		-0.0311,		0.0,
			   0.0,		0.0,		-0.02,		-1.02,
			   0.0,		0.0,		0.0,		1.0];

	// Make a cabinet projection view, w = 40, a = 16/9, n = 1, f = 101, at 60 degrees
	var O2 =  [0.025,	0.000,		-0.006,		0.000,
			   0.0,		0.044,		-0.019,		0.0,
			   0.0,		0.0,		-0.02,		-1.02,
			   0.0,		0.0,		0.0,		1.0];
			   
			  
	return [A1, A2, A3, O1, O2];
}

