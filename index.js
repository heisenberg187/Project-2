// Add Two Numbers
function add(x, y) {
    let result = x + y;
    return result;
}
let AllResult = add(10, 40) + add(10, 20) + add(60, 20);
console.log(AllResult);


// // Even or Odd Checker

// function isEven(num) {
//     return num % 2 === 0 ? 'Even' : 'Odd'

//     console.log(isEven(11));
// }


// Convert Celsius to Fahrenheit

function CelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(CelsiusToFahrenheit(3));


// Square of a Number

function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(9));



// Get First Character of a String

function firstCharacter(str) {
    return str.charAt(0);
}
console.log(firstCharacter('Hello'));

// Number is positive or Negative
function checkNum (num){


    if(num > 0){
    return "Positive"
    } else {
    return "Negative"

    }
}

console.log(checkNum(-2))
