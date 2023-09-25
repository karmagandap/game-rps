// Variables
const player = document.querySelector(".player");
const computer = document.querySelector(".computer button");
const resultContainer = document.querySelector(".result");
const gameButton = document.querySelectorAll(".player button");

// Computer AI
computerRandom = () => {
  let computerAI = Math.random();
  if (computerAI < 0.37) return "rock";
  if (computerAI > 0.37 && computerAI < 0.67) return "paper";
  if (computerAI > 0.67) return "scissor";
};

// Games Rules
gamesRules = (player, computer) => {
  if (player == computer) return "DRAW";
  if (player == "rock") return computer == "paper" ? "YOU LOSE!" : "YOU WON!";
  if (player == "scissor") return computer == "rock" ? "YOU LOSE!" : "YOU WON!";
  if (player == "paper") return computer == "scissor" ? "YOU LOSE!" : "YOU WON!";
};

// Game Input
gameButton.forEach(function (i) {
  i.addEventListener("click", function () {
    const computerChoice = computerRandom();
    const playerChoice = i.classList[0];
    const result = gamesRules(playerChoice, computerChoice);

    // Computer Choice Display
    if (computerChoice == "rock") {
      computer.innerHTML = "✊";
    } else if (computerChoice == "paper") {
      computer.innerHTML = "🖐️";
    } else if (computerChoice == "scissor") {
      computer.innerHTML = "✌️";
    }

    resultContainer.innerHTML = result;
  });
});
