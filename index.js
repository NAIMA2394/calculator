// Append number to the display
function appendNumber(number) {
    document.getElementById('display').value += number;
}

// Append operator to the display
function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];
    
    // Prevent appending multiple operators in a row
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.value = display.value.slice(0, -1);
    }

    document.getElementById('display').value += operator;
}

// Calculate the result
function calculate() {
    const display = document.getElementById('display').value;
    try {
        const result = eval(display); // Evaluate the expression
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}