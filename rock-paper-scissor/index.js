const computerChoiceDisplay =  document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;


// foreach loop for userchoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice();
    getResult();
}));

// for computer choice we use random function

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3) +1;
    
    if(randomNumber === 1){
         computerChoice = 'rock'
    }

    if(randomNumber === 2){
         computerChoice = 'paper'
    }

    if(randomNumber === 1){
         computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

// Result

function getResult(){
    if (computerChoice === userChoice) {
        result = "it's a Draw!"
    }

    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Win!'
    }

    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You Lost!'
    }

    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lost!' 
    }

    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Win!'
    }

    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You Win!"
    }

    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "You Lost!"
    }

    resultDisplay.innerHTML = result
}