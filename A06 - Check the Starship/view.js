function view(cx, cy, cz, alpha, beta, rho) {
	// Create a view matrix for a camera in position cx, cy and cz, looking in the direction specified by
	// alpha, beta and rho, as outlined in the course slides.
	var T = [];
		var Rx = [];
		var Ry = [];
		var tmp = [];
		var out = [];

		T =  utils.MakeTranslateMatrix(-cx, -cy, -cz);
		Rx = utils.MakeRotateXMatrix(-beta);
		Ry = utils.MakeRotateYMatrix(-alpha);
		Rz = utils.MakeRotateZMatrix(-rho);
		
		tmp = utils.multiplyMatrices(Ry, T);
		temp = utils.multiplyMatrices(Rx, tmp);
		out = utils.multiplyMatrices(Rz,temp)
		
		return out;
}

