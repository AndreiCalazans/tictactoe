//AI must react to the user click,
// to do list
// make squares
//on user click add x or O
//when x or o align alert the window
// game must start  by asking if x or o
// afterwards it must iterate through the player x and o


/// issue of the momment is if you continue to play it doesnt work@@@!
var xChosenBox = [] ;
var oChosenBox = [];
var winningHands = [[1,4,2],[2,5,8],[3,6,9],[1,2,3],[4,5,6],[2,8,9],[1,5,9],[2,5,3]];
var winningCounter ;

function checkIfWon(chosenBox){
  console.log(chosenBox);
  var winningCounter = 0 ;
  for(var i = 0 ; i < winningHands.length ; i++){

 chosenBox.forEach(function(e){

   if(winningHands[i].indexOf(Number(e)) != -1 ){
     winningCounter ++;

     if (winningCounter == 3){

       document.querySelector(".gameOptions").classList.add("display");
       document.getElementById("display").innerHTML = "<p>You Won</p><p>Play again</p><button class='X' onClick=gameStart('X')>X</button><button class='O' onClick=gameStart('O')>O</button>"

     }
   }

 })

 winningCounter = 0;


  }

}
function intro(){
  document.querySelector(".gameOptions").classList.add("display");

}
function gameStart(a){
  var winningCounter = 0;
  xChosenBox = [] ;
  oChosenBox = [];
var box = document.querySelectorAll(".box");
box.forEach(function(e){
  e.innerHTML ="";
})
  document.querySelector(".gameOptions").classList.remove("display");
   if (a == "X"){
     //player 1 is X
     box.forEach(function(e){
       e.addEventListener("mousedown", function(){
         xChosenBox.push(e.id);
         e.innerHTML = "X";

         checkIfWon(xChosenBox);
       })

     })
   }else if (a =="O"){
     //player1 is O
     box.forEach(function(e){
       e.addEventListener("mousedown", function(){
        oChosenBox.push(e.id);
         e.innerHTML = "O";
         checkIfWon(oChosenBox);
       })
     })
   }
}

// algorithm to find out a winnner


function AI(){

}
