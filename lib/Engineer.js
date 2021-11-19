const Employee = require("./Employee");

class Engineer extends Employee {
   
    constructor (name, id, email, username) {
        // calling employee constructor 
        super (name, id, email,username);
        this.username = username; 
    }

    // returning github from input 
    username () {
        return this.username;
    }

    //  // override employee role to engineer
    // getRole () {
    //     return "Engineer";
    // }
}



module.exports = Engineer;