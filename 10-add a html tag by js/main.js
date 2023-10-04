const userData=[
    {name: "Reza", age: 28},
    {name: "Ali", age: 30},
    {name: "Abbas", age: 22},
    {name: "Mohammad", age: 25}
];

const ul = document.createElement ("ul");
ul.style.listStyle= "none";

userData.forEach (item => {
    const li = document.createElement ("li");
    li.innerText = `${item.name}'s is ${item.age} `;
    ul.appendChild(li)
    console.log(li)
}
    )

document.querySelector("body").appendChild(ul);
console.log(ul)