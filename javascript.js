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
var computerChoice;

function computerPlay() {
    let x = Math.floor(Math.random()*3) +1;
        if (x === 1) {
            return computerChoice = 'rock';
        } else if (x === 2) {
            return computerChoice = 'paper';
        } else {
            return computerChoice = 'scissors';
        }  
}

//decisionmaking---------figure out how to nest, and call, nested functions
//-capitalize() needs to actually return a lowercased string instead of the complex
//procedure currently returning first letter capitalized 



//evaluation of human and computer choices for final outcome



function computerPlay() {

}

var computerSelection /* not set to anything currently*/;
var playerSelection;
function evaluateChoices() { 
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
