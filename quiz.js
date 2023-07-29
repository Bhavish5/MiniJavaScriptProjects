const prompt = require("prompt-sync")()

let answerCount = 0;
let score = 0;

console.log("Welcome to the Computer Hardware Quiz!");

const answer1 = prompt("What is the brain of computer? ");
const correctAnswer1 = "CPU";

if(answer1.toUpperCase() === correctAnswer1){
    console.log("You got it Correct!");
    answerCount += 1;
}
else{
    console.log("You got it wrong...");
}

const answer2 = prompt("Which is better a 3090ti or 4060? ");
const correctAnswer2 = "3090ti";

if(answer2.toLowerCase() === correctAnswer2){
    console.log("You got it Correct!");
    answerCount += 1;
}
else{
    console.log("You got it wrong...");
}


const answer3 = prompt("What is the recommended amount of RAM in 2023 8gb or 16gb? ");
const correctAnswer3 = "16gb";

if(answer3.toLowerCase() === correctAnswer3){
    console.log("You got it Correct!");
    answerCount += 1;
}
else{
    console.log("You got it wrong...");
}

score = Math.round((answerCount/3)*100);

console.log("\nYou got," ,answerCount, "Correct !");
console.log("You scored " +score.toString()+ "%");