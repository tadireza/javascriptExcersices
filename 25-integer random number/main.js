//Generate a random integer

const random = (min, max) => {
    if (!max && !min) {
        return "enter max and min"
    }

    if (!max) {
        max=min;
        min=0;
    }

    const result = min + Math.floor(Math.random()*(max-min+1));
    return result;

};

console.log(random(15,16));