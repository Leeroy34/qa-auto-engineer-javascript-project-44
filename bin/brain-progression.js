import askName from "../src/cli.js";
import readlineSync from "readline-sync";
import { checkCorrectAnswer, getRandomNumber } from "../src/index.js";

const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step);
};

function brainProgression() {
  const name = askName();
  console.log("What number is missing in the progression?");

  for (let i = 0; i < 3; i++) {
    const start = getRandomNumber(1, 50);
    const step = getRandomNumber(1, 10);
    let length = getRandomNumber(5, 10);

    if (length < 5) length = 5;

    const progression = generateProgression(start, step, length);
    const hiddenIndex = getRandomNumber(0, length - 1); // Индекс скрытого элемента
    const correctAnswer = progression[hiddenIndex].toString();

    progression[hiddenIndex] = "..";

    console.log(`Question: ${progression.join(" ")}`.trim());

    const answer = readlineSync.question("Your answer: ");

    if (checkCorrectAnswer(answer, correctAnswer, name)) {
      continue;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

brainProgression();
