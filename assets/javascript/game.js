    // HTML
    var $newGameButton = document.getElementById('new-game-button');
    var $placeholders = document.getElementById('placeholders');
    var $guessedLetters = document.getElementById('guessed-letters');
    var $guessesLeft = document.getElementById('guesses-left');
    var $wins = document.getElementById('wins');
    var $losses = document.getElementById('losses');



    // declare variables- wordbank, wins, losses, picked word, guesses left,...
        //...game running, picked word placeholder, guessed letter bank, incorrect letter bank. 
    var wordBank = ["Red Raiders", "Longhorns", "Sooners", "Horned Frogs"];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 8;
    var gameRunning = false;
    var pickedWord = '';
    var pickedWordPlaceholderArr = [];
    var guessedLetterBank = [];
    var incorrectLetterBank = [];



   //newGame function to reset all stats, pick new word and create placeholder.
    function newGame() {
        //Reset all game info
        gameRunning = true;
        guessesLeft = 8;
        guessedLetterBank = [];
        incorrectLetterBank = [];
        pickedWordPlaceholderArr = [];
    
        //pick new word
        pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

        //For loop to Create palceholders out of new pickedWord
        for (var i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i] === ' ') {
                pickedWordPlaceholderArr.push(' ');
            } else {
                pickedWordPlaceholderArr.push('_');
            }
        }
        // Write all new game info to DOM
        $guessesLeft.textContent = guessesLeft;
        $placeholders.textContent = pickedWordPlaceholderArr.join('');
        $guessedLetters.textContent = incorrectLetterBank;
        }