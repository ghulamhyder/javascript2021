const http=require('http');
const host='localhost';
const port=8080;
const fs=require('fs');
const Myhttp1=require('../classes/Myhttp2');


const server=http.createServer((req,res)=>{

	const myHttp=new Myhttp1(req,res);

		const FILE_NAME=myHttp.getFileName('index2.html');
		const FILE_PATH=myHttp.getFilePath(FILE_NAME);
		const FILE_EXT=myHttp.getExt(FILE_PATH);
		//console.log(FILE_NAME);
		//console.log(FILE_PATH);
		//console.log(FILE_EXT);
		if(req.method==='GET'){
			if(FILE_EXT==='.html'){
			fs.exists(FILE_PATH,(exists)=>{
				if(!exists){

					myHttp.res.statusCode=404;
					myHttp.getHeader();
					myHttp.getMsg(`${req.url} not found 4040 invalid file extension`);

				}

					myHttp.res.statusCode=200;
					myHttp.getHeader();
					fs.createReadStream(FILE_PATH).pipe(res);
					

			})


			}else{

				myHttp.res.statusCode=404;
				myHttp.getHeader();
				myHttp.getMsg(`${req.url} 4040 File Not Found`);

			}

		




		}else{

			myHttp.res.statusCode=404;
			myHttp.getHeader();
			myHttp.getMsg('4040 invalid Request method');

		}

});





server.listen(port,host,()=>{

	console.log(`server is running at http://${host}:${port}`);


});



