const numbers = [1, 2, 3]; // new Array()
// .map is part of the prototype of Array which is another object linked
// automatically when creating a new array
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);


const companyMember = {
  company: 'Google',
  greet() {
    console.log('Hi!');
  }
}

const employee = {
  name: 'Gaetan',
  age: 31,
}

const boss = {
  name: 'Seb',
  age: 42,
  title: 'CEO'
}

employee.__proto__ = companyMember;
boss.__proto__ = companyMember;

employee.greet();
console.log(boss.company);
