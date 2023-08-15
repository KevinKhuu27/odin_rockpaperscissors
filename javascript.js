function getPlayerChoice () 
{
    while (true)
    {
        let input = prompt("Your selection: ");
        input = input.toUpperCase();
        if (input == "ROCK" || input == "PAPER" || input == "SCISSORS")
        {
            return input;
            break;
        }
    }
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

function game()
{
    let playerSelection = "";
    let computerSelection = "";
    let playerScore = 0;
    let computerScore = 0;

    for (var i = 0; i < 5; i++)
    {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
    
        let output = playRound(playerSelection, computerSelection);
        if (output == -1)
        {
            computerScore++;
            console.log("Computer wins this round! " + computerSelection + " beats " + playerSelection);
        }
        else if (output == 1)
        {
            playerScore++;
            console.log("You win this round! " + playerSelection + " beats " + computerSelection);
        }
        else
        {
            computerScore++;
            playerScore++;
            console.log("It's a tie this round! Both players picked " + playerSelection);
        }
    }

    let result = "";
    if (playerScore > computerScore)
        result = "The final score is " + playerScore + ":" + computerScore + " - You Win!";
    else if (playerScore < computerScore)
        result = "The final score is " + playerScore + ":" + computerScore + " - You Lose!";
    else
        result = "The final score is " + playerScore + ":" + computerScore + " - It's a tie!";
    return result;
}

console.log(game());