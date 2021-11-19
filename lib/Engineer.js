const Employee = require("./Employee");

class Engineer extends Employee {
   
    constructor (name, id, email, github) {
        // calling employee constructor 
        super (name, id, email,github);
        this.github = github; 
    }

    // returning github from input 
    // username () {
    //     return this.github;
    // }

    //  // override employee role to engineer
    // getRole () {
    //     return "Engineer";
    // }
}



module.exports = Engineer;