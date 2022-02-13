var ages = [3, 9, 23, 64, 2, 8, 28, 93]
function subtract(){
    let x = ages[0];
    let y = ages[ages.length - 1];
    console.log(y - x);
}

subtract();

ages.push (100);

subtract();

function average(){
    let sum = 0;
    for (let i = 0; i < ages.length; i++){
        sum +=ages[i];
    }
    return sum / ages.length;
}

console.log(average());

