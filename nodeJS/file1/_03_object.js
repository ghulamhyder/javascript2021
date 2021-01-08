const square=require('../area/_area.js');

/*(function ( exports,require,module,__filename,__dirname){

}*/

let myval=(a,b)=>{

//console.log(module);
	console.log(`A: ${a}, B: ${b} 
		and area is:${square.area(a,b)} and the perimeter is ${square.pera(a)}`);
}

myval(10,2);