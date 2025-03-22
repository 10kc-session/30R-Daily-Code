// // // /**
// // //  *  this keyword
// // //  *  -------------
// // //  *      this refers to current invoking object or current calling
// // //  *      internally this keyword is a window object
// // //  */
// // // console.log(window);
// // // console.log(this);

// // // var a = 10;
// // // console.log(window.a);
// // // console.log(this.a);

// // // var empName = "Gopal Krishna";

// // // let obj = {
// // //     "empName": "Gopal",
// // //     "empSal": 50000,
// // //     // obj (current)
// // //     "greeting": function () {
// // //         console.log(this == window); // false
// // //         console.log(`Hi my name is ${this.empName}`);
// // //     }
// // // }
// // // obj.greeting();

// // // console.log(this == window); // true

// // // // window
// // // function x() {
// // //     console.log(this);
// // // }
// // // x();
// // // console.log(x);
// // // console.log(window.x);

// // let trainer = {
// //     "name": "Hemanth",
// //     "getBooks": function (noOfBooks, subject) {
// //         console.log(`${this.name} has taken ${noOfBooks} ${subject} books`);
// //     }
// // }
// // let student = {
// //     "name": "Naresh"
// // }

// // let student1 = {
// //     "name": "Prathibha"
// // }

// // // trainer.getBooks(10);
// // // trainer.getBooks.call(student, 5, "Maths");
// // // trainer.getBooks.call(student1, 15, "Maths");

// // // trainer.getBooks.apply(student, [5, "Mathematics"]);
// // // trainer.getBooks.apply({ "name": "Gopal" }, [10, "Science"]);


// // // let res = trainer.getBooks.bind(student1);
// // // console.log(res);
// // // res(10, "Science");

// // let obj = {
// //     "name": "Javascript"
// // };
// // console.log(obj.toString());

// // let arr = [1, 2, 3, 4, 5];
// // console.log(arr);

// // console.log(arr.toString());

// // let a = 10;
// // console.log(a.toString());

// // function x() {
// //     console.log("Hello")
// // }

// // Array.prototype.findEven = function () {
// //     let res = [];
// //     for (let ele of this) {
// //         if (ele % 2 == 0)
// //             res.push(ele);
// //     }
// //     return res;
// // }

// // Array.prototype.findOdd = function () {
// //     let res = [];
// //     for (let ele of this) {
// //         if (ele % 2 != 0)
// //             res.push(ele);
// //     }
// //     return res;
// // }


// // let arr = [4, 7, 65, 5, 23, 34, 454, 675, 5, 3, 4, 62, 1];
// // console.log(arr.findEven()); // [4,34,454,4,62]
// // console.log(arr.findOdd());

// Object.prototype.toStrings = function () {
//     return "Hello From Main Object";
// }

// Object.prototype.x = function () {
//     return "Hey";
// }

// let obj = {};
// console.log(obj.x);

// let arr = [];

// console.log(arr.x())
// console.log(arr.toStrings()); // Array -> toStrings x -> Object -> v

// let obj1 = {

// }

// let obj2 = {
//     __proto__: obj1,
// }

// console.log(obj2.toStrings());

Array.prototype.getPrimesWithoutDuplicates = function () {
    let res = [];
    for (let ele of this) {
        let flag = true;
        if (ele > 1) {
            for (let i = 2; i * i <= ele; i++) {
                if (ele % i == 0) {
                    flag = false;
                    break;
                }
            }
        }
        if (flag && ele > 1) {
            res.push(ele);
        }
    }
    return Array.from(new Set(res));
}

arr = [1, 3, 5, 7, 9, 13, 13, 7, 4, 5, 3, 21, 76, 1013];
console.log(arr.getPrimesWithoutDuplicates());