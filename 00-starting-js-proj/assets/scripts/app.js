//import { apiKey, apiKey2 as value } from "./util";
//import key from "./util";

import * as util from "./util";

console.log(util.apiKey);
console.log(util.default);
console.log(util.apiKey2);


let userMessage = "Rickrolled";
const constMessage = "never gonna give, never gonna give";
console.log(userMessage);
console.log(constMessage);


function greet(message, defaultMessage = "Rickroll") {
  //console.log(message);
  //console.log(defaultMessage);
  return defaultMessage + ": " + message; 
}

console.log(greet(util.apiKey));
console.log(greet(util.apiKey2));


export default (message, defaultMessage) => {
  console.log(message);
  console.log(defaultMessage);
  return defaultMessage + "::: " + message; 
}

const user = {
  name: 'Rick',
  age: 52,
  greet() {
    console.log("OMG rolled");
    console.log(this.name + " was here");
  }
};

console.log(user);
user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hi!');
  }
}

const user2 = new User('Rock', 30);
console.log(user2);
console.log(user2.greet());