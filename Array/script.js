// /////////// forEach ////////////
// const  number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let sum = 0

// number.forEach((item) => {
//     sum += item
// });

// console.log(sum);

// ///////// map Function //////////

// const str = ['1', '2', '3', '4']
// const convNum = str.map(Number)

// console.log('convertArr-->', convNum);

// const  product = [
//     {
//         Brand: 'Mercedes',
//         Color: 'White',
//         Model: 2024,
//         Quantity: 10,
//         price: 4000000
//     },
//     {
//         Brand: 'BMW',
//         Color: 'black',
//         Model: 2024,
//         Quantity: 20,
//         price: 3000000
//     },
//     {
//         Brand: 'Bugati',
//         Color: 'blue',
//         Model: 2024,
//         Quantity: 3,
//         price: 400000000
//     }
// ]

// const newArr = product.map(item => ({
//     Name: item.Brand,
//     Model: item.Model,
//     Price: item.price*item.Quantity
// }))

// console.log(newArr);

// ///////////// Filter method ///////////////

// const  products = [
//     {
//         name: 'Danish',
//         Age: 17
//     },
//     {
//         name: 'Ahmed',
//         Age: 15
//     },
//     {
//         name: 'Waqas',
//         Age: 27
//     },
//     {
//         name: 'Ali',
//         Age: 23
//     }
// ]

// const newPrd = products.filter((value, index, arr) => {
//     return (
//        value.Age >= 17
//     )
// })

// //// remove duplicate num in array ///

// const num1 = [1,2,3,4,5,6,6,5,4,32,1,5,6,7,8,9,0,,7,4,3,3,4,6,7,8,9,,9,6,5,42,,654,8769,87,4,2]

// const newNum1 = num1.filter((vale, index, arr1) => {
//     return (
//         arr1.indexOf(vale) === index
//     )
// })

// console.log('Remove duplicate Number -->', newNum1);

// console.log(newPrd);

// ////////////// Reduce methid ////////////

// const numbs = [1,2,3,4,5]

// const newNumbs = numbs.reduce(sum1)

// function sum1(acumalator, value) {
//     return(
//         value + acumalator
//     )
// }

// console.log(newNumbs);

// ////////// slice method /////////

// const digit = [1,2,3,4,5,6,7,8]

// const newDigit = digit.slice(0,8)

// console.log(newDigit);

// /////////// splice method ////////

// /////////// Only Delete ////////////

// const del = [1,2,3,4,5,6,7,8]

// del.splice(3,del.length)

// console.log('del--->', del);

// /////////// Only Add ////////////

// const add = [1,2,3,4,5,6,7,8,9,10]

// add.splice(5,3)

// console.log(add);

// /////////// Add and delete both ////////////

// const addDel = [1,2,3,4,5,6,7,8,9,10]

// addDel.splice(2,2, 'Danish' , 'Ahmed')

// console.log(addDel);

// ////////// Sort method ////////////////

// const numSort = [2,1,7,5,4,6,8,9,3]
// const numSort1 = [2,1,17,5,14,6,8,9,3]
// const strSort = ['a','b','v','g','e','a','c','d','e','x','c','u','i']

// console.log('numSort-->', numSort);
// console.log('numSort1-->' ,numSort1);
// console.log('strSort-->' ,strSort);

// numSort.sort()
// strSort.sort()
// numSort1.sort((a,b) => b-a)

// console.log('numSort-->', numSort);
// console.log('numSort1-->' , numSort1);
// console.log('strSort-->' ,strSort);

// ////////// Concat method //////////////

// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]

// const arr3 = arr1.concat(arr2)
// const arr4 = arr2.concat('DANISH', 'SHABBIR')

// console.log(arr3);
// console.log(arr4);

// ////////// Push method ////////////////

// const pshMth = [1,2,3,4,5,6]
// console.log('pshMth-->', pshMth);
// pshMth.push(7,8,9,10)
// console.log(pshMth);

// ////////// Pop method ///////////////

// const popMth = [1,2,3,4,5,6]
// console.log('popMth-->', popMth);
// popMth.pop()
// console.log(popMth);

// ///////// Shift method ///////////

// const shiftMth = [1,2,3,4,5,6]
// console.log('shiftMth-->', shiftMth);
// shiftMth.shift()
// console.log(shiftMth);

// ////////// Unshift method //////////

// const unShiftMth = [1,2,3,4,5,6]
// console.log('unShiftMth-->', unShiftMth);
// unShiftMth.unshift(9,10)
// console.log(unShiftMth);

// //////// indexOf / LastindexOf /////////

// const indexOftMth = [1,2,3,4,5,6]
// console.log('indexOftMth-->', indexOftMth);
//  indexOftMth.indexOf(1)
// console.log(indexOftMth);

///////////////////////////////////////////// ARRAYS NEW PRACTICE /////////////////////////////////////////////////////

/////////////////////////////////////////////////////// NOTES ////////////////////////////////////////////////////////

// 1. toString method
// 2. Push method
// 3. Pop method 
// 4. concat method
// 5. shift method
// 6. unShift method



// 1. tostring method array ko string me convert krta ha
// 2. Push method array ke and me koi bhi value string boolean ye add krta ha
// 3. Pop method array ke and se value remove krta ha
// 4. concat method multiple array ko a array me dal kr return krta ha 
// 5. shift method array ke start se index number 0 se value ko remove krta ha delete krta ha 
// 6. unShift method array ke start me value add krta ha 



//// About Arrays

// 1. Array ki type object hoti ha ye behave bhi object ki tarha krta ha
// 2. Arrays are mutalbe isko hm direct change krskte ha string immutable hoti ha
// 3. Array ke lie for off loop use hota ha agar index number bhi chaihe ha kisi condition me to for loop use krte ha phr


/////////////////////////////////////////////////////// NOTES ////////////////////////////////////////////////////////

// for loop apply in array

// const marks = [12, 20, 54, 99, 63, 85];
// const heros = ['shaktiman', 'Thor', 'SpiderMan', 'Hulk']

// for(let i = 0; i < heros.length; i++) {
//     // i ke andar sb index number a rhe ha isko hmm heros ke andar add krenge to ye full array ko dedega
//     console.log(heros[i]);
// }

// for (const i of heros) {
//     console.log('heros-->', i.toUpperCase());
// }

// count sum of array

// const stdMarks = [59, 70, 54, 99, 63, 85];
// let result = 0
// let avg;

// for (let i = 0; i < stdMarks.length; i++) {
//     result += stdMarks[i]
//     console.log(stdMarks[i]);
// }

// console.log("The sum of the array is:" , result);

//  avg = result / stdMarks.length

// console.log("The avrage of the array is:" , avg);

// count off percentage of item

// OFFER NIKALNE KA TARIKA

// 1. find orignal price
// 2. discount nikalna ha phr ( orignal price ko devide krdo off percentage like 10%,30%, se )
// 3. discounted price nikalne ha  ( orignal price ko minus - krdo off percentage se)
// 4. percentage off nikalne ke lie offer ko divide krdo orignal price ke sath phr orignal price ko multiply krdo 100 ke sath

// const productPrice = [599, 799, 499, 99, 699, 999, 1000];

// for(let i = 0; i < productPrice.length; i++) {
//     const originalPrice = productPrice[i]
//     const findOffer = originalPrice / 10
//     const discountedPrice = originalPrice - findOffer
//     const percentageOff = findOffer / originalPrice * 100
//     console.log(`Original Price: $${originalPrice}, Discounted Price: $${discountedPrice}, Percentage Off: ${percentageOff}%`);
// }

// 1. toString method

// let arr = ["Apple", "Banana", "Pinaple", "Mango", "Orange"];
// let convertInString = arr.toString();

// console.log(arr);
// console.log(convertInString);

// 2. Push method

// let arr = ["Apple", "Banana", "Pinaple", "Mango", "Orange"];

// console.log(arr);

// let addItem = arr.push('Chips', 'Sprite');

// console.log(arr);

// 3. Pop method 

// let arr = ["Apple", "Banana", "Pinaple", "Mango", "Orange"];

// console.log(arr);

// let addItem = arr.pop();

// console.log(arr);

// 4. concat method

// let arr = ["Apple", "Banana", "Pinaple", "Mango", "Orange"];
// let arr2 = ["Pinaple", "Mango", "Orange"];

// let concatArr = arr.concat(arr2)
// console.log(concatArr);


///////////////////////////////////////////// ARRAYS NEW PRACTICE /////////////////////////////////////////////////////
