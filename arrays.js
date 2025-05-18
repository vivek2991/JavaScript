//let marks = [98, 87, 57, 48, 82];
//console.log(marks);

//let heros = ["Tony", "Hulk", "Thor", "Spiderman", "Captain America"];
// console.log(heros);

// // for loop
// for(let i = 0; i < heros.length; i++) {
//     console.log(heros[i]);
// }

// for of loop
// for(let hero of heros) {
//     console.log(hero);
// }


// practice average of all students maeks

// let marks = [98, 87, 57, 48, 82];
// let sum = 0;

// for(mark of marks) {
//     sum = sum + mark;
// }
// console.log(sum/marks.length)

// practice 10% of on all prices of array and stored again


// let prices = [998, 300, 457, 348, 482];
// console.log(prices);

// for(let i=0; i < prices.length; i++) {
//     let offer = prices[i]/10;
//     prices[i] = prices[i] - offer;
// }

// console.log(prices);

// array push and other functions

let fooditems = ['apple', 'orange', 'mango', 'pineple', 'banana'];
// console.log(fooditems);
// fooditems.push('banana'); // add banana item at the end of an array
// console.log(fooditems);

// console.log(fooditems);
// fooditems.pop(); // delete last element in array
// console.log(fooditems);
// console.log(fooditems.toString()); // convert array into string

let vegetables = ['potato', 'tomato', 'bringle'];

// console.log(fooditems);
// console.log(vegetables);
// console.log(fooditems.concat(vegetables)); // concat add two arrays into one do not change in original array

// fooditems.unshift('pineple'); // add pineple at first position in arrays
// console.log(fooditems); 

// fooditems.shift(); // remove pineple at first position in arrays
// console.log(fooditems); 

// console.log(fooditems);
// console.log(fooditems.slice(1,3));

// // add delete or replace in array with splice
// let val = [1, 2, 3, 4, 5, 6, 7];
// let vals = val.splice(1, 2, 101, 102); // add some numbers inbetween and replace with speficif syntax
// console.log(val);


// practice

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log(companies);

let remfirst = companies.shift(); // first company remove 
console.log(companies); 

// remove uber and add ola

companies.splice(2, 1, "Ola");
console.log(companies); 

// add amazon at the end

companies.push("Amazon");
console.log(companies);
