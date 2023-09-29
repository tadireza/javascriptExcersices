/* Selecting some information of a fake API and showing them as a string */

/*This is a fake API */ 
const data= {
    id: 1,
    name: "Peter",
    lastname: "Cech",
    age: 28,
    city: "London",
    address: {
        street: "Gas square",
        suite: 254,
        zipcode: "782-668",
        geo: {
            lat : "-28.6039",
            len: "33.1497"
        }
    }

}

/*This part select the informations */
const name= data.name;
const street= data.address.street;
const lat= data.address.geo.lat;

/*This part print the information as a string */
const string= `Hi! I am ${name} and I live at ${street}. My geo len is ${lat}`;
console.log(string);