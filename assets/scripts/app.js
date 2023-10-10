const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2
    return result
}

currentResult = add(1, 2);

let calculationDeccription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDeccription);