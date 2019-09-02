'use strict';
//exercise 11

const all = (promise1, promise2) => {

    return new Promise((resolve, reject) => {

        let counter = 0;
        let values = [];

        promise1.then((result) => {

            //values.push(result); // this may fail the test 
            values[0] = result;
            counter += 1;

            if (counter === 2) {
                resolve(values);
            }

        }, null);

        promise2.then((result) => {

            //values.push(result); // this may fail the test
            values[1] = result;
            counter += 1;

            if (counter === 2) {
                resolve(values);
            }

        }, null);

    });

};


all(getPromise1(), getPromise2())
    .then(console.log, null);