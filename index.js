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

// //adds player piece the array
// function showBoard(x, y){
//     console.log(board);
//     if(checkSpace(x,y)){
//         if(turn%2==1){
//             board[x][y]="o";
//             return true;
//         }else{
//             board[x][y]="x";
//             return true;
//         }
//     }
//     return false;
// }

//checks if the space is open
function checkSpace(x, y){
    if(board[x][y]=="null"){
        return true;
    }else{
        return false;
    }
}

//sets the turn and player
function change(x,y, square){
    if(checkSpace(x,y)){
        if(turn%2==1){
            // document.getElementById("player").innerHTML="O";
            document.getElementById(square).innerHTML="O";
            board[x][y]="o";
        }else{
            // document.getElementById("player").innerHTML="X";
            document.getElementById(square).innerHTML="X";
            board[x][y]="x";
        }
        turn++;
        document.getElementById("turn").innerHTML=turn;
        if(turn%2==1){
            document.getElementById("player").innerHTML="O";
            // board[x][y]="o";
        }else{
            document.getElementById("player").innerHTML="X";
            // document.getElementById(square).innerHTML="X";
            // board[x][y]="x";
        }
    }
    // showBoard(x, y);
    console.log(board);
}


const CHECK = [0, 1, 2];
//function to check for winner
function checkWin(){
    // checks for verticle wins
    for(let i=0;i<3;i++){
        if(board[0][i]==board[1][i] && board[0][i]==board[2][i] && board[0][i]=="X"){
            xWin++;
            document.getElementById("xWin").innerHTML=xWin;
            console.log("X wins");
        }else if(board[0][i]==board[1][i] && board[0][i]==board[2][i] && board[0][i]=="Y"){
            yWin++;
            document.getElementById("yWin").innerHTML=yWin; 
        }
    }
    //checks for horizontal wins
    for(let i=0;i<3;i++){
        if(board[i][0]==board[i][1] && board[i][0]==board[i][2] && board[i][0]=="X"){
            xWin++;
            document.getElementById("xWin").innerHTML=xWin;
        }else if(board[i][0]==board[i][1] && board[i][0]==board[i][2] && board[i][0]=="Y"){
            yWin++;
            document.getElementById("yWin").innerHTML=yWin; 
        }
    }
}

//changes the button to an image if clicked
//also changes the turn number and player turn
function mark1(position){
    let place = position.split('');
    change(parseInt(place[0]),parseInt(place[1]),"sqr1");
}
function mark2(position){
    let place = position.split('');
    change(parseInt(place[0]),parseInt(place[1]),"sqr2");
}
function mark3(position){
    let place = position.split('');
    change(parseInt(place[0]),parseInt(place[1]),"sqr3");
}
function mark4(position){
    let place = position.split('');
    change(parseInt(place[0]),parseInt(place[1]),"sqr4");
}
function mark5(position){
    let place = position.split('');
    change(parseInt(place[0]),parseInt(place[1]),"sqr5");
}
function mark6(position){
    let place = position.split('');
    change(parseInt(place[0]),parseInt(place[1]),"sqr6");
}
function mark7(position){
    let place = position.split('');
    change(parseInt(place[0]),parseInt(place[1]),"sqr7");
}
function mark8(position){
    let place = position.split('');
    change(parseInt(place[0]),parseInt(place[1]),"sqr8");
}
function mark9(position){
    let place = position.split('');
    change(parseInt(place[0]),parseInt(place[1]),"sqr9");
}