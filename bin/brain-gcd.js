#!/usr/bin/env node
import readlineSync from 'readline-sync';

import askName from '../src/cli.js';
import { checkCorrectAnswer , getRandomNumber } from '../src/index.js';

function gcd(x, y) {
  if (y === 0) return x;
  return gcd(y, x % y);
}

function brainGCD() {
  const name = askName();
  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;

  while (i < 3) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    console.log(`Question: ${number1} ${number2} `);
    const answer = readlineSync.question('Your answer:').toLowerCase();

    const correctAnswer = gcd(number1, number2).toString();

    const check = checkCorrectAnswer(answer, correctAnswer, name);

    if (check) i += 1;
    else return;
  }
  console.log(`Congratulations, ${name}!`);
}

brainGCD();
