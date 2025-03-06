/**
 *  Objects in Javascript
 *  ---------------------
 *     Objects are collection of key value pairs , where keys can be string or symbol
 *     In Object values can any type of datatype , but to access the values from object
 *     we need a unique key.
 *     There are three ways to create ways to create object
 *     ------------------------------------------------------
 *      1. literal objects (recommended)
 *      2. using constructor
 *      3. Object.create()
 *     In javascript every datatype is an Object (prototype)
 *     object are represented in {}.
 *     key and value pairs are seperated by , (comma)
 *     Syn : 
 *             variable refVar = {}; 
 *      variable refVar = {
 *                          key : value , key : value , 
 *                          key : value
 *                      } 
 *      how to access values from an object
 *      -----------------------------------
 *          1. refVar.keyName (dot notation)
 * 
 *          2. refVar["keyName"] (square notation)
 *              (recommended)
 * 
 *          3. Object.values(refVar)
 * 
 *  Note : if there is no key available in object
 *          then it will return undefined
 * // Update
 *  objRef["alreadyAvailableKey"] = value;
 *  objRef.alreadyAvailableKey = value;
 * 
 * // Addd
 * 
 * objRef["newKey"] = value;
 * 
 * // delete
 * 
 * delete objRef.alreadyAvailableKey
 * 
 * if we write duplicates keys in object then 
 * previous value will be replaced with latest value
 */


var obj = {
    "name": "Naresh",
    "address": "Hyderabad",
    "hno": 110,
};

// Accessing the data

console.log(obj["1234"]); // undefined

console.log(obj);
console.log(obj.name);
console.log(obj["name"]);

console.log(obj.address);
console.log(obj["address"]);

console.log(obj.hno);
console.log(obj["hno"]);

// update the data
obj.name = "Naresh Nayak";
obj["address"] = "Chennai";
obj["hno"] = 12345
console.log(obj);

// Add the data into object

obj["phno"] = "1234567890";
obj.email = "naresh@gmail.com"

console.clear();
console.log(obj);

console.table(obj);


// deleting the data

delete obj.hno;

console.table(obj);
console.log(obj.hno);

delete obj["address"];
console.table(obj);
console.log(obj.address);

// Adding Masala

var obj2 = {
    "empName": "Rajesh",
    "empId": 1,
    "empName": "Raghu"
}

console.table(obj2);

var obj3 = {
    "studentName": "Satya",
    "studentId": 101,
    "studentAddress": {
        "city": "Hyderabad",
        "pincode": "500072",
        "state": "TG",
        "street": "KPHB colony road no 2"
    }
}
console.clear();
console.log(obj3);
console.log(obj3.studentName);
console.log(obj3.studentId);
console.log(obj3.studentAddress);
console.log(obj3.studentAddress.city);
console.log(obj3.studentAddress.pincode);
console.log(obj3.studentAddress.street);

var obj4 = {
    "studentName": "suraji",
    "studentImages": ["image1", "image2", "image3"],
    "studentBikes": [
        {
            "name": "Pulsar",
            "cc": "220",
            "color": "black"
        },
        {
            "name": "Yamaha r1",
            "cc": "1000",
            "color": "Blue"
        },
        {
            "name": "Ns 250",
            "cc": "250",
            "color": "black"
        }
    ]
}
console.clear();
console.log(obj4.studentName);
console.log(obj4.studentImages);

for (var element of obj4.studentImages) {
    console.log(element);
}

console.log(obj4.studentBikes);

for (var element of obj4.studentBikes) {
    console.log(element.name);
    console.log(element.cc);
    console.log(element.color);
}

console.clear();
/**
 * obj5.results[0].gender
 * obj5["results"][0]["gender"]
 * 
 * obj5.results[0].name.title
 * obj5.results[0].name.first
 * obj5.results[0].name.last
 * 
 * obj5.results[0].location.street.number
 * obj5.results[0].location.cordinates.longitude
 */
var obj5 = {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Yasnovid",
                "last": "Okunevskiy"
            },
            "location": {
                "street": {
                    "number": 2787,
                    "name": "Portova"
                },
                "city": "Gluhiv",
                "state": "Chernivecka",
                "country": "Ukraine",
                "postcode": 60123,
                "coordinates": {
                    "latitude": "74.9486",
                    "longitude": "-39.6168"
                },
                "timezone": {
                    "offset": "-3:00",
                    "description": "Brazil, Buenos Aires, Georgetown"
                }
            },
            "email": "yasnovid.okunevskiy@example.com",
            "login": {
                "uuid": "f954b3f8-1cc8-47d6-94cd-0fe75ede21fa",
                "username": "smallsnake119",
                "password": "concord",
                "salt": "eUVGEYAh",
                "md5": "5785743b74ab50ba69f41c112737e0d3",
                "sha1": "39eeaec887fe2a86becfd9aa82d42dd4d3a78fbf",
                "sha256": "2e4554c1b82af2501e48ed0f043dfb84e78775c225cda6f7214860e13c483167"
            },
            "dob": {
                "date": "1997-11-13T10:46:50.162Z",
                "age": 27
            },
            "registered": {
                "date": "2020-02-25T02:14:43.429Z",
                "age": 5
            },
            "phone": "(068) Y89-1096",
            "cell": "(096) P80-5385",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/43.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/43.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/43.jpg"
            },
            "nat": "UA"
        }
    ],
    "info": {
        "seed": "a9f9ebca78ca6133",
        "results": 1,
        "page": 1,
        "version": "1.4"
    }
}

var obj6 = {
    "studentName": "Satya",
    "studentId": 101,
    "studentAddress": {
        "city": "Hyderabad",
        "pincode": "500072",
        "state": "TG",
        "street": "KPHB colony road no 2"
    }
}

// for (var key in obj6) {
//     if (key != "studentAddress") {
//         console.log(obj6[key]);
//     } else {
//         for (var addKey in obj6[key]) {
//             console.log(obj6[key][addKey]);
//         }
//     }
// }

// console.log(obj6);

var obj6 = {
    "studentName": "Satya",
    "studentId": 101,
    "studentAddress": {
        "city": "Hyderabad",
        "pincode": "500072",
        "state": "TG",
        "street": "KPHB colony road no 2"
    }
}
// variable {keys present in object} = objectRef
// Object Destructuring ES6
var { studentName, studentId, studentAddress: { city, pincode, state } } = obj6;
console.log(studentName, studentId);
console.log(city, pincode, state);

var obj7 = {
    "hello": "hello there"
}
var obj8 = obj7; // shallow copy vs deep copy in javascript

console.log(obj7);
console.log(obj8);

obj8.hello = "Hey There";

console.log(obj7);
console.log(obj8);

var a = 10;
var b = a;
b = 40;

console.log(a, b);