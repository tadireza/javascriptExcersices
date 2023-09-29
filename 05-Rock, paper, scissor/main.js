/* userChoice */
const userChoice = prompt("choose rock or paper or scissor!");
if (userChoice) {
    console.log(`Your choice is ${userChoice}`);
} else {
    console.log("You cheated!");
}

if (userChoice ===! "rock" || "paper" || "scissor") {
    console.log ("Your choice is false!")
} 


/*computerChoice*/
const states = ["rock", "paper", "scissor"];
const choose = Math.floor((Math.random())*3);
const computerChoice= states[choose];
console.log(`computer choice is ${computerChoice}`);

if (userChoice === computerChoice) {
    console.log ("It's a tie!")
} else {
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            console.log ("You lose!");
        } else {
                    console.log ("You win!")
                }
            }
}
    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            console.log ("You lose!")
        
        } else {
                    console.log ("You win!")
                }
            }
        
    if (userChoice === "scissor") {
        if (computerChoice === "rock") {
            console.log ("You lose!")
        } else {
            console.log ("You win!")
        }
    }

