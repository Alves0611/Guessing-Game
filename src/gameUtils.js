let randomNumber, xAttempts;

export function initializeGame() {
    randomNumber = generateRandomNumber();
    xAttempts = 1;
}

function generateRandomNumber() {
    return Math.round(Math.random() * 10);
}

export function checkGuess(enteredNumber) {
    return enteredNumber === randomNumber;
}

export function incrementAttempts() {
    xAttempts++;
}

export function getAttempts() {
    return xAttempts;
}