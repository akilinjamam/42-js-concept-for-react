// converted to json stringified

const student = {
    name: 'sakif khan',
    age: 32,
    movies: ['king khan', 'dhakar pola']
};

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

// converted to object from stringified

const studentObj = JSON.parse(studentJSON);

console.log(studentObj);

// fetch

/* 
const url = '';

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
 */

// keys and object

const keys = Object.keys(student);
console.log(keys);

const value = Object.values(student);
console.log(value);

// forEach 
// from now , forEach have to use in the case of array; forEach doesnt return anything.


const number = [11, 32, 26, 54, 48, 78, 34];

number.forEach(numbers => {
    console.log(numbers);
})

number.map(num => num * 2)
console.log(number);

// array like object 

// for of an array like object
// loop on an object using for in;


const products = [
    { name: 'laptop', price: 30000, color: 'silver', brand: 'samsung' },
    { name: 'tablet pc', price: 20000, color: 'gray', brand: 'tosiba' },
    { name: 'smart watch', price: 12000, color: 'light blue', brand: 'itel' },
    { name: 'Phone', price: 16000, color: 'black', brand: 'vivo' },
    { name: 'drone', price: 26000, color: 'light gray', brand: 'xiomi' },
]

// copy products array and add then new product.
const newObject = { name: 'rowter', price: 1200, color: 'white', brand: 'tenda' };

const newProducts = [...products, newObject];
console.log(newProducts);

// create a new array without one specific item; that means taking a new array and copy the elements without specific items;

const remaining = products.filter(p => p.name !== 'Phone');
console.log(remaining);