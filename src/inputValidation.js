import { clearInput } from './domUtils.js';

export function validateInput(inputValue) {
    if (!inputValue.trim() || isNaN(inputValue) || inputValue < 0 || inputValue > 10) {
        alert("Digite um número válido entre 0 e 10.");
        return false;
    }
    return true;
}

export function handleInputValidation(inputValue) {
    if (!validateInput(inputValue)) {
        return false;
    }
    clearInput();
    return true;
}