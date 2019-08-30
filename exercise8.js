'use strict';
//exercise 8 

let attachTitle = (title)=>{

	let result = 'DR. ' + title;
	return result;

}

let promise = Promise.resolve('MANHATTAN');


promise
.then(attachTitle)
.then(console.log);

//I can not agree more it is extremely exciting