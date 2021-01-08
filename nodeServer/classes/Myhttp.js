class Myhttp{

	constructor(req,res){
		this.req=req;
		this.res=res;
		this.path=require('path');
		
	}

	getFileName=(fileName)=>{

		let fileUrl;
		if(this.req.url==='/'){
			fileUrl='/'+fileName;
		}else {

				fileUrl=this.req.url;
		}
		return fileUrl;
}

	getFullPath=(fileName)=>{
	return this.path.resolve('./public'+fileName);
};
	 getExt=(FILE_PATH)=>{ 
			return this.path.extname(FILE_PATH);
};

	setHeader1=()=>{
	return this.res.setHeader('Content-Type','text/html');
};
	notExistMsg=(msg)=>{
	return this.res.end(`<html><body><h1>${msg}</h1></body></html>`);
};

statusCode1(code){
	return this.res.statusCode=code;
}

}//end class
module.exports=Myhttp;