var ages = [3, 9, 23, 64, 2, 8, 28, 93]

//1a
function subtract(){
    let x = ages[0];
    let y = ages[ages.length - 1];
    console.log(y - x);
}

subtract();

//1b
ages.push (100);

subtract();

//1c
function average(){
    let sum = 0;
    for (let i = 0; i < ages.length; i++){
        sum +=ages[i];
    }
    return sum / ages.length;
}

console.log(average());

//2
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//2a
function averageNameLength(){
    var sum = 0
    for(var i = 0; i < names.length; i++){
        sum += names[i].length;
    }
    return sum / names.length;
}

console.log(averageNameLength());

//2b (still working on it**)
function list(){
    var total = 0
    for(var i = 0; i < names.length; i++){
    total += names.length;
    }
    console.log(total + ' ')
}

list();

// How do you access the last element in an array?
let last = names[names.length - 1];
console.log(last);

// How do you access the first element in an array?
let first = names[0];
console.log(first);


//5

let nameLengths = [];
function charCount(){
    let letterCount = 0;
    for(let i = 0; i < names.length; i++){
        letterCount = names[i].length;
        nameLengths.push(names[i].length); 
}
  return nameLengths;
}

console.log(charCount());

//6
function total(){
    let sum = 0
    for(let i = 0; i< nameLengths.length; i++){
        sum += nameLengths[i];
    }
    console.log(sum)
}

total();

//7
function echo(word, n){
    let array = [];
    for(let i = 0; i < n;){
        array[i++] = word;
    }
    return array.join('');
}
 console.log(echo("Hey", 3));

 //8
function fullName(firstName, lastName){
    return firstName + ' ' + lastName;
}

console.log(fullName('Michael', 'Welker'));

//9
let numbersArr = [20, 34, 62, 5];
function overUnder(){
    let sum = 0
    for (let i = 0; i < numbersArr.length; i++){
        sum += numbersArr[i];
        if(sum >= 100){
            
        }
    }

}

console.log(overUnder(numbersArr));