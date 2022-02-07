const input = require('sync-input');
let botName = "Orion";
let birthYear = 2022;

console.log(`Hello! My name is ${botName}.`);
console.log(`I was created in ${birthYear}.`);
console.log("Please, remind me your name.");

let yourName = input();

console.log(`What a great name you have, ${yourName}!`);
console.log("Let me guess your age.");
console.log("Enter remainders of dividing your age by 3, 5 and 7.");

let remainder3 = input();
let remainder5 = input();
let remainder7 = input();
let yourAge = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;

console.log(`Your age is ${yourAge}; that's a good time to start programming!`);