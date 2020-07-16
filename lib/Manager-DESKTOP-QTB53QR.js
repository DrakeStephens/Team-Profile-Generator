const Employee = require("./Employee");
const fs = require('fs');

class Manager extends Employee{
    constructor(role, num, name, email, id) {
        //test
        super();
        this.role = role;
        this.name = name;
        this.email = email;
        this.id = id;
        this.num = num;
    }
    getOfficeNumber() {
        this.getRole();
    }

    getRole() {
        console.log('-------------')
        var manager = {
            role: this.role,
            num: this.num,
            name: this.name,
            email: this.email,
            id: this.id
        }

        
    }
}

module.exports = Manager;