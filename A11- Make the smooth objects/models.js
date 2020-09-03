function buildGeometry() {
	var i;
	
	// Draws a cube
	var vert1 = [[1.0, 1.0,-1.0], [1.0,-1.0,-1.0], [-1.0, 1.0,-1.0], [1.0, 1.0, 1.0], [-1.0, 1.0, 1.0], [1.0,-1.0, 1.0], [1.0, 1.0,-1.0], [1.0, 1.0, 1.0], [1.0,-1.0,-1.0], [1.0,-1.0,-1.0], [1.0,-1.0, 1.0],[-1.0,-1.0,-1.0], [-1.0,-1.0,-1.0], [-1.0,-1.0, 1.0], [-1.0, 1.0,-1.0], [1.0, 1.0, 1.0], [1.0, 1.0,-1.0], [-1.0, 1.0, 1.0], [-1.0,-1.0,-1.0], [-1.0,-1.0, 1.0], [1.0,-1.0, 1.0], [-1.0,-1.0, 1.0], [-1.0, 1.0, 1.0], [-1.0, 1.0,-1.0]];
	var norm1 = [[0.0, 0.0,-1.0], [0.0, 0.0,-1.0], [0.0, 0.0,-1.0], [0.0, 0.0, 1.0], [0.0, 0.0, 1.0], [0.0, 0.0, 1.0], [1.0, 0.0, 0.0], [1.0, 0.0, 0.0], [1.0, 0.0, 0.0], [0.0,-1.0, 0.0], [0.0,-1.0, 0.0], [0.0,-1.0, 0.0], [-1.0, 0.0, 0.0], [-1.0, 0.0, 0.0], [-1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 1.0, 0.0], [0.0, 1.0, 0.0], [0.0, 0.0,-1.0], [0.0, 0.0, 1.0], [1.0, 0.0, 0.0], [0.0,-1.0, 0.0], [-1.0, 0.0, 0.0], [0.0, 1.0, 0.0]];
	var ind1 = [0,  1,  2,  1, 18,  2,  3,  4,  5,  4, 19,  5, 6,  7,  8, 7, 20,  8, 9, 10, 11, 10, 21, 11, 12, 13, 14, 13, 22, 14, 15, 16, 17, 16, 23, 17];
	var color1 = [0.0, 0.0, 1.0];
	addMesh(vert1, norm1, ind1, color1);
	
	// Draws a Cylinder
	var vert2 = [[0.0, 0.0, 0.0],[0.0,0.0,2.0]];
	var norm2=[[0.0,0.0,-1.0],[0.0,0.0,1.0]]
	var ind2 = [];
	var color2 = [1.0, 0.0, 1.0];
	var slices2 = 6;
	for(i = 0; i < slices2; i++) {
	vert2[2*i+2] = [Math.cos(2*Math.PI / slices2 * i), Math.sin(2*Math.PI / slices2 * i), 0.0];
	vert2[2*i+3] = [Math.cos(2*Math.PI / slices2 * i), Math.sin(2*Math.PI / slices2 * i), 2.0];
	vert2[14+i] = [Math.cos(2*Math.PI / slices2 * i), Math.sin(2*Math.PI / slices2 * i), 0.0];
	vert2[20+i] = [Math.cos(2*Math.PI / slices2 * i), Math.sin(2*Math.PI / slices2 * i), 2.0];
	norm2[2*i+2] = [0, 0, -1.0];
	norm2[2*i+3] = [0, 0, 1.0];
	norm2[14+i] = [Math.cos(2*Math.PI / slices2 * i), Math.sin(2*Math.PI / slices2 * i), 0.0];
	norm2[20+i] = [Math.cos(2*Math.PI / slices2 * i), Math.sin(2*Math.PI / slices2 * i), 0.0];
	ind2[12*i]    = 2*i+2;
	ind2[12*i+1]  = 0;
	ind2[12*i+2]  = (i < slices2-1) ? 2*i+4 : 2 ;
	ind2[12*i+3]  = 1;
	ind2[12*i+4]  = 2*i+3;
	ind2[12*i+5]  = (i < slices2-1) ? 2*i+5 : 3 ;
	ind2[12*i+6]  = 2*i+3;
	ind2[12*i+7]  = 2*i+2;
	ind2[12*i+8]  = (i < slices2-1) ? 2*i+4 : 2;
	ind2[12*i+9]  = 2*i+3;
	ind2[12*i+10] = (i < slices2-1) ? 2*i+4 : 2;
	ind2[12*i+11] = (i < slices2-1) ? 2*i+5 : 3;
	}	
	addMesh(vert2, norm2, ind2, color2);

	
	// Draws a Cone
	var vert3 = [[0.0, 0.0, 0.0],[0.0,0.0,2.0]];
	var ind3 = [];
	var  norm3=[[0,0,0],[0,0,2]];
	var color3 = [1.0, 1.0, 0.0];
	var slices3 = 64;
	for(i = 0; i < slices3; i++) {
	vert3[i+2] = [Math.cos(2*Math.PI / slices3 * i), Math.sin(2*Math.PI / slices3 * i), 0.0];
	vert3[66+i]= [Math.cos(2*Math.PI / slices3 * i), Math.sin(2*Math.PI / slices3 * i), 0.0];
	norm3[i+2]=[0,0,1];
	norm3[66+i]=[Math.cos(2*Math.PI / slices3 * i), Math.sin(2*Math.PI / slices3 * i), 0.0];
	ind3[6*i]   = i+2;
	ind3[6*i+1] = 0;
	ind3[6*i+2] = (i < slices3-1) ? i+3 : 2 ;
	ind3[6*i+3] = 1;
	ind3[6*i+4] = i+2;
	ind3[6*i+5] = (i < slices3-1) ? i+3 : 2 ;
	}
	addMesh(vert3, norm3, ind3, color3);

	// Draws a Sphere
	var vert4 =[] ;
	var norm4 =[];
	var ind4 =[];
	var slices4 = 5;
	var radius = 2.0;
	var color4 = [0.0, 1.0, 1.0];
	 for (var i = 0; i <= slices4; ++i) {
		var theta = i * Math.PI / slices4;
		var sinTheta = Math.sin(theta);
		var cosTheta = Math.cos(theta);
		for (var j = 0; j <= slices4; ++j) {
		  var phi = j * 2 * Math.PI / slices4;
		  var sinPhi = Math.sin(phi);
		  var cosPhi = Math.cos(phi);
		  var x = cosPhi * sinTheta;
		  var y = cosTheta;
		  var z = sinPhi * sinTheta;
		  vert4.push([radius * x,radius * y,radius * z]);
		  norm4.push([x,y,z]);
		}
	  }
	  // Calculate sphere indices.
	  for (var i = 0; i < slices4; ++i) {
		for (var j = 0; j < slices4; ++j) {
		  var first = (i * (slices4 + 1)) + j;
		  var second = first + slices4 + 1;
		  ind4.push(first);
		  ind4.push(second);
		  ind4.push(first + 1);
		  ind4.push(second);
		  ind4.push(second + 1);
		  ind4.push(first + 1);
		}
	  }
	addMesh(vert4, norm4, ind4, color4);
}

