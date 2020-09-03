function anim(cx, cy, cz, qx, qy, qz, qw, alpha) {
	// cx, cy, cz are arrays of four points
	// qx, qy, qz, qw are arrays of four quaternions
	// returns transform matrix with rotation and translation given
	// by Bezier interpolation of the input positions
	// according to parameter alpha (0 <= alpha <= 1)
	qx = new Quaternion();
	qy = new Quaternion();
	qz = new Quaternion();
	qw = new Quaternion();
	var x = qx.slerp(qy)(alpha);
	var y = qy.slerp(qz)(alpha);
	var z = qz.slerp(qw)(alpha);
	var a = x.slerp(y)(alpha);
	var b = y.slerp(z)(alpha);
	
	var c = a.slerp(b)(alpha);
	
	var j = utils.MakeTranslateMatrix(cx,cy,cz);
	var q = c.toMatrix4();		
	
	var out =  utils.multiplyMatrices(j,q);
	
	return out;
}

