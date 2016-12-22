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
var sign ;
function checkIfWon(chosenBox,winner){
  winningCounter = 0 ;

  for(var i = 0 ; i < winningHands.length ; i++){
    // iterate through the selected optiions and see if we can get a match from the winning hands
 chosenBox.forEach(function(e){
   if(winningHands[i].indexOf(Number(e)) != -1 ){
     winningCounter ++;
     if (winningCounter == 3){
       document.querySelector(".gameOptions").classList.add("display");
       document.getElementById("display").innerHTML = "<p>"+winner+" Won</p><p>Play again</p><button class='X' onClick=gameStart('X')>X</button><button class='O' onClick=gameStart('O')>O</button>"
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



box.forEach(function(e){
  e.innerHTML ="";
})
//resets finish here ^
  document.querySelector(".gameOptions").classList.remove("display");

} // end of gameStart
// it is listening to the events and acting according the user. if x or o.
box.forEach(function(e){
   console.log(e.innerHTML );
  e.addEventListener("click", function(){
    if(e.innerHTML == ""){ // prevents it from clicking in the same place
       if (sign == "X"){
         xChosenBox.push(e.id);
         e.innerHTML = sign;
        checkIfWon(xChosenBox , "X");
      }else if (sign == "O"){
        oChosenBox.push(e.id);
        e.innerHTML = sign;
       checkIfWon(oChosenBox , "O");
      }
  }
  iterator(sign);
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
