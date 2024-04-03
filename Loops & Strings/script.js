////////////////////////////////////////////////  TOPICS START /////////////////////////////////////////////////////

// 1. For Loop
// 2. While Loop
// 3. Do While Loop
// 4. for off Loop
// 5. for in Loop

////////////////////////////////////////////////  TOPICS ENDS //////////////////////////////////////////////////////

////////////////////////////////////////////////  NOTES START //////////////////////////////////////////////////////

// 1. While loop or for loop normal use hote ha or do while loop ki condition galat bhi hoto wo 1 bar zarur run krta ha
// 2. For off loop ko hmm strings or array pr use krte ha unki all value nikale ke lie
// 3. Do while loop ko hmm oject ki key nikalne ke lie use krte ha ye objects pr work krta ha

////////////////////////////////////////////////  NOTES ENDS ///////////////////////////////////////////////////////

////////////////////////////////////////////////  WORK START ///////////////////////////////////////////////////////

////////////////////////////////////////////////  LOOPS START //////////////////////////////////////////////////////
// 1. For Loop

// for(let i = 10; i <= 100; i = i+10) {
//     console.log('10', 'x', i/5, '=', i);
// }

// print even number

// for (let i = 0; i <= 100; i = i + 2) {
// console.log(i);
// }

// print odd number

// for (let i = 1; i <= 100; i = i + 2) {
// console.log(i);
// }

// Number guessing Game

// let userInp = prompt('Guess a number & win a car')
// let gameNum = 25

// while (userInp != gameNum) {
//     userInp = prompt('Wrong Number! Please try again')
// }
// alert('Congratulation You win a Mercedes AMG 2024 New model');

// 2. While Loop

// let i = 1

// while (i <= 10) {
//     console.log("Hello Beta =" + i);
//     i++;
// }

// 3. Do While Loop

// let j = 20

// do {
//     console.log("Danish Here");
//     j++
// } while (j <= 10);

// 4. for off Loop

// let str = 'DANISH'
// let arr = ['abc', 'bca', 'dhk']

// for(let str1 of arr) {
//   console.log(str1);
// }

// 5. for in Loop

// let obj = {
//     abc : 123,
//     name : 'Danish'
// }

// for(let obj1 in obj) {
//     console.log(`${obj1} value is ${obj[obj1]}`);
// }

/////////////////////////////////////////////// LOOPS END //////////////////////////////////////////////////////////

/////////////////////////////////////////////// STRINGS STARTS /////////////////////////////////////////////////////

// Strings Method
// 1. length
// 2. Template Literals (NOT string method)
// 3. concat method
// 4. charAt method
// 5. toUpperCase method
// 6. toLowerCase method
// 7. slice method
// 8. trim method
// 9. replace method
// 10. replaceAll method

////////////////////////////////////////////////  NOTES START //////////////////////////////////////////////////////
////// {STRINGS ARE DIRECTLY IMMUTABLE} //////
// 1. lenth check krke btata ha strings ki
// 2. Template literalls ES6 ka feauture ha iskp use krne ke lie backtics (``) lga kr kisi variable ko add krte ha
//    dollar lga kr like let Myname = ` my name is ${nameVariable}`
// 3. concat method 2 string ko mila deta ha
// 4. chartAt method ko kisi string ke charachter ka index number de kr us jagah konsa charachter ha ye dekh skte ha
// 5. toUppercase method string ko capital me krdeta ha
// 6. toLowercase method string ko small letters me krdeta ha
// 7. slice method se hmm string se koi bhi  value nikal skte ha iske parameter me hme 2 values dene hote ha kha se value
//    uthane ha or kha tak like [let res = userName.slice(0, 5)]
// 8. trim method string ke start or ends se sb space khatam krdeta ha or darmian se nhi khatam krta ye
// 9. replace method string me kisi letter ko replace krta ha [let res = userName.replace('our', 'your')]
// 10. replaceAll method string me sb letter ko replace krta ha [let res = userName.replace('our', 'your')] jitene
//     bhi [our] name ke latters ha sbko [ your ] krdega

////////////////////////////////////////////////  NOTES ENDS ///////////////////////////////////////////////////////

// let myName = 'Danish shabbir'

// let checkLength = myName.length
// console.log(checkLength);

// // Template Literals //

// let firstName = 'Danish';
// let LastName = 'Shabbir';

// console.log(`My First Name is ${firstName} and Father Name is ${LastName} understand!`);

// charAt method

// let userName = 'Pakistan'

// let res = userName.charAt(4)

// console.log(res);

// Concat Method

// let userName = 'Pakistan'
// let para = 'Our country is'
// let res = para.concat(' ' + userName)

// console.log(res);

// slice method

// let userName = 'Pakistan'
// let res = userName.slice(0, 5)

// console.log(res);

// toUpperCase method

// let userName = 'Pakistan'
// let res = userName.toUpperCase()

// console.log(res);

// toLowerCase method

// let userName = 'PAKISTAN'
// let res = userName.toLowerCase()

// console.log(res);

// trim method

// let userName = '     Pakis  tan          '
// let res = userName.trim()

// console.log(res);
// console.log(userName);

// replace method

// let userName = 'Pakistan is our coutry'
// let res = userName.replace('our', 'your')

// console.log(res);
// console.log(userName);

// replaceAll method

// let userName = 'Pakistan is our our our our coutry'
// let res = userName.replaceAll('our', 'your')

// console.log(res);
// console.log(userName);

let userInp = prompt("Enter Your Name WithOut Space");

if (userInp === " ") {
  alert("please enter your name");
}

let res = `@${userInp.toLowerCase()}${userInp.length}`;

console.log(res);

/////////////////////////////////////////////// STRINGS ENDS ///////////////////////////////////////////////////////

////////////////////////////////////////////////  WORK ENDS ///////////////////////////////////////////////////////
