/**
 *  Conditional Statements
 *  -----------------------
 *      simple if
 *          -->         if(condition){
 *                          // Statements
 *                      }
 *                  if condition is true ,then statements will be executed
 *                  if condition is false , then statements will not executed 
 *      if else
 *          ->     if(condition){
 *                      // true statements
 *                  }
 *                  else{
 *                      // false statements
 *                  }
 *          if condition is true then it is going to execute if block , or it directly going to else
 *      ladder if
 *              if(condition){
 *                    /// statements
 *              }else if(condition){
 *                     // stat
 *              }else{ 
 *                  // state
 *              }
 *      nested if
 *      switch case
 */
var flag = true;
if (flag) {
    console.log("Hello World");
}
// ! -> not 
if (!flag) {
    console.log("Hello There");
}

if (flag == !false) {
    console.log("Statement Executed");
}
// if age is less than 18 -> then log -> Not Eligible 
var age = 18;
if (age < 18) {
    console.log("Not Eligigble");
}
if (age >= 18) {
    console.log("Eligible");
}

if (age < 18) {
    console.log("! Eligible");
} else {
    console.log("Eligible");
}

// age > 18 and age should be below 65 -> eligible -> without and operator

age = 70;
if (age < 18) {
    console.log("!");
} else {
    if (age < 65) {
        console.log("Eligible");
    } else {
        console.log("!");
    }
}

// age > 18 and age < 65 -> if age is 0 or negative show invalid age
age = 90;
if (age <= 0) {
    console.log("Invalid age");
} else {
    if (age >= 18) {
        if (age < 65) {
            console.log("Eligible");
        } else {
            console.log("Not eligible");
        }
    } else {
        console.log("Not eligible");
    }
}

var gender = "xyz";
if (gender == "male") {
    console.log("Male");
}
else if (gender == "female") {
    console.log("Female");
}
else if (gender == "others") {
    console.log("Others");
} else {
    console.log("Invalid Gender");
}

/**
 *  write a js program where define a named function checkNationality with single 
 *  parameter , this is going to validate the parameter if it is indian or not 
 * checkNationality(name) -> name -> indian -> He/She is Indian
 *  -> HE/SHE is from different country
 * 
 * 
 * write a function which returns largest number by adding 10 
 *  function name -> getLargest
 *  parameters -> num1 , num2
 * 
 *  write a function which takes three parameters (num1 , num2 , callback) -> getData()
 *  pass three arguments to getData function 
 *      num1 - 20 
 *      num2 - 40 
 *      callback -> arrow fun(num1 , num2)
 * call the callback function , this function will return smallest number to the getData
 * and getData return smallest by adding 20;
 */
function getData(num1, num2, callback) {
    return callback(num1, num2) + 20;
}
var result = getData(20, 40, (num1, num2) => {
    if (num1 < num2) {
        return num1;
    }
    return num2;
})
console.log(result);





function getLargestNum(num1, num2) {
    if (num1 > num2) {
        return num1 + 10;
    }
    return num2 + 10;
}
console.log(getLargestNum(10, 40));


function checkNationality(name) {
    if (name == "Indian") {
        console.log("HE/SHE is indian");
    }
    else {
        console.log("HE/SHE is from different company")
    }
}
checkNationality("Indian")
checkNationality("others")
