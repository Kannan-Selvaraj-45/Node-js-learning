const fs = require("fs");
// fs.writeFileSync("sample.txt", "Hello World!");to create and to write a new file

const person = {
  name: "kannan",
  age: 20,
  greet1: function () {
    console.log("Hello " + this.name);
  },
  greet2: function () {
    console.log("Hello " + this.greet2);
  },
  greet3() {
    console.log("Hello World!");
  },
};

// person.greet();
// person.greet2();
//person.greet3();

const people = ["kannan", "karthi", "Dinesh", "Guna"];
let details1 = [],
  details2 = [];
for (const person of people) {
  details1.push(person);
}
people.map((item) => details2.push(item));
console.log(details1.length);
console.log(details2.length);
