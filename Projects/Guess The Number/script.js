let randomNumber = Math.floor(Math.random() * 100) + 1;

const form = document.querySelector('.form');
const guessField = document.querySelector('#guessField');
const guesses = document.querySelector('.guesses');
const remGuessDisplay = document.querySelector('.remGuess');
const moreOrLess = document.querySelector('.moreOrLess');
const submit = document.querySelector('#subt');
const startOver = document.querySelector('.result');

// way-2 for restart button:
const restartBtn2 = document.querySelector('#restartBtn2');

let storeGuesses = [];
let remainingGuesses = 10;
let playGame = true;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!playGame) return;

    const guess = parseInt(guessField.value);

    // validation:
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        guessField.value = '';
        return;
    }

    storeGuesses.push(guess);
    remainingGuesses--;

    guesses.textContent = storeGuesses.join(', ');
    remGuessDisplay.textContent = remainingGuesses;

    if (guess === randomNumber) {
        moreOrLess.textContent = `🎉 Correct! The number was ${randomNumber}`;
        endGame();
    } else if (remainingGuesses === 0) {
        moreOrLess.textContent = `❌ Game over! The number was ${randomNumber}`;
        endGame();
    } else {
        moreOrLess.textContent = guess < randomNumber ? "Too low! Try again." : "Too high! Try again.";
    }

    guessField.value = '';
    guessField.focus();
});

function endGame() {
    playGame = false;
    guessField.disabled = true;
    submit.disabled = true;

    
    // to start a new game:
    // way-1 for restart button:
    const para = document.createElement('p')
    para.className = "restartBtn"
    para.innerHTML = `<button id="restartBtn">Restart Game</button>`
    startOver.appendChild(para);

    // way-2 for restart button:
    restartBtn2.style.display = 'inline'; // Show the button

    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#restartBtn')
    newGameButton.addEventListener('click', function(){
        // Reset everything:
        randomNumber = Math.floor(Math.random() * 100) + 1;
        storeGuesses = [];
        remainingGuesses = 10;
        playGame = true;
        guessField.disabled = false;
        submit.disabled = false;
        guessField.value = '';
        guesses.textContent = '';
        remGuessDisplay.textContent = remainingGuesses;
        moreOrLess.textContent = '';
        guessField.focus();

        // way-1 for restart button:
        document.querySelector('.restartBtn').remove(); // remove restart button

        // way-2 for restart button:
        restartBtn2.style.display = 'none'; // Hide the button again
    })
}

/*
Way 1:
Dynamically creates a <p> element containing the restart button with ID restartBtn every time the game ends.
Appends it inside .result.
Adds event listener on that button inside newGame().
Removes the whole <p> (with class .restartBtn) when restarting.

Way 2:
Uses a restart button already present in the HTML with ID restartBtn2.
It’s initially hidden (style="display:none" assumed).\
On game end, you just show it (style.display = 'inline').\
When restarting, you hide it again.
*/