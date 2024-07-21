// object, arrays and tuples
type details = {
  name: string;
  age: number;
  hobbies: string[];
  roles: [number, string]; // this is a Tuple type which is fixed and specified
};

const person: details = {
  name: "Name",
  age: 99,
  hobbies: ["Sports", "Cooking"],
  roles: [2, "author"],
};

person.roles.push("admin"); // this is allowed on Tuples
//person.role[1] = 10; // not allowed in Tuple

console.log(person.hobbies);

//enums
enum Role {
  ADMIN = "ADMIN",
  MOD = "MODERATOR",
  AUTHOR = "AUTHOR",
}

const user: details = {
  name: "Name",
  age: 99,
  hobbies: ["Sports", "Cooking"],
  roles: [2, "author"],
};

user.roles.push(Role.ADMIN);

if (user.roles.includes(Role.ADMIN)) {
  console.log("Admin exists");
} else {
  console.log("Admin do not exist");
}

console.log(user.roles);
