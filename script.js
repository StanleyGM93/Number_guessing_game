let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (numberA, numberB) => {
    return Math.abs(numberA - numberB);
}

const checkUserInput = input => {
    if (input < 0 || input > 9) {
        alert('Please input a number between 0 - 9');
    }
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    let humanGuessDifference = getAbsoluteDistance(humanGuess, targetNumber);
    let computerGuessDifference = getAbsoluteDistance(computerGuess, targetNumber);
    if (humanGuessDifference === computerGuessDifference) {
        return true;
    } else if (humanGuessDifference < computerGuessDifference) {
        return true;
    } else if (computerGuessDifference < humanGuessDifference) {
        return false;
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}