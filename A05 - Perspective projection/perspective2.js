

function perspective(w, h, fov) {
	// Build a perspective projection matrix, for a viewport whose size is determined by parameters w (width) and h (height), and whose fov-y is passed in parameter fov. Near plane is n=0.1, and far plane f=100.
	
	var a = w/h;
	var b = utils.degToRad(fov/2);
	var c = 1.0 / Math.tan(b);
	
	var per = [c/a,	0.0,	0.0,	0.0,
				0.0,	c,	0.0,	0.0,
				0.0, 0.0, -1.002,	-0.200,
				0.0, 0.0, -1.0, 0.0];
	return per;
}
