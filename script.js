const input = require('sync-input');
let botName = "Orion";
let birthYear = 2022;

function greet(botName, birthYear) {
	console.log(`Hello! My name is ${botName}.`);
  console.log(`I was created in ${birthYear}.`);
}

function remind_name() {
  console.log("Please, remind me your name.");
  let yourName = input();
  console.log(`What a great name you have, ${yourName}!`);
}

function guess_age() {
	console.log("Let me guess your age.");
  console.log("Enter remainders of dividing your age by 3, 5 and 7.");

  let remainder3 = Number(input());
  let remainder5 = Number(input());
  let remainder7 = Number(input());

  let yourAge = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;

  console.log(`Your age is ${yourAge}; that's a good time to start programming!`);
}

function count() {
  console.log("Now I will prove to you that I can count to any number you want.");

  let yourNumber = Number(input());

  for (let number = 0; number <= yourNumber; number++) {
    console.log(`${number} !`);  
  }
}

function test() {
	console.log("Let's test your programming knowledge.");

  console.log("Why do we use methods?");
  console.log("1. To repeat a statement multiple times.");
  console.log("2. To decompose a program into several small subroutines.");
  console.log("3. To determine the execution time of a program.");
  console.log("4. To interrupt the execution of a program.");
  
  while (Number(input()) !== 2) {
    console.log("Please, try again.");    
  }
}

function end() {
	console.log("Completed, have a nice day!");
  console.log("Congratulations, have a nice day!"); 
}

greet(botName, birthYear)  
remind_name();
guess_age();
count();
test();
end();