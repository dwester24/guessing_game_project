// Import and creat readline interface
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

//   Global Variables
  let secretNumber;
  let numAttempts;

// Game Functions - In order of calling
// Ask Limit
const askLimit = () => {
    rl.question('How many guess would you like? ', answer => {
        numAttempts = Number(answer);
        askRange();
    });
}
// Enter min and max nums
// Min num
const askRange = () => {
    rl.question('Enter a min number: ', answer => {
        const min = Number(answer);
        maxNum(min);
    } )
}

// Max num
const maxNum = num => {
    rl.question('Enter a max number: ', answer => {
        const max = Number(answer);
        setNumber(num, max);
    } )
}

// Set secretNumber
const setNumber = (num1, num2) => {
    secretNumber =  randomInRange(num1, num2);
    console.log(`I'm thinking of a number between ${num1} and ${num2}...`)
    askGuess(secretNumber);
}

// Get random num from min and max
let randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Ask the user for their guess
let askGuess = () => {
    if (numAttempts === 0) {
        console.log('You Lose!');
        rl.close();
    } else {
        rl.question('Enter a guess: ', checkGuess);
        numAttempts--;
    }
}

// Check the guess of the user
const checkGuess = num => {
    num = Number(num);
    if (num > secretNumber) {
        console.log('Too high');
        askGuess()
        return false;
    } else if (num < secretNumber) {
        console.log('Too low');
        askGuess();
        return false;
    } else {
        console.log("You Win!");
        rl.close();
        return true;
    }
}

console.log(askLimit());
