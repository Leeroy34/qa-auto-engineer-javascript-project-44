#!/usr/bin/env node
import askName from "../src/cli.js";
import readlineSync from "readline-sync";

const name = askName();

function getRandomNumber() {
  let number = Math.floor(Math.random() * 100) + 1;
  return number;
}

function brainEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;

  while (i < 3) {
    const number = getRandomNumber();
    console.log(`Question: ${number} `);
    const answer = readlineSync.question("Your answer:").toLowerCase();

    const correctAnswer = number % 2 === 0 ? "yes" : "no";

    if (answer === correctAnswer) {
      console.log("Correct!");
      i += 1;
    } else {
      console.log(
        `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
      );
      console.log(`Let's try again, ${name}!`);
      return
    }
  }
  console.log(`Congratulations, ${name}!`);
}

brainEven();
