const http=require('http');
const fs=require('fs');
const path=require('path');

const host="localhost";
const port=8080;

const server=http.createServer((req,res)=>{

	//console.log('request for '+req.url + 'by method '+ req.method);

	if(req.method=='GET'){
		let fileUrl;
		if(req.url=='/'){
			fileUrl="/index.html";
		} else{
			fileUrl=req.url;
		}

		let filePath=path.resolve('./public'+fileUrl);
		let fileExt=path.extname(filePath);
		if(fileExt=='.html'){
			fs.exists(filePath,(exists)=>{
				if(!exists){
					res.statusCode=404;
					res.setHeader('Content-Type','text/html');
					res.end(`<html><body><h1>error 404 ${fileUrl} does not exists</h1></body></html>`);
				}
				res.statusCode=200;
				res.setHeader('Content-Type','text/html');
				fs.createReadStream(filePath).pipe(res);///file important

			});
		} else{
		res.statusCode=404;
		res.setHeader('Content-Type','text/html');
		res.end(`<html><body><h1>error 404 ${fileUrl} not a html file</h1></body></html>`);
	}
	}else{

		res.statusCode=404;
		res.setHeader('Content-Type','text/html');
		res.end(`<html><body><h1>error 404 ${fileUrl} not supported</h1></body></html>`);


	}

	//res.statusCode=200;
	//res.setHeader('Content-Type','text/html');
	//res.end('<html><body><h1>Server connection successfully</h1></body></html>');




});

server.listen(port,host,()=>{

		console.log(`server running at http://${host}:${port}`);

});