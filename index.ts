interface User {
  name: string;
  age: number;
  occupation: string;
  role?: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
  occupation?: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
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

export function logPerson(user: Person) {
  let additionalInformation: string | undefined;
  if (user.role) {
    additionalInformation = user.role;
  } else if (user.occupation) {
    additionalInformation = user.occupation;
  }
  console.log(` - ${user.name}, ${user.age}, ${additionalInformation}`);
}

console.log("Users: ");
persons.forEach(logPerson);
