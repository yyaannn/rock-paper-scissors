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
    console.log("compute choice: " + computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice (rock, paper, or scissors):");
    console.log("human choice: " + humanChoice);
}

let humanScore = 0, computerScore = 0;

getHumanChoice();
getComputeChoice();
