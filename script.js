'use strict';

// Secret number generator between 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

// Instruction for what will happen when we click on the check button
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // When there is no Value
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Enter a value!';
    document.querySelector('body').style.backgroundColor = '#ff0211';
  }
  // When the number matches
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎉 Congrats you got it right';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    // highScore = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When the number does not matches
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High' : '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        "💥 You've lost the game";
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff1002';
    }
  }
  /* Another way to implement this same logic above 

  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        "💥 You've lost the game";
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff1002';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        "💥 You've lost the game";
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff1002';
    }
  }
*/
});

// Instruction to reset the game when we click on the again button
document.querySelector('.again').addEventListener('click', function () {
  // First step - restore initial values of these variables
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;

  // Second step - Restore the initial conditions of the message, number, score and guess input field
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = '💭 Start guessing...';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.score').textContent = score;

  // Third step - restore the original background color (#222) and number width (15rem)
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
});
