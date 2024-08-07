//create new function getComputerChoice
function getComputerChoice() {
    //obtain random number "x" between 0 and 1 and multiply by 3
    let x = Math.floor(Math.random()*3);
    //if random number is less than 1, return rock
    if (x < 1) return "rock";
    //if random number is >= 1 but <2, return scissors
    if (x < 2) return "scissors";
    //if random number is >= 2, return paper
    else return "paper";
}

//create function getPlayerChoice
function getPlayerChoice() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
    button.addEventListener("click", () => {
        return button.id;
    });
});
}


//create new function updateScore
function updateScore(PlayerChoice, ComputerChoice) {
    
    let winlosedraw = 0;

    if (PlayerChoice == ComputerChoice) winlosedraw = "It's a draw!";
    else if (PlayerChoice == "rock" && ComputerChoice == "scissors" || PlayerChoice == "scissors" && ComputerChoice == "paper" || 
        PlayerChoice == "paper" && ComputerChoice == "scissors") {
        winlosedraw = "You win!";
        //increase playerScore by 1
        playerScore++;
    }
    else {
        winlosedraw = "You lose. :(";
        compScore++;
    }
    if (playerScore == 5) winlosedraw = winlosedraw + " You win the game!"
    
    if (compScore == 5) winlosedraw = winlosedraw + " The computer wins the game!"
    if (playerScore != 5 && compScore != 5) winlosedraw = winlosedraw + " Try again?"
    report.textContent = "You chose " + PlayerChoice + ", and the computer chose " + ComputerChoice + "." + " " + winlosedraw;
    pScore.textContent = playerScore;
    cScore.textContent = compScore;

}

//create new function playRound
function playRound(PlayerChoice) {
    
    //call getComputerChoice
    let ComputerChoice = getComputerChoice ();

    //call updateScore
    updateScore(PlayerChoice, ComputerChoice);
}


//set initial playerScore and compScore to 0
let playerScore = 0;
let compScore = 0;
const report = document.querySelector("#prompt");
const pScore = document.querySelector("#playerscore");
const cScore = document.querySelector("#computerscore");

const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
    button.addEventListener("click", () => {
    
        if (playerScore >= 5 || compScore >= 5) {
            playerScore = 0;
            compScore = 0;
            pScore.textContent = 0;
            cScore.textContent = 0;
        }

        playRound(button.id);

    });
});




