"use strict";
//creating board array
let board =[]
function game(){
    board=[
        ["null", "null", "null"],
        ["null", "null", "null"],
        ["null", "null", "null"]
    ];
    for(let i=1;i<10;i++){
        document.getElementById(`sqr${i}`).innerHTML="&nbsp;";
    }
}
let turn=0;
let xWin=0;
let oWin=0;

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
            document.getElementById(square).innerHTML="O";
            board[x][y]="o";
        }else{
            document.getElementById(square).innerHTML="X";
            board[x][y]="x";
        }
        turn++;
        document.getElementById("turn").innerHTML=turn;
        if(turn%2==1){
            document.getElementById("player").innerHTML="O";
        }else{
            document.getElementById("player").innerHTML="X";
        }
    }
    console.log(board);
}

//function to check for winner also checks for draws
function checkWin(){
    for(let c=0;c<3;c++){
        let xChecks=0;
        let oChecks=0;
        for(let r=0;r<3;r++){
            if(board[r][c]=="x"){
                xChecks++;
            }else if(board[r][c]=="o"){
                oChecks++;
            }
            check(xChecks,oChecks);
        }
    }
    for(let c=0;c<3;c++){
        let xChecks=0;
        let oChecks=0;
        for(let r=0;r<3;r++){
            if(board[c][r]=="x"){
                xChecks++;
            }else if(board[c][r]=="o"){
                oChecks++;
            }
            check(xChecks,oChecks);
        }
    }
}

//checks for hoirzontal and vertical wins
function check(xChecks,oChecks){
    if(xChecks==3){
        xWin++;
        document.getElementById("xWin").innerHTML=xWin;
        document.getElementById("printW").innerHTML="X Wins";
    }else if(oChecks==3){
        oWin++;
        document.getElementById("oWin").innerHTML=oWin;
        document.getElementById("printW").innerHTML="O Wins";
    }
}

//changes the turn number and player turn
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