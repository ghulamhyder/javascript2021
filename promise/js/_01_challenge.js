
let val=20;
let data=new Promise((resolve,reject)=>{

	setTimeout(()=>{
		let val=30;
		resolve(val);

	},2000)

});
console.log(val);
data.then((val)=>{
console.log(val);

});