#!/usr/bin/env node


export function getRandomNumber() {
    let number = Math.floor(Math.random() * 100) + 1;
    return number;
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