//AI must react to the user click,
// to do list
// make squares
//on user click add x or O
//when x or o align alert the window
// game must start  by asking if x or o
// afterwards it must iterate through the player x and o


/// issue of the momment is if you continue to play it doesnt work@@@!
// after the first round it seem to be push more than 1 answer.
var xChosenBox = [] ;
var oChosenBox = [];
var winningHands = [[1,4,7],[2,5,8],[3,6,9],[1,2,3],[4,5,6],[7,8,9],[1,5,9],[7,5,3]];
var winningCounter ;
var box = document.querySelectorAll(".box");

function checkIfWon(chosenBox){
  winningCounter = 0 ;
  for(var i = 0 ; i < winningHands.length ; i++){
    // iterate through the selected optiions and see if we can get a match from the winning hands
 chosenBox.forEach(function(e){
   if(winningHands[i].indexOf(Number(e)) != -1 ){
     winningCounter ++;
     if (winningCounter == 3){
       document.querySelector(".gameOptions").classList.add("display");
       document.getElementById("display").innerHTML = "<p>You Won</p><p>Play again</p><button class='X' onClick=gameStart('X')>X</button><button class='O' onClick=gameStart('O')>O</button>"

     } // in case of a winner add this to the html
   }
 })
     winningCounter = 0;  // reset it
  } // end of the for loop
}

function intro(){
  document.querySelector(".gameOptions").classList.add("display");
}

function gameStart(a){
 // these commands are resetting the board.
  winningCounter = 0;
  xChosenBox = [] ;
  oChosenBox = [];

box.forEach(function(e){

  e.innerHTML ="";
})
//resets finish here ^
  document.querySelector(".gameOptions").classList.remove("display");

   if (a == "X"){
     //player 1 is X

     box.forEach(function(e){

       e.addEventListener("click", function(){
         xChosenBox.push(e.id);
         console.log(a);
         e.innerHTML = a;
         checkIfWon(xChosenBox);
       })
     })
   }else if (a =="O"){
     //player1 is O
     box.forEach(function(e){
       e.addEventListener("click", function(){
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
