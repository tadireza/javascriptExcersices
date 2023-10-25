const array = [4, 2, 34, 4, 1, 12, 1, 4];
const newArray = [];


for (let i=0; i<array.length; i++){
    if (newArray.indexOf(array[i])===-1){
        newArray.push(array[i])
    }
}
console.log(newArray)