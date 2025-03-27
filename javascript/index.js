/**
 *     ES6 features
 *    ----------------
 *    1. let and const
 *    2. arrow function
 *    3. promises
 *          -> resolve , reject , pending , all , allSettled , race , any , resolve , reject
 *          -> then , catch
 *      promise chaining -> async and await (es8)
 *    4. destructuring
 *    5. rest operator and spread operator
 *    6. default parameter functions
 *    7. enchanced object literals
 *    8. nullish collision and optional chaining operator -> research
 *    9. set and map
 *    10. classes (OOPS)
 *    11. modules (********)
 */
/**
 *  Destructuring
 *  -------------
 *      Destructuring is a process extracting the elements from array and properties from
 *      object
 *      Array destructuring ->
 *                              variable [data your going to store] = arrRef;
 *      Object destructuring ->
 * `                            variable {propeties present in object} = objRef;
 */


// let arr = [undefined, 2, 3, 4, 5, 6, 7];

// let [a, b, c, d, e, f, g] = arr;

// let [a, b, , c, , d] = arr;

// always data from 0 to n -> []

// let [a = 0, ...b] = arr;
// console.log(a);

// console.log(b.reduce((sum, next) => sum + next));

/**
 * data access , default , data skip , remaining rest operator
 */


// let obj = {
//     "empName": "Rakesh",
//     "empDesg": "CEO",
//     "empSalary": "1cr pm"
// }
// let { empName, empDesg, empSalary } = obj; // to extract data
// console.log(empName, empDesg, empSalary);

// let { empName: employeeName, empDesg: employeeDesg, empSalary: employeeSalary } = obj; // extract data and change names
// console.log(employeeName, employeeDesg, employeeSalary);

// let { empName = "Rakesh Kumar", empDesg = "CM", empSalary = "1cr per day" } = obj; // default values
// console.log(empName, empDesg, empSalary);

// let { empName: employeeName = "Rakesh Reddy", empDesg: employeeDesg = "PM",
//     empSalary: employeeSalary = "1cr per hour" } = obj;

// console.log(employeeName, employeeDesg, employeeSalary);


// let obj = {
//     "empName": "Rakesh",
//     "empDesg": "CEO",
//     "empSalary": "1cr pm",
//     "empAddress": {
//         "city": "Hyderabad",
//         "state": "TG",
//         "street": "KPHB"
//     }
// }

// for (let key in obj) {
//     if (key == 'empAddress') {
//         for (let addkey in obj[key]) {
//             console.log(obj[key][addkey])
//         }
//     } else
//         console.log(obj[key]);
// }

// let { empName, empDesg, empSalary, empAddress: { city, state, street } } = obj;
// console.log(empName, empDesg, empSalary, city, state, street);



// function printData({ empName, empSalary, empAddress: { city, state, street } }) {
//     console.log(empName, empSalary, city, state, street);
// }
// printData(obj);


// let { id, title, description, category, price, discountPercentage, rating, images, thumbnail } = obj;

// let obj = {
//     "x": [{ "y": "Hello" }]
// }
// let { x } = obj;
// let [objec] = x;
// console.log(objec);


// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b);


// let obj = {
//     "empName": "Rakesh",
//     "empDesg": "CEO",
//     "empSalary": "1cr pm",
//     "empAddress": {
//         "city": "Hyderabad",
//         "state": "TG",
//         "street": "KPHB"
//     }
// }
// let { empName, ...remaining } = obj;
// console.log(empName, remaining);

/**
 *   Rest and Spread operator in javascript
 *  ----------------------------------------
 *      Both rest and spread operator are defined (...) triple dots
 *      rest operator is used in function parameters and destructuring 
 *      spread operator is used to extract the data from array and object
 * 
 *      rest operator will take o to n number of arguments 
 *      Rest parameter must be last formal parameter
 */


// function sum(...numbers) {
//     console.log(numbers.reduce((sum, next) => sum + next));
// }
// sum(10, 20, 30, 40, 50, 60, 70);

// function x(d, b, c, h, ...a) {
// }
// x(1, 3, 3, 5, "5", {}, []);

// function x(...a , ...b) {

// }

// let [a, b, ...rest] = [1, 2, 3, 4, 5, 67, 87, 9, 9];

// let arr = [1, 2, 3, 4, 5, 6];

// function x(a, b, c, d, e, f) {
//     console.log(a + b + c + d + e + f);
// }
// x(...arr);

// let str = "Hello World";
// let empty = [...str];
// console.log(empty)
// for (let index in str) {
//     empty.push(str[index]);
// }
// console.log(empty)

// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [...arr1];

// arr2[0] = 10;

// console.log(arr1);

// let obj = { "name": "Prathibha", "desg": "Primary Student" };
// let obj1 = { "desg": "Student" }

// let obj2 = { ...obj, ...obj1 };

// console.log(obj2);

// let arr1 = [1, 3, 4, 5, 6, 6, 7];
// let arr2 = [12, 2, 4, 345, 356, 536];

// let arr3 = [...arr1, "Hello", false, true, ...arr2];
// console.log(arr3);

// var [a = 0, , , ,  b, c , , ,,] = Array;

// function x([a, b, c]) {
//     console.log(a + b + c)
// }
// x([1, 2, 3]);

// var { proper: nre } = obj
// var { prtoper = "", } = obj
// var { prop: new = "" } = obj;
// var { propt, ...rest } = obj;

// var [a, ...rest] = Array;

// var arr = [...arr , ...arr2 , 2346u]