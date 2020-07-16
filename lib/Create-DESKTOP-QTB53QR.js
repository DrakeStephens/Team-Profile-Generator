const inquirer = require('inquirer');
//const Employee = require('./Employee');
const Manager = require('./Manager');
const Intern = require('./Intern');
const fs = require('fs')
const Engineer = require('./Engineer');
//const Manager = require('./Manager');
//const Intern = require('./Intern');

function Create() {
    this.employee;
    this.employees = [];
    this.id = 0
// fs.writeFile(/index.html, this.employees, err =>)
    Create.prototype.E = function() {
        this.id++;
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'role',
                choices: ['Engineer', 'Intern', 'Manager'], 
            }
            ]).then(a => {
                if(a.role === 'Manager') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'num',
                            message: "What is your Managers's office number?"
                        },
                        {
                            type: 'input',
                            name: 'name',
                            message: "What is your employee's name?"
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "What is your employees email?"
                        }
                    ]).then(a => {
                        this.id++;
                        this.employee = new Manager('Manager', a.num, a.name, a.email, this.id)
                        this.employee.getName();
                        this.employees.push(this.employee)
                        console.log(this.employees)
                        inquirer.prompt([
                            {
                                type: 'confirm',
                                name: 'again',
                                message: 'Would you like add another employee?',
                                default: false
                            }
                        ]).then(a => {
                            if(a.again === true){
                                this.E();
                            } else {
                                fs
                            }
                        })
                    })
                } else if (a.role === 'Engineer') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'gitHub',
                            message: "What is your Engineer's GitHub account?"
                        },
                        {
                            type: 'input',
                            name: 'name',
                            message: "What is your employee's name?"
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "What is your employees email?"
                        }
                    ]).then(a => {
                        this.id++;
                        this.employee.push(new Engineer('Engineer', a.gitHub, a.name, a.email, this.id).getName())
                    })
                } else if (a.role === 'Intern') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'school',
                            message: "What is your Intern's school?"
                        },
                        {
                            type: 'input',
                            name: 'name',
                            message: "What is your employee's name?"
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "What is your employees email?"
                        }
                    ]).then(a => {
                        this.id++;
                        this.employee.push(new Intern('Intern', a.school, a.name, a.email, this.id).getName());
                    })
                }
            })
    };
    Create.prototype.html = function(data) {
        
    }
};
module.exports = Create;

