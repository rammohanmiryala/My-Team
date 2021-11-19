const Employee = require("./Employee");

class Intern extends Employee {
   
    constructor (name, id, email, school) {
        // calling employee constructor 
        super (name, id, email,school);
        this.school = school; 
    }

    // returning github from input 

    school () {
        return this.school;
    }

    //  // override employee role to engineer
    // getRole () {
    //     return "intern";
    // }
}


module.exports = Intern;