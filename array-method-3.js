// map

const products = [
    { name: 'laptop', price: 30000, color: 'silver', brand: 'samsung' },
    { name: 'tablet pc', price: 20000, color: 'gray', brand: 'tosiba' },
    { name: 'smart watch', price: 12000, color: 'light blue', brand: 'itel' },
    { name: 'smart Mobile', price: 16000, color: 'black', brand: 'vivo' },
    { name: 'drone', price: 26000, color: 'light gray', brand: 'xiomi' },
]

const brand = products.map(product => product.brand);
const price = products.map(product => product.price);
// console.log(brand)
// console.log(price)


// forEach
// the main difference between forEach and map is , forEach doesnt return anything. it shows result directly and map return the result and it needs a variable but forEach doesnt need any variable.

products.forEach(product => {
    // console.log(product.color)
});

// filter
// filter returns the variables and its a conditional. it will show the result in the array which products of array fullfilled the conditions.

const cheap = products.filter(product => product.price <= 20000);
// console.log(cheap);


const includingS = products.filter(product => product.name.includes('s'));//string under includes is case sensitive
// console.log(includingS);

// find

const special = products.find(product => product.name.includes('s'));
console.log(special);