const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(role, gitHub, name, email, id) {
        super();
        this.role = role;
        this.name = name;
        this.email = email;
        this.id = id;
        this.gitHub = gitHub;
    }
    getGitHub() {
        this.getRole;
    }

    getRole() {
        console.log('-------------')
        var engineer = {
            role: this.role,
            gitHub: this.gitHub,
            name: this.name,
            email: this.email,
            id: this.id
        }
    }
}

module.exports = Engineer;