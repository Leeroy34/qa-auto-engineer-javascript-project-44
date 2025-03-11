#!/usr/bin/env node
import readlineSync from 'readline-sync';

import askName from '../src/cli.js';
import { checkCorrectAnswer , getRandomNumber } from '../src/index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

function brainProgression() {
  const name = askName();
  console.log('What number is missing in the progression?');

  let i = 0;

  while (i < 3) {
    const start = getRandomNumber();
    const step = getRandomNumber(10);
    const length = getRandomNumber(5, 10);
    const progression = generateProgression(start, step, length);
    const hiddenIndex = getRandomNumber(0, length - 1);
    const correctAnswer = progression[hiddenIndex].toString();

    progression[hiddenIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);

    const answer = readlineSync.question('Your answer: ');

    const check = checkCorrectAnswer(answer, correctAnswer, name);

    if (check) i += 1;
    else return;
  }
  console.log(`Congratulations, ${name}!`);
}

brainProgression();
