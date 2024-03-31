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

// let userInput = prompt('Enter Your Number')

// if (userInput >= 90 && userInput <= 100) {
//     alert('Your Grade is A')
// } else if (userInput >= 70 && userInput <= 89) {
//     alert('Your Grade is B')
// } else if (userInput >= 60 && userInput <= 69) {
//     alert('Your Grade is C')
// } else if (userInput >= 50 && userInput <= 59) {
//     alert('Your Grade is D')
// } else if (userInput >= 40 && userInput <= 49) {
//     alert('Your Grade is E')
// } else {
//     alert('Your are fail')
// } 

// if (userInput >= 18) {
//     alert('You are Adult')
// } else {
//     alert('You are Minor')
// }

// let userName = prompt('Enter Your Name')

// if (userName == '') {
//     alert('Please Enter Any Name')
// }
// else if (userName === 'john' || userName === 'Danish') {
//     alert('Hello john')
// } else {
//     alert('Hello Stranger')
// }

///// Check the area /////

// let length = prompt('Enter Your length')
// let width = prompt('Enter Your width')

// let result = width * length 

// alert('Your Rectangle Area is' + result)


///// Calculator /////

// let firstNum = parseFloat(prompt("Enter the first number:"));
// let sign = prompt('Enter Oprater sign')
// let secNum = parseFloat(prompt("Enter the second number:"));

// let result

// if (sign == '+') {
//     result = firstNum + secNum
//     alert('Your Result is' + result)
// } else if( sign == '-') {
//     result = firstNum - secNum
//     alert('Your Result is' + result) 
// } else if( sign == '*') {
//     result = firstNum * secNum
//     alert('Your Result is' + result) 
// } else if( sign == '/') {
//     result = firstNum / secNum
//     alert('Your Result is' + result) 
// } else {
//     alert('Please Enter Any Value')
// }

////// Check User Age //////

// let userAge = prompt('Enter Your Age')

// if (userAge >= 13 && userAge <= 19) {
//     alert('You are TeenAger')
// } else {
//     alert('You Are NOT TeenAger')
// }

////// Check the volume of cylender //////

// var radius = parseFloat(prompt("Enter the radius of the cylinder:"));
// var height = parseFloat(prompt("Enter the height of the cylinder:"));

// let result = Math.PI * Math.pow(radius, 2) * height
// console.log("The volume of the cylinder is: " + result.toFixed(2));

///// check diffrents numbers ////// 

// let num = prompt('Enter Any Number')

// if (num === '0') {
//     alert('Number is zero')
// } else if(num < 0) {
//     alert('Number is Nagitive')
// } else {
//     alert('Number is Positive')
// }

///// check Maximum and minimum numbers ////// 

// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var num3 = parseFloat(prompt("Enter the third number:"));

// // Finding the maximum and minimum among the three numbers
// var max = Math.min(num1,num2,num3)
// var min = Math.max(num1,num2,num3)

// // Displaying the results
// console.log("The maximum of the three numbers is: " + max);
// console.log("The minimum of the three numbers is: " + min);


////// Check Number evevn and Odd //////

// let number = prompt('Enter A Number');

// if (number % 2 === 0) {
//     alert('Number is even')
// } else {
//     alert('Number is Odd')
// }

////// calculate the percentage //////

// function calculatePercentage(part, whole) {
//     return (part / whole) * 100;
// }

// // Example usage:
// let part = prompt('Enter orignal price')
// let whole = prompt('Enter the percentage')
// let percentage = calculatePercentage(part, whole);
// alert(percentage, '%');  

////// Check user Name first Latter //////

let userName = prompt('Enter Your Name')

if (userName.charAt(0).toUpperCase() === 'A') {
    alert("Your name starts with the letter 'A'.");
} else {
    alert("Your name does not start with the letter 'A'.");
}






// Practice Conditional Opraters