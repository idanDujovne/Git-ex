'use strict'

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomColor() {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Convert decimal values to hexadecimal and concatenate them
    const hexColor = `#${(red).toString(16).padStart(2, '0')}${(green).toString(16).padStart(2, '0')}${(blue).toString(16).padStart(2, '0')}`;

    return hexColor;
}