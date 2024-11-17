let container = document.getElementById('container');
let output = document.getElementById('output');

let currentInput = '';  // To store the current number input
let operator = '';      // To store the current operator
let firstValue = null;  // To store the first operand for calculations

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        const value = e.target.textContent;

        if (!isNaN(value)) {
            // If a number is clicked, append it to the current input
            currentInput += value;
            output.textContent = currentInput;
        } else if (value === 'C') {
            // Clear all values and reset display
            currentInput = '';
            firstValue = null;
            operator = '';
            output.textContent = '0';
        } else if (value === '=') {
            // Perform the calculation if we have two operands and an operator
            if (firstValue !== null && currentInput !== '') {
                let secondValue = parseFloat(currentInput);
                let result = calculate(firstValue, secondValue, operator);
                output.textContent = result;
                firstValue = result;  // Allow chaining calculations
                currentInput = '';
                operator = '';
            }
        } else {
            // If an operator is clicked
            if (currentInput !== '') {
                // If there's already a first value and operator, calculate it first
                if (firstValue === null) {
                    firstValue = parseFloat(currentInput);
                } else if (operator) {
                    firstValue = calculate(firstValue, parseFloat(currentInput), operator);
                }
                
                operator = value;
                currentInput = '';  // Clear current input for the next number
                output.textContent = `${firstValue} ${operator}`;  // Display ongoing operation
            }
        }
    }
});

// Function to perform basic arithmetic based on the operator
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num2;
    }
}
