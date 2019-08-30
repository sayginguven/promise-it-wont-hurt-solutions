'use strict';
//exercise 6 

let promise = Promise.resolve('SECRET VALUE')
.then((msg)=>{
	console.log(msg);
}).catch((msg)=>{
	console.log(msg);
});