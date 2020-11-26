// Created By: Jacob Bonner
// Created On: November 2020
// This program is a guess the number game with a random number generator.

// Importing readline for getting user input
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Defining the guess counter variable before it is used
var numberOfGuesses = 0;

try {
  // Input for the maximum range of the dice
  rl.question("Enter a maximum range you would like for the dice (integer): ",
              function saveInput(range) {
    console.log();

    // Generating random number
    const randomNumber = Math.floor((Math.random() * (range - 1)) + 1);

    // Process
    function loopFunction() {
      rl.question("Guess the number between 1 and your range (integer): ",
                  function saveInput(guess) {

        // Turning the guess from a string to an integer
        var userGuess = parseInt(guess, 10);

        // Increasing number of guesses counter
        numberOfGuesses = numberOfGuesses + 1;

        if (isNaN(userGuess) == true) {
          console.log("ERROR: Invalid Input");
          rl.close();
        } else if (userGuess == randomNumber) {
          // Output if user guesses number correctly
          console.log("You guessed the correct number!");
          console.log("It took you", numberOfGuesses, "guesses.");
          rl.close();
        } else {
          // Output if user guesses number incorrectly
          console.log("Wrong number, try again!");
          console.log();
          console.log();
          loopFunction();
        }
      });
      return;
    }
    loopFunction();
  });
} catch (err) {
  console.log("ERROR: Invalid Input");
}
