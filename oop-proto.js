const companyPerson = {
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

function Employee(name, age) {
  this.name = name;
  this.age = age;
}

// This sets the prototype of the to be created object
Employee.prototype = companyPerson;

const emp1 = new Employee('Gaetan', 31);
emp1.greet();

Employee.prototype.sayGoodBye = () => {
  console.log('Bye');
}

emp1.sayGoodBye();
