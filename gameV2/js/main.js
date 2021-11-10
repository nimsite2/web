/*Canvas*/
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
cvs.width = 960;
cvs.height = 480;
var cnt = 0;
var game = 1;
var time = 0;
var frame = 0;
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
var scx = x
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
var cvy = vy;
var spawn=true;
var playerturn=0;
var hitboxX = 20;
var hitboxY = 25;
var power = false
/*Player*/

/*ball*/
var ballimg = new Image;
ballimg.src = "./obj/ball.png";
var ball = false;
var ballspeed = 10;
var ballx = x;
var bally = y;
var ballhitboxX = 20;
var ballhitboxY = 20;
var ballturn = playerturn;
/*ball*/

/*enemy*/
var enemy = new Image();
enemy.src = "./obj/enemy.png";
var espeed = new Array();
var enemyX = new Array();//
var enemyY = new Array();//
var enemyturn = new Array();
var enemyjump = new Array();
var enemyV = new Array();
var cejump = new Array();
var ceturn = new Array();
var cex = new Array();
var cey = new Array();
var cev = new Array();
var ces = new Array();
var espawn = true;
/*enemy*/

/*bg*/
var background = new Image();
var background1 = new Image();
background.src = "./obj/background.png";
background1.src = "./obj/background1.png";
/*bg*/

/*Map*/
var key=false;
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
once=true;
espawn = true;
power=false;
mapchip.src = "./obj/tile.png";
map = [
//   -0-----------------------------1-----------------------------2--------------------------
//   -0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8
	[22,00,00,00,00,00,00,00,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22,00,00,00,00],//00
	[22,00,11,00,00,00,00,00,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22,00,00,00,00],//01
	[22,11,09,11,22,00,00,00,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22,00,00,00,00],//02
	[22,22,22,22,22,05,00,00,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22,00,00,00,00],//03
	[00,00,00,00,00,00,00,00,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22,00,00,00,00],//04
	[00,00,00,00,00,00,05,05,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22,00,00,00,00],//05
	[00,00,00,00,00,00,00,00,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22,00,00,00,00],//06
	[00,00,00,00,00,00,00,00,05,05,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22,00,00,00,00],//07
	[00,00,00,00,00,00,00,00,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,24,00,22,00,00],//08
	[00,00,00,00,00,00,05,05,00,00,26,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,24,00,00,00,00],//09
	[00,00,00,00,00,00,00,00,00,00,26,00,00,00,36,00,00,00,00,00,00,00,00,00,00,00,00,00,00,24,00,00,00,00],//10
	[00,00,00,00,00,00,00,00,05,05,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,24,00,00,00,00],//11
	[00,00,10,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,22,00,00,00,00],//12
	[02,02,02,02,02,02,02,03,24,24,04,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02],//13
	[01,01,01,01,01,01,01,34,00,00,35,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01] //14
];
}
else if (s==1){
once=true;
espawn = true;
power=false;
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
	[22,00,23,00,00,05,05,26,00,20,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//07
	[24,00,00,00,00,00,00,26,00,00,24,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//08
	[24,00,00,05,65,05,22,22,23,23,23,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//09
	[24,00,00,00,06,00,22,22,22,22,22,22,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//10
	[24,00,00,00,06,00,00,00,00,22,22,24,08,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//11
	[22,00,00,00,06,00,26,26,12,00,11,00,22,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//12
	[02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02],//13
	[01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01] //14
];
}
else if (s==2){
once=true;
espawn = true;
power=false;
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
espawn = true;
power=false;
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
if (screen==0)ctx.clearRect(0,0,960*2,480);
if (screen==0) ctx.drawImage(background,0,0,960,480);
if (screen==1) ctx.drawImage(background1,0,0,960,480);

/*BLOCK*/
if (once&&espawn) {enemyX = [];enemyY = [];enemyturn = [];enemyjump = [];enemyV = [];}
var ladderX = new Array();//
var ladderY = new Array();//
var bridgeX = new Array();//
var bridgeY = new Array();//
var spikeX = new Array();//
var spikeY = new Array();//
var blocksX = new Array();//
var blocksY = new Array();//
var slopeRX = new Array();//
var slopeRY = new Array();//
var slopeLX = new Array();//
var slopeLY = new Array();//
var waterX = new Array();//
var waterY = new Array();//
var sandX = new Array();//
var sandY = new Array();//
var jumperX = new Array();//
var jumperY = new Array();//
var keyX = new Array();//
var keyY = new Array();//
var keyBX = new Array();//
var keyBY = new Array();//
var cpX = new Array();
var cpY = new Array();
var powerX = new Array();
var powerY = new Array();
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
/*player*/	if (map[my][mx] === 10&&once&&spawn) {x=32*mx, y=32*my;cx=x;cy=y}
/*enemy*/ 	if (map[my][mx] === 11&&once&&espawn) {enemyX.push(mx*32);enemyY.push(my*32);enemyturn.push(true);enemyjump.push(true);enemyV.push(0);espeed.push(0.8);}
/*-cp-*/	if (map[my][mx] === 13&&!cp==true) {ctx.drawImage( mapchip, 64, 32, 32, 32, 32*mx, 32*my, 32, 32 );cpX.push(mx*32);cpY.push(my*32)}
/*slopeR*/ 	if (map[my][mx] === 14) {ctx.drawImage( mapchip, 128, 32, 32, 32, 32*mx, 32*my, 32, 32 );slopeRX.push(mx*32);slopeRY.push(my*32)}
/*slopeL*/ 	if (map[my][mx] === 15) {ctx.drawImage( mapchip, 160, 32, 32, 32, 32*mx, 32*my, 32, 32 );slopeLX.push(mx*32);slopeLY.push(my*32)}
/*slopeDR*/ 	if (map[my][mx] === 16) {ctx.drawImage( mapchip, 192, 32, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*slopeDL*/ 	if (map[my][mx] === 17) {ctx.drawImage( mapchip, 224, 32, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
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
/*dirtR*/ 	if (map[my][mx] === 31) {ctx.drawImage( mapchip, 0, 96, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*dirtL*/ 	if (map[my][mx] === 32) {ctx.drawImage( mapchip, 32, 96, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*dirtB*/ 	if (map[my][mx] === 33) {ctx.drawImage( mapchip, 96, 96, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*dirtLB*/ 	if (map[my][mx] === 34) {ctx.drawImage( mapchip, 128, 96, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*dirtRB*/ 	if (map[my][mx] === 35) {ctx.drawImage( mapchip, 64, 96, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*power*/ 	if (map[my][mx] === 36&&!power) {ctx.drawImage( mapchip, 160, 96, 32, 32, 32*mx, 32*my, 32, 32 );powerX.push(mx*32);powerY.push(my*32)}
}}
/*BLOCK*/
if (inkey[39]) {x=x+xspeed;playerturn=0;}
if (inkey[37]) {x=x-xspeed;playerturn=1;}
if (inkey[16]&&!ball&&power) {	ballx=x;bally=y;ball=true;ballturn=playerturn}
if (inkey[32]&&!jump) {vy=-0.5;jump=true;isjump=true}
if (isjump&&inkey[32]&&vy>-(jumpheight)) {vy=vy-0.20} else {isjump=false}
jump=true

if (screen==0&&power) {ctx.font = 'italic 35px serif';ctx.fillStyle = 'red';ctx.strokeText("Shiftで攻撃だ!!", 50, 50);ctx.fillText("Shiftで攻撃だ!!",50,50);}

if (ball) {
	ctx.drawImage(ballimg,ballx,bally,32,32);
	if (ballturn==0) {ballx=ballx+ballspeed}
	if (ballturn==1) {ballx=ballx-ballspeed}

	for (var i=0;i<blocksY.length;i++) {
		if (
		bally+ballhitboxY>blocksY[i]&&
		bally<blocksY[i]&&
		ballx<blocksX[i]+ballhitboxX-2&&
		ballx>blocksX[i]-ballhitboxX+2
	) {ball=false}
		else if (
		bally>blocksY[i]&&
		bally-ballhitboxY<blocksY[i]&&
		ballx<blocksX[i]+ballhitboxX-2&&
		ballx>blocksX[i]-ballhitboxX+2
	) {ball=false}
	if (ballx>blocksX[i]-ballhitboxX&&blocksX[i]>ballx&&bally>blocksY[i]-ballhitboxX&&blocksY[i]+ballhitboxX>bally) {ball=false}
	else if (ballx>blocksX[i]&&blocksX[i]+ballhitboxX>ballx&&bally>blocksY[i]-ballhitboxX&&blocksY[i]+ballhitboxX>bally) {ball=false}
	}

	if (!screen==0&&ballx>960){ball=false} else (screen==1&&ballx>960*2)
	if (ballx<0) {ball=false}
}


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
if (x>blocksX[i]-hitboxX&&blocksX[i]>x&&y>blocksY[i]-hitboxX&&blocksY[i]+hitboxX>y) {x=blocksX[i]-hitboxX}
else if (x>blocksX[i]&&blocksX[i]+hitboxX>x&&y>blocksY[i]-hitboxX&&blocksY[i]+hitboxX>y) {x=blocksX[i]+hitboxX}
}
/*block-------------------------------------------------------------------------------------------*/

/*slopeR*/
for (var i=0;i<slopeRY.length;i++) {
	if (
	y+hitboxY+(x-slopeRX[i])-5>slopeRY[i]&&
	y<slopeRY[i]&&
	x<slopeRX[i]+hitboxX&&
	x>slopeRX[i]-hitboxX
	) {y=slopeRY[i]-(x-slopeRX[i])-hitboxX;jump=false;vy=0}
}
/*slopeR-------------------------------------------------------------------------------------------*/

/*slopeL*/
for (var i=0;i<slopeLY.length;i++) {
	if (
	y+hitboxY-(x-slopeLX[i])-5>slopeLY[i]&&
	y<slopeLY[i]&&
	x<slopeLX[i]+hitboxX&&
	x>slopeLX[i]-hitboxX
	) {y=slopeLY[i]+(x-slopeLX[i])-hitboxX;jump=false;vy=0}
}
/*slopeL-------------------------------------------------------------------------------------------*/

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
if (x>spikeX[i]-hitboxX&&spikeX[i]>x&&y>spikeY[i]-hitboxX&&spikeY[i]+hitboxX>y) {game=0}
else if (x>spikeX[i]&&spikeX[i]+hitboxX>x&&y>spikeY[i]-hitboxX&&spikeY[i]+hitboxX>y) {game=0}
}
/*spike-------------------------------------------------------------------------------------------*/

/*power*/
for (var i=0;i<powerY.length;i++) {
	if (
	y+hitboxY>powerY[i]&&
	y<powerY[i]&&
	x<powerX[i]+hitboxX-2&&
	x>powerX[i]-hitboxX+2
	) {power=true;getk.play()}
	else if (
	y>powerY[i]&&
	y-hitboxY<powerY[i]&&
	x<powerX[i]+hitboxX-2&&
	x>powerX[i]-hitboxX+2
	) {power=true;getk.play()}
if (x>powerX[i]-hitboxX&&powerX[i]>x&&y>powerY[i]-hitboxX&&powerY[i]+hitboxX>y) {power=true;getk.play()}
else if (x>powerX[i]&&powerX[i]+hitboxX>x&&y>powerY[i]-hitboxX&&powerY[i]+hitboxX>y) {power=true;getk.play()}
}
/*power-------------------------------------------------------------------------------------------*/

/*enemy*/
for (var i=0;i<enemyY.length;i++) {
enemyjump[i]=true
for (var j=0;j<blocksY.length;j++) {
	if (
	enemyY[i]+32.000001>blocksY[j]&&
	enemyY[i]<blocksY[j]&&
	enemyX[i]<blocksX[j]+31&&
	enemyX[i]>blocksX[j]-31
	) {enemyY[i]=blocksY[j]-32;enemyjump[i]=false;enemyV[i]=0}
	else if (
	enemyY[i]>blocksY[j]&&
	enemyY[i]-32<blocksY[j]&&
	enemyX[i]<blocksX[j]+31&&
	enemyX[i]>blocksX[j]-31
	) {enemyY[i]=blocksY[j]+32;enemyV[i]=0}
if (enemyX[i]>blocksX[j]-32&&blocksX[j]>enemyX[i]&&enemyY[i]>blocksY[j]-32&&blocksY[j]+32>enemyY[i]) {if (enemyturn[i]==true){enemyturn[i]=false} else {enemyturn[i]=true}}
else if (enemyX[i]>blocksX[j]&&blocksX[j]+32>enemyX[i]&&enemyY[i]>blocksY[j]-32&&blocksY[j]+32>enemyY[i]) {if (enemyturn[i]==true){enemyturn[i]=false} else {enemyturn[i]=true}}
}
	ctx.drawImage(enemy, enemyX[i], enemyY[i], 32, 32 );
	if (
	y+hitboxY>enemyY[i]&&
	y<enemyY[i]&&
	x<enemyX[i]+hitboxX-2&&
	x>enemyX[i]-hitboxX+2
	) {game=0}
	else if (
	y>enemyY[i]&&
	y-hitboxY<enemyY[i]&&
	x<enemyX[i]+hitboxX-2&&
	x>enemyX[i]-hitboxX+2
	) {game=0}
if (x>enemyX[i]-hitboxX&&enemyX[i]>x&&y>enemyY[i]-hitboxX&&enemyY[i]+hitboxX>y) {game=0}
else if (x>enemyX[i]&&enemyX[i]+hitboxX>x&&y>enemyY[i]-hitboxX&&enemyY[i]+hitboxX>y) {game=0}
if (enemyjump[i]) {enemyY[i]=enemyY[i]+enemyV[i];enemyV[i]=enemyV[i]+0.05}
if (enemyturn[i]) {enemyX[i]=enemyX[i]+espeed[i]} else if (!enemyturn[i]) {enemyX[i]=enemyX[i]-espeed[i]}

	if (
	bally+32>enemyY[i]&&
	bally<enemyY[i]&&
	ballx<enemyX[i]+32-2&&
	ballx>enemyX[i]-32+2
) {ball=false;enemyY[i]=1500}
	else if (
	bally>enemyY[i]&&
	bally-32<enemyY[i]&&
	ballx<enemyX[i]+32-2&&
	ballx>enemyX[i]-32+2
) {ball=false;enemyY[i]=1500}
}
/*enemy-------------------------------------------------------------------------------------------*/

/*bridge*/
for (var i=0;i<bridgeY.length;i++) {
	if (
	!inkey[32]&&
	y+hitboxY+0.00001>bridgeY[i]&&
	y+hitboxY-5<bridgeY[i]&&
	x<bridgeX[i]+hitboxX-2&&
	x>bridgeX[i]-hitboxX+2
	) {y=bridgeY[i]-hitboxY;jump=false;vy=0}
	else if (
	y+hitboxY>bridgeY[i]&&
	y+hitboxY-5<bridgeY[i]&&
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
	) {y--;vy=-5}
	else if (
	y>jumperY[i]&&
	y-hitboxY<jumperY[i]&&
	x<jumperX[i]+hitboxX-2&&
	x>jumperX[i]-hitboxX+2
	) {y--;vy=-5}
if (x>jumperX[i]-hitboxX&&jumperX[i]>x&&y>jumperY[i]-hitboxX&&jumperY[i]+hitboxX>y) {y--;vy=-5}
else if (x>jumperX[i]&&jumperX[i]+hitboxX>x&&y>jumperY[i]-hitboxX&&jumperY[i]+hitboxX>y) {y--;vy=-5}
}
/*jumper-------------------------------------------------------------------------------------------*/

/*key*/
for (var i=0;i<keyY.length;i++) {
	if (
	y+hitboxY>keyY[i]&&
	y<keyY[i]&&
	x<keyX[i]+hitboxX-2&&
	x>keyX[i]-hitboxX+2
	) {key=false;getk.play()}
	else if (
	y>keyY[i]&&
	y-hitboxY<keyY[i]&&
	x<keyX[i]+hitboxX-2&&
	x>keyX[i]-hitboxX+2
	) {key=false;getk.play()}
if (x>keyX[i]-hitboxX&&keyX[i]>x&&y>keyY[i]-hitboxX&&keyY[i]+hitboxX>y) {key=false;getk.play()}
else if (x>keyX[i]&&keyX[i]+hitboxX>x&&y>keyY[i]-hitboxX&&keyY[i]+hitboxX>y) {key=false;getk.play()}
}
/*key-------------------------------------------------------------------------------------------*/


/*keyB*/
for (var i=0;i<keyBY.length;i++) {
	if (
	y+hitboxY>keyBY[i]&&
	y<keyBY[i]&&
	x<keyBX[i]+hitboxX-2&&
	x>keyBX[i]-hitboxX+2
	) {key=true;getk.play()}
	else if (
	y>keyBY[i]&&
	y-hitboxY<keyBY[i]&&
	x<keyBX[i]+hitboxX-2&&
	x>keyBX[i]-hitboxX+2
	) {key=true;getk.play()}
if (x>keyBX[i]-hitboxX&&keyBX[i]>x&&y>keyBY[i]-hitboxX&&keyBY[i]+hitboxX>y) {key=true;getk.play()}
else if (x>keyBX[i]&&keyBX[i]+hitboxX>x&&y>keyBY[i]-hitboxX&&keyBY[i]+hitboxX>y) {key=true;getk.play()}
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
	) {y=y-0.3;vy=-1;jump=false}
if (inkey[32]&&x>waterX[i]-hitboxX&&waterX[i]>x&&y>waterY[i]-hitboxX&&waterY[i]+hitboxX>y) {y=y-0.3;vy=-1;jump=false}
else if (inkey[32]&&x>waterX[i]&&waterX[i]+hitboxX>x&&y>waterY[i]-hitboxX&&waterY[i]+hitboxX>y) {y=y-0.3;vy=-1;jump=false}
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
if (inkey[32]&&x>sandX[i]-hitboxX&&sandX[i]>x&&y>sandY[i]-hitboxX&&sandY[i]+hitboxX>y) {vy=1;jump=false}
else if (inkey[32]&&x>sandX[i]&&sandX[i]+hitboxX>x&&y>sandY[i]-hitboxX&&sandY[i]+hitboxX>y) {vy=1;jump=false}
}
/*sand-------------------------------------------------------------------------------------------*/

if (jump) {y=y+vy;vy=vy+0.05}

once=false;
spawn=false;
espawn=false;

if (y>480) {game=0;}

if (game==0) {loadcp();deathcnt++;document.getElementById("death").innerHTML = "death:"+deathcnt}

if (x>480) {ctx.translate(scx-x,0)}
else if (480<=x) {ctx.translate(0,0)}//a

scx=x

function frm() {
frame++
console.log(frame);document.getElementById("framecnt").innerHTML = "frame["+frame+"]";
if (game==1) {window.requestAnimationFrame(upd)}
}
setTimeout(frm,6);

if (x>930&&3>screen) {screen++;x=0;makemap(screen)} else if (x>930){game=2}
if (x<0&&0<screen) {screen--;x=930;makemap(screen)} else if (x<0) {x=0}



/*GAMEOVER*/
if (game==3) {bgm.pause();gaov.play();document.getElementById("TEXT").innerHTML = "ゲームオーバー";document.getElementById("cplo").remove();}
if (game==2) {bgm.pause();clear.play();document.getElementById("TEXT").innerHTML = "クリア Time["+time+"]";}
};
};

function savecp() {
spawn=false;
espawn=false;
	getc.play()
	cx = x;
	cy = y;
	cvy = vy;
	ck = key;
	cc = cnt;
	cg = game;
	co = once;
	cs = screen;

	cejump = enemyjump;
	ceturn = enemyturn;
	cex = enemyX;
	cey = enemyY;
	cev = enemyV;
	ces = espeed;

}

function loadcp(){
	x = cx;
	y = cy;
	vy = cvy;
	key = ck;
	cnt = cc;
	game = cg;
	once = co;
	screen = cs;
	enemyjump = cejump
	enemyturn = ceturn
	enemyX = cex
	enemyY = cey
	enemyV = cev
	espeed = ces
	document.getElementById("TEXT").innerHTML = "";
	game = 1;
	makemap(screen)
}


function starttimer() {function s1(){time++;document.getElementById("timer").innerHTML = "time["+time+"]";console.log(time);setTimeout(s1,1000)}s1();}
