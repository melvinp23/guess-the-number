'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
	document.querySelector('.number').textContent = number;
};

const backgroundColor = function (color) {
	document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	// When there is no input
	if (!guess) {
		displayMessage('🚫 No number!');

		// When player wins
	} else if (guess === secretNumber) {
		displayMessage('🎉 Correct Number!');
		displayNumber(secretNumber);
		backgroundColor('#60b347');
		document.querySelector('.number').style.width = '30rem';

		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}

		// When guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('💥 Game Over!');
			document.querySelector('.score').textContent = 0;
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector('.score').textContent = score;
	displayNumber('?');
	displayMessage('Start guessing...');
	document.querySelector('.guess').value = '';
	backgroundColor('#222');
	document.querySelector('.number').style.width = '15rem';
});
