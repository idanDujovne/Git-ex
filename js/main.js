'use strict'

function onBallClick(elBall) {
    var ballSize = +elBall.innerText + 50
    elBall.style.height = ballSize + 'px'
    elBall.style.width = ballSize + 'px'
    elBall.innerText = ballSize
}