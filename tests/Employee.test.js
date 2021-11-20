const Employee = require("../lib/Employee");

describe ("to get employee object", () => {
    it (" creates an employee object ", () => {
        const employee = new Employee('ram', 10, 'rammohan',);
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });
});

describe ("to get employee name", () => {
    it (" should return  employee name", () => {
        const employee = new Employee('ram', 10, 'rammohan944@gmail.com','Employee');
        expect(employee.getName()).toBe('ram');
    });
});
describe ("to get employee id", () => {
    it ("should return the employee id", () => {
        const employee = new Employee('ram', 10, 'rammohan944@gmail.com','Employee');
        expect(employee.getId()).toBe(10);
    });
});

describe ("to get employee email", () => {
    it ("should return the employee email", () => {
        const employee = new Employee('ram', 10, 'rammohan944@gmail.com','Employee');
        expect(employee.getEmail()).toEqual('rammohan944@gmail.com');
    });
});

describe ("to get employee role", () => {
    it ("should return the employee role", () => {
        const employee = new Employee('ram', 10, 'rammohan944@gmail.com','Employee');
        expect(employee.getRole()).toBe("Employee");
    });
});
