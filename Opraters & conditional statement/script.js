// Opraters in JavaScript 

// 1 Arthmetic Opraters
// 2 Urinary Opraters
// 3 Assigment Opraters
// 4 Comparission Opraters
// 5 Logical Opraters


// 1 Arthmetic Opraters

// let a = 10;
// let b = 5;
// let c = 9;

// console.log('a + b = ', a + b); // 15
// console.log('a - b = ', a - b); // 5
// console.log('a * b = ', a * b); // 50
// console.log('a / b = ', a / b); // 2
// console.log('a ** b = ', a ** b); // 100,000
// console.log('a % b = ', a % c); // 1

// 2 Urinary Opraters

// let a = 10;

// POST Decrement & Increament

// console.log('++ a  = ', ++ a); // 11
// console.log('-- a  = ', -- a); // 10

// POST Decrement & Increament

// console.log('a --  = ', a --); // 10
// console.log('a --  = ', a ); // 9
// console.log('a ++  = ', a ++); // 10
// console.log('a --  = ', a ); // 11

// 3 Assigment Opraters

// let a = 10;
// let b = 5;

// console.log('a += b = ', a += b); // 15
// console.log('a -= b = ', a -= b); // 10
// console.log('a *= b = ', a *= b); // 50
// console.log('a /= b = ', a /= b); // 10
// console.log('a **= b = ', a **= b); // 100,000
// console.log('a %= b = ', a %= b); // 0  

// 4 Comparission Opraters

// let a = 10;
// let b = 5;
// let c = '14';

// console.log('a == b = ', a == b); // false
// console.log('a === b = ', b === c); // false
// console.log('a == b = ', b == c); // true
// console.log('b != b = ', b != c); // true
// console.log('a !== b = ', b !== c); // false











// if else statements 

let userInput = prompt('Enter Your Number')

if (userInput >= 90 && userInput <= 100) {
    alert('Your Grade is A')
} else if (userInput >= 70 && userInput <= 89) {
    alert('Your Grade is B')
} else if (userInput >= 60 && userInput <= 69) {
    alert('Your Grade is C')
} else if (userInput >= 50 && userInput <= 59) {
    alert('Your Grade is D')
} else if (userInput >= 40 && userInput <= 49) {
    alert('Your Grade is E')
} else {
    alert('Your are fail')
} 