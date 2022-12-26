var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("Hey buddy may I have your name please? ");

console.log("Happy to see you " + userName + " 😄");
console.log("----------------------------");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are right 😉");
    score = score + 1;
  } else {
    console.log("As you are wrong 😛");
  }
  console.log("Your score is: " + score);
  console.log("------------------------")
}

play("What is vishal's nickname? ", "lucky");
play("what is the vishal's birth month? ", "july");
play("What is his favorite colour? ", "black");
play("What is vishal's favorite fast food? ", "vadapav");
play("How old is vishal? ", "23");

if (score === 5) {
  console.log("Yayy! your final score is: " + score + " 🥳")
} else {
  console.log("Looks like you don't know him very well 😅")
}