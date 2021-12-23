// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'gunbro',
//   age:24,
//   hobbies: ['Sports', 'Games'],
//   role: [2, 'author']
// };
//ADMIN이 여기서 시작 값이므로 5라고 지정하면 뒤에 있는 property는 1씩
//증가된다. 물론 뒤에 property 값으로 또 따로 설정해줘도 된다. READ_ONLY가 8이면 뒤에는 자동적으로 9
enum Role { ADMIN = 5, READ_ONLY = 8, AUTHOR};

const person= {
  name: 'gunbro',
  age:24,
  hobbies: ['Sports', 'Games'],
  role: Role.AUTHOR
};

console.log(person.role);


// person.role.push('admin');
// // person.role[1] = 10;

// person.role = [0, 'admin'];

// console.log(person.role);

// let favoriteActivities: string[];
// favoriteActivities=['Sports'];

// console.log(person.name);

// for( const hobby of person.hobbies){
//   console.log(hobby);
// }

if(person.role === Role.ADMIN){
  console.log('is ADMIN!');
}

