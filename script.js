var randomNumber = Math.floor(Math.random() * 100) + 1;
var message = document.getElementById('message');
 
function checkGuess() {
var guessInput = document.getElementById('guessInput');
var guess = parseInt(guessInput.value);

if (guess === randomNumber) {
message.innerHTML = 'Congratulations! You guessed the correct number.';
message.style.color = 'green';
} else if (guess < randomNumber) {
message.innerHTML = 'Too low. Try again.';
message.style.color = 'red';
} else {
message.innerHTML = 'Too high. Try again.';
message.style.color = 'red';
}

guessInput.value = '';
}
