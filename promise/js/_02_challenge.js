
let data=new Promise((resolve,reject)=>{

	

	setTimeout(()=>{

		reject("something in error");

	},2000);

});

 let success=()=> console.log("success");
 let failure=(err)=> console.log(err);


data.then(success,failure);


/*function success(){
	console.log("success");
}

function failure(){
	console.log("failure");
}*/




