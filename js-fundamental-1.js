// 6 fundametals most important and must have to know

/* 
1.have to know let and const
2.have to conditions if else if else
3.loop
4.array index.push.pop.includes
5.arrow function
6.objects

*/

const sakifKhan = {
    name: 'sakif khan',
    study: 'bangla college',
    age: 23,
    marritualStatus: 'single'
};

const theAge = 'age'

const hisAge = sakifKhan.age; //direct access in objcets
const hisAge2 = sakifKhan['age']; //access via third bracet under string
const hisAge3 = sakifKhan[theAge] //access in object via third bracet under a variable
console.log(hisAge3);


const abulHasan = [
    { product: 'mobile', price: 22000, name: 'samsung', color: 'blue' },
    { product: 'mobile', price: 32000, name: 'nokia', color: 'black' },
    { product: 'mobile', price: 23000, name: 'vivo', color: 'gray' },
];


const theProduct = abulHasan[1].price;
console.log(theProduct);


const numbers = ['sakila', 'sabila', 'jorina', 'shahila', 'rabila', 'kabila', 'rokeya', 'habula'];

const theNumber = numbers.indexOf('rokeya');
const theNumber2 = numbers.length;
console.log(theNumber, theNumber2);

const addingNew = numbers.push('jorina');
console.log(numbers);

const minusNumber = numbers.pop();
console.log(numbers, minusNumber);