/** 
 *     BOM Methods in Javascript         
 */

let openNewWindow = document.getElementById("btn-1");
let closeWindow = document.getElementById("btn-2");
let confirmBox = document.getElementById("btn-3");
let alertBox = document.getElementById("btn-4");
let promptBox = document.getElementById("btn-5");
let startTimer = document.getElementById("btn-6");
let stopTimer = document.getElementById("btn-7");
let newWindow = null;

openNewWindow.addEventListener("click", function () {
    // newWindow = window.open("https://example.com/", "_blank", "height=400,width=400,top=200,left=200");
    // setTimeout(() => {
    //     newWindow.close();
    // }, 2000)
    newWindow = window.open("", "_blank", "height=400,width=400,top=200,left=200");
    newWindow.document.writeln(`<h1>Hello World</h1>`);
})

closeWindow.addEventListener("click", function () {
    newWindow.close();
})

confirmBox.addEventListener("click", function () {
    let status = window.confirm("do you want close this window ?");
    if (status) {
        newWindow.close();
    }
})

promptBox.addEventListener("click", function () {
    let data = +window.prompt("enter a number", "0");
    console.log(data);
})

alertBox.addEventListener("click", function () {
    window.alert("Something went wrong....");
})

let interval = null;

startTimer.addEventListener("click", function () {
    interval = window.setTimeout(() => {
        alert("Hello World");
    }, 5000);
})

stopTimer.addEventListener("click", function () {
    window.clearTimeout(interval);
})

// startTimer.addEventListener("click", function () {
//     let container = document.querySelector(".output");
//     interval = window.setInterval(() => {
//         let date = new Date();
//         container.innerHTML = `${date.getSeconds()}`
//     }, 1000);
// })

// stopTimer.addEventListener("click", function () {
//     window.clearInterval(interval);
// })