const Employee = require("./Employee");


class Intern extends Employee{
    constructor(role, school, name, email, id) {
        super();
        this.role = role;
        this.name = name;
        this.email = email;
        this.id = id;
        this.school = school;
    }
    getSchool() {
        this.getRole();
    }
    getRole() {
        console.log('-------------')
        console.log(this.role)
        console.log(this.name)
        console.log(this.email)
        console.log(this.id)
        console.log(this.officeNumber)
    }
}

module.exports = Intern;