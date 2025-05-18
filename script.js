// This is my comment
//console.log("Hello world!");

// arithmetic operators

let a = 5;
let b = 2;

/*console.log("a =", a, "& b =", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);*/

// Unary Operator

/*console.log("a =", a, "& b =", b);

console.log("a++ = ", a++);
console.log("a = ", a);
console.log("++a = ", ++a);


console.log("a-- = ", a--);
console.log("a = ", a);
console.log("--a = ", --a);*/

// Assignment operators

/*a += 4; // a = a + 4 || +=, -=, *=, /=
console.log("a =", a); // 9*/

// Comparison operators

/*console.log("5 == 2 ", a==b);
console.log("5 != 2 ", a!=b);

let c = 5;
let d = "5";

console.log("5 === 5 ", a===b);
console.log("5 !== 5 ", a!==b);*/

// Logical operators

let cond1 = a > b;
let cond2 = a === 6;

/*console.log("cond1 && cond2 =", cond1 && cond2);
console.log("cond1 || cond2 =", cond1 || cond2);
console.log("cond1 != cond2 =", cond1 != cond2);*/


//Conditional statement

/*let age = 25;

if(age >= 18) {
    console.log("You Can Vote");
}

let mode = "dark";
let color;

if(mode === "dark") {
    color = "black";
} 
else {
    color = "white";
}

console.log(color);


if(mode === "dark") {
    console.log("dark");
} else if (mode === "white") {
    console.log("white");
} else {
    console.log("Something else");
}


// Ternary operators
let result = age >= 18 ? "Vote" : "No Vote";
console.log(result);

age >= 18 ? console.log("Vote") : console.log("No Vote");*/

/*let name = prompt("Hello"); // store value and print 
console.log(name);*/


// Prompt

/*let num = prompt("enter a number");

if(num % 5 === 0) {
    console.log(num, "is multiple of 5");
} else{
    console.log(num, "is not multiple of 5");
}*/


// prompt work example

let score = prompt("enter your score (0-100):");
let grade;

if(score >= 90 && score <=100){
    grade = "A";
} else if(score >= 70 && score < 90) {
    grade = "B";
} else if(score >= 60 && score < 70) {
    grade = "C";
} else if(score >= 50 && score < 60) {
    grade = "D";
} else if(score >= 0 && screen < 50) {
    grade = "Failed";
}

console.log("Your grade is:", grade);