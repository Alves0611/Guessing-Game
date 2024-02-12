let screen1, screen2, randomNumber, xAttempts;

export function setElements(s1, s2) {
    screen1 = s1;
    screen2 = s2;
}

export function setGameVariables() {
    randomNumber = Math.round(Math.random() * 10);
    xAttempts = 1;
}

export function handleResetClick() {
    toggleScreen();
    setGameVariables();
}

export function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

export function handleKeyDown(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick();
    }
}

export function checkGuess(enteredNumber) {
    if (enteredNumber === randomNumber) {
        toggleScreen();
        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`;
        return true;  
    }
    return false; 
}

export function incrementAttempts() {
    xAttempts++;
}