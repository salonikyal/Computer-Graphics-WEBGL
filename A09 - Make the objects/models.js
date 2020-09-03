function buildGeometry() {
var i;

// Draws a pyramid
var vert1 = [[-1.0,-1.0,1.0], [1.0,-1.0,1.0], [0.0,1.0,0.0], [-1.0,-1.0,-1.0], [1.0,-1.0,-1.0]];
var ind1 = [0, 1, 2, 0, 3, 1, 1, 3, 4, 0, 2, 3, 2, 1, 4, 3, 2, 4];
var color1 = [1.0, 0.0, 0.0];
//console.log(vert1+"\n");
addMesh(vert1, ind1, color1);


// Draws a cube
var vert2 = [[-1.0,-1.0,0.0], [1.0,-1.0,0.0], [1.0,1.0,0.0], [-1.0,1.0,0.0], [-1.0,-1.0,-2.0],[1.0,-1.0,-2.0],[1.0,1.0,-2.0], [-1.0,1.0,-2.0]];
var ind2 = [0, 1, 2,  0, 2, 3, 1, 5, 2, 5, 6, 2, 4, 7, 5, 5, 7, 6, 3, 4, 0, 4, 3, 7, 2, 7, 3, 7, 2, 6, 0, 4, 1, 1, 4, 5];
var color2 = [0.0, 0.0, 1.0];
addMesh(vert2, ind2, color2);


// Draws a Monopoly house
var vert3 = [[-1.0,-1.0,0.0], [1.0,-1.0,0.0], [1.0,1.0,0.0], [-1.0,1.0,0.0], [0.0,1.5,0.0],[-1.0,-1.0,-2.0], [1.0,-1.0,-2.0],[1.0,1.0,-2.0], [-1.0,1.0,-2.0], [0.0,1.5,-2.0] ];
var ind3 = [0, 1, 2,  0, 2, 3,  3, 2, 4, 7, 1, 6, 2, 1, 7, 7, 6, 5, 5, 8, 7, 8, 5, 3, 0, 3, 5, 6, 1, 0, 0, 5, 6, 7, 8, 9, 4, 2, 9, 9, 2, 7, 4, 8, 3, 8, 4, 9];
var color3 = [0.0, 1.0, 0.0];
addMesh(vert3, ind3, color3); 


// Draws a Cylinder
var vert4 = [[0.0, 0.0, 0.0],[0.0,0.0,2.0]];
var ind4 = [];
var color4 = [1.0, 1.0, 0.0];
var slices4 = 6;
for(i = 0; i < slices4; i++) {
vert4[2*i+2] = [Math.cos(2*Math.PI / slices4 * i), Math.sin(2*Math.PI / slices4 * i), 0.0];
vert4[2*i+3] = [Math.cos(2*Math.PI / slices4 * i), Math.sin(2*Math.PI / slices4 * i), 2.0];
ind4[12*i]    = 2*i+2;
ind4[12*i+1]  = 0;
ind4[12*i+2]  = (i < slices4-1) ? 2*i+4 : 2 ;
ind4[12*i+3]  = 1;
ind4[12*i+4]  = 2*i+3;
ind4[12*i+5]  = (i < slices4-1) ? 2*i+5 : 3 ;
ind4[12*i+6]  = 2*i+3;
ind4[12*i+7]  = 2*i+2;
ind4[12*i+8]  = (i < slices4-1) ? 2*i+4 : 2;
ind4[12*i+9]  = 2*i+3;
ind4[12*i+10] = (i < slices4-1) ? 2*i+4 : 2;
ind4[12*i+11] = (i < slices4-1) ? 2*i+5 : 3;

//console.log(ind4[12*i]+"\n"+ind4[12*i+1]+"\n"+ind4[12*i+2]+"\n"+ind4[12*i+3]+"\n"+ind4[12*i+4]+"\n"+ind4[12*i+5]+"\n"+ind4[12*i+6]+"\n"+ind4[12*i+7]+"\n"+ind4[12*i+8]+"\n"+ind4[12*i+9]+"\n"+ind4[12*i+10]+"\n"+ind4[12*i+11]+"\n");
}	

addMesh(vert4, ind4, color4);

// Draws a Cone
var vert5 = [[0.0, 0.0, 0.0],[0.0,0.0,2.0]];
var ind5 = [];
var color5 = [1.0, 0.0, 1.0];
var slices5 = 64;
for(i = 0; i < slices5; i++) {
vert5[i+2] = [Math.cos(2*Math.PI / slices5 * i), Math.sin(2*Math.PI / slices5 * i), 0.0];
ind5[6*i]   = i+2;
ind5[6*i+1] = 0;
ind5[6*i+2] = (i < slices5-1) ? i+3 : 2 ;
ind5[6*i+3] = 1;
ind5[6*i+4] = i+2;
ind5[6*i+5] = (i < slices5-1) ? i+3 : 2 ;
}	
addMesh(vert5, ind5, color5);

//Draw a sphere
var vert6 =[] ;
var ind6 =[];
var slices6 = 5;
var radius = 2.0;
var color6 = [0.0, 1.0, 1.0];
for (var i = 0; i <= slices6; ++i) {
    var theta = i * Math.PI / slices6;
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    for (var j = 0; j <= slices6; ++j) {
		
      var phi = j * 2 * Math.PI / slices6;
      var sinPhi = Math.sin(phi);
      var cosPhi = Math.cos(phi);

      var x = cosPhi * sinTheta;
      var y = cosTheta;
      var z = sinPhi * sinTheta;

      vert6.push([radius * x,radius * y,radius * z]);
    }
  }
  // Calculate sphere indices.
  for (var i = 0; i < slices6; ++i) {
    for (var j = 0; j < slices6; ++j) {
      var first = (i * (slices6 + 1)) + j;
      var second = first + slices6 + 1;

      ind6.push(first);
      ind6.push(second);
      ind6.push(first + 1);

      ind6.push(second);
      ind6.push(second + 1);
      ind6.push(first + 1);
    }
  }
  console.log("vert:"+vert6);
  console.log("\nind6:"+ind6);
 addMesh(vert6, ind6, color6);
}

/*
//Sphere code 1
var vert6 = [[0.0, 0.0, 0.0],[0.0,0.0,2.0]];
var ind6 = [];
var color6 = [0.0, 1.0, 1.0];
var slices6 = 5;
for(i = 0; i < slices6; i++) {
vert6[3*i+2] = [Math.sin(2*Math.PI / slices6 * i), -Math.cos(2*Math.PI / slices6 * i), 0.0];
vert6[3*i+slices6+2] = [2.6*Math.sin(2*Math.PI / slices6 * (i+0.5)), -2.6*Math.cos(2*Math.PI / slices6 * (i+0.5)), 0.0];
vert6[3*i+slices6+3] = [2.6*Math.sin(2*Math.PI / slices6 * (i+1.5)), -2.6*Math.cos(2*Math.PI / slices6 * (i+1.5)), 2.0];
//vert6[i+1] = [Math.sin(j * Math.PI / slices6) *Math.sin(2*Math.PI / slices6 * i), -Math.sin(j * Math.PI / slices6) *Math.cos(2*Math.PI / slices6 * i), Math.cos(j * Math.PI / slices6)];
//vert6[i+slices6+1] = [2.6*Math.sin(j * Math.PI / slices6) *Math.sin(2*Math.PI / slices6 * (i+0.5)), -2.6*Math.sin(j * Math.PI / slices6) *Math.cos(2*Math.PI / slices6 * (i+0.5)), Math.cos((j+0.5) * Math.PI / slices6)];
ind6[12*i]    = i+2;
ind6[12*i+1]  = 0;
ind6[12*i+2]  = (i < slices6-1) ? i+3 : 2 ;
ind6[12*i+3]  = slices6 + i + 2;
ind6[12*i+4]  = i+2;
ind6[12*i+5]  = (i < slices6-1) ? i+3 : 2 ;
ind6[12*i+6]  = slices6 + i + 2;
ind6[12*i+7]  = slices6 + i + 3;
ind6[12*i+8]  = (i < slices6-1) ? slices6 + i + 5 : slices6 + i + 3;
ind6[12*i+9]  = 1;
ind6[12*i+10] = slices6 + i + 3;
ind6[12*i+11] = (i < slices6-1) ? slices6 + i + 5 : slices6 + i + 3;	
console.log("Sphere vertices1 + Loop number "+vert6+" \n "+i+"\n");
ind6[6*i]   = 0;
ind6[6*i+1] = i+1;
ind6[6*i+2] = (i < slices6-1) ? i+2 : 1 ;
ind6[6*i+4] = i+1;
ind6[6*i+3] = (i < slices6-1) ? i+2 : 1 ;
ind6[6*i+5] = slices6 + i + 1;
}
 console.log("Sphere indices1 "+ind6+"\n");
addMesh(vert6, ind6, color6);
*/

//sphere code 2
/*
var vert6 = [] ;
var color6 = [0.0, 1.0, 1.0];
var ind6 =[];
var slices6 = 5;
var slices6 = 5;
var radius = 5.0;
var count;
for (var i = 0; i < slices6; ++i)
{
var theta = i * Math.PI / slices6;
var sinTheta = Math.sin(theta);
var cosTheta = Math.cos(theta);

for (var j = 0; j < slices6; ++j)
{
var phi = j * 2 * Math.PI / slices6;
var sinPhi = Math.sin(phi);
var cosPhi = Math.cos(phi);
var x = cosPhi * sinTheta;
var y = cosTheta;
var z = sinPhi * sinTheta;
vert6[(6*i)+j] = [radius * x, radius * y, radius * z];
var first = (i * (slices6 + 1)) + j;
var second = first + slices6 + 1;
ind6.push(first);
ind6.push(second);
ind6.push(first + 1);
ind6.push(second);
ind6.push(second + 1);
ind6.push(first + 1);
console.log("Sphere vertices "+vert6+"\n");
}
}
console.log("Sphere indices "+ind6+"\n");
addMesh(vert6, ind6, color6);
*/