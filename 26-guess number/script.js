//guess number


const randomNumber = Math.ceil((Math.random())*100);
let guessCounter = 0;
// console.log(randomNumber);

const validateNumber = (value) =>{
    if (isNaN(value)) {
        return "enter a value number!";
    } else if (+value > 100 || +value <1){
        return "enter a number between 1-100";
    }
};


const checkGuess = (guess) => {
    guessCounter++;
    console.log("Dafa`at:",guessCounter)
    if (guess > randomNumber) {
        console.log("Bia payeen!")
        play()
       
    } else if (guess < randomNumber) {
        console.log("Boro bala!")
       play()
       
    } else if (guess === randomNumber){
        console.log("Doroste!")
        return "You win"
    }
    // play()
    
};

const play = () => {
    const input = prompt("Enter a number between 1-100");

    if (input === null) return;

    if (guessCounter === 10) {
        console.log("You lose!");
        console.log("guessCounter",guessCounter);
        return "You lose!"
    }
    
    const validation = validateNumber(input);
    if (validation) {
        console.log(validation);
        return play();
        
    }
    checkGuess(+input);
};

play()





