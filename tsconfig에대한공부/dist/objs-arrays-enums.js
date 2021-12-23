"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 8] = "READ_ONLY";
    Role[Role["AUTHOR"] = 9] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'gunbro',
    age: 24,
    hobbies: ['Sports', 'Games'],
    role: Role.AUTHOR
};
console.log(person.role);
if (person.role === Role.ADMIN) {
    console.log('is ADMIN!');
}
