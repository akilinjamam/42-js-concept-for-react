// distructuring array

const number = [22, 32];

// const x = number[0];
// const y = number[1];

// console.log(x);

// the shortcut way of distructuring

const [x, y] = [12, 56];
// console.log(x, y);

// another shortcut way.

const [m, z] = number;
console.log(m, z);

// distructuring in the function

function boxify(num1, num2) {
    nums = [num1, num2];
    return nums;
};

console.log(boxify(11, 22))

const [first, second] = boxify(13, 36);

console.log(first, second)


const student = {
    name: 'sakif khan',
    age: 32,
    movies: ['king khan', 'dhakar pola']
};

const [firstOne, secondOne] = student.movies;
console.log(firstOne, secondOne);


// object distructuring

const person = { name: 'alu', age: 32 };

const { name, age } = person;
console.log(name, age);

const employee = {
    work: 'vs code',
    position: 'developer',
    lenguages: ['html', 'css', 'javascript', 'paython'],
    device: 'indel',
    specification: {
        education: 'mba and bsc',
        uiversity: 'university of london',
        height: '5.7 inch',
        watch: {
            color: 'black',
            brand: 'rolex',
            price: 450000,
        }
    }
}


const { education } = employee.specification;
const { color } = employee.specification.watch;
console.log(education, color);
