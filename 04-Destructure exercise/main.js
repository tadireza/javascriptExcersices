
/*This is a fake API */
const data=[
    {
        postId: 1,
        id:1,
        name: "Peter John Step",
        email: "peter@enter.biz",
        body: "I am very tired!"

    },
    {
        postId: 1,
        id: 2,
        name: "Donald Javier Mello",
        email: "djamell22@gmail.com",
        body: "My name is Donald and I am very smooth human!"
    },
    {
        postId: 1,
        id: 3,
        name: "Hamad Yasser Ali",
        email: "yasserali@yahoo.co.uk",
        body: "Hi! I am a saudian user and I enjoy from your site"
    }
]

/* I want to destructe this information */

const [ , , user3]=data;
const { id, name, email}=user3;
const splitedName= name.split(" ")

/*In this part, user info. is shown as a string */
const string= `This username is ${splitedName[0]} and his father name is ${splitedName[1]} and his id is ${id}. His email is ${email}`
console.log(string);
