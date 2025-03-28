// // export const add = (a, b) => a + b; // named export

// // export const sub = (a, b) => a - b;  // named export

// // export const a = 10;

// // export const obj = {
// //     "name": "Rajesh"
// // }


// // const add = (a, b) => a + b; // named export

// // const sub = (a, b) => a - b;  // named export

// // const a = 10;

// // const obj = {
// //     "name": "Rajesh"
// // }

// // export {
// //     add, sub, a, obj
// // }


// // export function addTwoNumbers(a, b) {
// //     return a + b;
// // }

// // export function findRealLengthOfString(str) {
// //     if (typeof str != "string") {
// //         throw new TypeError("not a valid datatype");
// //     }
// //     else {
// //         return str.trim().length;
// //     }
// // }


// // default export
// // export default function findRealLengthOfString(str) {
// //     if (typeof str != "string") {
// //         throw new TypeError("not a valid datatype");
// //     }
// //     else {
// //         return str.trim().length;
// //     }
// // }
// // Named export
// // function add(a, b) {
// //     console.log(a + b);
// // }

// // const a = 10;

// // // defaul export
// // export default function sub(a, b) {
// //     console.log(a - b);
// // }

// // export {
// //     add, a
// // }

// function add() {
//     console.log("Addd")
// }

// function sub() {
//     console.log("Sub")
// }

// const a = 10;

// const obj = { "name": "Javascript" }

// export default obj;

// export {
//     add, sub, a
// }

export function validateForm(formId, userId, passId, userMessageId) {
    let form = document.getElementById(formId);
    let username = document.getElementById(userId);
    let password = document.getElementById(passId);
    let userMessage = document.getElementById(userMessageId);

    form.addEventListener("submit", (event) => {
        let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&]).{8,15}$/;
        let name = username.value.trim();
        let pwd = password.value.trim();


        if (name == '' || pwd == '') {
            event.preventDefault();
        }

        if (name == '' || !/^[a-zA-z]+$/.test(name)) {

            userMessage.innerText = (name == '') ? 'No username available' : 'enter valid username';
            username.className = "error";
            event.preventDefault();
        }
        else {
            userMessage.innerText = '';
            username.className = "";
        }

        if (pwd == '' || !pattern.test(pwd)) {
            password.className = "error";
            event.preventDefault();
        }
        else {
            password.className = "";
        }
    })
}