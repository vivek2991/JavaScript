// // set timeout is an asynchronous function

// console.log('Start');
// console.log('Middle');

// setTimeout(() => {
//     console.log('First timeout');
// }, 2000); // timeout is in milliseconds

// console.log('End');


// // Callback function

// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCAllback) {
//     sumCAllback(a, b);
// }

// calculator(5, 10, sum); // callback function

// // Callback function with setTimeout
// function getData(DataId, getNextData) {
//     //2s
//     setTimeout(() => {
//         console.log("Data", DataId);
//         if(getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3);
//     });
// });

// Promise

// let Promise = new Promise((resolve, reject) => {
//     console.log("I am a Prpmise") 
//     reject("I am a rejected Promise");   
// });

// function getData(DataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", DataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 2000);
//     });
// }


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//         resolve("success");
//     });
// }

// let promise = getPromise();
// promise.then(() => {
//     console.log("Promise resolved successfully");
// });


// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Async function executed");
//             resolve("Async function resolved");
//         }, 2000);
//     });
// }

// let p1 = asyncFunc();
// // asyncFunc().then((result) => this way too we can call the promise
// p1.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.error("Error:", error);
// }); 

async function hello() {
    console.log("Hello World");
}

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("API called");
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData() {
    await api();
}

// Async await function

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}
