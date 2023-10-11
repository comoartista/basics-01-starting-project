const defaultResult = '';
let currentResult = defaultResult;

function add() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, "");
    currentResult = ''
}

// currentResult = add(1, 2);

// let calculationDeccription = `(${defaultResult} + 10) * 3 / 2 - 1`;
addBtn.addEventListener(('click'), add);