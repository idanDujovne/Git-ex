'use strict'

function onBallClick(elBall) {
    const ballSize = +elBall.innerText + getRandomInt(20, 61)
    if (ballSize > 400) ballSize = 100
    elBall.style.height = ballSize + 'px'
    elBall.style.width = ballSize + 'px'
    elBall.innerText = ballSize

    elBall.style.backgroundColor = getRandomColor()
}

function swapColors() {
    const elBalls = document.querySelectorAll('.ball')
    const ball1Size = +elBalls[0].innerText
    const ball1Color = elBalls[0].style.backgroundColor

    const ball2Size = +elBalls[1].innerText
    const ball2Color = elBalls[1].style.backgroundColor

    modifyBall(elBalls[0], ball2Size, ball2Color)
    modifyBall(elBalls[1], ball1Size, ball1Color)
}

function modifyBall(elBall, size, color) {
    elBall.style.height = size + 'px'
    elBall.style.width = size + 'px'
    elBall.innerText = size
    elBall.style.backgroundColor = color
}