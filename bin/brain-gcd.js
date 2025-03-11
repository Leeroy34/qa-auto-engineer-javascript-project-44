#!/usr/bin/env node
import askName from "../src/cli.js";
import readlineSync from "readline-sync";
import { checkCorrectAnswer } from "../src/index.js";
import { getRandomNumber } from "../src/index.js";


const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

function brainGCD() {
    const name = askName();
    console.log('Find the greatest common divisor of given numbers.');

    let i = 0;

    while (i < 3) {
        const number1 = getRandomNumber();
        const number2 = getRandomNumber();
        console.log(`Question: ${number1} ${number2} `);
        const answer = readlineSync.question("Your answer:").toLowerCase();

        const correctAnswer = gcd(number1, number2).toString();

        const check = checkCorrectAnswer(answer, correctAnswer, name)

        if (check) i+= 1;
        else return;
    }
    console.log(`Congratulations, ${name}!`);

}

brainGCD();