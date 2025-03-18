/**
 *   Async and Await
 *   ---------------
 *      Callbacks
 *      Callback hells
 *      Promises  -> then chaining 
 *    Concise -> Async and await
 * then , catch , resolve , reject , all , any , allste , race , finally
 */
// function get() {
//     let promise = Promise.resolve("Hello World")
//     promise.then(res => console.log(res));
//     console.log("Function Data");
// }
// get();
// console.log("Hey World");

/**
 * async function functionName(){
 *      
 * }
 * let refVar = async function(){
 *      
 * }
 * let refVar = async () => {
 *      
 * }
 * will return promise object 
 */

// function getData() {
//     return Promise.resolve("Hello world");
// }

// getData().then(res => console.log(res));

async function getData() {
    return "Hello world"; // wrapping into promise object 
}

getData().then(res => console.log(res));

/**
 * Async keyword is used to make function as asynchronous and it implictily 
 * returns a promise object
 *  
 * Await keyword can be used in only async function and modules , await is going 
 * block below statements until a promise is resolve or rejected
 * 
 * if promise is resolved it is going to consume the promise
 */

// async function natureOfAwait() {
//     let promise1 = new Promise((resolve, reject) => {
//         // setTimeout(resolve, 2000, "Promise 1 resolved");
//         setTimeout(() => {
//             resolve("Promise 1 Resolved");
//         }, 2000);
//     })
//     let promise2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise 2 Resolved");
//         }, 1000);
//     })
//     // promise1.then(res => console.log(res));
//     // promise2.then(res => console.log(res));
//     let promise1Res = await promise1;
//     let promise2Res = await promise2;
//     console.log(promise1Res);
//     console.log(promise2Res);
// }

// console.clear();

// natureOfAwait();

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
            reject("Stock is not available");
        }, 1000)
    })
}

function paymentRecieved() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Payment Success");
        }, 2000);
    });
}

function outOfDelivery() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Delivered Successfully");
        }, 1000)
    })
}

async function orderHere() {
    try {
        let placeOrderStatus = await placeOrder();
        console.log(placeOrderStatus);

        let checkingStockStatus = await checkingStock();
        console.log(checkingStockStatus);

        let paymentRecievedStatus = await paymentRecieved();
        console.log(paymentRecievedStatus);

        let outOfDeliveryStatus = await outOfDelivery();
        console.log(outOfDeliveryStatus);

    } catch (error) {
        console.error(error);
    }

}
orderHere();

// placeOrder()
//     .then(res => { console.log(res); return checkingStock(); })
//     .then(res => { console.log(res); return paymentRecieved(); })
//     .then(res => { console.log(res); return outOfDelivery(); })
//     .then(res => { console.log(res); })
//     .catch(err => console.error(err));


/**
 * Async -> ? 
 *      returns a promise object , convert function into asynchornous
 * 
 * Await ->
 *        converts async to sync
 *        block untill a promise resolved or rejected
 *        if promise is resolve it going consume   
 *         if promise is rejected it throws an error message 
 */

// function getData() {
//     fetch("http://localhost:5000/products")
//         .then(res => res.json())
//         .then(data => console.log(data))
// }
// getData();

async function getData() {
    try {
        let response = await fetch("http://localhost:5000/products");
        let data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
getData();


