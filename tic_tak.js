let boxes = document.querySelectorAll(".box");
let reset= document.querySelector("#reset");

let newGameButton = document.querySelector("#new");
let msgContainer= document.querySelector(".msg-Container"); 
let msg= document.querySelector("#msg");
let turn0 = true; // playerX, player0
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =() => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled= true;

        checkWinner ();
    });
});
const disableboxex = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner =(winner) =>{
    msg.innerText=`Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxex();
}   

const checkWinner = () => {
    for(let pattern of winPatterns){
        let posValue= boxes[pattern[0]].innerText;
        let posValue2= boxes[pattern[1]].innerText;
        let posValue3= boxes[pattern[2]].innerText;
        if(posValue != "" && posValue2 != "" && posValue3 != ""){
            if(posValue === posValue2 && posValue2 === posValue3){
                console.log("Player " + posValue + " wins!");
                alert("Player " + posValue + " wins!");
                showWinner(posValue);
            }
               
        }
    }
};
newGameButton.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
