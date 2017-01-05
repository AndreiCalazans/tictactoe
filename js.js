//AI must react to the user click,
// to do list
// make squares
//on user click add x or O
//when x or o align alert the window
// game must start  by asking if x or o
// afterwards it must iterate through the player x and o
// dont let it re click on the same square and still be able to select .
//if all squares are filled and no winner then declare the loser

// the variables
var xChosenBox = [] ;
var oChosenBox = [] ;
var winningHands = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var winningCounter ;
var boardState = [0,0,0,0,0,0,0,0,0];
var box = document.getElementsByClassName("box");
var sign ;
var user = 1;
var computer = -1;
var game = true;



// functions
function gameStart(symbol){
  sign = symbol;
  signComputer = sign == "X" ? "O" : "X";
  reset();
  game= true;
}

function claim(click){
  if(!game){
    return;
  }
  for(var x = 0 ; x <= 8 ; x++){
    if(box[x] === click && boardState[x] == 0){
      set(x,user);
      callAI();
    }
  }
}


function set(index, player){
  var symbol= player == user ? sign : signComputer;
  box[index].innerHTML = symbol;
  boardState[index] = player;
}


function callAI(){
   aiTurn();
}

function checkWin(player){
  for(var x = 0 ; x < 8 ; x++){
    var win = true;

    for(var y = 0 ; y < 3 ; y++ ){
      if(boardState[winningHands[x][y]] != player){
        win = false;
        break;
      }
    }
    if(win){
      game = false;
      return true;
    }
  }
  return false;
}

function reset(){
  for(var x = 0 ; x <= 8 ; x++){
    boardState[x] = 0;
    box[x].innerHTML = "";
  }
}


function aiTurn(level){
  //easy
  // medium
  // hard (minimax)


}
// the commands








/*
// function to check if won it look in the array of the selected boxes and looks for matches in t
function checkIfWon(chosenBox,winner){
  winningCounter = 0 ;

  for(var i = 0 ; i < winningHands.length ; i++){
    // iterate through the selected optiions and see if we can get a match from the winning hands
 chosenBox.forEach(function(e){

   if(boardSquares.length === 9){
     document.querySelector(".gameOptions").classList.add("display");
     document.getElementById("display").innerHTML = "<div id='newWindow'><p>It is a Tie !!!</p><p>Play again</p><div><button class='X' onClick=gameStart('X')>X</button><button class='O' onClick=gameStart('O')>O</button></div></div>"
   }
   if(winningHands[i].indexOf(Number(e)) != -1 ){
     winningCounter ++;
     if (winningCounter == 3){
       document.querySelector(".gameOptions").classList.add("display");
       document.getElementById("display").innerHTML = "<div id='newWindow'><p>"+winner+" Won</p><p>Play again</p><div><button class='X' onClick=gameStart('X')>X</button><button class='O' onClick=gameStart('O')>O</button></div></div>"
        return "winner";
     } // in case of a winner add this to the html
   }

 })
     winningCounter = 0;  // reset it
  } // end of the for loop
}

function intro(){
  document.querySelector(".gameOptions").classList.toggle("display");
}


function gameStart(a){
 // these commands are resetting the board.
  winningCounter = 0;
  xChosenBox = [] ;
  oChosenBox = [];
  sign = a;
  boardSquares = [];
document.querySelector('#turnTable').innerHTML = `It is ${sign}'s turn`;
gameBoard.addEventListener('click', function(){
  document.querySelector('#turnTable').innerHTML = `It is ${sign}'s turn`;

})

box.forEach(function(e){
  e.innerHTML ="";
})
//resets finish here ^
  document.querySelector(".gameOptions").classList.remove("display");

} // end of gameStart
// it is listening to the events and acting according the user. if x or o.
box.forEach(function(e){

  e.addEventListener("click", function(){



    if(e.innerHTML == ""){ // prevents it from clicking in the same place
       if (sign == "X"){
         xChosenBox.push(e.id);
         e.innerHTML = sign;
         boardSquares.push(sign);
        checkIfWon(xChosenBox , "X");
        iterator(sign);
      }else if (sign == "O"){
        oChosenBox.push(e.id);
        e.innerHTML = sign;
        boardSquares.push(sign);
       checkIfWon(oChosenBox , "O");
       iterator(sign);
      }
  }
  })
})

// make a function to iterate through x and o
function iterator(signal){

  if(signal == "X"){
    sign = "O"
    return sign
  } else if (signal == "O"){
    sign = "X";
    return sign
  }
}
// make a universal function to take in x or o and insert it on the board while it also pushes the value to the array and
// checks to see if the board square has already been filled ...

// algorithm to find out a winnner
*/



// make a OOprogramming
