let playerScore = 0, computerScore = 0, end = false;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});

const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");

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
    return computerChoice;
}

function checkWinner() {
    if (playerScore >= 5) {
        result.textContent = "You Win";
        end = true;
    }
    if (computerScore >= 5) {
        result.textContent = "Computer Wins";
        end = true;
    }
}

function playRound(playerChoice) {
    if (end) return;

    const computerChoice = getComputerChoice();

    switch (playerChoice) {
        case "rock":
            switch (computerChoice) {
                case "paper":
                    computerScore++;
                    break;
                case "scissors":
                    playerScore++;
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    playerScore++;
                    break;
                case "scissors":
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    break;
                case "paper":
                    playerScore++;
                    break;
            }
            break;
    }
    player.textContent = playerScore;
    computer.textContent = computerScore;

    checkWinner();
}
