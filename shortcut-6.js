// negetives : '' , 0, false, null, undefined

let myVar = 120;

if (myVar) {
    const total = myVar * 100;
    console.log(total);
}

else {
    const total2 = myVar * 0;
    console.log(total2)
}


const myMoney = '';
// you check negetivity or falsy anything
if (!myMoney) {
    const total3 = myMoney * 0;
    console.log(total3)
}

else {
    const total4 = myMoney * 2;
    console.log(total4);
}


const money = 300;
let food;

if (money > 100) {
    food = 'biriany';
} else {
    food = 'cha biscuit'
}

console.log(food);


// ternery
// ternery is a shortcut form of if else condition
const food1 = money > 100 ? 'biriany' : 'cha biscuit';
const food2 = (money > 100 && myVar > 100) ? 'biriany' : 'chaa biscuit';
console.log(food1);
console.log(food2);

// converting number to string

const number = 43;
const covertToStr = number + '';

console.log(number);
// conveted to string
console.log(covertToStr);

// converting string to number;

const number2 = '450';
const convertToNum = +number2;
console.log(number2);
// convetting string to numbers
console.log(convertToNum);


// using ternery in the case of function.

const isActive = false;

const displayUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

// isActive ? displayUser() : hideUser();

// another shortcut
// isActive && displayUser()

isActive || displayUser();

// toggle boolean
isActive = !isActive;




