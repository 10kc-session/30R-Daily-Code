/**
 * to import named exports in your file , we have use {}
 */

// import { add, sub } from './modules.js'; // importing named exports

// console.log(add(10, 30));
// console.log(sub(30, 10));

// import { a, obj, add, sub } from './modules.js';

// console.log(a);
// console.log(obj);
// console.log(add(10, 50));
// console.log(sub(40, 40));

// import { addTwoNumbers as sum } from "./modules.js"; // alais
// console.log(sum(10, 50));

// import { findRealLengthOfString } from './modules.js';
// console.log(findRealLengthOfString(123456));

// only one default export is allowed for a module

// import findRealLengthOfString from "./modules.js";

// console.log(findRealLengthOfString("     Hello World     "));

// import sub, { add, a } from './modules.js';
// add(10, 40);
// console.log(a)
// sub(50, 50);

// import * as allModules from './modules.js';

// console.log(allModules);
// console.log(allModules.a);
// console.log(allModules.default);
// allModules.add();
// allModules.sub();

// import("./modules.js")
//     .then(response => {
//         for (let key in response) {
//             console.log(response[key]);
//         }
//     })
//     .catch(err => console.log(err));

// let module = await import("./modules.js");
// console.log(module);


import { validateForm } from "./modules.js";
validateForm("form", "username", "password", "userMessage");
