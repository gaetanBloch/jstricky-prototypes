const companyPerson = {
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

function Employee(name, age) {
  this.name = name;
  this.age = age;
}

Employee.prototype = companyPerson;

const emp1 = new Employee('Gaetan', 31);
emp1.greet();
