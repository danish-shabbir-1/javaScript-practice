////////////////////////////////////////////// NOTES START ///////////////////////////////////////////////////////////

// 1. function ke parameters like local variable ki tarha hote ha ye function ke block of code tak access dete ha
//    function ke bahir access nhi kr skte
// 2. function ko krte jo paranthesis hote ha unko hmm arguments bolte ha or jo function ke name ke sath hote ha
//    unko hmm parameter bolte ha
// 3.

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

function findVovelLetters(userInp) {
    const vovels = ['a', 'e', 'i', 'o', 'u']
    const matchVovel  = []
    let countVovel = 0
    for (const i of userInp.toLowerCase()) {
        if (vovels.includes(i)) {
            matchVovel.push(i)
            countVovel++
        }
    }
    return [countVovel, matchVovel]
}


let userInp = prompt('Enter a paragraph')

let [countVovel, matchVovel] = findVovelLetters(userInp)
console.log('Number of vowels in the string : ', countVovel);
console.log("Vowels found:", matchVovel);

