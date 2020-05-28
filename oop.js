const person = {
  name: 'Gaetan',
  age: 31,
  greet() {
    console.log('Hi, I am ' + this. name);
  }
}

console.log(person);
person.greet();
