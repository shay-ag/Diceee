var player1DiceNum = Math.floor(Math.random() * 6) + 1;
var player2DiceNum = Math.floor(Math.random() * 6) + 1;
var result = "";

// Game Conditions
if (player1DiceNum > player2DiceNum) {
    result = "🚩 Player 1 Wins!"
}
else if (player1DiceNum < player2DiceNum) {
    result = "Player 2 Wins! 🚩"
}
else if (player1DiceNum === player2DiceNum) {
    result = "Draw"
}

//1. Updating Dice Images
document.getElementById("diceImage1").setAttribute("src", `./images/dice${player1DiceNum}.png`)
document.getElementById("diceImage2").setAttribute("src", `./images/dice${player2DiceNum}.png`)

//2. Updating Title Text
document.querySelector("h1").innerHTML = result