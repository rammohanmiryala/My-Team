const Intern = require("../lib/intern.js");

describe ("to get intern object  ", () => {
    it (" creates an intern object ", () => {
        const intern = new Intern('ram', 10, 'rammohan944@gmail.com','uni adelaide');
        expect(intern.name).toEqual(expect.any(String));
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toEqual(expect.any(String));
    });
});

describe ("the get intern name", () => {
    it (" to get intern name", () => {
        const intern = new Intern('ram', 10, 'rammohan944@gmail.com','uni adelaide');
        expect(intern.getName()).toBe('ram');
    });
});
describe ("to get intern id", () => {
    it ("should return the intern id", () => {
        const intern = new Intern('ram', 10, 'rammohan944@gmail.com','uni adelaide');
        expect(intern.getId()).toBe(10);
    });
});

describe ("to get intern email", () => {
    it ("should return the intern email", () => {
        const intern = new Intern('ram', 10, 'rammohan944@gmail.com','uni adelaide');
        expect(intern.getEmail()).toEqual('rammohan944@gmail.com');
    });
});

describe ("to get intern school", () => {
    it ("should return the intern school", () => {
        const intern = new Intern('ram', 10, 'rammohanmiryala','uni adelaide');
        expect(intern.school()).toEqual("uni adelaide");
    });
});
