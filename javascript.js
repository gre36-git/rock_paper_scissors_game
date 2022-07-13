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






//decisionmaking for the computer

var computerSelection;
var playerSelection;

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
function playerInput(){
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}



/*
Write a function that plays a single round of Rock Paper Scissors. The function should take two 
parameters - the playerSelection and computerSelection - and then return a string that declares the 
winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or 
any other variation).
*/

function singleGame() { 
    
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



