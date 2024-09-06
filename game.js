let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGametn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");


let turnO = true // player X, player O
 
const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resentGame = () =>{
    turnO =true;
    enableboxs();
    msgContainer.classList.add("hide");

};

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        // console.log("box was clicked");
        if(turnO){
            box.innerText = "O"; 
             box.style.color ="green";
            turnO = false;
          }else{
            box.innerText ="X";
            box.style.color ="red";

            turnO = true;
        }
        box.disabled = true;

        chekwinner();
    });
});

const disableboxs = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxs = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}


const showWinner = (winner) =>{
     msg.innerText = `Congratulations, Winner is  ${winner}`;
     msgContainer.classList.remove("hide");
     disableboxs(); 
}
const chekwinner = () =>{
    for(let pattern of winpatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
            );
            let pos1Val =boxes[pattern[0]].innerText
            let pos2Val =boxes[pattern[1]].innerText
            let pos3Val =boxes[pattern[2]].innerText

         if(pos1Val != "" && pos2Val !="" && pos3Val !==""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("winner",pos1Val);
                showWinner(pos1Val);

            }
         }
    }
};

newGametn.addEventListener("click",resentGame);
reset.addEventListener("click",resentGame);
 