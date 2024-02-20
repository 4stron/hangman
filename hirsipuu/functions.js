const input = document.querySelector('input')
const output  = document.querySelector('output')
const span = document.querySelector('span')

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext",
    "randomize",
    "selection",
    "unintended",
    "international",
    "camouflage",
    "ransom",
    "runner",
    "somebody",
    "listener",
    "unemployed",
    "sunny",
    "incredible",
    "mouthful",
    "unintentional",
    "hospitality",
    "authority",
    "hangman",
    "battleship"
]

let randomizedWord = ''
let maskedWord = ''
let numberOfGuesses = 0;
let previousWord = '';

const newGame = () => {
    let random;
    do {
        random = Math.floor(Math.random() * 10) + 1;
    } while (words[random] === previousWord);

    previousWord = randomizedWord;
    randomizedWord = words[random]
    maskedWord = "*".repeat(randomizedWord.length)
    console.log(randomizedWord)
    output.innerHTML = maskedWord   
}

const win = () => {
    alert(`You have guessed right, the word is ${randomizedWord}. You needed ${numberOfGuesses} guesses!`)
    newGame()
    numberOfGuesses = 0;
}

const replaceFoundChars = (guess) => {
    for (let i = 0;i<randomizedWord.length;i++) {
        const char = randomizedWord.substring(i,i+1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,guess)
            newString = newString.join('')
            maskedWord = newString
        }
    }
    output.innerHTML = maskedWord
}
newGame()

input.addEventListener('keypress',(e) => {
    if (e.key === 'Enter') {
        e.preventDefault()

        numberOfGuesses++;

        const guess = input.value
        if ( guess.toLowerCase() === randomizedWord.toLowerCase()) {
            win()
        } else if (guess.length === 1) {
          replaceFoundChars(guess)  
          if (maskedWord.toLocaleLowerCase() === randomizedWord.toLocaleLowerCase()) {
            win()
          }
        } else {
            alert("You guessed wrong")
        }
        input.value=''
        span.textContent = numberOfGuesses;
    }
})