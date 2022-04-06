const numbers = [12, 22, 56, 18, 96, 46];

const student = {
    name: 'sakif khan',
    age: 32,
    movies: ['king khan', 'dhakar pola']
};
// templete string
const about = ` my name is ${student.name}. and my age is ${student.age}. i got the numbers ${numbers[4]} i will watch movie today '${student.movies[1]}'`
console.log(about)
// arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2
    return sum;
}


// spread operator
const newNumbers = [...numbers]

numbers.push(99)


// create an element from an old element and add new element.

const currentNumbers = [...numbers, 77, 88, 99];
console.log(currentNumbers);
console.log(newNumbers);
console.log(numbers);