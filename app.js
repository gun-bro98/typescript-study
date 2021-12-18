// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: 'gunbro',
    age: 24,
    hobbies: ['Sports', 'Games'],
    role: [2, 'author']
};
person.role.push('admin');
person.role[1] = 10;
console.log(person.role);
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
