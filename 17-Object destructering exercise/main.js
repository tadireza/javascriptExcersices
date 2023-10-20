const data = [{
    identity : {
        name: "Reza",
        lastname: "Rezaei",
        city: "Ben",
        age: 28,
    },
},
{skills: ["css", "js", "React"]},
];

const [identity, skills] = data;
const {identity: {age, city, lastname}} = identity;

const {skills: [css, js, React]} = skills
console.log(age, city, lastname );
console.log(css, js, React);
