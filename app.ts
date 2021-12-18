const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
// const person = {
  name: 'gunbro',
  age:24,
  hobbies: ['Sports', 'Games'],
  role: [2, 'author']
};

person.role.push('admin');
// person.role[1] = 10;

person.role = [0, 'admin'];

console.log(person.role);

let favoriteActivities: string[];
favoriteActivities=['Sports'];

console.log(person.name);

for( const hobby of person.hobbies){
  console.log(hobby);
}

