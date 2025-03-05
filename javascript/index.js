/**
 *  Arrays in Javascript
 *  --------------------
 *      Arrays are non primitive datatypes or special type of object which can 
 *      heterogenous and homogenous values in a single variable 
 *      In javascript , for arrays there is no restriction on length
 *      The Values which we store arrays are known as elements
 *      To find lenght of array , we can use length property
 *      In Javascript array index starts from 0
 *      In Array elements are seperated by , and array is represented in []
 *      Arrays are in form of continous memory allocation
 *      There are two ways to create objects 
 *      -------------------------------------
 *          1. using literal (Recommended Way)
 *              Syn : 
 *                      varaiable refVar = [];
 *          2. using constructor 
 *              Syn : 
 *                      variable refVar = new Array();
 *      Curd operations
 *      ----------------
 *       create ,               update ,                read  ,                 delete
 *       inserting the elements    modifying the elements     Accessing the elements      delete the elements
 * 
 *      How to insert into an element into array
 *     -------------------------------------------
 *              varaible refVar = [];
 *              refVar[index] = value; // inserting the value 
 *              varaible refVar = [element1 , element2,.....elementN]; // inserting values
 *      
 *      varaiable identifier = refVar[index] // accessing the value
 *      
 *      refVar[alreadyAvailableIndex] = value; // updating the value
 * 
 *      We cannot Delete Elements from array manually , but with the help of methods
 *      we can delete the elements
 *  
 *          refVar.pop(); // deletes the last element
 *          refVar.shift(); // deleted the first element
 *          refVar.splice(); // deletes elements from one position another position
 */

var arr = [];
console.log(typeof arr); // object

//  Inserting the values
arr[0] = 10;
arr[1] = 30;
arr[2] = "Javascript";
arr[3] = function () { console.log("Hello World") };

console.log(arr.length); // 4
console.log(arr); // [10 , 30 , "Javascript" , function]

// Accessing the values

console.log(arr[3]);
arr[3]();

console.log(arr[0] + arr[1]);
arr[5] = arr[0] * 2; // inserting value into 5th index

console.log(arr[4]);
console.log(arr.length); // 6

// how to access last element from array
// given by suraj

console.log(arr[arr.length - 1]); // last index


console.clear();

//     0   1    2    3      4      5        6

console.log(arr.length);
console.log(arr);
arr[0] = 45;
console.log(arr);

/**
 * for(init ; condition ; updation){
 *      // statements
 *  }
*/
console.clear();

arr = [1, 'a', 'b', false, 0.0, 1.23455, function () { return "Hey There" }];

for (var index = 0; index <= 6; index++) {
    console.log(arr[index]);
}

console.log("-------------------------------");

for (var index = 0; index <= arr.length - 1; index++) {
    console.log(arr[index]);
}

console.clear();

arr = [1, 2, 3, 4, 5, 6];

// returns elements
for (var element of arr) {
    console.log(element);
}

// returns indexes
for (var index in arr) {
    console.log(arr[index])
}

arr = [32, 4, 56, 732, 45, 23, 18, 81, "seventy seven"];

for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

console.clear();

arr = [5, 4, 3, 6, 7, 8, 9];
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr); //[4, 3, 6, 7, 8]
arr.splice(1, 3);
console.log(arr);



/**
 *      find even numbers from given array 
 *          o/p => even numbers
 *          arr = [6,4,7,8,9,32,3,4,5,5,43,2,12,3,4,5,67,8,987,65,43,2,234,56]
*/
arr = [6, 4, 7, 8, 9, 32, 3, 4, 5, 5, 43, 2, 12, 3, 4, 5, 67, 8, 987, 65, 43, 2, 234, 56]

for (var element of arr) {
    if (element % 2 == 0) {
        console.log(element);
    }
}

for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}

console.log("-------------------");

var i = 0;
while (i < arr.length) {
    if (arr[i] % 2 == 0)
        console.log(arr[i]);
    i++;
}

