var score1 = 0;
var score2 = 0;
var score3 = 0;
var themenum = 4;

var items = [
  ["Sphere", "Cube", "Tri Pri", "Yes", "S C TP"],
  ["Finn", "Jake", "LSP", "Mathmatical!", "FJL(SP)"],
  ["Rock", "Paper", "Scissors", "Righteous, homie.", "Rock Paper Scissors"],
  ["Mind", "Time", "Love", "Stellar, man.", "Mind Time Love"]
];


function compplay(){
  var  randomnumber = Math.floor(Math.random() * 3 + 1);
  return randomnumber;
}

function playerplay(num){
 return num;
}

function game(playerplay,compplay){
  if (playerplay == compplay){
    var sit = 1;
  }
  if ((playerplay == 1 && compplay == 3) || (playerplay == 2 && compplay == 1) || (playerplay == 3 && compplay == 2)) {
    var sit = 2;
  }
  if ((playerplay == 1 && compplay == 2) || (playerplay == 2 && compplay == 3) || (playerplay == 3 && compplay == 1)) {
    var sit = 3;
  }
return sit;
}


function outcome(sit){
  if (sit == 1){
    return "Draw.";
  }

  if (sit == 2){
    return "Win.";
  }

  if (sit == 3){
    return "Loss."
  }
}

function desription(play){
  if (play == 1){
    return "Mind";
  }

  if (play == 2){
    return "Time";
  }

  if (play == 3){
    return "Love";
  }
}

function match(sit) {
  if (sit == 1) {
    window.score3 += 1;

  }
  if (sit == 2) {
    window.score1 += 1;
  }

  if (sit == 3) {
    window.score2 += 1;
  }
}

function checkscore(){
  if (window.score1 == 5) {
    document.getElementById("resulttext").innerHTML = window.items[themenum-1][3];
    window.score1 = 0;
    window.score2 = 0;
    window.score3 = 0;
    document.getElementById("comp").src = "Images/blank.png"
    document.getElementById("me").style.animation = "pulse";
    document.getElementById("me").style.animationDuration = "2s";
    document.getElementById("me").style.animationIterationCount = "4";
    document.getElementById("comp").style.backgroundColor = "transparent";
  }
  if (window.score2 == 5) {
    document.getElementById("resulttext").innerHTML = "How unfortunate.";
    window.score1 = 0;
    window.score2 = 0;
    window.score3 = 0;
    document.getElementById("me").src = "Images/blank.png";
    document.getElementById("comp").style.animation = "pulse";
    document.getElementById("comp").style.animationDuration = "2s";
    document.getElementById("comp").style.animationIterationCount = "4";
    document.getElementById("me").style.backgroundColor = "transparent";

  }
}

function imgchange(num){

  var chose = playerplay(num);
  var comp = compplay();
  var res = outcome(game(chose,comp));
  match(game(chose,comp));
  var theme = window.themenum;

  if (game(chose,comp) == 2){
     document.getElementById("me").style.backgroundColor = "#56D217";
     document.getElementById("comp").style.backgroundColor = "#D23517";
  }
  if (game(chose,comp) == 3){
     document.getElementById("comp").style.backgroundColor = "#56D217";
     document.getElementById("me").style.backgroundColor = "#D23517";
  }
  if (game(chose,comp) == 1){
     document.getElementById("me").style.backgroundColor = "white";
     document.getElementById("comp").style.backgroundColor = "white";
  }

  document.getElementById("me").src = "Images/theme"+ theme + "/" +chose + ".gif";
  document.getElementById("comp").src = "Images/theme"+ theme + "/" +comp + ".gif";
  document.getElementById("resulttext").innerHTML = res + "You chose " + window.items[theme-1][chose-1];
  document.getElementById("wins").innerHTML = window.score1;
  document.getElementById("losses").innerHTML = window.score2;
  checkscore();
}

function themechangegif(num) {
  window.themenum = num;
  document.getElementById("1").src = "Images/theme"+ num+ "/1.gif";
  document.getElementById("2").src = "Images/theme"+ num+ "/2.gif";
  document.getElementById("3").src = "Images/theme"+ num+ "/3.gif";
  document.body.style.backgroundImage = 'url(Images/theme'+num +'/Back.jpg)';
  document.getElementById("me").src = "Images/blank.png";
  document.getElementById("comp").src = "Images/blank.png";
  document.getElementById("me").style.backgroundColor = "transparent";
  document.getElementById("comp").style.backgroundColor = "transparent";
  document.getElementById("resulttext").innerHTML = "Do it.";
  document.getElementById("lhelp1").src = "Images/theme"+ num+ "/1.gif";
  document.getElementById("lhelp2").src = "Images/theme"+ num+ "/2.gif";
  document.getElementById("lhelp3").src = "Images/theme"+ num+ "/3.gif";
  document.getElementById("rhelp1").src = "Images/theme"+ num+ "/1.gif";
  document.getElementById("rhelp2").src = "Images/theme"+ num+ "/2.gif";
  document.getElementById("rhelp3").src = "Images/theme"+ num+ "/3.gif";
  document.getElementById("gn").innerHTML = window.items[themenum-1][4];
}
