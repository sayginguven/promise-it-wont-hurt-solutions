'use strict';
//exercise 3 

let onReject = (err)=>{
	console.log(err.message);
};

let promise = new Promise((resolve,reject)=>{

	setTimeout(()=>{
		reject(new Error('REJECTED!'));
	},300);

}).then(null,onReject);