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

// employee.__proto__ = companyMember;
// boss.__proto__ = companyMember;

Object.setPrototypeOf(employee, companyMember);
Object.setPrototypeOf(boss, companyMember);

employee.greet();
console.log(boss.company);

const employeeAlt = Object.create(companyMember);
employeeAlt.name = 'Gaetan';
employeeAlt.age = 31;
console.log(employeeAlt);
employeeAlt.greet();
