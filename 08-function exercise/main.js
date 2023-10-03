/* We have an array from scores. We want to calculate average to 2 decimal places. */

const scores = [11, 16, 17, 13, 8, 14, 20, 10, 0];

function average(scores) {
    let sum=0;
    for (let i=0; i < scores.length; i++) {
        sum = sum + scores[i];
    }
    let ave = sum / scores.length;
    let roundedAve= ave.toFixed(2);
    if (ave >= 12) {
        console.log(`Your average is ${roundedAve} and You are accepted!`)
    } else {
        console.log(`Your average is ${roundedAve} and You are refused!`)
    }

    }
average(scores)


