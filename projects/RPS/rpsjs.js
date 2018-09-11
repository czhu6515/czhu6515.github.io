let playerChoice
let compChoice
let compRand
let playerScore = 0
let compScore = 0

async function choose(choice) {
  document.getElementById("comp-choice").src="comp-rock.jpg"
  document.getElementById("player-choice").src="player-rock.jpg"

  document.getElementById("player-choice").classList.add("shake");
  document.getElementById("comp-choice").classList.add("shake")

  await sleep(1000);

  playerChoice = choice

  if (playerChoice === 'rock') {
    document.getElementById("player-choice").src="player-rock.jpg"
  } else if (playerChoice === 'scissors') {
    document.getElementById("player-choice").src="player-scissors.jpg"
  } else if (playerChoice === 'paper') {
    document.getElementById("player-choice").src="player-paper.jpg"
  }

  compRand = Math.floor(Math.random() * 3)

  if (compRand === 0){
    compChoice = 'rock'
    document.getElementById("comp-choice").src="comp-rock.jpg"
  } else if (compRand === 1){
    compChoice = 'scissors'
    document.getElementById("comp-choice").src="comp-scissors.jpg"
  } else if (compRand === 2){
    compChoice = 'paper'
    document.getElementById("comp-choice").src="comp-paper.jpg"
  }

  if (playerChoice === compChoice){
    document.getElementById("results").innerHTML = "<b>It's a tie!</b>"
  } else if (playerChoice === "rock" && compChoice === "paper"){
    document.getElementById("results").innerHTML = "<b>Computer wins!</b>"
    compScore++
  } else if (playerChoice === "rock" && compChoice === "scissors"){
    document.getElementById("results").innerHTML = "<b>You win!</b>"
    playerScore++
  } else if (playerChoice === "paper" && compChoice === "scissors"){
    document.getElementById("results").innerHTML = "<b>Computer wins!</b>"
    compScore++
  } else if (playerChoice === "paper" && compChoice === "rock"){
    document.getElementById("results").innerHTML = "<b>You win!</b>"
    playerScore++
  } else if (playerChoice === "scissors" && compChoice === "rock"){
    document.getElementById("results").innerHTML = "<b>Computer wins!</b>"
    compScore++
  } else if (playerChoice === "scissors" && compChoice === "paper"){
    document.getElementById("results").innerHTML = "<b>You win!</b>"
    playerScore++
  }

  document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("comp-score").innerHTML = compScore

  document.getElementById("player-choice").classList.remove("shake");
  document.getElementById("comp-choice").classList.remove("shake")

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function reset () {
  playerScore = 0
  compScore = 0
  document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("comp-score").innerHTML = compScore

  document.getElementById("comp-choice").src="comp-rock.jpg"
  document.getElementById("player-choice").src="player-rock.jpg"

}


function test() {
  alert("You chose " + playerChoice + ", computer chose " + compChoice)
}
