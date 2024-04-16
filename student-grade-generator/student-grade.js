// Import readline module for input/output operations
const readline = require('readline');

// Function to calculate grades based on scores
function calculateGrade(scores) {
    if (scores > 79) return 'A';
    if (scores >= 60) return 'B';
    if (scores >= 49) return 'C';
    return 'E';
}

// Main function to interact with the user
function main() {
    // Create readline interface for user input/output
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Prompt user to enter student's scores
    rl.question("Enter the student's scores (between 0 and 100): ", scores => {
        scores = parseFloat(scores); // Convert input to a floating point number
        if (!isNaN(scores) && scores >= 0 && scores <= 100) { // Check if input is valid
            const grade = calculateGrade(scores); // Calculate grade
            console.log(`The student's grade is: ${grade}`);
        } else {
            console.log("Invalid input! Please enter a score between 0 and 100."); // Output error message
        }
        rl.close(); // Close readline interface
    });
}

// Call the main function to start the program
main();