let boxes = document.querySelectorAll(".box");
let msgbox = document.querySelector(".msg-box");
let msg = document.querySelector("#msg");
let newGameBtn = document.getElementById("new");
let resetBtn = document.getElementById("reset");
let clickSound  = document.getElementById("audio");


let turnO = true;

const winPatterns = [["0", "1", "2"],
["3", "4", "5"],
["6", "7", "8"],
["0", "3", "6"],
["1", "4", "7"],
["2", "5", "8"],
["0", "4", "8"],
["2", "4", "6"]
];


boxes.forEach((box) => {
        box.addEventListener("click", () => {

                if (turnO) {
                        box.innerText = "O";
                        turnO = false;

                }
                else {
                        box.innerText = "X";
                        turnO = true;
                }
                box.disabled = true;
                checkWinner();
        });
});


const resetGame = () => {
        boxes.forEach((box) => {
                box.innerText = "";
                turnO = true;
                enableBoxes();
                msgbox.classList.add("hide");
        });
}
const disableBoxes = () => {
        boxes.forEach((box) => (box.disabled = true));
}

const enableBoxes = () => {
        for (let box of boxes) {
                box.disabled = false;
        }
}



const showWinner = (winner) => {
        msg.innerHTML = `Congratulations,Winner is ${winner}`;
        msgbox.classList.remove("hide");
        disableBoxes();
}


const checkWinner = () => {
        for (let pattern of winPatterns) {
                let pos1VAl = boxes[pattern[0]].innerText;
                let pos2VAl = boxes[pattern[1]].innerText;
                let pos3VAl = boxes[pattern[2]].innerText;

                if (pos1VAl != "" && pos2VAl != "" && pos3VAl != "") {

                        if (pos1VAl === pos2VAl && pos2VAl === pos3VAl) {
                                console.log("Winner", pos1VAl);
                                showWinner(pos1VAl);
                        }
                }

        }
        const allBoxesFilled = [...boxes].every((box) => box.innerText !== "");
        if (allBoxesFilled) {
                msg.innerHTML = "It's a Draw!";
                msgbox.classList.remove("hide");
                disableBoxes();
        }
};
newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)
boxes.forEach(box => {
        box.addEventListener("click", () => {

                clickSound.play( );
        });
});