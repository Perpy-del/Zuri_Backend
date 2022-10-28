guessNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let comGuess = guessNum(1, 2);
//   console.log(comGuess);

const userName = prompt("Enter your name: ")
console.log(`Welcome, ${userName}`)

let comGuess = guessNum(1, 2);
  console.log(comGuess);
// let num = userGuess;
let userGuess = prompt(`${userName}, Enter a number between 1 and 2: `)

function guessGame (comGuess, userGuess){
  
  if(comGuess === userGuess){
    alert(`Congratulations ${userName}, you won!!!`)
  }
  else if(userGuess > 2){
    alert(`Please enter a number between 1 and 2!!!`)
  }
  else{
    alert(`Please try again, Better luck next time`)
  };
  
}

guessGame();