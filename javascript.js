console.log("Hello");

function getComputerChoice(){
    let randomNumber= Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
    }
}

function getHumanChoice(){
    let choice = prompt("Please enter your choice");
    console.log("Human choice is :" + choice);
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    let humanChoiceLower = humanChoice.toLowerCase();
    let computerChoiceLower = computerChoice.toLowerCase();
    console.log("Computer choice is :" + computerChoiceLower);
    if(humanChoiceLower == computerChoiceLower){
        return 0;
    }else if(humanChoiceLower == "rock" && computerChoiceLower == "scissor"){
        humanScore++
        return 1;
    }else if(humanChoiceLower == "scissor" && computerChoiceLower == "paper"){
        humanScore++
        return 1;
    }else if(humanChoiceLower == "paper" && computerChoiceLower == "rock"){
        humanScore++
        return 1;
    }else{
        computerScore++
        return 2;
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();



function announce(){
    let winner = playRound(humanSelection, computerSelection);
    if(winner == 0 ){
        console.log("It is a draw !");
        console.log(`Human has :${humanScore} score \nComputer has :${computerScore} score`);
    }else if(winner == 1){
        console.log("You won !");
        console.log(`Human has :${humanScore} score \nComputer has :${computerScore} score`);
    }else if(winner == 2){
        console.log("you lost !");
        console.log(`Human has :${humanScore} score \nComputer has :${computerScore} score`);
    }
}

announce();

function playGame(){
    
}



