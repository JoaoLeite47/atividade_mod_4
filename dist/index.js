"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.users = void 0;
exports.users = [
    {
        name: "Wilker",
        age: 25,
        occupation: "Backend developer",
    },
    {
        name: "Bob",
        age: 23,
        occupation: "Product Manager",
    },
];
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
exports.logPerson = logPerson;
console.log("Users:");
exports.users.forEach(logPerson);
///////////////////////////////////////////// ATV 2
// interface User{
//   name: string;
//   age: number;
//   occupation?: string;
// }
// interface Admin {
//   name: string;
//   age: number;
//   role?: string;
// }
// export type Person = User | Admin;
// export const persons: Person[]  = [
//   {
//     name: "Max Mustermann",
//     age: 25,
//     occupation: "Chimney sweep",
//   },
//   {
//     name: "Jane Doe",
//     age: 32,
//     role: "Administrator",
//   },
//   {
//     name: "Kate Müller",
//     age: 23,
//     occupation: "Astronaut",
//   },
//   {
//     name: "Bruce Willis",
//     age: 64,
//     role: "World saver",
//   },
// ];
// export function logPerson(user: Person) {
//   console.log(` - ${user.name}, ${user.age}`);
// }
// persons.forEach(logPerson);
/////////////////////////////////////////////////////// ATV 3
// interface User {
//   name: string;
//   age: number;
//   occupation: string;
//   role?: string;
// }
// interface Admin {
//   name: string;
//   age: number;
//   role: string;
//   occupation?: string;
// }
// export type Person = User | Admin;
// export const persons: Person[] = [
//   {
//     name: "Max Mustermann",
//     age: 25,
//     occupation: "Chimney sweep",
//   },
//   {
//     name: "Jane Doe",
//     age: 32,
//     role: "Administrator",
//   },
//   {
//     name: "Kate Müller",
//     age: 23,
//     occupation: "Astronaut",
//   },
//   {
//     name: "Bruce Willis",
//     age: 64,
//     role: "World saver",
//   },
//   {
//     name: "Jaozin",
//     age: 21,
//     occupation: "Vulgo dublê",
//   },
// ];
// export function logPerson(user: Person) {
//   let additionalInformation: string | undefined;
//   if (user.role) {
//     additionalInformation = user.role;
//   } else if (user.occupation) {
//     additionalInformation = user.occupation;
//   }
//   console.log(` - ${user.name}, ${user.age}, ${additionalInformation}`);
// }
// console.log("Users: ");
// persons.forEach(logPerson);
