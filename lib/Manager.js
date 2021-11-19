const Employee = require("./Employee");

class Manager extends Employee {
   
    constructor (name, id, email, number) {
        // calling employee constructor 
        super (name, id, email,number);
        this.number = number; 
    }

    // returning github from input 
    number () {
        return this.number;
    }

     // override employee role to engineer
    getRole () {
        return "Manager";
    }
}


module.exports = Manager;