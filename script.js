// console.log('hello')
//
// let titleDiv =
//     document.getElementById('titleDiv')
//
// console.log(titleDiv)
// console.log('before:', titleDiv.innerText)
// let message = 'am here js!';
// titleDiv.innerText = message;
//
//
// console.log('after:', titleDiv.innerText)
//
// titleDiv.innerHTML = `<p> ${message}</p>`
//
// titleDiv.style.backgroundColor = 'red';
//
// let redDiv = document.getElementById('red')
// let yellowDiv = document.getElementById('yellow')
// let greenDiv = document.getElementById('green')
//
// redDiv.onclick = () => console.log('red')
// yellowDiv.onclick = () => console.log('yellow')
// greenDiv.onclick = () => console.log('green')
//
// const squares = document.querySelectorAll('.colorSquare')
// // console.log(squares)
//
// // console.log(squares[0].value)
// const timesClicked = {'red': 0, 'yellow':0, 'green': 0,}
// squares.forEach(square => {
//     square.onclick = () => {
//         timesClicked[square.value] += 1
//         square.innerText = timesClicked[square.value]
//     }
// })
//
// function clearScores () {
//     timesClicked.red = 0
//     timesClicked.green = 0
//     timesClicked.yellow = 0
//     squares.forEach(square => {
//         square.innerText = 0
//     })
// }
//
//
// const clearGameDiv = document.getElementById('clearGame')
// clearGameDiv.onclick = () => clearScores()
//

// const randomSelectFromArray = (fruits) => {
//     const randomNumber =
//         Math.floor(Math.random() * fruits.length)
//
//     return fruits[randomNumber]
// }
//
// fruits = ['banna', 'apple', 'orange', 'grapes']
// console.log(randomSelectFromArray(fruits))
const totalScores = { computerScore: 0, playerScore: 0 };

function getComputerChoice() {
    const rpsChoices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * rpsChoices.length);
    return rpsChoices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
    let score;

    if (playerChoice === computerChoice) {
        score = 0; // Tie
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        score = 1; // Player wins
    } else {
        score = -1; // Player loses
    }

    return score;
}

function showResult(score, playerChoice, computerChoice) {
    const resultDiv = document.getElementById('result');
    const handsDiv = document.getElementById('hands');
    const playerScoreDiv = document.getElementById('player-score');

    if (score === -1) {
        resultDiv.innerText = "You Lose! 😢";
    } else if (score === 0) {
        resultDiv.innerText = "It's a Tie! 🤝";
    } else {
        resultDiv.innerText = "You Won! 🎉";
    }

    handsDiv.innerText = `👤 ${playerChoice} vs 🤖 ${computerChoice}`;
    playerScoreDiv.innerText = `Player Score: ${totalScores['playerScore']}`;
}

function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice();
    const score = getResult(playerChoice, computerChoice);
    totalScores['playerScore'] += score;

    showResult(score, playerChoice, computerChoice);
}

function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsButton');

    rpsButtons.forEach(button => {
        button.onclick = () => onClickRPS(button.value);
    });

    const endGameButton = document.getElementById('endGameButton');
    endGameButton.onclick = () => endGame();
}

function endGame() {
    totalScores['playerScore'] = 0;
    totalScores['playerScore'] = 0;
    const resultDiv = document.getElementById('result');
    const handsDiv = document.getElementById('hands');
    const playerScoreDiv = document.getElementById('player-score');

    resultDiv.innerText = '';
    handsDiv.innerText = '';
    playerScoreDiv.innerText = '';
}

playGame();

