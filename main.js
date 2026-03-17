const input = require('readline-sync');

let userWord = input.question("Please enter a word or phrase: ");
console.log("The computer saved: " + userWord);


let indexNumber = Number(input.question("Please enter an index number: "));
console.log("The character at that index is: " + userWord[indexNumber]);