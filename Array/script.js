/////////// forEach ////////////
const  number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = 0

number.forEach((item) => {
    sum += item
});

console.log(sum);

///////// map Function //////////

const str = ['1', '2', '3', '4']
const convNum = str.map(Number)

console.log('convertArr-->', convNum);

const  product = [
    {
        Brand: 'Mercedes',
        Color: 'White',
        Model: 2024,
        Quantity: 10,
        price: 4000000
    },
    {
        Brand: 'BMW',
        Color: 'black',
        Model: 2024,
        Quantity: 20,
        price: 3000000
    },
    {
        Brand: 'Bugati',
        Color: 'blue',
        Model: 2024,
        Quantity: 3,
        price: 400000000
    }
]

const newArr = product.map(item => ({
    Name: item.Brand,
    Model: item.Model,
    Price: item.price*item.Quantity
}))


console.log(newArr);

///////////// Filter method ///////////////

const  products = [
    {
        name: 'Danish',
        Age: 17
    },
    {
        name: 'Ahmed',
        Age: 15
    },
    {
        name: 'Waqas',
        Age: 27
    },
    {
        name: 'Ali',
        Age: 23
    }
]

const newPrd = products.filter((value, index, arr) => {
    return (
       value.Age >= 17
    )
})

//// remove duplicate num in array ///

const num1 = [1,2,3,4,5,6,6,5,4,32,1,5,6,7,8,9,0,,7,4,3,3,4,6,7,8,9,,9,6,5,42,,654,8769,87,4,2]

const newNum1 = num1.filter((vale, index, arr1) => {
    return (
        arr1.indexOf(vale) === index
    )
})

console.log('Remove duplicate Number -->', newNum1);

console.log(newPrd);

////////////// Reduce methid ////////////

const numbs = [1,2,3,4,5]

const newNumbs = numbs.reduce(sum1)

function sum1(acumalator, value) {
    return(
        value + acumalator
    )
}

console.log(newNumbs);