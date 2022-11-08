"use strict";
//creating board array
let board=[
    ["null", "null", "null"],
    ["null", "null", "null"],
    ["null", "null", "null"]
];
let turn=0;
let xWin=0;
let yWin=0;
let space=0;

//adds player piece the array
function showBoard(x, y){
    console.log(board);
    if(checkSpace(x,y)){
        if(turn%2==1){
            board[x][y]="o";
            return true;
        }else{
            board[x][y]="x";
            return true;
        }
    }
    return false;
}

//checks if the space is open
function checkSpace(x, y){
    if(board[x][y]=="null"){
        return true;
    }else{
        return false;
    }
}

//sets the turn and player
function change(x,y){
    if(showBoard(x,y)){
        turn++;
        document.getElementById("turn").innerHTML=turn;
        if(turn%2==1){
            document.getElementById("player").innerHTML="O";
        }else{
            document.getElementById("player").innerHTML="X";
        }
    }
}

//function to check for winner
function checkWin(){
    // checks for verticle wins
    if(board[space][space]==board[space+1][space] && board[space][space]==board[space+2][space] && board[space][space]=="X"){
        xWin++;
        domcument.getElementById("xWin").innerHTML=xWin;
        console.log("X wins");
    }else if(board[space][space]==board[space+1][space] && board[space][space]==board[space+2][space] && board[space][space]=="Y"){
        yWin++;
        domcument.getElementById("yWin").innerHTML=yWin; 
    }
    //checks for horizontal wins
    if(board[space][space]==board[space][space+1] && board[space][space]==board[space][space+2] && board[space][space]=="X"){
        xWin++;
        domcument.getElementById("xWin").innerHTML=xWin;
    }else if(board[space][space]==board[space][space+1] && board[space][space]==board[space][space+2] && board[space][space]=="Y"){
        yWin++;
        domcument.getElementById("yWin").innerHTML=yWin; 
    }
}

//changes the button to an image if clicked
//also changes the turn number and player turn
function mark1(){
    let x =0;
    let y=0;
    let square=1;
    // (turn%2==0)?document.getElementById("square1").innerHTML="X":document.getElementById("square1").innerHTML="O";
    change(x,y);
}
function mark2(){
    let x =0;
    let y=1;
    let square=2;
    change(x,y);
}
function mark3(){
    let x =0;
    let y=2;
    let square=3;
    change(x,y);
}
function mark4(){
    let x =1;
    let y=0;
    let square=4;
    change(x,y);
}
function mark5(){
    let x =1;
    let y=1;
    let square=5;
    change(x,y);
}
function mark6(){
    let x =1;
    let y=2;
    let square=6;
    change(x,y);
}
function mark7(){
    let x =2;
    let y=0;
    let square=7;
    change(x,y);
}
function mark8(){
    let x =2;
    let y=1;
    let square=8;
    change(x,y);
}
function mark9(){
    let x =2;
    let y=2;
    let square=9;
    change(x,y);
}