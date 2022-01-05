
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

let computerChoice;
let userChoice;

// plays a single round of rock, paper, scissor using input from the user and output from computerPlay function
function playRound(userChoice) {

    computerChoice = computerPlay();
    //userChoice = userInput();

    let winner;
    checkWin = calcWinner(computerChoice, userChoice);

    if (checkWin === "win") {
        winner = "computer";
    } 
    else if (checkWin === "draw") {
        winner = "draw";
    }
    else {
        winner = "user";
    }

    return winner;
}

let userScore = 0;
let computerScore = 0;
function game(uChoice) {

    
    if (userScore === 5 || computerScore === 5)
        return;

    let winner;

    // adds to the computer or users score when they win a round
    winner = playRound(uChoice);
    if (winner === "user") {
        ++userScore;    
    } else if (winner === "computer") {
        ++computerScore;
    }
    

    // creates an element for the users choice & score and computers choice & score

    let results = document.querySelector("#results");

    let userChoiceElement = document.getElementById("userChoice");
    let computerChoiceElement = document.getElementById("computerChoice");

    userChoiceElement.textContent = `User : ${uChoice}\n`;
    computerChoiceElement.textContent = `Computer : ${computerChoice}\n`;

    let userScoreElement = document.getElementById("userScore");
    let computerScoreElement = document.getElementById("computerScore");

    userScoreElement.textContent =`User score : ${userScore}\n`;
    computerScoreElement.textContent = `Computer score: ${computerScore}\n`;


    let winnerElement = document.getElementById("winner");
        
    if (userScore > computerScore) {
        winnerElement.textContent = "User wins!";
    } else if (userScore < computerScore) {
        winnerElement.textContent = "Computer wins";
    } else {
        winnerElement.textContent = "Draw";
    }

    
    if (userScore === 5) {
        winnerElement.textContent = "****User wins!****";
    } else if (computerScore === 5) {
        winnerElement.textContent = "****Computer wins****";
    }

    //results.append(userChoiceElement, computerChoiceElement, userScoreElement, computerScoreElement, winnerElement);
}


// buttons
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {
        
        console.log(game(button.getAttribute("id")));
    })
});
