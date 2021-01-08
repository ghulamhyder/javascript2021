
const fs=require('fs');
const Routing=(req,res)=>{
res.setHeader('Content-Type','text/html');
		let page="";


		if(req.url==='/'){
			page="./shakilKhan/txt/index.html";
			
		}
		else if(req.url==='/about'){
			page="./shakilKhan/txt/about.html";
			
		}
		else if(req.url=='/register'){
			page="./shakilKhan/txt/register.html";
			
		} 
		else{
			page="./shakilKhan/txt/index.html";
		}

		fs.readFile(page,(error,data)=>{

			if(!error){
				res.write(data);
				res.end();
			}
		})
	};

	const showName=()=>{
		console.log("hello javed!");
	}
	module.exports={

		Routing,
		showName


	};