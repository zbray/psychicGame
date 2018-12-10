//Variables
var wins = 0;
var losses = 0;
var guessesLeft = 9; //Every round begins with 9 chances to win
var guessedLetters = []; //An array to hold guessed letters
var alphabet = "abcdefghijklmnopqrstuvwxyz"; //Alphabet, playing pieces for the user and computer

//Make the computer make a choice at random from alphabet and consolog.log its choice
var randomLetter = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomLetter];
console.log(computerChoice);


function reset(){ // this code showed up twice so I'm saving the space by making it a function
    guessesLeft = 9; //this resets the guess counter
    guessedLetters = ""; //this removes the displayed guesses from the previous round
}

//Game Program

//Listener to register guesses
document.onkeyup = function(event) { //runs the game on key up
    var userGuess = event.key; //storing userGuess as a lower case to compare to computerChoice later
    guessedLetters.push(userGuess); //displaying to user the letters they guessed
    guessesLeft--; //everytime the user guesses the counter subtracts 1

//Game Win Condition
    if (userGuess == computerChoice){
        wins++; // You win!
        alert("You must be psychic! Congratulations on guessing correctly. You've won this round!");
        reset(); //runs repeating function instead of repeating steps
    }
//Game Loss Condition
    else if (guessesLeft == 0){  //the game's true loss condition, running out of chances
        losses++; //You lose!
        alert("You've chosen...poorly. You've lost this round. Try again!")
        reset(); //runs above function instead of repeating steps
    }
//Incorrect guess with time still on the clock
    else if (userGuess !== computerChoice){
        guessesLeft--; //Subtracting a guess, and doing nothing else
    }

//Game Display
document.querySelector('#wins').innerHTML = "Wins: " + wins;
document.querySelector('#losses').innerHTML = "Losses: " + losses;
document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
document.querySelector('#guessedLetters').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');




};