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
function averageAge(){
    let sum = 0;
    for (let i = 0; i < ages.length; i++){
        sum +=ages[i];
    }
    return sum / ages.length;
}

console.log(averageAge());

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

//9 (still working on it**)
let numbersArr = [20, 34, 62, 5];
function overUnder(){
    let sum = 0
    for (let i = 0; i < numbersArr.length; i++){
        sum = sum += numbersArr[i];
         if(sum >= 100){
            return true;
        }else{
            return false;
        }
    }

}

console.log(overUnder(numbersArr));
let numbersArr2 = [1, 2, 3, 4, 5];
console.log(overUnder(numbersArr2)); 

//10 
let newArray = [3, 6, 22, 14, 8, 31]
function arrAverage(){
    let sum = 0
    for(let i = 0; i < newArray.length; i++){
        sum += newArray[i];
    }
    return sum / newArray.length;
}

console.log(arrAverage()); 

//11 
function isBigger(x, y){
    let sum = 0; 
    for(let i = 0; i < x.length; i++){
        sum+= x[i];
    }
    let total = 0;
    for(let i = 0; i < y.length; i++){
        total += y[i];
    }
    return sum > total;
}

console.log(isBigger(numbersArr, numbersArr2)); 

//12 (playing with boolean isHotOutside to figure out how to make it dynamic** not finished)
let isHotOutside = false;
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside == !isHotOutside && moneyInPocket > 10.50){
        return true;
    }else {
        return false;
    }
}
console.log(willBuyDrink(isHotOutside, 11));