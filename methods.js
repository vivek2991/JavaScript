/*function myfunction() {
    console.log("Hello, World!");
}

myfunction(); // without arguments 

function myfunction1(msg) {
    console.log(msg);
}

myfunction1("Hello, VK Buddy I am calling you World!"); // with arguments


function sum(a, b) {
    console.log(a + b); // without return sum of two numbers
}

sum(5, 10); // 15

function sumreturn(a, b) {
    return a + b; // with return sum of two numbers
}

let value = sumreturn(50, 10); // 60
console.log(value); // 60

// multiplication function
function multiply(a, b) {
    return a * b; // with return multiplication of two numbers
}
let value1 = multiply(5, 10); // 50
console.log(value1); // 50

// arrow function

const myarrowsum = (a, b) => { 
    console.log(a + b); // without return sum of two numbers
};

myarrowsum(5, 10); // 15 arrrow function

//single line arrow function
const printhello = () => console.log("Hello, World!"); 


// find vowels in string

function countVowels(str) {
    let count = 0; // initialize count
    for (const char of str) {
        if (char === "a" || char === "i" || char === "e" || char === "o" || char === "u") { // check if char is vowel
            count++; // increment count
        }
    }
    console.log(count); // print count
}


function findvowels(str) {
    const vowels = str.match(/[aeiou]/gi); // match all vowels in string
    return vowels; // return all vowels
}

//console.log(findvowels("Hello, World!")); // [ 'e', 'o', 'o' ] find all vowels in string

//first way to use forEach
// forEach method
let num = [2, 3, 4, 5, 6, 74, 8, 92, 15]; // array of numbers

num.forEach((num) => { 
    //console.log(num * num); // print each number
});

// second way
//  forEach method
let calsquare = (num) => { 
    //console.log(num * num); // print each number
};

//num.forEach(calsquare); // call calsquare function for each number in array

// map method

num.map((val) => {
    console.log(val); // print each number
}); 

let newarry = num.map((val) => {
    return val * val; // return square of each number
});

console.log(newarry); // [ 4, 9, 16, 25, 36, 5476, 64, 8464, 225 ] square of each number in array


// array filter method
// create an new array of numbers
let arr = [1, 2, 3, 4, 5]; // array of numbers

let evenarr = arr.filter((val) => {
    return val % 2 === 0; // return even numbers
});

console.log(evenarr); // [ 2, 4 ] even numbers in array

// reduce array

let arr1 = [1, 2, 3, 4, 5]; // array of numbers

const output = arr1.reduce((prev, curr) => {
    return prev + curr; // return sum of all numbers
}); // 0 is initial value of accumulator

console.log(output); // print accumulator */

/*let marks = [90, 82, 98, 74, 65, 92, 98]; // array of numbers

let toppersarr = marks.filter((val) => {
    return val > 90; // return numbers greater than 80
});

console.log(toppersarr); // [ 90, 98, 92, 98 ] numbers greater than 80 in array
*/

let n = prompt("Enter your number: "); // prompt user to enter name

let arr = [];

for (let i = 1; i <= n; i++) { // loop from 0 to n
    arr[i-1] = i; // push number to array
}
console.log(arr); // print array

let sum = arr.reduce((prev, curr) => {    
    return prev + curr; // return sum of all numbers
}); // 0 is initial value of accumulator

console.log(sum); // print accumulator

// factorial of number

let fac =  arr.reduce((prev, curr) => {     
    return prev * curr; // return product of all numbers
}); // 0 is initial value of accumulator   

console.log(fac); // print accumulator