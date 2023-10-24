//*Choose even numbers and print them*//

const numbers = [13, 23, 12, 45, 22, 48, 66, 100];
const evenNums = [];

for (i of numbers){
    if (i %2 === 0){
        evenNums.push(i)
    }

}
console.log(evenNums)