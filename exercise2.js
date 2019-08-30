'use strict';
//exercise 2 

let promise = new Promise((resolve,reject)=>{

	setTimeout(()=>{
		resolve('FULFILLED!');
	},300);

}).then(console.log);