let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let computerChoice;
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    console.log("computer choice: " + computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice (rock, paper, or scissors):");
    humanChoice = humanChoice.toLowerCase();
    console.log("human choice: " + humanChoice);
    return humanChoice;
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        switch (humanChoice) {
            case "rock":
                switch (computerChoice) {
                    case "rock":
                        console.log("tie");
                        break;
                    case "paper":
                        computerScore++;
                        console.log("you lose");
                        break;
                    case "scissors":
                        humanScore++;
                        console.log("you win");
                        break;
                }
                break;
            case "paper":
                switch (computerChoice) {
                    case "rock":
                        humanScore++;
                        console.log("you win");
                        break;
                    case "paper":
                        console.log("tie");
                        break;
                    case "scissors":
                        computerScore++;
                        console.log("you lose");
                        break;
                }
                break;
            case "scissors":
                switch (computerChoice) {
                    case "rock":
                        computerScore++;
                        console.log("you lose");
                        break;
                    case "paper":
                        humanScore++;
                        console.log("you win");
                        break;
                    case "scissors":
                        console.log("tie");
                        break;
                }
                break;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("human score: " + humanScore);
    console.log("computer score: " + computerScore);
}

playGame();
