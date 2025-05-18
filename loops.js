// For loop

// for (let i=1; i <=5; i++) {
//     console.log("Hell VK", i);
// }
// console.log("Loop ended");

// let sum = prompt("Enter number for sum:");
// let count = 0;

// for(i = 1; i<=sum; i++) {
//     count = count + i;
// }
// console.log("sum =", count);

// White loop

// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// do while

// let j = 1;

// do{
//     console.log("j=",j);
//     j++;
// }while(j <= 5);

// For of loop

// let str = "Vivek Patel";

// for(let val of str) {
//     console.log(val);
// }


// const student = {
//     fullName: "Vivek",
//     age: 25,
//     cgpa: 8.2,
//     isPass: true,
// };

// for(let key in student) {
//     console.log("key:", key, "Value:", student[key]);
// }



// Practice work print even numbers in 1 to 1oo

// for(i = 0; i<=100; i++) {
//     if(i % 2 === 0) { 
//         console.log(i);
//     }
// }

// enter number and continue untill correct numebr guess by user

// let gamenum = 25;

// let userNum = prompt("Guess the game number:");

// while(userNum != gamenum) {
//     userNum = prompt("You entered wrong number, Enter again:");
// }
// console.log("Congratulations you entered the right number");

// Strings

// let str = "Vivek Patel";

// console.log(str[0]);

// template literals tild sign ``

// let specialstring = `This is my first line`;
// console.log(specialstring);

// let obj = {
//     item : 'pen',
//     cost : 10,
// };

// let output = `The cost of ${obj.item} is ${obj.cost} rupees`;
// let output1 = `The cost of ${obj.item} is ${1 + 2 + 5} rupees`;
// console.log(output);
// console.log(output1);
// console.log("This is Vivek\nPatel"); // \n new line \t tab
// console.log(obj.item.length);

// let str = "Hello Vivek I am Here";
// let str1 = "Join me here";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim()); // remove white spaces before and after of the string
// console.log(str.slice(2,8));
// console.log(str.concat(str1));
// console.log(str + str1);
// console.log(str.replace('llo', '123')); // you can user replaceall for more times replace more than once
// console.log(str.charAt(2));

// Prompt username and then add @ before and total length at the end of the username

let fullName = prompt("Enter your fullname: ");

let username = "@" + fullName + fullName.length;
console.log(username);
