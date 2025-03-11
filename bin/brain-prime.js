import askName from "../src/cli.js";
import readlineSync from "readline-sync";
import { checkCorrectAnswer } from "../src/index.js";
import { getRandomNumber } from "../src/index.js";

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

function brainPrime() {
  const name = askName();
  console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");

  let i = 0;

  while (i < 3) {
    const number = getRandomNumber();

    const correctAnswer = isPrime(number);

    console.log(`Question: ${number}`);

    const answer = readlineSync.question("Your answer: ");
    const check = checkCorrectAnswer(answer, correctAnswer, name);

    if (check) i += 1;
    else return;
  }
  console.log(`Congratulations, ${name}!`);
}

brainPrime();
