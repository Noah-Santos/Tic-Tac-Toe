"use strict";
//creating board array
let board =[]
let turn=0;
function game(){
    board=[
        ["null", "null", "null"],
        ["null", "null", "null"],
        ["null", "null", "null"]
    ];
    for(let i=1;i<10;i++){
        document.getElementById(`sqr${i}`).innerHTML="&nbsp;";
    }
    document.getElementById("printW").innerHTML="";
    turn=0;
    document.getElementById("turn").innerHTML=turn;
    document.getElementById("player").innerHTML="X";
    document.getElementById("square1").style.backgroundColor="white"
    document.getElementById("square2").style.backgroundColor="white";
    document.getElementById("square3").style.backgroundColor="white";
    document.getElementById("square4").style.backgroundColor="white"
    document.getElementById("square5").style.backgroundColor="white";
    document.getElementById("square6").style.backgroundColor="white";
    document.getElementById("square7").style.backgroundColor="white"
    document.getElementById("square8").style.backgroundColor="white";
    document.getElementById("square9").style.backgroundColor="white";
}
let go=true;
//win variable count
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

//function to check for winner horizontally and vertically
function checkWin(){
    let v,h;
    //vertical
    for(let c=0;c<3;c++){
        let xChecks=0;
        let oChecks=0;
        for(let r=0;r<3;r++){
            if(board[r][c]=="x"){
                xChecks++;
            }else if(board[r][c]=="o"){
                oChecks++;
            }
            v=check(xChecks,oChecks);
        }
    }
    // horizontal
    for(let c=0;c<3;c++){
        let xChecks=0;
        let oChecks=0;
        for(let r=0;r<3;r++){
            if(board[c][r]=="x"){
                xChecks++;
            }else if(board[c][r]=="o"){
                oChecks++;
            }
            h=check(xChecks,oChecks);
        }
    }
    diagonal();
    highLight();
    // if not diagonal, horizontal, or vertical, will print draw
    if(!diagonal() && !v && turn==9){
        document.getElementById("printW").innerHTML="Draw";
    }else if(!diagonal() && !h && turn==9){
        document.getElementById("printW").innerHTML="Draw";
    }
}

//checks for hoirzontal and vertical wins
function check(xChecks,oChecks){
    if(xChecks==3){
        xWin++;
        document.getElementById("xWin").innerHTML=xWin;
        document.getElementById("printW").innerHTML="X Wins";
        return true;
    }else if(oChecks==3){
        oWin++;
        document.getElementById("oWin").innerHTML=oWin;
        document.getElementById("printW").innerHTML="O Wins";
        return true;
    }
    return false;
}

//checks for diagonal wins
function diagonal(){
    if(board[0][0]===board[1][1] && board[0][0]===board[2][2] && board[0][0]!="null"){
        if(board[0][0]=="x"){
            xWin++;
            document.getElementById("xWin").innerHTML=xWin;
            document.getElementById("printW").innerHTML="X Wins";
            document.getElementById("square1").style.backgroundColor="purple"
            document.getElementById("square5").style.backgroundColor="purple";
            document.getElementById("square9").style.backgroundColor="purple";
            return true;
        }else if(board[0][0]=="o"){
            oWin++;
            document.getElementById("oWin").innerHTML=oWin;
            document.getElementById("printW").innerHTML="O Wins";
            document.getElementById("square1").style.backgroundColor="purple"
            document.getElementById("square5").style.backgroundColor="purple";
            document.getElementById("square9").style.backgroundColor="purple";
            return true;
        }
    }else if(board[0][2]===board[1][1] && board[0][2]===board[2][0] && board[0][2]!="null"){
        if(board[0][2]=="x"){
            xWin++;
            document.getElementById("xWin").innerHTML=xWin;
            document.getElementById("printW").innerHTML="X Wins";
            document.getElementById("square3").style.backgroundColor="purple"
            document.getElementById("square5").style.backgroundColor="purple";
            document.getElementById("square7").style.backgroundColor="purple";
            return true;
        }else if(board[0][2]=="o"){
            oWin++;
            document.getElementById("oWin").innerHTML=oWin;
            document.getElementById("printW").innerHTML="O Wins";
            document.getElementById("square3").style.backgroundColor="purple"
            document.getElementById("square5").style.backgroundColor="purple";
            document.getElementById("square7").style.backgroundColor="purple";
            return true;
        }
    }
    return false;
}

//higlights the winning horizontal and vertical winnings
function highLight(){
    if(board[0][0]==board[1][0]&&board[2][0]==board[0][0]&&board[0][0]!="null"){
        document.getElementById("square1").style.backgroundColor="purple"
        document.getElementById("square4").style.backgroundColor="purple";
        document.getElementById("square7").style.backgroundColor="purple";
    }else if(board[0][1]==board[1][1]&&board[2][1]==board[0][1]&board[0][1]!="null"){
        document.getElementById("square2").style.backgroundColor="purple"
        document.getElementById("square5").style.backgroundColor="purple";
        document.getElementById("square8").style.backgroundColor="purple";
    }else if(board[0][2]==board[1][2]&&board[2][2]==board[0][2]&board[0][2]!="null"){
        document.getElementById("square3").style.backgroundColor="purple"
        document.getElementById("square6").style.backgroundColor="purple";
        document.getElementById("square9").style.backgroundColor="purple";
    }else if(board[0][0]==board[0][1]&&board[0][2]==board[0][0]&&board[0][0]!="null"){
        document.getElementById("square1").style.backgroundColor="purple"
        document.getElementById("square2").style.backgroundColor="purple";
        document.getElementById("square3").style.backgroundColor="purple";
    }else if(board[1][0]==board[1][1]&&board[1][2]==board[1][0]&board[1][0]!="null"){
        document.getElementById("square4").style.backgroundColor="purple"
        document.getElementById("square5").style.backgroundColor="purple";
        document.getElementById("square6").style.backgroundColor="purple";
    }else if(board[2][0]==board[2][1]&&board[2][2]==board[2][0]&board[2][0]!="null"){
        document.getElementById("square7").style.backgroundColor="purple"
        document.getElementById("square8").style.backgroundColor="purple";
        document.getElementById("square9").style.backgroundColor="purple";
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
function btn(){
    document.getElementById("start").style.backgroundColor="salmon"
}