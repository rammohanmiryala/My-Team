const Employee = require("./Employee");

class intern extends Employee {
   
    constructor (name, id, email, school) {
        // calling employee constructor 
        super (name, id, email,school);
        this.username = school; 
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


module.exports = intern;