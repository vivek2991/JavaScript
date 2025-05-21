// const student = {
//     fullName: "John Doe",
//     age: 20,
//     marks: 90,
//     printMarks: function() {
//         console.log(this.marks);
//     }
// }


// const employee = {

//     //Both ways to define a function as an object property
//     calTax() {
//         console.log("Tax rate is 10%");
//     },

//     calTax2 : function() {
//         console.log("Tax rate is 20%");
//     }
// };

// const karanArjun = {
//     salary: 50000,
//     // same name function call this function not the above one 
//     calTax() {
//         console.log("Tax rate is 30%");
//     }
// }

// // employee.calTax(); assign to karanArjun
// // karanArjun.calTax(); // we can call that way

// karanArjun.__proto__ = employee;


// class ToyotoCar {

//     constructor(brand, color, year) {
//         this.brand = brand;
//         this.color = color; 
//         this.year = year;
//     }

//     start() {
//         console.log("Car started");
//     }

//     stop() {
//         console.log("Car stopped");
//     }

//     setBrand(brand) {
//         this.brand = brand;
//     }
// }

//let fortuner = new ToyotoCar();

//fortuner.start();
//fortuner.stop();
//fortuner.setBrand("Fortuner");

//let lexus = new ToyotoCar();
//lexus.start();
//lexus.stop();
//lexus.setBrand("Lexus");

// let fortuner = new ToyotoCar("Fortuner", "Red", 2020);
// let lexus = new ToyotoCar("Lexus", "Black", 2021);

// console.log(fortuner);
// console.log(lexus);

// class parent {
//     hello() {
//         console.log("Hello from parent");
//     }
// }

// class child extends parent {}

// let obj = new child();

class person {

    constructor(branch) {
        this.spcialization = "Homo specialization";
        this.branch = branch;
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
}

class Engineer extends person {
    constructor(branch) {
        super(branch); // Parent class constructor call
        this.branch = branch;
    }
    work() {
        super.eat();
        console.log("Solve Problems");
    }
}

// class doctor extends person {
//     work() {
//         console.log("save life");
//     }
// }

let engObj = new Engineer("Computer Engineer");

