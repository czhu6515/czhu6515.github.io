let playerChoice
let compChoice
let compRand
let playerScore = 0
let compScore = 0

function choose(choice) {
  playerChoice = choice
  if (playerChoice === 'rock') {
    document.getElementById("player-choice").src="rock.png"
  } else if (playerChoice === 'scissors') {
    document.getElementById("player-choice").src="scissors.jpg"
  } else if (playerChoice === 'paper') {
    document.getElementById("player-choice").src="paper.jpg"
  }

  compRand = Math.floor(Math.random() * 3)
  if (compRand === 0){
    compChoice = 'rock'
    document.getElementById("comp-choice").src="rock.png"
  } else if (compRand === 1){
    compChoice = 'scissors'
    document.getElementById("comp-choice").src="scissors.jpg"
  } else if (compRand === 2){
    compChoice = 'paper'
    document.getElementById("comp-choice").src="paper.jpg"
  }

  if (playerChoice === compChoice){
    document.getElementById("results").innerHTML = "It's a tie!"
  } else if (playerChoice === "rock" && compChoice === "paper"){
    document.getElementById("results").innerHTML = "Computer wins!"
  } else if (playerChoice === "rock" && compChoice === "scissors"){
    document.getElementById("results").innerHTML = "You win!"
  } else if (playerChoice === "paper" && compChoice === "scissors"){
    document.getElementById("results").innerHTML = "Computer wins!"
  } else if (playerChoice === "paper" && compChoice === "rock"){
    document.getElementById("results").innerHTML = "You win!"
  } else if (playerChoice === "scissors" && compChoice === "rock"){
    document.getElementById("results").innerHTML = "Computer wins!"
  } else if (playerChoice === "scissors" && compChoice === "paper"){
    document.getElementById("results").innerHTML = "You win!"
  }
}


function test() {
  alert("You chose " + playerChoice + ", computer chose " + compChoice)
}
