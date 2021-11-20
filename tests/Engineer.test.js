const Engineer = require("../lib/Engineer.js");

describe ("to get Engineer object ", () => {
    it (" creates an engineer object ", () => {
        const engineer = new Engineer('ram', 10, 'rammohan944@gmail.com','rammohanmiryala');
        expect(engineer.name).toEqual(expect.any(String));
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toEqual(expect.any(String));
    });
});

describe ("the ge", () => {
    it (" to get engineer name", () => {
        const engineer = new Engineer('ram', 10, 'rammohan944@gmail.com','rammohanmiryala');
        expect(engineer.getName()).toBe('ram');
    });
});
describe ("to get engineer id", () => {
    it ("should return the engineer id", () => {
        const engineer = new Engineer('ram', 10, 'rammohan944@gmail.com','rammohanmiryala');
        expect(engineer.getId()).toBe(10);
    });
});

describe ("to get engineer email", () => {
    it ("should return the engineer email", () => {
        const engineer = new Engineer('ram', 10, 'rammohan944@gmail.com','rammohanmiryala');
        expect(engineer.getEmail()).toEqual('rammohan944@gmail.com');
    });
});

describe ("to get engineer github", () => {
    it ("should return the engineer github", () => {
        const engineer = new Engineer('ram', 10, 'rammohanmiryala','rammohanmiryala');
        expect(engineer.github()).toBe("rammohanmiryala");
    });
});
