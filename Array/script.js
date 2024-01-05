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