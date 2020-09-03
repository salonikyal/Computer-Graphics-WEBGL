// these global variables are used to contain the current angles of the world
var q= new Quaternion("1","0","0","0");

// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the -1 .. +1 range that tells the angular velocity of the world.
function updateWorld(rvx, rvy, rvz) {
	//Converting to radian for further computation
	var a = utils.degToRad(rvx);
	var b = utils.degToRad(rvy);
	var c = utils.degToRad(rvz);
	
	var p = Quaternion.fromEuler(c,a,b,"ZXY");
	
	//Updating the quaternion 
	q = p.mul(q);
	
	//Compute the rotation matrix
	var out =  q.toMatrix4();	
	//console.log(out+" ");

	return out;
}