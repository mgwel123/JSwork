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

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];


function averageNameLength(){
    var sum = 0
    for(var i = 0; i < names.length; i++){
        sum += names[i].length;
    }
    return sum / names.length;
}

console.log(averageNameLength()); 

function list(){
    var total = 0
    for(var i = 0; i < names.length; i++){
    total += names.length;
    }
    console.log(total + ' ')
}

list();

// How do you access the last element in an array?
let last = names[names.length];
console.log(last);

// How do you access the first element in an array?
let first = names[0];
console.log(first);



