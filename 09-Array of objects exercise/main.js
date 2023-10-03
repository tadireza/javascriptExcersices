const userData = [
    { name: "Ali", scores : [18, 14, 20, 6, 8]},
    { name: "Abbas", scores : [14, 20, 16, 5, 7]},
    { name: "Reza", scores : [11, 8.75, 14, 20, 9]},
    { name: "Peter", scores : [12, 18, 16, 10, 2]}
];

const newUserData = userData.map (item => {
    const sum = item.scores.reduce ((acc,cur) => acc+cur, 0);
    const avg = sum / item.scores.length;
    console.log(`${item.name} rate is ${avg}`);

    item.rate = avg;
    return item;
    console.log(newUserData);

}
    )



/*With for */
    // for (let i=0; i < userData.length; i++) {
    //     let infos = userData[i];
    //     let names = infos.name;
    //     let marks = infos.scores;
    //     console.log(marks);
    //     console.log(infos);
    // }

    //     for (let i=0; i<marks.length; i++) {
    //         let sum = 0;
    //          sum = sum + marks[i];
    //         console.log(sum)
    //     //     // let avg = sum / marks.length;
        //     // console.log(avg)

        // }
        
        

        // }

   
// objs (userData)
