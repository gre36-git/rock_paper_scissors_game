//javascript for rock paper scissors game

/*
var computerChoice;

//computer returns a randomized choice of either rock, paper, or scissors
function randomResponse() {
    let x = Math.floor(Math.random()*3) +1;
    if (x === 1) {
        return computerChoice = 'rock';
    } else if (x === 2) {
        return computerChoice = 'paper';
    } else {
        return computerChoice = 'scissors';
    }
    console.log("The computer chose: " + computerChoice)
}
*/


/* 
Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection - and then 
return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, 
RocK or any other variation).
*/

// steps 1-4 complete


let playerSelection = "rock";
let computerSelection = computerPlay();

function computerPlay() {
  let computerSelection;
    let x = Math.floor(Math.random()*3) +1;
        if (x === 1) {
            return computerSelection = 'rock';
        } else if (x === 2) {
            return computerSelection = 'paper';
        } else {
            return computerSelection = 'scissors';
        } 
};

console.log(playerSelection);
console.log(computerSelection);
function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'rock' && playerSelection === 'paper') {
        outcome  = "You win! Paper beats rock!";
        console.log(outcome);
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        outcome = "You win! Paper beats rock!";
        console.log(outcome);
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        outcome = "You win! Rock beats scissors!";
        console.log(outcome);
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        outcome = "You lose! Paper beats rock!";
        console.log(outcome);
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        outcome = "You lose! Scissors beats paper!";
        console.log(outcome);
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        outcome = "You lose! Rock beats scissors!";
    } else if (computerSelection === 'rock' && playerSelection === 'rock' ){
        outcome = "It's a tie! Re-roll!"
    } else if (computerSelection === 'paper' && playerSelection === 'paper' ){
        outcome = "It's a tie! Re-roll!"
    } else if (computerSelection === 'scissors' && playerSelection === 'scissors' ){
        outcome = "It's a tie! Re-roll!"
    } else {
        console.log("...how did you do that?");
    } return outcome;
}
console.log(playRound(playerSelection, computerSelection));











//computer plays a single game and declares a winner
/*
var computerChoice;

//computer returns a randomized choice of either rock, paper, or scissors
function randomResponse() {
    let x = Math.floor(Math.random()*3) +1;
    if (x === 1) {
        return computerChoice = 'rock';
    } else if (x === 2) {
        return computerChoice = 'paper';
    } else {
        return computerChoice = 'scissors';
    }
    console.log("The computer chose: " + computerChoice)
}
*/




/*
Write a function that plays a single round of Rock Paper Scissors. The function should take two 
parameters - the playerSelection and computerSelection - and then return a string that declares the 
winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or 
any other variation).
*/

/*below, calling rockPaperScissors() will play a single game with the default value for playerSelection
being 'rock'. The computer will provide a random choice and compare both. 
I am not very happy about this format. I need to read and experiment more with nesting and calling functions
with parameters.

*/


/*
var computerSelection;
var playerSelection = null;

//playerSelection needs to be a function, not a variable??



function promptInput() {
    while (playerSelection === null) {
      alert("type playerSelection is equal to either rock, paper, or scissors, ie. playerSelection = rock");
      break;
    }
    }
//================================================================================================

function computerPlay() {
    let x = Math.floor(Math.random()*3) +1;
        if (x === 1) {
            return computerSelection = 'rock';
        } else if (x === 2) {
            return computerSelection = 'paper';
        } else {
            return computerSelection = 'scissors';
        } 
}

//takes any upper or lowercase (or varieties) input strings and converts to lowercase

function lowerCaseIt(){
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}





function singleGame() { 
    
    if (computerSelection === 'rock' && playerSelection === 'paper') {
        outcome  = "You win! Paper beats rock!";
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        outcome = "You win! Paper beats rock!";
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        outcome = "You win! Rock beats scissors!";
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        outcome = "You lose! Paper beats rock!";
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        outcome = "You lose! Scissors beats paper!";
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        outcome = "You lose! Rock beats scissors!";
    } else if (computerSelection === 'rock' && playerSelection === 'rock' ){
        outcome = "It's a tie! Re-roll!"
    } else if (computerSelection === 'paper' && playerSelection === 'paper' ){
        outcome = "It's a tie! Re-roll!"
    } else if (computerSelection === 'scissors' && playerSelection === 'scissors' ){
        outcome = "It's a tie! Re-roll!"
    } else {
        outcome =("...forget to tell me what you chose?");
    } return outcome;
}



/* code before 'spork' of parameter within function call
function singleGame() { 
    let computerSelection = 'rock';
    let playerSelection = 'paper';
    if (computerSelection === 'rock' && playerSelection === 'paper') {
        outcome  = "You win! Paper beats rock!";
        console.log(outcome);
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        outcome = "You win! Paper beats rock!";
        console.log(outcome);
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        outcome = "You win! Rock beats scissors!";
        console.log(outcome);
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        outcome = "You lose! Paper beats rock!";
        console.log(outcome);
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        outcome = "You lose! Scissors beats paper!";
        console.log(outcome);
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        outcome = "You lose! Rock beats scissors!";
    } else{
        console.log("...how did you do that?");
    }
}
*/



