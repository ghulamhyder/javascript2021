const express=require('express');
const app=express();

const path=require('path');

const mypath=path.join(__dirname);

const midleware=(req,res,next)=>{
	console.log("middleware function is running");
	next();
}


//app.get();
//app.post();
//app.put();
//app.delete();

app.use(midleware);

app.get('/',(req,res)=>{

res.sendFile("./public/index.html",{root:__dirname});

});

app.get('/about',(req,res)=>{

res.sendFile('./public/about.html',{root:__dirname});

});
app.get('/showAbout',(req,res)=>{

	res.redirect('/about');
});

app.use((app,res)=>{

	res.sendFile('./public/_404.html',{root:__dirname});
});





app.listen(5000,()=>{

	console.log('server is running :5000');
}); 

