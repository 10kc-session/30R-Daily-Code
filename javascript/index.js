/**
 *  Object Methods in Javascript
 *  -----------------------------
 *      the methods which are used to manipulate object
 */
// let obj = {
//     "name": "Hemanth",
//     "desg": "Trainer"
// }
// console.log(Object.keys(obj)); // keys present in obj which are enumurable
// console.log(Object.values(obj)); // values present in obj
// console.log(Object.entries(obj));
// let arr = Object.entries(obj); // [ [ 'name', 'Hemanth' ], [ 'desg', 'Trainer' ] ]
// for (let [key, value] of arr) {
//     console.log(key, value);
// }

// how to make shallow copy of object
// obj1 = obj2

// how to make deep copy of an object
// spread operator let obj = {...obj1}; // deep copy , {...obj1, ...obj2}

// let obj1 = {
//     "empName": "Jeevan",
//     "empSalary": 50000
// }
// let obj2 = {
//     "empDesg": "SD",
//     "empSalary": 60000
// }

// Object.assign(obj1, obj2);

// console.log(obj1);

// let newObj = Object.assign({}, obj1);
// console.log(newObj);

// newObj.empName = "Jeevan Prakash";

// console.log(`New Object  : `, newObj);
// console.log(`Old Object  : `, obj1);

// let obj = {
//     "name": "Hemanth",
//     "desg": "Trainer"
// }

// let newChild = Object.create(obj);
// newChild.address = "Hyderabad";

// console.log(newChild); // {}
// console.log(newChild.name); // Hemanth -> inheritance
// console.log(newChild.desg); // Trainer
// console.log(newChild.address);

// let obj = {
//     "name": "Naresh",
//     "desg": "Student",
//     "address": {
//         "city": "Hyderabad"
//     }
// }
// Object.seal(obj); // we can only perform read and update
// Object.seal(obj.address);//


// // Nested
// obj.address.state = "TG";
// console.log(obj);


// // Reading
// console.log(obj.name);
// console.log(obj.desg);

// obj.address = "Hyderabad"; // adding (not possible)

// console.log(obj);


// // updating
// obj.name = "Naresh naik";
// console.log(obj);

// delete obj.name;
// console.log(obj);

// let obj = {
//     "name": "Naresh",
//     "desg": "Student",
//     "address": {
//         "city": "Hyderabad"
//     }
// }
// Object.freeze(obj);

// // reading
// console.log(obj);

// // updating
// obj.name = "Naresh Naik";
// console.log(obj);


// // Deleting
// delete obj.name;
// console.log(obj);

// delete obj.address.city
// console.log(obj);

// let obj = {
//     "name": "Naresh",
//     "desg": "Student"
// }
// Object.freeze(obj);
// console.log(Object.getOwnPropertyDescriptors(obj));

// console.log(Object.getOwnPropertyDescriptor(obj, "desg"));
/**
 * {
  value: 'Naresh', -> returns the value of key
  writable: true,  -> allows updation (true) , does not allow updation (false);
  enumerable: true,  -> if true it shows the data , if false does not shows
  configurable: true -> it true allows deletion and adding , if false does not allow deletion and adding
}
 */

// Object.freeze(obj);

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// let obj = {};

// Object.defineProperty(obj, "name", {
//     value: "Naresh",
//     enumerable: true,
//     writable: false,
//     configurable: false
// });

// console.log(obj)

// obj.name = "Naresh Naik";

// console.log(obj)

// let obj = {};

// Object.defineProperties(obj, {
//     "name": {
//         value: "Naresh",
//         enumerable: true,
//         writable: false,
//         configurable: false
//     },
//     "desg": {
//         value: "Student",
//         enumerable: false,
//         writable: false,
//         configurable: false
//     }
// })

// console.log(obj);

// delete obj.desg;
// console.log(obj);

// console.log(Object.keys(obj));
// console.log(obj.desg);

// Object.keys();
// Object.values();
// Object.entries();
// Object.seal();
// Object.freeze();
// Object.create();
// Object.assign();
// Object.getOwnPropertyDescriptor();
// Object.getOwnPropertyDescriptors();
// Object.defineProperties();
// Object.defineProperty();
// Object.isFrozen();
// Object.isSealed();
// Object.fromEntries();



/**
 * String methods in Javascript
 */
// let str = "Hello World";
// console.log(str[0]);
// console.log(str.charAt(100));
// console.log(str.at(100));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.slice(0));
// console.log(str.slice(0, 4)); // 0 - 3 -> excludes 4
// console.log(str.slice(0, -3));
// console.log(str.slice(-4, -1));
// console.log(str.slice(-1, -5));
// console.log(str.substring(-1, 5));
// console.log(str.substr(0, 5));
// console.log(str.substr(4, 13));
// console.log(str.charCodeAt(0));
// console.log(str.startsWith("World"));
// console.log(str.endsWith("world"));
// console.log(str.includes(" "));
// console.log(str.includes(" Wo"));

// let arr = ["a", "e", "i", "o", "u"];

// let count = 0;
// for (let char of str) {
//     if (arr.includes(char.toLowerCase())) {
//         count++;
//     }
// }
// console.log(count);

// console.log(str.indexOf("o", str.indexOf("o") + 1));
// console.log(str.lastIndexOf("o", 15));

// str = "   Hello World   ";

// console.log(str.trimEnd());
// console.log(str.trimStart());
// console.log(str.trim());

// str = "Hello";
// console.log(str.padStart(str.length + 6, "-"));
// console.log(str.padEnd(7, "***"));

let str = "i am from tg and i know malayalam because of my madam"; // malayalam , madam
// malayalam
// ala
// malayalam
// layal
// aya
console.log(str.split(" "));

console.log(str.replaceAll("i", "I"));
console.log(str.repeat(3));