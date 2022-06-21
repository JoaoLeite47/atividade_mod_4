"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.persons = void 0;
exports.persons = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep",
    },
    {
        name: "Jane Doe",
        age: 32,
        role: "Administrator",
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut",
    },
    {
        name: "Bruce Willis",
        age: 64,
        role: "World saver",
    },
    {
        name: "Jaozin",
        age: 21,
        occupation: "Vulgo dublê",
    },
];
function logPerson(user) {
    let additionalInformation;
    if (user.role) {
        additionalInformation = user.role;
    }
    else if (user.occupation) {
        additionalInformation = user.occupation;
    }
    console.log(` - ${user.name}, ${user.age}, ${additionalInformation}`);
}
exports.logPerson = logPerson;
console.log("teste");
exports.persons.forEach(logPerson);
