let randomNumber1 = Math.floor(Math.random() * 6) + 1
let randomNumber2 = Math.floor(Math.random() * 6) + 1

let img1 = document.querySelector('.img1');
img1.setAttribute('src', "images/dice" + randomNumber1 + ".png")

let img2 = document.querySelector('.img2');
img2.setAttribute('src', "images/dice" + randomNumber2 + ".png")

let heading = document.getElementsByTagName('h1')
console.log(heading)

if (randomNumber1 === randomNumber2) {
    heading[0].textContent = "Draw!"
} else if (randomNumber1 > randomNumber2) {
    heading[0].textContent = "Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    heading[0].textContent = "Player 2 Wins!"
}