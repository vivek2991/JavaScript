let btn1 = document.querySelector("#btn");

// btn1.onclick = () => {
//     console.log("Button Clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("You are inside Div");
// }


// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// }

// btn1.addEventListener("click", (evt) => {
//     console.log("Button 1 Clicked - handler 1");
// });

// btn1.addEventListener("click", (evt) => {
//     console.log("Button 2 Clicked - Handler 2");
// });

// // we can do this way too
// const handler3 = () => {
//     console.log("Button 3 Clicked - Handler 3");
// }
// btn1.addEventListener("click", handler3);


// btn1.addEventListener("click", (evt) => {
//     console.log("Button 4 Clicked - Handler 4");
// });

// btn1.removeEventListener("click", (evt) => {
//     console.log("Button 2 Clicked - Handler 2");
// });

// btn1.removeEventListener("click", handler3);

let modebutn = document.querySelector("#mode");

let currentMode = "light";

modebutn.addEventListener("click", (evt) => {
    if (currentMode === "light") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        currentMode = "dark";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        currentMode = "light";
    }
});

