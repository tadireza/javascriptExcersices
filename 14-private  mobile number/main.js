const input = prompt("Enter your phone number");
const phoneNumberLength = input.length;
const transInputToNumber = parseInt(input); 
const inputType = typeof transInputToNumber;

const substring = input.slice(4,8);
const replaced = input.replace(substring, "****" );


console.log(replaced) /*It's wrong/