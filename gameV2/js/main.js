/*Canvas*/
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
cvs.width = 960;
cvs.height = 480;
var cnt = 0;
var game = 1;
var time = 0;
var cc = cnt;
var cg = game;
/*Canvas*/

/*Key*/
window.addEventListener("keydown", keyd)
window.addEventListener("keyup", keyu)
var inkey = new Array();
function keyd(e) {inkey[e.keyCode] = true}
function keyu(e) {inkey[e.keyCode] = false}
/*Key*/

/*Player*/
var playerR = new Image();
var playerL = new Image();
playerR.src = "./obj/playerR.png";
playerL.src = "./obj/playerL.png";
var x = 0;
var xspeed = 2;
var y = 0;
var vy = 0;
var jumpheight = 2;
var jump = true;
var isjump = true;
var deathcnt = 0;
var cx = x;
var cy = y;
var cs = 0;
var spawn=true;
var playerturn=0;
var hitboxX = 20;
var hitboxY = 25;
/*Player*/

/*enemy*/
var enemy = new Image();
enemy.src = "./obj/enemy.png";
var ex = 0;
var ey = 0;
var cex = ex;
var cey = ey;
var evy = 0;
var cevy = evy;
var ejump=true;
var turn=0;
var cet=turn;
var espeed = 0.7;
var ces = espeed;
/*enemy*/

/*enemy2*/
var enemy2 = new Image();
enemy2.src = "./obj/enemy2.png";
var ex2 = 0;
var ey2 = 0;
var cex2 = ex;
var cey2 = ey;
var evy2 = 0;
var cevy2 = evy2;
var ejump2=true;
var turn2=0;
var cet2=turn2;
var espeed2 = 0.7;
var ces2 = espeed2;
/*enemy2*/

/*bg*/
var background = new Image();
background.src = "./obj/background.png";
/*bg*/

/*Map*/
var key=true;
var ck = key;
var cp=false;
var map = new Array();
var screen = 0;
var once=true;
var spawn=true;
var co = once;
var mapchip = new Image();
makemap(screen);

function makemap(s) {
if (s==0){
once = true;
background.src = "./obj/background.png";
mapchip.src = "./obj/tile.png";
map = [
//   -0-----------------------------1-----------------------------2--------------------------
//   -0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//00
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//01
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//02
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//03
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//04
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//05
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//06
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//07
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//08
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//09
	[03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//10
	[01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//11
	[01,00,10,00,00,00,00,00,00,20,00,00,12,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//12
	[01,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02],//13
	[01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01] //14
];
}
else if (s==1){
once=true;
background.src = "./obj/background1.png";
mapchip.src = "./obj/tile.png";
map = [
//   -0-----------------------------1-----------------------------2--------------------------
//   -0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8
	[22,22,22,22,22,22,22,22,24,24,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//00
	[22,08,00,00,00,00,00,26,00,00,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//01
	[22,05,05,00,00,00,00,26,00,00,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//02
	[22,00,00,00,00,00,00,26,00,00,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//03
	[22,23,23,23,23,05,05,22,00,00,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//04
	[22,00,00,23,00,00,09,21,00,00,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//05
	[22,05,05,23,00,00,00,22,00,00,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//06
	[22,00,23,00,00,05,05,26,00,00,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//07
	[00,00,00,00,00,00,00,26,00,00,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//08
	[00,00,00,05,65,05,22,22,23,23,23,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//09
	[00,00,00,00,06,00,22,22,22,22,22,22,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//10
	[00,00,00,00,06,00,00,00,00,22,22,24,08,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//11
	[22,00,00,00,06,00,26,26,12,00,00,00,22,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//12
	[02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02],//13
	[01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01] //14
];
}
else if (s==2){
once=true;
background.src = "./obj/background1.png";
mapchip.src = "./obj/tile.png";
map = [
//   -0-----------------------------1-----------------------------2--------------------------
//   -0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//00
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//01
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//02
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//03
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//04
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//05
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//06
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//07
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//08
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//09
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//10
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//11
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//12
	[02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02],//13
	[01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01] //14
];
}
else if (s==3){
once=true;
background.src = "./obj/background1.png";
mapchip.src = "./obj/tile.png";
map = [
//   -0-----------------------------1-----------------------------2--------------------------
//   -0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//00
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//01
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//02
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//03
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//04
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//05
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//06
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//07
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//08
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//09
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//10
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//11
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//12
	[02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02],//13
	[01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01] //14
];
}
}
/*Map*/


//-----------------------------------------------------------------------------------------------//
function start() {
if (cnt == 0) {
	startse = new Audio("./sud/se/tyouetu.mp3");gaov = new Audio("./sud/se/yattenai.mp3");getk = new Audio("./sud/se/oyaa.mp3");getc = new Audio("./sud/se/nanda.mp3");bgm = new Audio("./sud/bgm/超越神力.mp3");clear = new Audio("./sud/se/syoco.mp3");startse.play();
	document.getElementById("startbtn").remove();
	cnt = 1;
	starttimer();
	upd()
}


function upd(){
if (once) {bgm.play()}
ctx.drawImage(background,0,0,960,480);
ctx.drawImage(enemy,ex,ey,32,32);
ctx.drawImage(enemy2,ex2,ey2,32,32);

/*BLOCK*/
var ladderX = new Array();//
var ladderY = new Array();//
var bridgeX = new Array();//
var bridgeY = new Array();//
var spikeX = new Array();//
var spikeY = new Array();//
var blocksX = new Array();//
var blocksY = new Array();//
var waterX = new Array();//
var waterY = new Array();//
var sandX = new Array();//
var sandY = new Array();//
var jumperX = new Array();//
var jumperY = new Array();//
var ejumperX = new Array();
var ejumperY = new Array();
var ejumper2X = new Array();
var ejumper2Y = new Array();
var keyX = new Array();//
var keyY = new Array();//
var keyBX = new Array();//
var keyBY = new Array();//
var cpX = new Array();
var cpY = new Array();
if (playerturn==0) {ctx.drawImage(playerR,x,y,32,32)}
else if (playerturn==1) {ctx.drawImage(playerL,x,y,32,32)};
for (var my=0; my<map.length; my++){for (var mx=0; mx<map[my].length; mx++){
/*dirt*/	if (map[my][mx] === 1) {ctx.drawImage( mapchip, 0, 0, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*grass1*/	if (map[my][mx] === 2) {ctx.drawImage( mapchip, 32, 0, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*grass2*/	if (map[my][mx] === 3) {ctx.drawImage( mapchip, 64, 0, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*grass3*/	if (map[my][mx] === 4) {ctx.drawImage( mapchip, 96, 0, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*bridge*/	if (map[my][mx] === 5) {ctx.drawImage( mapchip, 0, 32, 32, 32, 32*mx, 32*my, 32, 32 );bridgeX.push(mx*32);bridgeY.push(my*32)}
/*ladder*/ if (map[my][mx] === 6) {ctx.drawImage( mapchip, 32, 32, 32, 32, 32*mx, 32*my, 32, 32 );ladderX.push(mx*32);ladderY.push(my*32)}
/*WbridgeW*/	if (map[my][mx] === 65) {ctx.drawImage( mapchip, 0, 32, 32, 32, 32*mx, 32*my, 32, 32 );bridgeX.push(mx*32);bridgeY.push(my*32)}
/*WladderW*/ 	if (map[my][mx] === 65) {ctx.drawImage( mapchip, 32, 32, 32, 32, 32*mx, 32*my, 32, 32 );ladderX.push(mx*32);ladderY.push(my*32)}
/*jumper*/ if (map[my][mx] === 7) {ctx.drawImage( mapchip, 96, 32, 32, 32, 32*mx, 32*my, 32, 32 );jumperX.push(mx*32);jumperY.push(my*32)}
/*key*/ if (map[my][mx] === 8&&key) {ctx.drawImage( mapchip, 0, 64, 32, 32, 32*mx, 32*my, 32, 32 );keyX.push(mx*32);keyY.push(my*32)}
/*keyB*/ if (map[my][mx] === 9&&!key) {ctx.drawImage( mapchip, 32, 64, 32, 32, 32*mx, 32*my, 32, 32 );keyBX.push(mx*32);keyBY.push(my*32)}
/*spikeA*/ if (map[my][mx] === 21) {ctx.drawImage( mapchip, 64, 64, 32, 32, 32*mx, 32*my, 32, 32 );spikeX.push(mx*32);spikeY.push(my*32)}
/*blockA*/ if (map[my][mx] === 22) {ctx.drawImage( mapchip, 96, 64, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*spikeB*/ if (map[my][mx] === 23&&!key) {ctx.drawImage( mapchip, 128, 64, 32, 32, 32*mx, 32*my, 32, 32 );spikeX.push(mx*32);spikeY.push(my*32)}
/*blockB*/ if (map[my][mx] === 24&&!key) {ctx.drawImage( mapchip, 160, 64, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*spikeC*/ if (map[my][mx] === 25&&key) {ctx.drawImage( mapchip,192, 64, 32, 32, 32*mx, 32*my, 32, 32 );spikeX.push(mx*32);spikeY.push(my*32)}
/*blockC*/ if (map[my][mx] === 26&&key) {ctx.drawImage( mapchip,224, 64, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*waterB*/ if (map[my][mx] === 27) {ctx.drawImage( mapchip, 160, 0, 32, 32, 32*mx, 32*my, 32, 32 );waterX.push(mx*32);waterY.push(my*32)}
/*waterT*/ if (map[my][mx] === 28) {ctx.drawImage( mapchip, 128, 0, 32, 32, 32*mx, 32*my, 32, 32 );waterX.push(mx*32);waterY.push(my*32)}
/*sandT*/ if (map[my][mx] === 29) {ctx.drawImage( mapchip, 224, 0, 32, 32, 32*mx, 32*my, 32, 32 );sandX.push(mx*32);sandY.push(my*32)}
/*sandB*/ if (map[my][mx] === 30) {ctx.drawImage( mapchip, 192, 0, 32, 32, 32*mx, 32*my, 32, 32 );sandX.push(mx*32);sandY.push(my*32)}
/*player*/	if (map[my][mx] === 10&&once&&spawn) {x=32*mx, y=32*my;cx=x;cy=y}
/*enemy*/	if (map[my][mx] === 12&&once) {ex=32*mx, ey=32*my;}
/*-cp-*/	if (map[my][mx] === 13&&!cp==true) {ctx.drawImage( mapchip, 64, 32, 32, 32, 32*mx, 32*my, 32, 32 );cpX.push(mx*32);cpY.push(my*32)}
/*enemy2*/	if (map[my][mx] === 20&&once) {ex2=32*mx, ey2=32*my;}
}}
/*BLOCK*/


if (inkey[39]&&inkey[16]) {x=x+xspeed+2;playerturn=0} else if (inkey[39]) {x=x+xspeed;playerturn=0}
if (inkey[37]&&inkey[16]) {x=x-xspeed-2;playerturn=1} else if (inkey[37]) {x=x-xspeed;playerturn=1}
if (inkey[32]&&!jump) {vy=-0.5;jump=true;isjump=true}
if (isjump&&inkey[32]&&vy>-(jumpheight)) {vy=vy-0.20} else {isjump=false}
jump=true


/*cp*/
for (var i=0;i<cpY.length;i++) {
	if (
	y+hitboxY>cpY[i]&&
	y<cpY[i]&&
	x<cpX[i]+hitboxX-2&&
	x>cpX[i]-hitboxX+2
	) {cp=true;savecp()}
	else if (
	y>cpY[i]&&
	y-hitboxY<cpY[i]&&
	x<cpX[i]+hitboxX-2&&
	x>cpX[i]-hitboxX+2
	) {cp=true;savecp()}
}

for (var i=0;i<cpX.length;i++) {
if (x>cpX[i]-hitboxY&&cpX[i]>x&&y>cpY[i]-hitboxY&&cpY[i]+hitboxY>y) {cp=true;savecp()}
else if (x>cpX[i]&&cpX[i]+hitboxY>x&&y>cpY[i]-hitboxY&&cpY[i]+hitboxY>y) {cp=true;savecp()}
}
/*cp*/

/*block*/
for (var i=0;i<blocksY.length;i++) {
	if (
	!inkey[32]&&
	y+hitboxY+0.00001>blocksY[i]&&
	y<blocksY[i]&&
	x<blocksX[i]+hitboxX-2&&
	x>blocksX[i]-hitboxX+2
	) {y=blocksY[i]-hitboxY;jump=false;vy=0}
	else if (
	y+hitboxY>blocksY[i]&&
	y<blocksY[i]&&
	x<blocksX[i]+hitboxX-2&&
	x>blocksX[i]-hitboxX+2
	) {y=blocksY[i]-hitboxY;jump=false;vy=0}
	else if (
	y>blocksY[i]&&
	y-hitboxY<blocksY[i]&&
	x<blocksX[i]+hitboxX-2&&
	x>blocksX[i]-hitboxX+2
	) {y=blocksY[i]+hitboxY;vy=0}
}
for (var i=0;i<blocksX.length;i++) {
if (x>blocksX[i]-hitboxX&&blocksX[i]>x&&y>blocksY[i]-hitboxX&&blocksY[i]+hitboxX>y) {x=blocksX[i]-hitboxX}
else if (x>blocksX[i]&&blocksX[i]+hitboxX>x&&y>blocksY[i]-hitboxX&&blocksY[i]+hitboxX>y) {x=blocksX[i]+hitboxX}
}
/*block-------------------------------------------------------------------------------------------*/

/*spike*/
for (var i=0;i<spikeY.length;i++) {
	if (
	y+hitboxY>spikeY[i]&&
	y<spikeY[i]&&
	x<spikeX[i]+hitboxX-2&&
	x>spikeX[i]-hitboxX+2
	) {game=0}
	else if (
	y>spikeY[i]&&
	y-hitboxY<spikeY[i]&&
	x<spikeX[i]+hitboxX-2&&
	x>spikeX[i]-hitboxX+2
	) {game=0}
}
for (var i=0;i<spikeX.length;i++) {
if (x>spikeX[i]-hitboxX&&spikeX[i]>x&&y>spikeY[i]-hitboxX&&spikeY[i]+hitboxX>y) {game=0}
else if (x>spikeX[i]&&spikeX[i]+hitboxX>x&&y>spikeY[i]-hitboxX&&spikeY[i]+hitboxX>y) {game=0}
}
/*spike-------------------------------------------------------------------------------------------*/

/*bridge*/
for (var i=0;i<bridgeY.length;i++) {
	if (
	!inkey[32]&&
	y+hitboxY+0.00001>bridgeY[i]&&
	y<bridgeY[i]&&
	x<bridgeX[i]+hitboxX-2&&
	x>bridgeX[i]-hitboxX+2
	) {y=bridgeY[i]-hitboxY;jump=false;vy=0}
	else if (
	y+hitboxY>bridgeY[i]&&
	y<bridgeY[i]&&
	x<bridgeX[i]+hitboxX-2&&
	x>bridgeX[i]-hitboxX+2
	) {y=bridgeY[i]-hitboxY;jump=false;vy=0}
}
/*bridge-------------------------------------------------------------------------------------------*/


/*ladder*/
for (var i=0;i<ladderY.length;i++) {
	if (
	inkey[40]&&
	y+hitboxY>ladderY[i]&&
	y<ladderY[i]&&
	x<ladderX[i]+hitboxX-2&&
	x>ladderX[i]-hitboxX+2
	) {y++;jump=false;vy=0}
	else if (
	inkey[38]&&
	y+hitboxY>ladderY[i]&&
	y<ladderY[i]&&
	x<ladderX[i]+hitboxX-2&&
	x>ladderX[i]-hitboxX+2
	) {y--;jump=false;vy=-1}
}
/*ladder-------------------------------------------------------------------------------------------*/

/*jumper*/
for (var i=0;i<jumperY.length;i++) {
	if (
	y+hitboxY>jumperY[i]&&
	y<jumperY[i]&&
	x<jumperX[i]+hitboxX-2&&
	x>jumperX[i]-hitboxX+2
	) {y--;vy=-3}
	else if (
	y>jumperY[i]&&
	y-hitboxY<jumperY[i]&&
	x<jumperX[i]+hitboxX-2&&
	x>jumperX[i]-hitboxX+2
	) {y--;vy=-3}
}
for (var i=0;i<jumperX.length;i++) {
if (x>jumperX[i]-hitboxX&&jumperX[i]>x&&y>jumperY[i]-hitboxX&&jumperY[i]+hitboxX>y) {y--;vy=-3}
else if (x>jumperX[i]&&jumperX[i]+hitboxX>x&&y>jumperY[i]-hitboxX&&jumperY[i]+hitboxX>y) {y--;vy=-3}
}
/*jumper-------------------------------------------------------------------------------------------*/

/*key*/
for (var i=0;i<keyY.length;i++) {
	if (
	y+hitboxY>keyY[i]&&
	y<keyY[i]&&
	x<keyX[i]+hitboxX-2&&
	x>keyX[i]-hitboxX+2
	) {key=false}
	else if (
	y>keyY[i]&&
	y-hitboxY<keyY[i]&&
	x<keyX[i]+hitboxX-2&&
	x>keyX[i]-hitboxX+2
	) {key=false}
}
for (var i=0;i<keyX.length;i++) {
if (x>keyX[i]-hitboxX&&keyX[i]>x&&y>keyY[i]-hitboxX&&keyY[i]+hitboxX>y) {key=false}
else if (x>keyX[i]&&keyX[i]+hitboxX>x&&y>keyY[i]-hitboxX&&keyY[i]+hitboxX>y) {key=false}
}
/*key-------------------------------------------------------------------------------------------*/


/*keyB*/
for (var i=0;i<keyBY.length;i++) {
	if (
	y+hitboxY>keyBY[i]&&
	y<keyBY[i]&&
	x<keyBX[i]+hitboxX-2&&
	x>keyBX[i]-hitboxX+2
	) {key=true}
	else if (
	y>keyBY[i]&&
	y-hitboxY<keyBY[i]&&
	x<keyBX[i]+hitboxX-2&&
	x>keyBX[i]-hitboxX+2
	) {key=true}
}
for (var i=0;i<keyBX.length;i++) {
if (x>keyBX[i]-hitboxX&&keyBX[i]>x&&y>keyBY[i]-hitboxX&&keyBY[i]+hitboxX>y) {key=true}
else if (x>keyBX[i]&&keyBX[i]+hitboxX>x&&y>keyBY[i]-hitboxX&&keyBY[i]+hitboxX>y) {key=true}
}
/*keyB-------------------------------------------------------------------------------------------*/

/*water*/
for (var i=0;i<waterY.length;i++) {
	if (
	inkey[32]&&
	y+hitboxY>waterY[i]&&
	y<waterY[i]&&
	x<waterX[i]+hitboxX-2&&
	x>waterX[i]-hitboxX+2
	) {y=y-0.3;vy=-3;jump=false}
}
for (var i=0;i<waterX.length;i++) {
if (inkey[32]&&x>waterX[i]-hitboxX&&waterX[i]>x&&y>waterY[i]-hitboxX&&waterY[i]+hitboxX>y) {y=y-0.3;vy=-3;jump=false}
else if (inkey[32]&&x>waterX[i]&&waterX[i]+hitboxX>x&&y>waterY[i]-hitboxX&&waterY[i]+hitboxX>y) {y=y-0.3;vy=-3;jump=false}
}
/*water-------------------------------------------------------------------------------------------*/

/*sand*/
for (var i=0;i<sandY.length;i++) {
	if (
	inkey[32]&&
	y+hitboxY>sandY[i]&&
	y<sandY[i]&&
	x<sandX[i]+hitboxX-2&&
	x>sandX[i]-hitboxX+2
	) {vy=1;jump=false}
}
for (var i=0;i<sandX.length;i++) {
if (inkey[32]&&x>sandX[i]-hitboxX&&sandX[i]>x&&y>sandY[i]-hitboxX&&sandY[i]+hitboxX>y) {vy=1;jump=false}
else if (inkey[32]&&x>sandX[i]&&sandX[i]+hitboxX>x&&y>sandY[i]-hitboxX&&sandY[i]+hitboxX>y) {vy=1;jump=false}
}
/*sand-------------------------------------------------------------------------------------------*/

if (jump) {y=y+vy;vy=vy+0.05}

once=false;
spawn=false;




/*Eblock*/
ejump=true
for (var i=0;i<blocksY.length;i++) {
	if (
	ey+32.001>blocksY[i]&&
	ey<blocksY[i]&&
	ex<blocksX[i]+30&&
	ex>blocksX[i]-30
	) {ey=blocksY[i]-32;ejump=false;evy=0}
	else if (
	ey>blocksY[i]&&
	ey-32<blocksY[i]&&
	ex<blocksX[i]+30&&
	ex>blocksX[i]-30
	) {ey=blocksY[i]+32;evy=0}
}

for (var i=0;i<blocksX.length;i++) {
if (ex>blocksX[i]-32&&blocksX[i]>ex&&ey>blocksY[i]-32&&blocksY[i]+32>ey) {if (turn==1){turn=0} else {turn=1}}
else if (ex>blocksX[i]&&blocksX[i]+32>ex&&ey>blocksY[i]-32&&blocksY[i]+32>ey) {if (turn==1){turn=0} else {turn=1}}
}
/*Eblock*/

/*Eblock2*/
ejump2=true
for (var i=0;i<blocksY.length;i++) {
	if (
	ey2+32.001>blocksY[i]&&
	ey2<blocksY[i]&&
	ex2<blocksX[i]+30&&
	ex2>blocksX[i]-30
	) {ey2=blocksY[i]-32;ejump2=false}
	else if (
	ey2>blocksY[i]&&
	ey2-32<blocksY[i]&&
	ex2<blocksX[i]+30&&
	ex2>blocksX[i]-30
	) {ey2=blocksY[i]+32;evy=0}
}

for (var i=0;i<blocksX.length;i++) {
if (ex2>blocksX[i]-32&&blocksX[i]>ex2&&ey2>blocksY[i]-32&&blocksY[i]+32>ey2) {if (turn2==1){turn2=0} else {turn2=1}}
else if (ex2>blocksX[i]&&blocksX[i]+32>ex2&&ey2>blocksY[i]-32&&blocksY[i]+32>ey2) {if (turn2==1){turn2=0} else {turn2=1}}
}
/*Eblock2*/


/*enemy*/
if (
y+hitboxY>ey&&
y<ey&&
x<ex+hitboxX-2&&
x>ex-hitboxY+2
) {game=0}
else if (
y>ey&&
y-hitboxY<ey&&
x<ex+hitboxY-2&&
x>ex-hitboxY+2
) {game=0}
if (x>ex-hitboxY&&ex>x&&y>ey-hitboxY&&ey+hitboxY>y) {game=0}
else if (x>ex&&ex+hitboxY>x&&y>ey-hitboxY&&ey+hitboxY>y) {game=0}
/*enemy*/

/*enemy2*/
if (
y+hitboxY>ey2&&
y<ey2&&
x<ex2+hitboxX-2&&
x>ex2-hitboxX+2
) {game=0}
else if (
y>ey2&&
y-hitboxY<ey2&&
x<ex2+hitboxX-2&&
x>ex2-hitboxX+2
) {game=0}
if (x>ex2-hitboxY&&ex2>x&&y>ey2-hitboxY&&ey2+hitboxY>y) {game=0}
else if (x>ex2&&ex2+hitboxY>x&&y>ey2-hitboxY&&ey2+hitboxY>y) {game=0}
/*enemy2*/

if (ejump) {ey=ey+evy;evy=evy+0.05}
if (turn==1) {ex=ex+espeed} else if (turn==0) {ex=ex-espeed}
if (ejump2) {ey2=ey2+evy2;evy2=evy2+0.05}
if (turn2==1) {ex2=ex2+espeed2} else if (turn2==0) {ex2=ex2-espeed2}
if (y>480) {game=0;}




if (game==0) {loadcp();deathcnt++;document.getElementById("death").innerHTML = "death:"+deathcnt}

if (game==1) {window.requestAnimationFrame(upd)};

if (x>930&&3>screen) {screen++;x=0;makemap(screen)} else if (x>930){game=2}
if (x<0&&0<screen) {screen--;x=930;makemap(screen)} else if (x<0) {x=0}
/*GAMEOVER*/
if (game==3) {bgm.pause();gaov.play();document.getElementById("TEXT").innerHTML = "ゲームオーバー";document.getElementById("cplo").remove();}
if (game==2) {bgm.pause();clear.play();document.getElementById("TEXT").innerHTML = "クリア Time["+time+"]";}
};
};

function savecp() {
spawn=false;
	getc.play()
	cx = x;
	cy = y;
	ck = key;
	cc = cnt;
	cg = game;
	co = once;
	cs = screen;
	cex = ex;
	cey = ey;
	ces = espeed;
	cet = turn;
	cevy = evy;
	cex2 = ex2;
	cey2 = ey2;
	ces2 = espeed2;
	cet2 = turn2;
	cevy = evy;
	cevy2 = evy2;
}

function loadcp(){
	x = cx;
	y = cy;
	key = ck;
	cnt = cc;
	game = cg;
	once = co;
	screen = cs;
	ex = cex;
	ey = cey;
	espeed = ces;
	turn = cet;
	evy = cevy;
	ex2 = cex2;
	ey2 = cey2;
	espeed2 = ces2;
	turn2 = cet2;
	evy = cevy;
	evy2 = cevy2;
	document.getElementById("TEXT").innerHTML = "";
	game = 1;
	makemap(screen)
}


function starttimer() {function s1(){time++;document.getElementById("timer").innerHTML = "time["+time+"]";console.log(time);setTimeout(s1,1000)}s1();}