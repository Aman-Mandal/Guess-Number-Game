'use strict'

//Random Number btw 1 and 20
const randomNum = function () {
  return Math.trunc(Math.random() * 20) + 1
}
// Display Msg
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}
// Score Update
const scoreUpdate = function (score) {
  document.querySelector('.score').textContent = score
}
// Background Color
const bgColor = function (color) {
  document.querySelector('body').style.backgroundColor = color
}
// See the Secret Num
const viewSecretNum = function (num) {
  document.querySelector('.number').textContent = num
}
// Box-Width (secret Num)
const boxWidth = function (width) {
  document.querySelector('.number').style.width = width
}

// secret num
let secretNum = randomNum()

// state variable
let score = 20
let highScore = 0

// Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  // For Invalid Number
  if (guess < 0 || guess > 20) {
    displayMessage('Invalid Number')
  }

  // For No Number
  else if (!guess) {
    displayMessage('No Number 🛑')
  }

  // If Number is correct
  else if (guess === secretNum) {
    viewSecretNum(secretNum)
    displayMessage('Correct Number 🎊')
    bgColor('#60b347')
    boxWidth('30rem')

    // checking and saving highScore
    if (score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }
  }

  // If Number is not same
  else if (guess !== secretNum) {
    if (score > 1) {
      // if guess num is smaller or bigger
      displayMessage(guess > secretNum ? 'Too high 😕' : 'Too low 😗')
      score--
      scoreUpdate(score)
    } else {
      displayMessage('You Lost the Game🎃')
      scoreUpdate(0)
    }
  }
})

// Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNum = randomNum()
  scoreUpdate(score)
  displayMessage('Start Guessing...')
  viewSecretNum('?')
  bgColor('#222')
  boxWidth('15rem')
  document.querySelector('.guess').value = ''
})
