//create new function getComputerChoice
function getComputerChoice() {
    //obtain random number between 0 and 1 and multiply by 3
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
function updateScore() {
    //if player chose rock and comp chose scissors || player chose scissors and comp chose paper || player chose paper and comp chose scissors
        //increase playerScore by 1
    //otherwise, increase compScore by 1
}

//create new function playRound
function playRound() {
    //loop the below as long as player and computer choose the same thing
        //call getPlayerChoice
        //call getComputerChoice
        //output text "You chose x, Computer chose y"
    
    //call updateScore
}

//create function to play a game of five rounds
function playGame() {
    //set initial playerScore and compScore to 0
    
    //loop until five rounds have been played
    for (let roundnumber = 0; roundnumber < 5; roundnumber++) {
        //call playRound
    }

    //report final score
}

console.log(getComputerChoice());
console.log(getPlayerChoice());