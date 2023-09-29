const names=[["Ali", "Hassan"], ["Saeed", "Reza", "Majid"]];
const names1=names[0]; /* This line selects the first index */
const names2=names[1]; /*This line selects the second index */
const newNames=[...names1, ...names2]; /*This line takes the first & second indexs back to backly */
const sortedNames=newNames.sort(); /*This line sorts the indexs according alphabet */
console.log(sortedNames);