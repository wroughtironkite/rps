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

//create new function getPlayerChoice
function getPlayerChoice() {
    //create temporary variable "y"
    let y = 0; 
    while (y != "r" && y != "rock" && y != "s" && y != "scissors" && y != "p" && y != "paper") {
        //prompt user to pick from rock, paper, and scissors
        y = prompt("Please choose (r)ock, (p)aper, or (s)cissors: ");
        //lower-case whatever they input
        y = y.toLowerCase();
        //"r" or "rock" returns rock
        if (y == "r" || y == "rock") return "rock";
        //"s" or "scissors" returns scissors
        if (y == "s" || y == "scissors") return "scissors";
        //"p" or "paper" returns paper
        if (y == "p" || y == "paper") return "paper";
    //otherwise, ask again
    }
}

//create new function updateScore
function updateScore(PlayerChoice, ComputerChoice) {
    //if player chose rock and comp chose scissors || player chose scissors and comp chose paper || player chose paper and comp chose scissors
        
    if (PlayerChoice == "rock" && ComputerChoice == "scissors" || PlayerChoice == "scissors" && ComputerChoice == "paper" || PlayerChoice == "paper" && ComputerChoice == "scissors") {
        console.log("You win!");
        //increase playerScore by 1
        playerScore++;
    }
    
    //otherwise, increase compScore by 1

    else {
        console.log("You lose. :(");
        compScore++;
    }

}

//create new function playRound
function playRound() {
    //create temporary variable "PlayerChoice" and "ComputerChoice"
    let PlayerChoice = 0;
    let ComputerChoice = 0;
    //loop the below as long as player and computer choose the same thing
    while (PlayerChoice == ComputerChoice) {
        //call getPlayerChoice
        PlayerChoice = getPlayerChoice();
        //call getComputerChoice
        ComputerChoice = getComputerChoice ();
        //output text "You chose x, Computer chose y"
        console.log("You chose " + PlayerChoice + ", and the computer chose " + ComputerChoice + ".");
    }
    //call updateScore
    updateScore(PlayerChoice, ComputerChoice);
}



//set initial playerScore and compScore to 0
let playerScore = 0;
let compScore = 0;

//report final score
console.log("Out of 5 games, you won " + playerScore + " games and the computer won " + compScore + " games.");
