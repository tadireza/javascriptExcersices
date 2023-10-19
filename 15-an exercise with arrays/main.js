const sports = ["football", "volleyball", "pingpong", "wrestling", "chess"];

//use this list in a text//
const stringSports = sports.toString();
console.log(stringSports);


//remove the last item from list//
const newSports = sports.pop();
console.log(sports);

//create new array for two new item and delete two first item//
const newSports1 = ["runing", "handball"];
const addNewSports = sports.slice(0,2);
const addNewSports2 = sports.splice(0, 2)
console.log(addNewSports2)