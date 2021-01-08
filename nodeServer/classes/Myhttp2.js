class Myhttp1{

	constructor(req,res){

		this.req=req;
		this.res=res;
		this.path=require('path');
	}

	getFileName(fielName){
			let myFile;

			if(this.req.url=='/'){

				myFile='/'+fielName;
			} else{
				myFile =this.res.url;
			}
			return myFile;
		
	}

	getFilePath(FILE_NAME){
		return this.path.resolve('./public'+FILE_NAME);
	};

	getExt(FILE_PATH){

		return this.path.extname(FILE_PATH);
	}

	getHeader(){
		return this.res.setHeader('Content-Type','text/html');
	}

	getMsg(msg=''){

		return this.res.end(`<html><body><h1>${msg}</h1></body></html>`)
	}



}

module.exports=Myhttp1;