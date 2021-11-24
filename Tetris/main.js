var cvs = document.getElementById("cvs")
var ctx = cvs.getContext("2d")
var w=11;
var h=17;
cvs.width=w*32
cvs.height=h*32

window.addEventListener("keydown", keyd)
window.addEventListener("keyup", keyu)
var inkey = new Array();
function keyd(e) {inkey[e.keyCode] = true}
function keyu(e) {inkey[e.keyCode] = false}

var score = document.getElementById("score")

var gameover = false;
var once = true;
var frame = 0;
var keyoldframe = 0;
var keycooltime = 25;
var turnkeyoldframe = 0;
var turnkeycooltime = 25;

var downkeyoldframe = 0;
var downkeycooltime = 30;

var downoldframe = 0;
var downcooltime = 40;

class mino{constructor(x,y){this.x=x;this.y=y;}}

var minocolorlist = ["black","red","lime","purple","yellow","blue","orange","skyblue","gray"]
var minocolor = minocolorlist[0]
var minos = new Array()
var rand = Math.floor(Math.random()*7)+1;
function spawnmino(rand){
downcooltime=40
mino.x = 4;mino.y = -1;
minocolor = minocolorlist[rand+1]
if (rand==0){
minos = [
[0,0,0,0],
[0,1,1,0],
[0,0,1,1],
[0,0,0,0],
]
} else if (rand==1){
minos = [
[0,0,0,0],
[0,0,1,1],
[0,1,1,0],
[0,0,0,0],
]
} else if (rand==2){
minos = [
[0,0,0,0],
[0,1,1,0],
[0,1,1,0],
[0,0,0,0],
]
} else if (rand==3){
minos = [
[0,0,0,0],
[1,1,1,1],
[0,0,0,0],
[0,0,0,0],
]
} else if (rand==4){
minos = [
[0,0,0,0],
[0,0,1,0],
[0,1,1,1],
[0,0,0,0],
]
} else if (rand==5){
minos = [
[0,0,0,0],
[0,0,0,1],
[0,1,1,1],
[0,0,0,0],
]
} else if (rand==6){
minos = [
[0,0,0,0],
[0,1,0,0],
[0,1,1,1],
[0,0,0,0],
]
}
}
spawnmino(rand)

var field = new Array()
for (var i=0;i<h;i++){
field[i]=[]
for (var j=0;j<w;j++){
field[i][j]=0;
}}


function drawfield() {
for (var i=0;i<field.length;i++){for (var j=0;j<field[i].length;j++){if (field[i][j]){
ctx.fillStyle = minocolorlist[field[i][j]];ctx.strokestyle = "gray";
ctx.fillRect(j*32,i*32,32,32);ctx.strokeRect(j*32,i*32,32,32)
}}}
}

function drawmino() {
for (var i=0;i<minos.length;i++){for (var j=0;j<minos[i].length;j++){if (minos[i][j]){
ctx.fillStyle = minocolor;ctx.strokestyle = "gray";
ctx.fillRect(j*32+mino.x*32,i*32+mino.y*32,32,32);ctx.strokeRect(j*32+mino.x*32,i*32+mino.y*32,32,32)
}}}
}

function movecheck(mx,my,nmino){
if (nmino==undefined){nmino=minos}
for (var i=0;i<minos.length;i++){for (var j=0;j<minos[i].length;j++){
var newx = mino.x + mx + i
var newy = mino.y + my + j
if (nmino[j][i]){
	if (newx<0||newx>w-1||newy<1||newy>h-1||field[newy][newx]){return false}
}
}}
return true
}

function turnmino(){
var newmino = []
for (var i=0;i<minos.length;i++){
newmino[i] = []
for (var j=0;j<minos[i].length;j++){
newmino[i][j] = minos[minos.length-j-1][i]
}}
return newmino
}

function checkline(){
var lc=0;
for (var i=0;i<field.length;i++){var fl = true;for (var j=0;j<field[i].length;j++){
if (!field[i][j]){fl=false;break;}
}
if(fl){
lc++;
for (var ni = i;ni>0;ni--){for (nj=0;nj<w-1;nj++){
field[ni][nj] = field[ni-1][nj]
}}

}
}
}


function fixfield(){
for (var i=0;i<minos.length;i++){for (var j=0;j<minos[i].length;j++){
checkline();
if(minos[i][j]){field[mino.y+i][mino.x+j]=rand+1}
}}	
}


function start() {
function mainloop(){
ctx.clearRect(0,0,w*32,h*32)
drawfield()


if (inkey[37]&&keyoldframe+keycooltime<frame&&movecheck(-1,0)){mino.x--;keyoldframe=frame}
if (inkey[39]&&keyoldframe+keycooltime<frame&&movecheck(1,0)){mino.x++;keyoldframe=frame}
if (inkey[40]&&keyoldframe+keycooltime<frame&&movecheck(0,1)){mino.y++;keyoldframe=frame}
if (inkey[32]&&downkeyoldframe+downkeycooltime<frame){downcooltime=0;downkeyoldframe=frame}
if (inkey[38]&&turnkeyoldframe+turnkeycooltime<frame){newminos=turnmino();if (movecheck(0,0,newminos)){minos=newminos};turnkeyoldframe=frame}



if (downoldframe+downcooltime<frame&&movecheck(0,1)){mino.y++;downoldframe=frame}else if (downoldframe+downcooltime<frame){if (!movecheck(0,0)){gameover=true;}fixfield();rand=Math.floor(Math.random()*7);spawnmino(rand)}
drawmino()
frame++
if (!gameover){window.requestAnimationFrame(mainloop)}
else {score.innerHTML = "GameOver"}
}
if (once) {mainloop()}
once = false;
document.getElementById("startbtn").remove()
}