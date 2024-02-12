import { initializeGame, checkGuess, incrementAttempts, getAttempts } from './gameUtils.js';
import { setDomElements, toggleScreens, clearInput } from './domUtils.js';

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const inputNumber = document.querySelector('#inputNumber');

setDomElements(screen1, screen2, inputNumber);
initializeGame();

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', handleKeyDown);

function handleTryClick(event) {
    event.preventDefault();

    const enteredNumber = Number(inputNumber.value);

    if (!inputNumber.value.trim() || isNaN(enteredNumber) || enteredNumber < 0 || enteredNumber > 10) {
        alert("Digite um número válido entre 0 e 10.");
        return;
    }

    if (checkGuess(enteredNumber)) {
        toggleScreens();
        screen2.querySelector("h2").innerText = `acertou em ${getAttempts()} tentativas`;
    }

    clearInput();
    incrementAttempts();
}

function handleResetClick() {
    toggleScreens();
    initializeGame();
}

function handleKeyDown(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick();
    }
}