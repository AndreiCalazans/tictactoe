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

/// bugs
//
// var startBtn = document.getElementById("start");
// startBtn.addEventListener("mouseup", gameStart , false);
// startBtn.addEventListener("touchend", gameStart , false);

// the variables
var winningHands = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var boardState = [0,0,0,0,0,0,0,0,0];
var box = document.getElementsByClassName("box");
var sign ;
var user = 1;
var computer = -1;
var game = true;
var aiLevel ;
var gameTurn = 0;
var click =  new Audio;
click.src = 'click.mp3';
var tada = new Audio;
tada.src = 'tada.mp3';
var pling = new Audio;
pling.src = 'pling.mp3';
// types of levels are -easy - medium -hard



// functions ////////////////////////////////////////////////////////////////////


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
//////////////////////////////////////////////
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
////////////////////////////////////////
function set(index, player){

  var symbol = player === user ? sign : signComputer;
  box[index].innerHTML =  symbol ;
  box[index].style.fontSize = "8vw"
  boardState[index] = player;
  click.currentTime = 0;
  click.play();
  checkWin(player, boardState);
  boardFull();
}



//////////////////////////////////////////////////////
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
      gameTurn = 0;
      continuing("win", player);
      return true;
    }
  }
  return false;
}
////////////////////////////////////////////////////////////
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
        game= false;
        gameTurn = 0;
        continuing('tie');
      }
  }
}
//////////////
function isBoardEmpty(){
var condition = true;
  boardState.forEach((e) => {
    if(e != 0 ){
      condition = false;
      return ;
    }
  })
  return condition;
}

////////////////////
function aiWin(player, board){
  for(var x = 0 ; x < 8 ; x++){
    var win = true;

    for(var y = 0 ; y < 3 ; y++ ){
      if(board[winningHands[x][y]] != player){
        win = false;
        break;
      }
    }
    if(win){
      return true;
    }
  }
  return false;
}
/////////////////////////////////////

function canNextWin(player){
  if(!game){
    return;
  }
  for(var i = 0 ; i < boardState.length ; i++){
    var newBoard = boardState.slice();
    newBoard[i] = player;
    var isWin = aiWin(player , newBoard);
     if(isWin && boardState[i] == 0){
       set( i , computer);
       return true;
       break;
     }
  }
}
//////////////////////////////////////////////////////
function canUserWin(player){
  if(!game){
    return;
  }
  for(var i = 0 ; i < boardState.length ; i++){
    var newBoard = boardState.slice();
    newBoard[i] = player;
    var isWin = aiWin(player , newBoard);
     if(isWin && boardState[i] == 0){
       return true;
       break;
     }
  }
  return false;
}
//////////////////////////////////////////////////////////
function pickRandom(){

  if(!game){
    return;
  }
  var aiIndex = Math.floor(Math.random() * 9);
    if(boardState[aiIndex] == 0){
      set(aiIndex ,computer);
    }else{
      pickRandom();
    }
}
////////////////////////////////////////////////////////////////
function mediumAI(){
var corners = [0,2,6,8];
var cornerFailed = false;
if(canNextWin(computer)){
  return;
}else {
var isItTrue = canUserWin(user);
if(isItTrue){
  cornerFailed = true;
  canNextWin(user);
}else if(boardState[4] == user){
  //function to block

  if(isItTrue){
    cornerFailed = true;
    canNextWin(user);
  }else {

  }
}
// picks the corners otherwise gets random.
function pickCorners(){
 if(cornerFailed){
   return;
 }else{
   for(var i = 0 ; i < corners.length ; i++){
     if(boardState[corners[i]] == 0){
       set(corners[i], computer);
       return ;
     }
   }
   cornerFailed = true;
   if(cornerFailed){
     pickRandom();
   }
 }
};
pickCorners();
 }
}

/////////////////////////////////////////////////////////////////////////////////////

function callAI(aiLevel){
  if(!game){
    return;
  }
  if(aiLevel == "easy"){

    canNextWin();
    pickRandom();

  }else if(aiLevel == "medium"){
      mediumAI();
  }
}
///////////////////////////////////////////////////////////////

function reset(){
  for(var x = 0 ; x <= 8 ; x++){
    boardState[x] = 0;
    box[x].innerHTML = "";
    box[x].style.fontSize = "0px"
  }
}

//UI functions below/////////////////////////////////////////////////////////////////////
function intro(msg){
  if(msg == undefined){

  }else{
   document.querySelector("#newWindow p").textContent = msg;
  }
  $(".gameOptions").toggle('slow');

//  document.querySelector(".gameOptions").classList.toggle("display");
}

function continuing(situation, player){
  var opositeSign = sign == "X" ? "O" : "X";
  player  = player == 1 ? "You" : "Computer";
var msg;
  if(situation == "win"){
    msg = player +'Win!!!'
    tada.currentTime = 0;
    tada.play();
  }else {
    pling.currentTime = 0;
    pling.play();
    msg = "It's a Tie"
  }

  intro(msg);

};
