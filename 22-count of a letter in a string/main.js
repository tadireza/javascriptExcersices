const countLetter = (str, letter) => {
    let counter=0;
    for (let i=0; i< str.length; i++){
        if (str[i] ===letter){
            counter++;
        }
        
    }
    return counter;
};

const result = countLetter("hello eviiieribody", "i");
console.log(result)
