const Manager = require("../lib/Manager.js");

describe ("to get Manager object ", () => {
    it (" creates an manager object ", () => {
        const manager = new Manager('ram', 10, 'rammohan944@gmail.com',9);
        expect(manager.name).toEqual(expect.any(String));
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toEqual(expect.any(String));
    });
});

describe ("to get manager name", () => {
    it (" should return the manager name", () => {
        const manager = new Manager('ram', 10, 'rammohan944@gmail.com',9);
        expect(manager.getName()).toBe('ram');
    });
});
describe ("to get manager id", () => {
    it ("should return the manager id", () => {
        const manager = new Manager('ram', 10, 'rammohan944@gmail.com',9);
        expect(manager.getId()).toBe(10);
    });
});

describe ("to get manager email", () => {
    it ("should return the manager email", () => {
        const manager = new Manager('ram', 10, 'rammohan944@gmail.com',9);
        expect(manager.getEmail()).toEqual('rammohan944@gmail.com');
    });
});

describe ("to get manager officenumber", () => {
    it ("should return the manager officenumber", () => {
        const manager = new Manager('ram', 10, 'rammohanmiryala',9);
        expect(manager.number()).toBe(9);
    });
});
