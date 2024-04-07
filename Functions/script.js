////////////////////////////////////////////// NOTES START ///////////////////////////////////////////////////////////

// 1. function ke parameters like local variable ki tarha hote ha ye function ke block of code tak access dete ha
//    function ke bahir access nhi kr skte
// 2. function ko krte jo paranthesis hote ha unko hmm arguments bolte ha or jo function ke name ke sath hote ha
//    unko hmm parameter bolte ha
// 3. essa function jo kisi or function ko arguments ke tor pr pass kia jata ha wo callback function hota ha
// 4. FOREACH METHOD : foreach method arrays ke lie use hota ha or iske 3 parameters hote ha (val, index, arr)
//    pehla value ka hota ha or second index ka hota ha third orignal array ka hota ha 
// 5. MAP METHOD : map method arrays ke lie use hota ha or iske 3 parameters hote ha (val, index, arr) pehla value ka hota ha or 
//    second index ka hota ha third orignal array ka hota ha or ye new array return krta ha foreach new arr return nhi krta 
// 6. HIHER ORDER FUNCTION : wo hote jo apne parameter me kisi function ko lele ya kuch return kr rhe ho unko higher
//    order func kehte ha.

////////////////////////////////////////////// NOTES ENDS ////////////////////////////////////////////////////////////

///// FUNCTION /////

// function calculateSum(x, y) /* paramerter */ {
//   s = x + y;
//   return s
// }

// let userInp = parseFloat(prompt('Enter first Value')); // Parse the user input as float
// let userInp2 = parseFloat(prompt('Enter Second Value')); // Parse the user input as float

// let result = calculateSum(userInp, userInp2);

// console.log('Your sum value is : ' + result);

// PRACTICE QUESSTION

// 1. create a function
// 2. create a array of vovel letters
// 3. user se input lena ha
// 4. check krne ha kitne vovel letters ha
// 5. user ko bta dena ha phr

// find vovels latter and send user output

// function findVovelLetters(userInp) {
//     const vovels = ['a', 'e', 'i', 'o', 'u']
//     const matchVovel  = []
//     let countVovel = 0
//     for (const i of userInp.toLowerCase()) {
//         if (vovels.includes(i)) {
//             matchVovel.push(i)
//             countVovel++
//         }
//     }
//     return [countVovel, matchVovel]
// }


// let userInp = prompt('Enter a paragraph')

// let [countVovel, matchVovel] = findVovelLetters(userInp)
// console.log('Number of vowels in the string : ', countVovel);
// console.log("Vowels found:", matchVovel);

// For each method 

// let arr = ['Apple', 'Banana', 'Orange', 'Milk', 'Pinaple']

// arr.forEach((item, idx , arr) => {
//     console.log(idx, item.toUpperCase(), arr);
// })

// PRACTICE QUESTION

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// arr.forEach((val) => {
//     let res = val * val
//     console.log(`${val} the square of this number is ${res}`);
// })

// Map method 

// let arr = ['Apple', 'Banana', 'Orange', 'Milk', 'Pinaple']

// let newArr = arr.map((item, idx , arr) => {
//     return item.toUpperCase()
// })

// console.log('old array-->', arr);
// console.log('new array-->', newArr);

// Filter method 

// let arr = [1,2,3,4,5,6,7,8,9,0,10,11,21,22,33,45,55,66,88,90,100]

// let newArr = arr.filter((item) => {
//     return item % 2 === 0;
// })

// console.log('All number array-->', arr);
// console.log('new even number array-->', newArr);

// Reduce method 

// let arr = [1,2,3,4,5,1000,6] // 6

// let newArr = arr.reduce((res, curr) => {
//     return res > curr ? res : curr; // Ternary opraters
// })

// console.log('old array-->', arr);
// console.log('new array-->', newArr);

// PRACTICE 

// let arr = [20,60,90,80,99,102,100,200,120,215,96]

// let newArr = arr.filter((item) => {
//     return item >= 90
// })

// console.log('old array-->', arr);
// console.log('new array-->', newArr);

// let userInp = prompt("Enter array of number")

// let arr = []

// for (let i = 1; i <= userInp; i++) {
//   arr[i-1] = i
// }

// console.log(arr);

// PRACTICE 

// let arr = [20,60,90,80,99,102,100,200,120,215,96]

// let newArr = arr.reduce((res , curr) => {
//     return res + curr
// })

// console.log('old array-->', arr);
// console.log('new array-->', newArr);

// PRACTICE 

let arr = [20,60,90,80,99,102,100,200,120,215,96]

let newArr = arr.reduce((res , curr) => {
    return res * curr
})

console.log('old array-->', arr);
console.log('new array-->', newArr);