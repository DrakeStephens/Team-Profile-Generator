const inquirer = require("inquirer");

class Employee {
    constructor(role, name, email, id) {
        this.role = role;
        this.name = name;
        this.email = email;
        this.id = id;
    }


    getName() {
        console.log(this.name);
        this.getId();
    }
    getId() {
        console.log(this.id);
        this.getEmail()
    }
    getEmail() {
        console.log(this.email);
        this.getRole(this.role)
    }
    getRole(role) {
        console.log(this.role)
        if(role === 'Manager'){
            Manager().getOfficeNumber();
        }
        else if(role === 'Engineer'){
            Engineer().getGithub();
        }
        else if(role === 'Intern'){
            Intern().getSchool();
        }
    }
}

module.exports = Employee;