// const input = require('sync-input');
let dialogueWindow = document.querySelector('#dialogue-window');
let botName = "Orion";
let birthYear = 2022;

function greet(botName, birthYear) {
  showDialogueWindow(`Hello! My name is ${botName}.`);
  showDialogueWindow(`I was created in ${birthYear}.`);
}

function remindName() {
  let string1 = "Please, remind me your name.";
  console.log(string1);
  dialogueWindow.innerHTML = `🤖  ${string1}`;
  let yourName = prompt(string1, "");

  // let yourName = input();

  showDialogueWindow(`What a great name you have, ${yourName}!`);
}

function guessAge() {
  showDialogueWindow("Let me guess your age.");

  let string2 = "Enter remainders of dividing your age by 3, 5 and 7.";
  console.log(string2);
  dialogueWindow.innerHTML = `🤖  ${string2}`;

  // let remainder3 = Number(input());
  // let remainder5 = Number(input());
  // let remainder7 = Number(input());
  let remainder3 = prompt("Enter remainders of dividing your age by 3.", "");
  let remainder5 = prompt("Enter remainders of dividing your age by 5.", "");
  let remainder7 = prompt("Enter remainders of dividing your age by 7.", "");

  let yourAge = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;

  showDialogueWindow(`Your age is ${yourAge}; that's a good time to start programming!`);
}

function count() {
  let string1 = "Now I will prove to you that I can count to any number you want.";
  console.log(string1);
  dialogueWindow.innerHTML = `🤖  ${string1}`;
  
  // let yourNumber = Number(input());
  let yourNumber = prompt(string1, "");

  for (let number = 0; number <= yourNumber; number++) {
    showDialogueWindow(`${number} !`);
  }
}

function test() {
  let question = `Why do we use methods?
    1. To repeat a statement multiple times.
    2. To decompose a program into several small subroutines.
    3. To determine the execution time of a program.
    4. To interrupt the execution of a program.`;

  showDialogueWindow("Let's test your programming knowledge."); 
  
  console.log(question);
  dialogueWindow.innerHTML = `🤖  ${question}`;
	let answer = prompt(question, "");
    
	while (answer !== "2") {
      showDialogueWindow("Please, try again.");
      answer = prompt(question, "");
	}
  showDialogueWindow("Completed, have a nice day!");	
}
  
function end() {
  showDialogueWindow("Congratulations, have a nice day!");
}

function showDialogueWindow(string) {
  dialogueWindow.innerHTML = `🤖  ${string}`;
  console.log(string);
  alert(string);
}

greet(botName, birthYear)  
remindName();
guessAge();
count();
test();
end();