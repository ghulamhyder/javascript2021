const fs=require('fs');
fs.readFile('./shakilKhan/txt/file1.txt',(error,data)=>{
	if(!error){
		console.log(data.toString());
	}
});

//fs.copyFileSync('./shakilKhan/txt/file1.txt','./shakilKhan/txt/file2.txt');

/*let name="eidal ,rashid,khan ,ali";

fs.writeFile("./shakilKhan/txt/file3.txt",name,(error)=>{

	if(!error){
		console.log("your file has been created");
	}
})*/

/*const myjson=[

	{id:1,name:'hyder',email:'hyder@gmail.com'},
	{id:2,name:'ali',email:'qadir@gmail.com'},
	{id:3,name:'rind',email:'rind@gmail.com'}

];

fs.writeFile('./shakilKhan/txt/info.json',JSON.stringify(myjson),(error)=>{
	if(!error){
		console.log("your json file has been created");
	}

});*/


/*fs.unlink('./shakilKhan/txt/file1.txt',(error)=>{
	if(!error){
		console.log("your file has been deleted");
	}
})*/


/*fs.rename('shakilKhan/txt/info.json','shakilKhan/txt/user.json',(error)=>{

		console.log("file renameed");

});*/

/*fs.mkdir("myfolder",(error)=>{
	if(!error){
		console.log("folder created");
	}
})*/

fs.rmdir("myfolder",(error)=>{
	if(!error){
		console.log("folder deleted");
	}
})














