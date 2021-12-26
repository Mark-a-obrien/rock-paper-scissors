
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
        return "win";
    } 
    else if (choice1 === "paper" && choice2 === "rock") {
        return "win";
    }
    else if (choice1 === "scissors" && choice2 === "paper") {
        return "win";
    }
    else if (choice1 === "rock" && choice2 === "rock") {
        return "draw";
    } 
    else if (choice1 === "paper" && choice2 === "paper") {
        return "draw";
    }
    else if (choice1 === "scissors" && choice2 === "scissors") {
        return "draw";
    }


    return "loss";
}


// plays a single round of rock, paper, scissor using input from the user and output from computerPlay function
function playRound() {

    const computerChoice = computerPlay();
    const userChoice = userInput();
    let winner;
    checkWin = calcWinner(computerChoice, userChoice);

    if (checkWin === "win") {
        winner = "Computer wins";
    } 
    else if (checkWin === "draw") {
        winner = "draw";
    }
    else {
        winner = "User wins";
    }

    return `User : ${userChoice}\nComputer : ${computerChoice}\n${winner}`;
}

function game() {
    for (let i = 0; i<= 5; i++) {
        console.log(playRound());
    }
}