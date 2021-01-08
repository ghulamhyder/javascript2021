const http=require('http');
const path=require('path');
const fs=require('fs');
const host="localhost";
const port=8080;




const getName=(req,res)=>{

		let fileUrl;
		if(req.url==='/'){
			fileUrl='/index2.html';
		}else {

				fileUrl=req.url;
		}
		return fileUrl;
}
const getFullPath=(fileName)=>{
	return path.resolve('./public'+fileName);
}
const getExt=(FILE_PATH)=>{ 
			return path.extname(FILE_PATH);
};


const setHeader1=(res)=>{
	return res.setHeader('Content-Type','text/html');
};
const notExistMsg=(res,msg)=>{
return res.end(`<html><body><h1>${msg}</h1></body></html>`);
};

const server=http.createServer((req,res)=>{

//console.log(req.method);
	if(req.method=='GET'){

		const FILE_NAME=getName(req,res);

		const FILE_PATH=getFullPath(FILE_NAME);
		const GET_EXT=getExt(FILE_PATH);
		//console.log(FILE_NAME+",filename");
		//console.log(FILE_PATH+",filepath");
		//console.log(GET_EXT+",ext");

		if(GET_EXT=='.html'){

			fs.exists(FILE_PATH,(exists)=>{
				if(!exists){
					res.statusCode=404;
					res.setHeader('Content-Type','text/html');
					notExistMsg(res,`error 404 ${FILE_NAME} does not exists`);
				}

				res.statusCode=200;
				res.setHeader('Content-Type','text/html');
				fs.createReadStream(FILE_PATH).pipe(res);

			});
		} else{
					res.statusCode=404;
					res.setHeader('Content-Type','text/html');
					notExistMsg(res,`error 404 ${FILE_NAME} not a html file`);
			}
	}
	else{

					res.statusCode=404;
					res.setHeader('Content-Type','text/html');
					notExistMsg(res,`error 404 ${FILE_NAME} not Supported`);

	}

	
		

});

server.listen(port,host,()=>{

console.log(`server is running http://${host}:${port}`);
});