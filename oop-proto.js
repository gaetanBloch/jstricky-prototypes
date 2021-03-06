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

class Human {
  wave() {
    console.log('Waving...');
  }
}

class Person extends Human {
  constructor(name) {
    super();
    this.name = name;
  }
}

const gaetan = new Person('Gaetan');
console.log(gaetan);
gaetan.wave();
