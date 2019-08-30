'use strict';
//exercise 4 

let onReject = (err)=>{
	console.log(err.message);
};

let promise = new Promise((resolve,reject)=>{

	resolve('I FIRED');
	reject(new Error('I DID NOT FIRE'));

}).then(console.log,onReject);