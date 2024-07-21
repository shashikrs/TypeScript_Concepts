"use strict";
const person = {
    name: "Name",
    age: 99,
    hobbies: ["Sports", "Cooking"],
    roles: [2, "author"],
};
person.roles.push("admin"); // this is allowed on Tuples
//person.role[1] = 10; // not allowed in Tuple
console.log(person.hobbies);
//enums
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["MOD"] = "MODERATOR";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
const user = {
    name: "Name",
    age: 99,
    hobbies: ["Sports", "Cooking"],
    roles: [2, "author"],
};
user.roles.push(Role.ADMIN);
if (user.roles.includes(Role.ADMIN)) {
    console.log("Admin exists");
}
else {
    console.log("Admin do not exist");
}
console.log(user.roles);
