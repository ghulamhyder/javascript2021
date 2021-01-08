

let data=new Promise((resolve,reject)=>{



setTimeout(()=>{

	//console.log(resolve());
	resolve([20,10],"ghyder");

},2000);


});

let add=(arr,str)=>{

	console.log(arr[0]);
	console.log(arr[1]);
	let c=arr[0]+arr[1];
	
	console.log(c);
};
let nothing=()=>console.log("nothing");

data.then(add,nothing);