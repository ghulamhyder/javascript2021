const http=require('http');
const Myhttp=require('../classes/Myhttp');
const fs=require('fs');
const port=8080;
const host="localhost";



const server=http.createServer((req,res)=>{

	let myHttp=new Myhttp(req,res);
	if(req.method=='GET'){

		const FILE_NAME=myHttp.getFileName('index2.html');

		const FILE_PATH=myHttp.getFullPath(FILE_NAME);
		const GET_EXT=myHttp.getExt(FILE_PATH);
		

		if(GET_EXT=='.html'){

			fs.exists(FILE_PATH,(exists)=>{
				if(!exists){
					res.statusCode=404;
					myHttp.setHeader1();
					myHttp.notExistMsg(`error 404 ${FILE_NAME} does not exists`);
				}

				res.statusCode=200;
				myHttp.setHeader1();
				fs.createReadStream(FILE_PATH).pipe(res);

			});
		} else{
					res.statusCode=404;
					myHttp.setHeader1();
					myHttp.notExistMsg(`error 404 ${FILE_NAME} not a html file`);
			}
	}
	else{

					res.statusCode=404;
					myHttp.setHeader1();
					myHttp.notExistMsg(`error 404 ${FILE_NAME} not Supported`);

	}

	
		

});

server.listen(port,host,()=>{

console.log(`server is running http://${host}:${port}`);
});