'use strict'

function onBallClick(elBall) {
    var ballSize = +elBall.innerText + 50
    if (ballSize > 400) ballSize = 100
    elBall.style.height = ballSize + 'px'
    elBall.style.width = ballSize + 'px'
    elBall.innerText = ballSize
}