'use strict';
//exercise 5 

let promise = new Promise((resolve,reject)=>{

	resolve('PROMISE VALUE');

}).then(console.log);


console.log("MAIN PROGRAM");