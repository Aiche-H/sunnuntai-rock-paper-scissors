const COMPUTER_CHOICE = ["rock","paper","scissors"];
const ROCK = document.getElementById("rock");
const PAPER = document.getElementById("paper");
const SCISSORS = document.getElementById("scissors");
const RESULT_TEXT = document.getElementById("resultText");

ROCK.addEventListener("click", function () {
  playGame("rock");
});

PAPER.addEventListener("click", function () {
  playGame("paper");
});

SCISSORS.addEventListener("click", function () {
  playGame("scissors");
});

function generateComputerChoice() {
  return COMPUTER_CHOICE[Math.floor(Math.random() * COMPUTER_CHOICE.length)];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function updateResultText(result) {
  RESULT_TEXT.textContent = `${result}`;
  if (result === "It's a tie!") {
    RESULT_TEXT.style.color = "white";
  } else if (result === "You win!") {
    RESULT_TEXT.style.color = "green";
  } else {
    RESULT_TEXT.style.color = "maroon";
  }
}

function playGame(userChoice) {
  const computerChoice = generateComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  updateResultText(result, userChoice, computerChoice);
}