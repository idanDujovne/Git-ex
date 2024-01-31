'use strict'

function onBallClick(elBall) {
    var ballSize = +elBall.innerText + getRandomInt(20, 61)
    if (ballSize > 400) ballSize = 100
    elBall.style.height = ballSize + 'px'
    elBall.style.width = ballSize + 'px'
    elBall.innerText = ballSize

    elBall.style.backgroundColor = getRandomColor()
}