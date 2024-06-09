'use strict';

// some declarations
const secretNumber = Math.trunc(Math.random() * 20) + 1;
displayNumber('?');
let score = 20;
let highscore = 0;
//function for score and message
const userScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
// event started
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when  there is no input
  if (!guess) {
    displayMessage('No number entered');
    // When guess is same
  } else if (guess === secretNumber) {
    displayMessage('correct');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is different
  } else if (guess !== secretNumber && score > 1) {
    displayMessage(
      guess > secretNumber ? 'guess is too high' : 'guess is too low'
    );
    score--;
    userScore(score);
  } else {
    displayMessage('you lost the game');
    userScore(0);
  }
});
// Event for reseting
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  displayNumber('?');
  displayMessage('Start guessing...');
  userScore(20);

  const guess = (document.querySelector('.guess').value = '');
});











