'use strict';
//exercise 10

let alwaysThrows = () => {
	throw new Error("OH NOES");
};

let iterate = (val) => {
	console.log(val);
	return val+=1;
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch((err)=>{
	console.log(err.message);
});