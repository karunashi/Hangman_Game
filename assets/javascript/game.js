// Pseudo Code

//1. Make an array of string for a wordbank
//2. Set global variables for counters such as: Lives Left, Guesses Left, Wins, Losses, Chosen Words, 
//3. Press a key to start the game (keypress events, listen events)
//4. Pick a word ranomly from the wordBank and have it converted into _s for blank spaces.
//5. Have it store pressed keys into another array
//6. Have it check whether the key pressed was already used (check array), if so show message that it was already used.

var wordBank = ["apple", "orange", "grapes", "pineapple", "mango", "watermelon", "chocolate", "milk", "tea", "coffee", "bread", "steak", "soda"];
var randomWord = "null"; // Placeholder string that will be replaced once the game is initiated, otherwise it'll show "null".
var randomWordSplit = [];
var letters = "null"; // Placeholder string that will be replaced once the game is initiated, otherwise it'll show "null".
var guesses = []; //Guesses already made
var guessesLeft = 10 // Lives basically
var wins = 0 // Starts at 0
var losses = 0 // Starts at 0
var gameBlanks = []; // Empty Array used to display _'s through getElementById
var userGuess = "null";

function start() {

    //var gameBlanks = []; // Empty Array used to display _'s through getElementById

    //PSEUDO CODE: Pick a random word, then place this random word inside new array. Splits them into separate characters and then counts their characters to make "_" for the guesses. 
    guessesLeft = 10 // Reset lives.
    gameBlanks = []; // Reset the _'s displayed
    letters = "null"; // Reset the # of _'s
    randomWordSplit = []; // Reset random word split
    guesses = []; // Reset to 0 for guesses bank
    check = false // Reset to false.

    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]; // Picks a random word from the wordBank
    randomWordSplit = randomWord.split(""); // After the random word is picked, it's then split and stored in another array, randomWordSplit.
    letters = randomWordSplit.length; // # of _'s stored in this variable, letters.
    console.log(randomWord); // Check to make sure random word has been selected.
    console.log(randomWordSplit); // Check to ensure array for word chosen is split.
    console.log(letters); // Check amount of _'s.

    for (var i = 0; i < letters; i++) {
        gameBlanks.push("_");
    }
    document.getElementById("word-blank").innerHTML = gameBlanks.join(" "); // Changes element to display the _'s based on the randomly selected word
    document.getElementById("guesses-left").innerHTML = guessesLeft; // Changes element to display the amount of lives left in the variable storing how many guesses are remaining.
    document.getElementById("win-counter").innerHTML = wins; // Changes element to show counter of how many wins player has.
    document.getElementById("loss-counter").innerHTML = losses; // Changes element to show counter of how many losses player has.
}


start();
// Initiates the game

document.onkeypress = function() { // Used onkeypress instead of keyup to only register keys, and avoid it showing unnecessary inputs.
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); // Stores the key that's pressed into a variable and makes sure it's in lowercase.
        console.log("User has typed ", userGuess); // Check to see that the key input is noted.
        if (guesses.indexOf(userGuess) === -1) { // If the key input isn't inside the array guesses...
            guesses.push(userGuess); // Then insert/push the input into the array...
            console.log(guesses); // And print in console for confirmation.
            //		replace()
        } else {
            console.log("You've already input", userGuess, "Please try another character."); // If it's in the array, guesses, then it will print this instead.
            return // Stops here if it's already guessed.
        }
        var check = false; // Initially set to false for function
        for (var i = 0; i < guesses.length; i++) {
            if (randomWordSplit[i] == userGuess) { // If the letter [i] is checked as the input key
                check = true; // Then mark 'check' as true
                console.log(check); // Print in console the status to ensure it checks.
            }
        }
        if (check) { // If it's true, (based on matching letter to input key)
            for (var i = 0; i < letters; i++) {
                if (randomWordSplit[i] == userGuess) { // Check the right letter index in randomWordSplit with user input..
                    //      randomWordSplit[i] = gameBlanks[i];
                    //    !!!!!!IMPORTANT!!!!!!
                    //      gameBlanks[i] = userGuess // Then it's supposed to push that verified key for the specific gameBlank by replacing the blank index that fits the letter. 
                    // HOW DO I GET userGuess (INPUT) to go into gameBlanks!!!!
                }
            }
        } else {
            guessesLeft--;
            document.getElementById("guesses-left").innerHTML = guessesLeft;
        }
        if (guessesLeft < 0) {
            losses++;
            document.getElementById("loss-counter").innerHTML = losses;
            alert("You've lost!")
            start() // Reset game
        }

        console.log("You've guessed: ", guesses);
        updateShownWord();
        document.getElementById("guesses-made").innerHTML = guesses;
    }
    // V Jonathan's help (TA) V
function updateShownWord() {
	var shownWord = '';
    for (var i = 0; i < letters; i++) {
        if (guesses.indexOf(randomWordSplit[i]) !== -1) {
            shownWord = shownWord + randomWordSplit[i]; 

        }
        else {
        	shownWord = shownWord + "_"
        }
        console.log(shownWord);
    }

    document.getElementById('word-blank').innerHTML = shownWord;
            
    //	for (var i = 0; i < letters; i++) {
    //		if (randomWordSplit[i] == userGuess) {
    //			console.log(userGuess, "Blah Blah Blah");
    //		}
    //	}
    //	document.getElementById('word-blank').innerHTML = rightLetters;
}


////// Winnie (TA) sugggested I try to use <Div> that creates and numbers with new classes, and will then create _'s, and then replace with correct letters.
//function replace() {
//	for (var i = 0; i < letters; i++) {
//		if (randomWordSplit.indexOf(i) === userGuess) {
//			gameBlanks[i].push()
//			document.getElementById(word-blank).innerHTML =gameBlanks.join(" ")
//		}
//	}
//}




// TO DO:
// I need to still have it do counters on wins/losses, 
// also be able to have it so that the letters that 
// are correct will replace the characters.

////This didn't work, reconfiguration ----VAR002
/// Referenced from Sunday Session, experimental version
//for (var i = 0; i < letters; i++) {
//	if (randomWordSplit[i] === userGuess) {
//		for (i = 0; i < letters; i++) {
//			if (randomWordSplit[i] === userGuess) {
//				//gameBlanks[i] = userGuess
//			}
//			else {
//				guessesLeft --;
//				guesses.push(userGuess);
//			}
//		}
//	}
//}


////This didn't work (replica of hangman.js) ----VAR001
/// Referenced from Sunday Session
//for (var i = 0; i < letters; i++) {
//	if (randomWordSplit[i] === userGuess) {
//		console.log(userGuess)
//		check = true
//	}
//
//		if (check) {
//			for (i = 0; i < letters; i++) {
//			if (randomWordSplit[i] === userGuess) {
//				gameBlanks[i] = userGuess
//				}
//			}
//		}
//		else {
//			guessesLeft --;
//			guesses.push(userGuess);
//		}
//	}
