let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // PlayerX, PlayerO


const winPatterns = [ // 2D array
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

// const checkWinner = () => {
//     let winner = null;
//     winPatterns.forEach((pattern) => {
//         const [a, b, c] = pattern;
//         if (boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText && boxes[a].innerText !== "") {
//             winner = boxes[a].innerText;
//         }
//     });

//     if (winner) {
//         alert(`Player ${winner} wins!`);
//         resetGame();
//     } else if ([...boxes].every(box => box.innerText !== "")) {
//         alert("It's a draw!");
//         resetGame();
//     }
// }

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disablBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = "Congratulations, Winner is " + winner;
    msgContainer.classList.remove("hide");
    disablBoxes();
}

const checkWinner = () => {
    for (Pattern of winPatterns) {
        let Pos1Val = boxes[Pattern[0]].innerText;
        let Pos2Val = boxes[Pattern[1]].innerText;
        let Pos3Val = boxes[Pattern[2]].innerText;

        if (Pos1Val != "" && Pos2Val != "" && Pos3Val != "") {
            if (Pos1Val === Pos2Val && Pos2Val === Pos3Val) {
                console.log("Winner");
                showWinner(Pos1Val);
            }
        }

    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
