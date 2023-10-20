document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);








/*
// This is a JavaScript program that calculates the factorial of a number.

// Function to calculate the factorial of a number
function factorial(number) {
    if (number < 0) {
        // Factorial is undefined for negative numbers
        return "Undefined";
    } else if (number === 0) {
        // The factorial of 0 is 1
        return 1;
    } else {
        // Calculate the factorial recursively
        return number * factorial(number - 1);
    }
}

// Function to display the factorial
function displayFactorial(number) {
    // Display the factorial of the given number
    const result = factorial(number);
    console.log(`The factorial of ${number} is ${result}`);
}

// Main function
function main() {
    // This is the main function where the program starts.
    
    // Define a number for which to calculate the factorial
    const numberToCalculate = 5;
    
    // Call the displayFactorial function
    displayFactorial(numberToCalculate);
    
    // Program ends
}

// Call the main function to start the program
main();*/
