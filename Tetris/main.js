var cvs = document.getElementById("cvs")
var ctx = cvs.getContext("2d")
var cvs2 = document.getElementById("cvs2")
var ctx2 = cvs2.getContext("2d")
var w=10;
var h=20;
cvs.width=w*32
cvs.height=h*32
cvs2.width=w*32/2
cvs2.height=h*32

window.addEventListener("keydown", keyd)
window.addEventListener("keyup", keyu)
var inkey = new Array();
function keyd(e) {inkey[e.keyCode] = true;if (inkey[37]&&movecheck(-1,0)){mino.x--}
if (inkey[39]&&movecheck(1,0)){mino.x++}
if (inkey[40]&&movecheck(0,1)){mino.y++}}
function keyu(e) {inkey[e.keyCode] = false}


var gameover = false;
var once = true;
var frame = 0;
var turnkeyoldframe = 0;
var turnkeycooltime = 25;

var downkeyoldframe = 0;
var downkeycooltime = 30;

var downoldframe = 0;
var downcooltime = 20;

var lines =0;
var lc=0;
var score =0;

class mino{constructor(x,y){this.x=x;this.y=y;}}

var minocolorlist = ["black","red","lime","purple","yellow","blue","orange","skyblue","gray"]
var minocolor = minocolorlist[0]
var minos = new Array()
var rand = Math.floor(Math.random()*7);
var nextrand = Math.floor(Math.random()*7);
var minolist = [[
[0,0,0,0],
[0,1,1,0],
[0,0,1,1],
[0,0,0,0]],[
[0,0,0,0],
[0,0,1,1],
[0,1,1,0],
[0,0,0,0]],[
[0,0,0,0],
[0,1,1,0],
[0,1,1,0],
[0,0,0,0]],[
[0,0,0,0],
[1,1,1,1],
[0,0,0,0],
[0,0,0,0]],[
[0,0,0,0],
[0,0,1,0],
[0,1,1,1],
[0,0,0,0]],[
[0,0,0,0],
[0,0,0,1],
[0,1,1,1],
[0,0,0,0]],[
[0,0,0,0],
[0,1,0,0],
[0,1,1,1],
[0,0,0,0]]
]
function spawnmino(rand){
downcooltime=20
mino.x = 4;mino.y = -1;
minocolor = minocolorlist[rand+1]
minos = minolist[rand]
}
spawnmino(rand)
var nextminos = new Array()
var nextminocolor = 0;
function spawnnextmino(rand){
nextminocolor = minocolorlist[nextrand+1]
nextminos = minolist[rand]
}

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

function drawnextmino() {
ctx2.clearRect(0,0,w*32/2,96)
for (var i=0;i<nextminos.length;i++){for (var j=0;j<nextminos[i].length;j++){if (nextminos[i][j]){
ctx2.fillStyle = nextminocolor;ctx2.strokestyle = "gray";
ctx2.fillRect(j*32,i*32,32,32);ctx2.strokeRect(j*32,i*32,32,32)
ctx2.fillStyle = "white";
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
for (var i=0;i<field.length;i++){var fl = true;for (var j=0;j<field[i].length;j++){
if (!field[i][j]){fl=false;break;}
}
if(fl){
for (var ni = i;ni>0;ni--){for (nj=0;nj<w;nj++){
field[ni][nj] = field[ni-1][nj]
}}
lc++;
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



if (inkey[32]&&downkeyoldframe+downkeycooltime<frame&&downcooltime!=0){downcooltime=0;downkeyoldframe=frame}
if (inkey[38]&&turnkeyoldframe+turnkeycooltime<frame){newminos=turnmino();if (movecheck(0,0,newminos)){minos=newminos};turnkeyoldframe=frame}



if (downoldframe+downcooltime<frame&&movecheck(0,1)){mino.y++;downoldframe=frame}else if (downoldframe+downcooltime<frame){if (!movecheck(0,0)){gameover=true;}fixfield();ctx2.clearRect(0,0,w*32/2,33);rand=nextrand;nextrand = Math.floor(Math.random()*7);spawnnextmino(nextrand);drawnextmino();spawnmino(rand)}
if (lc>0){
	ctx2.clearRect(0,96,w*32/2,h*32)
	lines+=lc;
	ctx2.fillText("Line:"+lines, 0, 128);
	if(lc==1){score+=100};if(lc==2){score+=300};if(lc==3){score+=500};if(lc==4){score+=800};
	ctx2.fillText("Score:"+score, 0, 160);
	lc=0}

drawmino()
frame++
if (!gameover){setTimeout(mainloop,10)}
else {ctx.font = "bold 200% ''";ctx.fillStyle = "white";ctx.fillText("GameOver!", 32, h/2*32)}
}
if (once) {
	starttimer();mainloop();
	nextrand = Math.floor(Math.random()*7);
	ctx2.font = "bold 100% ''";
	ctx2.fillStyle = "white";
	spawnnextmino(nextrand);drawnextmino();
	ctx2.fillText("Line:0", 0, 128);
	ctx2.fillText("Score:"+score, 0, 160);
}
once = false;
document.getElementById("startbtn").remove()
}

function starttimer() {
		var oldtime = new Date();
	function s1(){
		if (!gameover){
		var newtime = new Date();
		time = (newtime.getTime() - oldtime.getTime())/1000
		ctx2.clearRect(0,160,w*32/2,35)
		ctx2.fillText("time["+time+"]",0,192);
		setTimeout(s1,10)
	}
	}
	s1();
}