let screen1, screen2, inputNumber;

export function setDomElements(s1, s2, input) {
    screen1 = s1;
    screen2 = s2;
    inputNumber = input;
}

export function toggleScreens() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

export function clearInput() {
    inputNumber.value = "";
}