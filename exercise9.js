'use strict';
//exercise 9

let parsePromised = (json)=>{

	
	return new Promise((resolve, reject)=>{

		try{
			resolve(JSON.parse(json));
		} catch(ex){
			console.log(ex.message);
			reject(new Error('FAILED TO PARSE JSON'));
		}
	
	});

}


parsePromised(process.argv[2])
.then(()=>{
	console.log("JSON parsed!");
})
.catch((err)=>{
	console.log(err.message);
})