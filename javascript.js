
let playerScore = 0;
let computerScore = 0;

function playerChose (playerSelection)
{
    let computerSelection = getComputerChoice();
    calcScore(playRound(playerSelection, computerSelection));
    updateDisplay(playerSelection, computerSelection);
    gameOver();
}

function getComputerChoice () {
    let n = Math.floor(Math.random() * 3);
    if (n == 0)
        return "ROCK";
    else if (n == 1)
        return "PAPER";
    else
        return "SCISSORS";
}

function playRound (playerSelection, computerSelection)
{
    if (playerSelection == "ROCK")
    {
        if (computerSelection == "ROCK")
            return 0;
        else if (computerSelection == "PAPER")
            return -1;
        else
            return 1;
    }
    else if (playerSelection == "PAPER")
    {
        if (computerSelection == "ROCK")
            return 1;
        else if (computerSelection == "PAPER")
            return 0;
        else
            return -1;
    }
    else
    {
        if (computerSelection == "ROCK")
            return -1;
        else if (computerSelection == "PAPER")
            return 1;
        else
            return 0;
    }
}

function calcScore (result)
{
    if (result == -1)
        computerScore++;
    else if (result == 1)
        playerScore++;
}

function updateDisplay(playerSelection, computerSelection)
{
    const you_chose = document.querySelector('#you_chose');
    const your_score = document.getElementById('your_score')
    you_chose.textContent = "You Chose: " + playerSelection;
    your_score.textContent = "Your Score: " + playerScore;

    const comp_chose = document.querySelector('#comp_chose');
    const comp_score = document.getElementById('comp_score')
    comp_chose.textContent = "Computer Chose: " + computerSelection;
    comp_score.textContent = "Computer Score: " + computerScore;
}


function gameOver()
{
    if ((playerScore == 5 || computerScore == 5))
    {
        let result = "";
        if (playerScore > computerScore)
            result = "The final score is " + playerScore + ":" + computerScore + " - You Win!";
        else if (playerScore < computerScore)
            result = "The final score is " + playerScore + ":" + computerScore + " - You Lose!";
        else
            result = "The final score is " + playerScore + ":" + computerScore + " - It's a tie!";

        const winnerStr = document.querySelector('.winner');
        winnerStr.textContent = result;
    }
}

function resetGame()
{
    playerScore = 0;
    computerScore = 0;

    const winnerStr = document.querySelector('.winner');
    winnerStr.textContent = "";
    updateDisplay("", "");
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn = document.getElementById("reset");

rockBtn.addEventListener('click', () => playerChose("ROCK"));
paperBtn.addEventListener('click', () => playerChose("PAPER"));
scissorsBtn.addEventListener('click', () => playerChose("SCISSORS"));
resetBtn.addEventListener('click', () => resetGame())