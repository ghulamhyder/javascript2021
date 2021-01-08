const http=require('http');
const host="localhost";
const port=8080;
const {Routing,showName}=require('./export/Getpage');
showName();

let server=http.createServer((req,res)=>{

		


		Routing(req,res);




		/*res.statusCode=200;
		res.setHeader('Content-Type','application/json');
		let myjson={id:1,name:'hyder',email:'hyder@gmail.com'};
		res.write(JSON.stringify(myjson));
		res.end();*/

});

server.listen(port,host,()=>{
	console.log(`server is running at http://${host}:${port}`);
})