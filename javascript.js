function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

const rockBtn = document.querySelector("#rockBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const paperBtn = document.querySelector("#paperBtn");

const choiceDiv = document.querySelector("#choice");
const winnerDiv = document.querySelector("#winner");
const scoreDiv = document.querySelector("#score");
const gameWinnerDiv = document.querySelector("#gameWinner");

let humanScore = 0;
let computerScore = 0;

function checkScore() {
  if (humanScore >= 3 || computerScore >= 3) {
    if (humanScore > computerScore) {
      console.log("You won the game !");
      gameWinnerDiv.innerText = "You won the game !";
    } else {
      console.log("You lost the game !");
      gameWinnerDiv.innerText = "You lost the game !";
    }
    humanScore = 0;
    computerScore = 0;
  } else if (humanScore == 0 || computerScore == 0) {
    gameWinnerDiv.innerText = "-";
  }
}

function announce(winner) {
  if (winner == 0) {
    console.log("It is a draw !");
    winnerDiv.innerText = "It is a draw !";
    console.log(
      `Human has :${humanScore} score \nComputer has :${computerScore} score`
    );
    scoreDiv.innerText = `Human has :${humanScore} score \nComputer has :${computerScore} score`;
  } else if (winner == 1) {
    console.log("You won !");
    winnerDiv.innerText = "You won !";
    console.log(
      `Human has :${humanScore} score \nComputer has :${computerScore} score`
    );
    scoreDiv.innerText = `Human has :${humanScore} score \nComputer has :${computerScore} score`;
  } else if (winner == 2) {
    console.log("You lost !");
    winnerDiv.innerText = "You lost !";
    console.log(
      `Human has :${humanScore} score \nComputer has :${computerScore} score`
    );
    scoreDiv.innerText = `Human has :${humanScore} score \nComputer has :${computerScore} score`;
  }
}

function playRound(humanChoice, computerChoice) {
  let humanChoiceLower = humanChoice.toLowerCase();
  let computerChoiceLower = computerChoice.toLowerCase();
  choiceDiv.innerText = `Human choice is : ${humanChoiceLower} \nComputer choice is :${computerChoiceLower}`;
  console.log(
    `Human choice is : ${humanChoiceLower} \nComputer choice is :${computerChoiceLower}`
  );
  if (humanChoiceLower == computerChoiceLower) {
    announce(0);
    checkScore();
  } else if (humanChoiceLower == "rock" && computerChoiceLower == "scissors") {
    humanScore++;
    announce(1);
    checkScore();
  } else if (humanChoiceLower == "scissors" && computerChoiceLower == "paper") {
    humanScore++;
    announce(1);
    checkScore();
  } else if (humanChoiceLower == "paper" && computerChoiceLower == "rock") {
    humanScore++;
    announce(1);
    checkScore();
  } else {
    computerScore++;
    announce(2);
    checkScore();
  }
}

rockBtn.addEventListener("click", function (e) {
  playRound("rock", getComputerChoice());
});

scissorsBtn.addEventListener("click", function (e) {
  playRound("scissors", getComputerChoice());
});

paperBtn.addEventListener("click", function (e) {
  playRound("paper", getComputerChoice());
});

// function getHumanChoice() {
//   let choice = prompt("Please enter your choice");
//   return choice;
// }

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     announce();
//   }
//   if (humanScore > computerScore) {
//     console.log("You won the game !");
//   } else if (humanScore < computerScore) {
//     console.log("You lost the game !");
//   } else {
//     console.log("This game is a draw");
//   }
// }

// playGame();
