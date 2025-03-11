#!/usr/bin/env node
import readlineSync from "readline-sync";
import askName from "../src/cli.js";
import { checkCorrectAnswer, getRandomNumber } from "../src/index.js";


function brainCalc() {
  const name = askName();
  console.log("What is the result of the expression?");
  let i = 0;
  while (i < 3) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const operators = ["+", "-", "*"];
    const randomOperator =
      operators[Math.floor(Math.random() * operators.length)];
    console.log(`Question: ${number1} ${randomOperator} ${number2}`);
    const answer = readlineSync.question("Your answer:").toLowerCase();
    let correctAnswer = "";
    switch (randomOperator) {
      case "+":
        correctAnswer = (number1 + number2).toString();
        break;
      case "-":
        correctAnswer = (number1 - number2).toString();
        break;
      case "*":
        correctAnswer = (number1 * number2).toString();
        break;
      default:
        throw new Error(`Unknown operator: ${randomOperator}`);
    }
    const check = checkCorrectAnswer(answer, correctAnswer, name);
    if (check) i += 1;
    else return;
  }
  console.log(`Congratulations, ${name}!`);
}
brainCalc();
