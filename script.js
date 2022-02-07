const input = require('sync-input');
let botName = "Orion";
let birthYear = 2022;
let yourName = input();

console.log(`Hello! My name is ${botName}.`);
console.log(`I was created in ${birthYear}.`);
console.log("Please, remind me your name.");
console.log(`What a great name you have, ${yourName}!`);
