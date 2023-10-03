/* Take a number and print the numbers that have integer roots. */

const number = prompt("Enter a number:");

for (let i=1; i<number; i++) {
    let root = Math.sqrt(i);
    if (Math.floor(root) === root ) {
        console.log (`${root*root} and root is ${root}`);
    }
    
}