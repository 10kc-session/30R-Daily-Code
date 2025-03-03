/**
 *  Loops in Javascript
 *  -------------------
 *      Loops are used to execute block of code multiple times untill the condition 
 *      satisfies
 *      types of loops
 *      -------------
 *      for loop , while loop , do while , for in , for off
 */

// unary operator in js
/**
 *  ++ -> increment  -> post increment , pre increment -> +1 
 *  -- -> decrement  -> post decrement , pre decrement -> -1
 */
var a = 10; // 11
// a++;  // post increment a = a + 1;
console.log(a++); // first accessing the value and later increment value  -> 10
// a = a + 1; -> 11
console.log(a);
console.log("--------------------");
var b = 20; // 21
// ++b; // pre increment first update the value b = b + 1 -> b = 20 + 1 -> 21 later access
console.log(++b);
console.log(b);

var c = 10; // 11
//           10 + 11
console.log(c++ + c); // 21
console.log(c); // 11

console.log("-----------");
console.clear();
var d = 35; // 37
//           35 + 36
console.log(d++ + d++); // 71
console.log(d); // 37

d = 4;
console.log(d++ + ++d);
console.log(++d + d++ - d);

/**
 *   for loop
 *  -----------
 *      Syn : 
 *              for identifier in range(start , end , step):
 *                  // statements
 * 
 *              for(initilization;condition;updation){
 *                      // statements
 *              }
 *              initilization -> baby born 
 *              condition     -> is alive or not 
 *              updation      -> birthday 
 
 * First Loop -> initilization and condition
 * Second loop to end -> updation and condition
 */
for (var a = 1; a <= 5; a = a + 1) {
    console.log(a);
}

for (var a = 1; a <= 100; a++) {
    console.log(a);
}

//  i = i + 2
for (var i = 1; i <= 14; i += 2) {
    console.log(i);
}

for (var i = 0; i % 2 == 0; i++) {
    console.log(i);
}

for (var i = 0; i % 2; i++) {
    console.log(i);
}

for (var i = 1; i < 6; i++) {
    console.log(i % 3); // 1 2 0 1 2
}
/**
 * Write a function which takes a single parameter from 1 to n , and prints the table
 * of the parameter value upto 10
 *  function name -> printTable
 *  parameter -> num 
 *  input -> 2
 *    output 2 table -> 2 * 1 = 2
 *                      2 * 2 = 4
 */

function printTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
console.clear();
printTable(2);

//-----------------------------------------------

/**
 * prime -> 1 to n
 *  -> it should divisible by one
 *  -> and itself
 */
console.clear();
var num = 3;
console.log(num % 1);
console.log(num % 3);

num = 6;
console.log(num % 1);
console.log(num % 6);
console.log(num % 2);
console.log(num % 3);

num = 100;

num = 7;
console.log(num % 1);
console.log(num % 7);

// 5
// 1 itself -> 2
// 1 -> x  ifself -> X
//  1 2 3 4 5 6 7 -> 3.5 -> 3
//  1 2 3 4 5 6
//   9
//  1 2 3 4 5 6 7 8 9 10 / 20
console.clear();
//               100
function isPrime(num) {
    if (num == 1)
        return false;
    //   i = 2 ; i <= 50
    for (var i = 2; i <= Math.floor(num / 2); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
if (isPrime(100)) {
    console.log("Is Prime Number");
} else {
    console.log("! Prime");
}

var num = 100;
var count = 0; // 3
for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
        count++;
    }
    if (count > 2) {
        break;
    }
}
if (count == 2) {
    console.log("Prime Number");
} else {
    console.log("!");
}
