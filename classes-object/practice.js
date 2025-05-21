let DATA = "Secrest Data";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Data = ", DATA)
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "Edited Data";
    }
}

let student1 = new User("Vivek", "vivek@gmail.com");
let student2 = new User("Shraddha", "shraddha@gmail.com");

let teacher1 = new User("Shivani", "shivani@yahoo.com");

let admin1 = new Admin("admin", "admin@college.com");

//student1.viewData();
//student2.viewData();
//student1
//student2
//teacher1.viewData();

