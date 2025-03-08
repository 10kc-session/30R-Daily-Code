/**
 *  Promises 
 *  --------
 *  The promises is object which represent eventually completion or failure 
 *  state of an asynchronous operations
 *  Promises to overcome callback hells
 *  There are three states
 *  ----------------------
 *  1. pending 
 *  2. fullfiled
 *  3. rejected
 * 
 *  true and false -> resolve and reject
 * 
 *  How to create promise object
 *  ============================
 *      variable refVar = new Promise(callback); -> creating a new promise and calling
 *      constructor
 *      
 *      -> success state -> then(callback); // if
 *      -> rejected state -> catch(callback); // else
 */

// var promise1 = new Promise((resolve, reject) => {
//     // reject("Order Failed");
//     // reject("Hello There");
// });

// // promise1.then(res => console.log(res));
// // promise1.catch(res => console.error(res));


// promise1
//     .then(res => console.log(res))
//     .catch(err => console.error(err));


// var promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Hello World");
//     }, 1000);
//     resolve("Promise 1 Success");
// });
// promise1.then((res) => console.log(res));

// function getPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve("Hello World");
//             reject("rejected");
//         }, 5000);
//     });
// }
// getPromise().then(res => console.log(res)).catch(err => console.error(err))

// function add(val) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(val + 10);
//         }, 1000)
//     });
// }
// function sub(val) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(val - 5);
//         }, 1000);
//     })
// }
// add(30)
//     .then(addRes => sub(addRes)) // one promise is generate with value of sub value promise
//     .then(subRes => console.log(subRes));

// Promise
//     .resolve("Hello world")
//     .then(res => res + " !")
//     .then(res => console.log(res));

console.log("Customer Ordered....");

function placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Placed Succesfully");
        }, 2000);
    });
}
function checkingStock() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Stock is Available");
            // reject("Stock is Not Available");
        }, 1000)
    })
}

function paymentRecieved() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Payment Success");
            // reject("Payment Failed");
        }, 2000);
    });
}

function outOfDelivery() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("Delivered Successfully");
            reject("Delivery Failed");
        }, 1000)
    })
}

placeOrder()
    .then(res => { console.log(res); return checkingStock(); })
    .then(res => { console.log(res); return paymentRecieved(); })
    .then(res => { console.log(res); return outOfDelivery(); })
    .then(res => { console.log(res); })
    .catch(err => console.error(err));
