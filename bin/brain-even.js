#!/usr/bin/env node
import askName from "../src/cli.js";
import readlineSync from "readline-sync";
import { checkCorrectAnswer } from "../src/index.js";
import { getRandomNumber } from "../src/index.js";



function brainEven() {
  const name = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;

  while (i < 3) {
    const number = getRandomNumber();
    console.log(`Question: ${number} `);
    const answer = readlineSync.question("Your answer:").toLowerCase();

    const correctAnswer = number % 2 === 0 ? "yes" : "no";

    const check = checkCorrectAnswer(answer, correctAnswer, name);

    if (check) i+=1;
    else return;
  }
  console.log(`Congratulations, ${name}!`);
}

brainEven();
