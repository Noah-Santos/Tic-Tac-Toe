//creating board array
let board=[
    ["null", "null", "null"],
    ["null", "null", "null"],
    ["null", "null", "null"]
];
let turn=0;

//adds player piece the array
function showBoard(x, y){
    if(checkSpace(x,y)){
        if(turn%2==1){
            board[x][y]=="o";
            return true;
        }else{
            board[x][y]=="y";
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

//changes the image to the player that selected it
function setImg(square){
    if(turn%2==1){
        document.getElementById(`square${square}`).style.backgroundImage="o.png";
    }else{
        document.getElementById(`square${square}`).style.backgroundImage="x.png";
    }
}
//changes the button to an image if clicked
//also changes the turn number and player turn
function mark1(){
    let x =0;
    let y=0;
    let square=1;
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
    let x =0;
    let y=1;
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
    let x =0;
    let y=2;
    let square=7;
    change(x,y);
}
function mark8(){
    let x =1;
    let y=2;
    let square=8;
    change(x,y);
}
function mark9(){
    let x =2;
    let y=2;
    let square=9;
    change(x,y);
}