// Initialize an empty string to store the current input
let string = "";

// Select all elements with the class "button"
let buttons = document.querySelectorAll(".button");

// Convert the NodeList to an array and iterate over each button
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

// Add an event listener for keydown events to handle keyboard inputs
document.addEventListener('keydown', (e) => {
    // Map keyboard keys to calculator buttons
    const key = e.key;
    if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('←');
    } else if (key === 'Escape') {
        handleInput('C');
    } else if ('0123456789/*-+.'.includes(key)) {
        handleInput(key);
    }
});

// Function to handle input from both buttons and keyboard
function handleInput(input) {
    // If the "=" button is clicked or Enter key is pressed, evaluate the expression
    if (input === '=') {
        try {
            // Evaluate the expression and update the display
            string = eval(string);
            document.querySelector('input').value = string;
        } catch {
            // If an error occurs (e.g., invalid input), display "Error"
            string = "Error";
            document.querySelector('input').value = string;
        }
    }
    // If the "C" button is clicked or Escape key is pressed, clear the input
    else if (input === 'C') {
        string = "";
        document.querySelector('input').value = string;
    }
    // If the "←" button is clicked or Backspace key is pressed, remove the last character
    else if (input === '←') {
        string = string.slice(0, -1);
        document.querySelector('input').value = string;
    }
    // For all other buttons or keys, append the input to the string
    else {
        string = string + input;
        document.querySelector('input').value = string;
    }
}