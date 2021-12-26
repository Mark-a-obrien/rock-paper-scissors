
// returns either Rock, Paper or Scissors
function computerPlay() {
    const randNumber = Math.floor(Math.random()*(3-0) + 0);

    switch(randNumber) {
        case 0: return "rock"; break;
        case 1: return "paper"; break;
        case 2: return "scissors"; break;
    }

}

// gets input from the user 
function userInput() {
    const userChoice = prompt("Enter rock, paper or scissors :")
    return userChoice;
}




// calculates if the user or the computer has one 
function calcWinner(choice1, choice2) {
    if (choice1 === "rock" && choice2 === "scissors") {
        return true;
    } 
    else if (choice1 === "paper" && choice2 === "rock") {
        return true;
    }
    else if (choice1 === "scissors" && choice2 === "paper") {
        return true;
    }

    return false;
}


// plays a single round of rock, paper, scissor using input from the user and output from computerPlay function
function playRound() {

    const computerChoice = computerPlay();
    const userChoice = userInput();
    let winner;

    if (calcWinner(computerChoice, userChoice)) {
        winner = "Computer";
    } else {
        winner = "User";
    }

    return `User : ${userChoice}\nComputer : ${computerChoice}\n${winner} wins`;
}

function game() {
    for (let i = 0; i<= 5; i++) {
        console.log(playRound());
    }
}