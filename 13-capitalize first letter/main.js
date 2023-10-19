//*Capitalize first letter of a text //

const text = "i am a developer and i'm 28 years old";

const firstLetter = text.charAt(0);
// console.log(firstLetter);
const newFirstLetter = firstLetter.toUpperCase();
const finalText = text.replace(firstLetter, newFirstLetter);
console.log(finalText);