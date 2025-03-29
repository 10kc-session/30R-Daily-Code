// /**
//  *  class is blueprint of an object
//  *  class defines the creation of object
//  *  class is a collection of properties and methods
//  *  classes are introduced in Es6 (2015)
//  *  classes are used to follow object oriented programming system.
//  *  Syn :
//  *          class ClassName{
//  *                 properties and methods , constructor
//  *           }
//  *
//  */

// // class Car {
// //     // properties
// //     name;
// //     brand;
// //     color;
// //     materials;
// //     mileage;
// //     fuelType;
// //     // constructor is used to initilize the properties of an object
// //     constructor(name, brand, color, materials, mileage, fuelType) {
// //         console.log("Constructor Called...");
// //         // this.name -> represent -> properties of object
// //         // name -> represents parameter of a constructor
// //         this.name = name;
// //         this.brand = brand;
// //         this.color = color;
// //         this.materials = materials;
// //         this.mileage = mileage;
// //         this.fuelType = fuelType;
// //     }
// //     // Behaviour
// //     start() {
// //         console.log(`${this.name} has started engine`);
// //     }

// //     stop() {
// //         console.log("car has been stopped");
// //     }
// // }

// // let car = new Car("M5", "BMW", "Black", "High Quality", "7kmpl", "Diesel");
// // console.log(car);
// // car.start();


// // variable refVar = new ClassName(arguments...);
// // let car = new Car();
// // car.brand = "BMW";
// // car.color = "Black";
// // car.fuelType = "Diesel";
// // car.materials = "High Quality Materials";
// // car.mileage = "7kmpl";
// // car.name = "M5";

// // console.log(car);
// // car.start();
// // car.stop();

// // Parent
// class Phone {
//     buttons;
//     screen;
//     camera;
//     color;
//     speakers;

//     constructor(buttons, screen, camera, color, speakers) {
//         console.log("Parent Constructor")
//         this.buttons = buttons;
//         this.screen = screen;
//         this.camera = camera;
//         this.color = color;
//         this.speakers = speakers;
//     }

//     calling() {
//         console.log("Calling.....");
//     }
//     sendMessage() {
//         console.log("Send Message...");
//     }
// }

// // KeyPadPhone
// class KeyPadPhone extends Phone {
//     torchLight;
//     constructor(buttons, screen, camera, color, speakers, torchLight) {
//         super(buttons, screen, camera, color, speakers); // to invoke parent class constructor and assign properties
//         console.log("Child Constructor")
//         this.torchLight = torchLight;
//     }
//     calling() {
//         super.calling(); // accessing methods of parent class from child class
//         console.log("Keypad mobile is calling");
//     }
//     sendMessage() {
//         console.log("Keypad mobile is sending message")
//     }
// }

// // hiearacal inheritance
// //  multi level
// // -> grand -> parent -> child

// class SmarthPhone extends Phone {
//     jack;
//     wirelessCharging;
//     wifi;

//     constructor(buttons, screen, camera, color, speakers, jack, wirelessCharging, wifi) {
//         super(buttons, screen, camera, color, speakers);
//         this.jack = jack;
//         this.wirelessCharging = wirelessCharging;
//         this.wifi = wifi;
//     }

//     calling() {
//         console.log("Smartphone calling");
//     }

//     sendMessage() {
//         console.log("Smarphone sending message");
//     }

//     heyGoogle() {
//         console.log("Hello...");
//     }
// }

// let smarthPhone = new SmarthPhone("power and volume button", "amoled", "200mp", "white", "dual speaker", "3.5 mm", true, "wifi 6");
// console.log(smarthPhone);
// smarthPhone.calling();
// smarthPhone.sendMessage();
// smarthPhone.heyGoogle();


// // let keyPadPhone = new KeyPadPhone("4 buttons", "lcd", "no camera", "black", "single speaker", "single torch");
// // console.log(keyPadPhone)
// // keyPadPhone.sendMessage();
// // keyPadPhone.calling();



class Human {
    sleeping() {
        console.log("Human is sleeping")
    }
    eating() {
        console.log("Human is eating")
    }
    walking() {
        console.log("Human is Walking")
    }
    listening() {
        console.log("Human is listening")
    }
}
class Employee extends Human {
    empName;
    empDesg;
    empSalary;
    constructor(empDesg, empName, empSalary) {
        super();
        this.empName = empName;
        this.empDesg = empDesg;
        this.empSalary = empSalary;
    }
    working() {
        console.log(`${this.empName} is working very hard`);
    }

    sleeping() {
        console.log(`${this.empName} is sleeping in working hours`);
    }
    eating() {
        console.log(`${this.empName} is eating`);
    }
    walking() {
        console.log(`${this.empName} is walking around the office`);
    }
    listening() {
        console.log(`${this.empName} is listening to our words`);
    }
}

class Manager extends Employee {
    managerName;

    constructor(empName, empDesg, empSalary, managerName) {
        super(empDesg, empName, empSalary)
        this.managerName = managerName;
    }

    hike(amount) {
        this.empSalary += amount;
        console.log(`${this.empName} salary is hiked by ${amount}`)
    }

    cutSalary(amount) {
        this.empSalary -= amount;
        console.log(`${this.empName} salary is deducted by ${amount}`)
    }
}

let manager = new Manager("Uday", "Software Dev", 50000, "Rakesh");
console.log(manager)
manager.sleeping();
manager.walking();
manager.cutSalary(5000);

console.log(manager.empSalary);