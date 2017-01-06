//AI must react to the user click,
// to do list
// make squares
//on user click add x or O
//when x or o align alert the window
// game must start  by asking if x or o
// afterwards it must iterate through the player x and o
// dont let it re click on the same square and still be able to select .
//if all squares are filled and no winner then declare the loser


    //
      // to-dos
    
        // make option for two players
        // create levels medium and hard(minimax)
        // make a more atractive UI



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
var aiLevel ;
var gameTurn = 0;
// types of levels are -dumb -easy - medium -hard



// functions

function whoseTurn(first){
  var x = first == "X" ? "X" : "O";
  var turnTable = document.getElementById('turnTable');
  if(first ==  "X"){

  }else {
    turnTable.innerHTML = `It is O's turn`;
  }
}


function gameStart(){
  intro(); // hides intro
  signInput = Array.prototype.slice.call(document.getElementsByTagName('input')) ; //gets an aray of the input x and o
  var checked = true;
  for(var x = 0 ; x < signInput.length ; x++){
    if(signInput[x].checked != true){
      checked = false;
    }else {
      checked = true;
      sign = signInput[x].value;
      break;
    }
  }
  if(!checked){
    intro();
    alert("please choose X or O");
  }
  levelOption = document.getElementById('level');
  aiLevel = levelOption.value;

  signComputer = sign == "X" ? "O" : "X";
  reset();
  game= true;
  // if ai x it goes first
  if(signComputer =="X"){
    callAI(aiLevel);
  }
}

function claim(click){
  if(!game){
    return;
  }
  for(var x = 0 ; x <= 8 ; x++){
    if(box[x] === click && boardState[x] == 0){
      set(x,user);
      callAI(aiLevel);


    }
  }
}

function set(index, player){
  gameTurn += 0.5
  var symbol= player == user ? sign : signComputer;
  box[index].innerHTML = symbol;
  boardState[index] = player;
  checkWin(player);
  boardFull();
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
      console.log('you win')
      continuing("win", player);
      return true;
    }
  }
  return false;
}

function boardFull(){
  if(game){
      var isBoardFull = true;
      for(var x = 0 ; x < boardState.length ; x++){
        if(boardState[x] == 0){
          isBoardFull = false;
          break;
        }
      }
      if(isBoardFull){
        console.log("Tie");
        game= false;
        continuing('tie');
      }
  }
}
function callAI(aiLevel){

  if(!game){
    return;
  }
  if(aiLevel == "easy"){
    var aiIndex = Math.floor(Math.random() * 9);
      if(boardState[aiIndex] == 0){
        set(aiIndex ,computer);
      }else{
      callAI(aiLevel);
      }
  }
}


function reset(){
  for(var x = 0 ; x <= 8 ; x++){
    boardState[x] = 0;
    box[x].innerHTML = "";
  }
}

//UI functions above
function intro(){
  document.querySelector(".gameOptions").classList.toggle("display");
}

function continuing(situation, player){
  var opositeSign = sign == "X" ? "O" : "X";
  player  = player == 1 ? sign : opositeSign;
var msg;
  if(situation == "win"){
    msg = `${player} Wins!!!`
  }else {
    msg = `It's a Tie`
  }

    document.querySelector(".gameOptions").classList.toggle("display");
    document.getElementById('display').innerHTML = `<div id = "newWindow">
        <p>${msg}</p>
      <div>
        <form action="">
          <input type="radio" name="symbol" value='X'> X
          <input type="radio" name="symbol" value='O'> O
        </form>

        <select name="level" id="level">
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
        </select>
        <button onclick="gameStart()">Start</button>
      </div>
    </div>`
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
