//  console.log(window);
//  console.log(window.document.body);
//  console.dir(document.body);

//  let heading = document.getElementById("heading"); 
//  console.log(heading);

// let headings = document.getElementsByClassName("myclass");
// console.dir(headings);
// console.log(headings);

// let pragraph = document.getElementsByTagName("p");
// console.log(pragraph);

//let elements = document.querySelector("p"); // query selector for first element
// let elements1 = document.querySelectorAll("p"); // query selector for all elements
// console.log(elements1);
//console.dir(elements);

// let elements2 = document.querySelector(".myclass"); // query selector for first class
// let elements3 = document.querySelectorAll(".myclass"); // query selector for all classes
// console.log(elements2);
// console.log(elements3);


// let elements4 = document.querySelector("#heading"); // query selector for first id
// let elements5 = document.querySelectorAll("#heading"); // query selector for all ids
// console.log(elements4);
// console.log(elements5);


// let elements6 = document.querySelector("div").children;
// console.log(elements6);

// let div = document.querySelector("div");
// console.dir(div);
// console.dir(div.innerHTML);
// console.dir(div.innerText);
 
//exercise add text at the end or append text on h2
// let h2 = document.querySelector("h2");
// console.log(h2.innerText);

// h2.innerText = h2.innerText + " from Vivek Patel College";

// let divs = document.querySelectorAll(".box");

// // divs[0].innerText = "New Unique Value1";
// // divs[1].innerText = "New Unique Value2";
// // divs[2].innerText = "New Unique Value3";

// let index = 1;
// for(let div of divs){
//     // two ways to add text with + and $
//     //div.innerText = "New Unique Value" + index;
//     div.innerText = `New Unique Value ${index}`;
//     index++;
// } 

// let div = document.querySelector("div");
// console.dir(div);

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.getAttribute("id"));

// console.log(para.setAttribute("class", "newclass"));

// let div = document.querySelector("div");

// div.style.backgroundColor = "red";
// div.style.fontSize = "20px";
// div.innerText = "Hello World";

// let newbtn =  document.createElement("button");
// newbtn.innerText = "Click Me";

// let div = document.querySelector("div");
// //div.appendChild(newbtn);
// //div.prepend(newbtn);
// //div.before(newbtn);
// div.after(newbtn);

// let p = document.querySelector("p");
// p.after(newbtn);

// let newheading = document.createElement("h1");
// newheading.innerHTML = "<i>Hi, I am New Heading</i>";

// document.querySelector("body").prepend(newheading);

// let rmpara = document.querySelector("p");
// rmpara.remove();

let newbtn = document.createElement("button");
newbtn.innerText = "Click Me!";

newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";

document.querySelector("body").prepend(newbtn);

//Q2

let mypara = document.querySelector("p");
mypara.getAttribute("class");
mypara.classList.add("newclass");