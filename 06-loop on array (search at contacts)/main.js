const contact = ["ali-091000000", "abbas-09110000000", "reza-0912000000", "hossein-091300000"];
const name = prompt("Search a contact");

for (let i=0; i < contact.length; i++) {
    let nameSplited = contact[i].split("-");
    if (nameSplited[0] == name) {
        console.log(`Number of ${nameSplited[0]} is ${nameSplited[1]} `);
        break;
    } else {
        console.log(`${name} not available!`);
    }
}


