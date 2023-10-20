const side1 = 5;
const side2 = 8;
const side3 = 5;

if (side1 === side2 && side2 === side3) {
    console.log("Motasavi-al-azla'e");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("Motasavi-al-saghain")
} else {
    console.log("Mokhtalef-al-azla'e")
};