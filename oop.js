const person = {
  name: 'Gaetan',
  age: 31,
  greet() {
    console.log('Hi, I am ' + this. name);
  }
}

console.log(person);
person.greet();

function Employee(name, age) {
  this.name = name;
  this.age = age;
}

const gaetan = new Employee('Gaetan', 31);
const seb = new Employee('Seb', 32);

console.log(gaetan);
console.log(seb);

const a = new Object(); // Same as {}
console.log(a);

const b = new Array(); // Same as []
console.log(b);

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  }
}

const student = new Student('Gaetan', 31);
console.log(student);
student.greet();
