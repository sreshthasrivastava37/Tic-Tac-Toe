let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('.reset')
let newGameBtn=document.querySelector("#newButton");
let msgContainer= document.querySelector(".msg-container")
let msg =  document.querySelector(".message");
//player x,player o
let turnO=true
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const  resetGame = () => {
  turnO  = true;
  enableBoxes ();
  msgContainer.classList.add("hide");
}
boxes.forEach(box=>{
   box.addEventListener('click',()=>{
    
    if(turnO){
        box.innerText= 'O';
        turnO=false;
    }else{
        box.innerText='X'
        turnO=true;
}
   box.disabled= true;
   checkWin();
})
   })
   const disableBoxes  = () =>{
    for( let box  of boxes) {
      box.disabled= true;
    }
  }
  const enableBoxes  = () =>{
    for( let box  of boxes) {
      box.disabled= false;
      box.innerText= ' ';
    }
  }
   const showWinner= (winner) => {
    msg.innerText= `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove( "hide" )
disableBoxes();
   }
   
  const checkWin=()=>{
    for (pattern  of winPattern) {
        let position1= boxes[pattern[0]].innerText
        let position2=   boxes[pattern[1]].innerText
        let position3=  boxes[pattern[2]].innerText 
        if (position1!=='' && position2!=='' && position3 !=='' ){
            if (position1===position2 && position2===position3){
              
              showWinner( position1);
            }
        }
}
  };
newGameBtn.addEventListener("click",resetGame)
 resetbtn.addEventListener("click",resetGame)
  