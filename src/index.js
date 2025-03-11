#!/usr/bin/env node


export function getRandomNumber(max = 100, min = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  


export function checkCorrectAnswer(answer, correctAnswer, name) {
    if (answer === correctAnswer) {
        console.log("Correct!");
        return true;
      } else {
        console.log(
          `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
        );
        console.log(`Let's try again, ${name}!`);
        return false;
      }


}