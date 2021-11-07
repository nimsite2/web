/*Canvas*/
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
cvs.width = 940;
cvs.height = 470;
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
var player = new Image();
var x = 64;
var xspeed = 2;
var y = 256 + 128;
var vy = 0;
var jumpheight = 3;
var jump = true;
var cx = x
var cy = y
var cs = 0
/*Player*/

/*enemy*/
var enemy = new Image();
var ex = 128;
var ey = 128;
var cex = ex;
var cey = ey;
var evy = 0;
ejump=true;
turn=0;
cet=turn;
var espeed = 0.7;
ces = espeed;
/*enemy*/

/*enemy2*/
var enemy2 = new Image();
var ex2 = 128;
var ey2 = 512;
var cex2 = ex;
var cey2 = ey;
var evy2 = 0;
ejump2=true;
turn2=0;
cet2=turn2;
var espeed2 = 0.7;
ces2 = espeed2;
/*enemy2*/

/*bg*/
var background = new Image();
background.src = "./obj/background.png";
/*bg*/

/*Map*/
var key=false;
var ck = key;
var cp=false;
var map = new Array();
var screen = 0;
var once=true;
var co = once;
var mapchip = new Image();
makemap(screen);
function makemap(s) {
if (s==0){
mapchip.src = "./obj/tile.png";
map = [
//   -0-----------------------------1-----------------------------2--------------------------
//   -0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,17,00,00,00,00,00,00,00,00,00,00,01],//00
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,17,00,00,00,00,00,00,00,00,00,00,01],//01
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,17,00,00,00,00,00,00,00,00,00,00,01],//02
	[00,00,00,00,00,00,00,00,00,08,00,00,00,00,00,00,00,00,17,00,00,00,00,00,00,00,00,00,00,01],//03
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,17,00,00,00,00,00,00,00,00,00,00,01],//04
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,17,00,00,00,00,00,00,00,00,00,00,01],//05
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,17,00,00,00,00,00,00,00,00,00,00,07],//06
	[00,00,00,00,00,00,00,00,00,07,00,20,00,00,09,00,00,00,17,07,00,00,00,00,00,00,00,00,00,07],//07
	[00,00,00,00,00,00,00,00,00,04,02,02,02,02,02,02,02,02,02,03,00,00,00,00,00,00,00,00,00,07],//08
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,05,00,00,00,00,00,00,00,00,07],//09
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,05,00,00,00,00,00,11,00,07],//10
	[03,00,00,00,00,00,00,00,00,00,00,00,00,00,06,00,00,00,00,00,00,00,00,00,04,03,00,05,00,02],//11
	[01,10,00,00,00,00,00,00,00,17,00,00,00,00,18,00,00,00,00,00,00,00,00,04,01,01,00,00,00,01],//12
	[01,04,02,02,02,02,02,02,02,03,00,00,04,02,02,02,03,00,00,00,00,00,04,01,01,01,19,19,19,01],//13
	[01,01,01,01,01,01,01,01,01,01,00,00,01,01,01,01,01,00,00,00,04,02,01,01,01,01,02,02,02,01,] //14
];
}
else if (s==1){
key=false;
once=true;
mapchip.src = "./obj/tile.png";
map = [
//   -0-----------------------------1-----------------------------2--------------------------
//   -0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8
	[01,01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//00
	[01,01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//01
	[01,01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//02
	[01,01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//03
	[01,01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//04
	[01,01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//05
	[01,01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//06
	[01,01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//07
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//08
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,18,18,18,18,18,00,00,00,00,00,00,00,00,00,00],//09
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,18,00,00,00,18,00,00,00,00,00,00,00,00,00,00],//10
	[02,03,00,00,00,00,00,00,00,00,00,00,00,20,00,18,00,00,00,18,00,00,00,00,00,00,00,00,00,00],//11
	[01,01,06,00,00,00,00,00,00,00,00,00,00,00,00,18,00,08,00,18,00,06,00,00,09,00,00,06,00,00],//12
	[01,01,02,02,03,00,00,04,02,02,02,02,02,02,02,03,07,07,07,04,02,02,02,02,02,02,02,02,02,02],//13
	[01,01,01,01,01,00,00,01,01,01,01,01,01,01,01,01,00,00,00,01,01,01,01,01,01,01,01,01,01,01] //14
];
}
else if (s==2){
key=false
once=true;
cp = false;
espeed = 4;
mapchip.src = "./obj/tile.png";
map = [
//   -0-----------------------------1-----------------------------2--------------------------
//   -0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//00
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//01
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//02
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//03
	[08,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//04
	[05,05,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//05
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//06
	[00,00,00,00,05,05,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//07
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//08
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],//09
	[00,00,05,05,00,00,00,00,00,00,00,00,06,00,00,00,06,00,00,00,00,06,00,00,00,00,00,00,00,00],//10
	[00,00,00,00,00,00,00,00,00,07,00,00,18,00,17,00,20,00,17,17,00,18,00,07,00,00,00,00,00,00],//11
	[00,00,00,00,00,00,11,00,00,07,00,17,18,00,00,00,18,00,09,00,00,18,17,07,00,00,00,00,00,00],//12
	[02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02],//13
	[01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01] //14
];
}
else if (s==3){
key=false;
once=true;
espeed = 1;
mapchip.src = "./obj/tile.png";
map = [
//   -0-----------------------------1-----------------------------2--------------------------
//   -0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8--9--0--1--2--3--4--5--6--7--8
	[00,00,00,00,00,06,06,06,06,06,06,06,06,06,06,06,06,06,06,06,06,06,06,06,00,00,00,17,00,00],//00
	[00,00,00,00,00,13,13,13,13,06,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,17,00,00],//01
	[00,00,00,00,00,12,12,12,12,13,06,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,17,00,00],//02
	[00,00,00,00,00,12,12,12,12,12,13,06,00,00,00,19,00,00,00,00,00,00,00,00,00,00,00,17,00,00],//03
	[00,00,08,00,00,12,12,12,12,12,12,13,06,00,00,00,00,00,00,00,00,00,00,00,00,00,00,17,00,00],//04
	[00,00,00,00,00,12,12,12,12,12,12,12,13,06,05,05,05,05,05,05,05,06,00,00,00,00,00,17,00,00],//05
	[00,00,00,00,00,12,12,12,12,12,12,12,12,13,06,00,00,00,00,00,06,13,05,05,00,00,00,17,00,00],//06
	[00,00,00,00,00,12,12,12,12,12,12,12,12,12,07,06,00,00,00,06,13,12,00,00,00,00,00,17,00,00],//07
	[00,00,00,00,00,12,12,12,12,12,12,12,12,12,07,13,06,00,06,13,12,12,00,00,00,00,00,17,00,00],//08
	[00,00,00,00,00,12,12,12,12,12,12,12,12,12,07,12,13,06,13,12,12,12,00,00,00,00,00,17,00,00],//09
	[00,00,00,00,00,12,12,12,12,12,12,12,12,12,07,12,12,13,12,12,12,12,13,13,00,00,00,17,00,00],//10
	[00,00,00,00,00,12,12,12,12,12,12,12,12,12,07,12,12,12,12,12,12,12,12,12,00,00,00,17,00,00],//11
	[00,00,00,00,09,12,12,12,12,12,12,12,12,12,07,12,12,12,12,12,12,12,12,12,07,20,07,17,00,00],//12
	[02,02,02,02,02,12,12,12,12,12,12,12,12,12,07,12,12,12,12,12,12,12,12,12,02,02,02,02,02,02],//13
	[01,01,01,01,01,12,12,12,12,12,12,12,12,12,07,12,12,12,12,12,12,12,12,12,01,01,01,01,01,01] //14
];
}
else if (s==4){
once=true;
espeed = 1;
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
	[00,00,00,00,00,00,00,00,00,00,00,00,06,00,00,00,06,00,00,00,00,06,00,00,00,00,00,00,00,00],//10
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,20,00,09,00,00,00,00,00,00,00,00,00,00,00],//11
	[00,00,00,00,00,00,00,00,00,07,00,00,00,00,00,00,00,00,00,00,00,00,00,07,00,00,00,00,00,00],//12
	[02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02],//13
	[01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01] //14
];
}
else if (s==5){
once=true;
espeed = 1;
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
	[00,00,00,00,00,00,00,00,00,00,00,00,06,00,00,00,06,00,00,00,00,06,00,00,00,00,00,00,00,00],//10
	[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,09,00,00,00,00,00,00,00,00,00,00,00],//11
	[00,00,00,00,00,00,00,00,00,07,00,00,00,00,00,00,00,00,00,00,00,00,00,07,00,00,00,00,00,00],//12
	[02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02],//13
	[01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01] //14
];
}
}
/*Map*/


//-----------------------------------------------------------------------------------------------//
function start() {
if (cnt == 0) {
	startse = new Audio("./sud/se/tyouetu.mp3");
	gaov = new Audio("./sud/se/yattenai.mp3");
	getk = new Audio("./sud/se/oyaa.mp3");
	getc = new Audio("./sud/se/nanda.mp3");
	bgm = new Audio("./sud/bgm/超越神力.mp3");
	clear = new Audio("./sud/se/syoco.mp3");
	startse.play();
	document.getElementById("startbtn").remove();
	cnt = 1;
	starttimer();
	upd()
}
function upd(){
if (once) {bgm.play()}
ctx.drawImage(background,0,0,940,470);

player.src = "./obj/player.png";
ctx.drawImage(player,x,y,32,32);
enemy.src = "./obj/enemy.png";
ctx.drawImage(enemy,ex,ey,32,32);
enemy2.src = "./obj/enemy2.png";
ctx.drawImage(enemy2,ex2,ey2,32,32);

/*BLOCK*/
var bridgeX = new Array()
var bridgeY = new Array()
var spikeX = new Array()
var spikeY = new Array()
var blocksX = new Array()
var blocksY = new Array()
var waterX = new Array()
var waterY = new Array()
var sandX = new Array()
var sandY = new Array()
var jumperX = new Array()
var jumperY = new Array()
var ejumperX = new Array()
var ejumperY = new Array()
var ejumper2X = new Array()
var ejumper2Y = new Array()
var enemyX = new Array()
var enemyY = new Array()
var keyX = new Array()
var keyY = new Array()
var keyBX = new Array()
var keyBY = new Array()
var cpX = new Array()
var cpY = new Array()
for (var my=0; my<map.length; my++){for (var mx=0; mx<map[my].length; mx++){
/*dirt*/	if (map[my][mx] === 1) {ctx.drawImage( mapchip, 0, 0, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*grass1*/	if (map[my][mx] === 2) {ctx.drawImage( mapchip, 32, 0, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*grass2*/	if (map[my][mx] === 3) {ctx.drawImage( mapchip, 64, 0, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*grass3*/	if (map[my][mx] === 4) {ctx.drawImage( mapchip, 96, 0, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*bridge*/	if (map[my][mx] === 5) {ctx.drawImage( mapchip, 0, 32, 32, 32, 32*mx, 32*my, 32, 32 );bridgeX.push(mx*32);bridgeY.push(my*32)}
/*spikeS*/	if (map[my][mx] === 6) {ctx.drawImage( mapchip, 32, 32, 32, 32, 32*mx, 32*my, 32, 32 );spikeX.push(mx*32);spikeY.push(my*32)}
/*blockB*/	if (map[my][mx] === 7&&!key==true) {ctx.drawImage( mapchip, 64, 32, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*keyR*/	if (map[my][mx] === 8&&!key==true) {ctx.drawImage( mapchip, 0, 64, 32, 32, 32*mx, 32*my, 32, 32 );keyX.push(mx*32);keyY.push(my*32)}
/*enemy*/	if (map[my][mx] === 9&&once) {ex=32*mx, ey=32*my;}
/*player*/	if (map[my][mx] === 10&&once) {x=32*mx, y=32*my;}
/*-cp-*/	if (map[my][mx] === 11&&!cp==true) {ctx.drawImage( mapchip, 96, 32, 32, 32, 32*mx, 32*my, 32, 32 );cpX.push(mx*32);cpY.push(my*32)}
/*waterB*/	if (map[my][mx] === 12) {ctx.drawImage( mapchip, 160, 0, 32, 32, 32*mx, 32*my, 32, 32 );waterX.push(mx*32);waterY.push(my*32)}
/*waterT*/	if (map[my][mx] === 13) {ctx.drawImage( mapchip, 128, 0, 32, 32, 32*mx, 32*my, 32, 32 );waterX.push(mx*32);waterY.push(my*32)}
/*sandT*/	if (map[my][mx] === 14) {ctx.drawImage( mapchip, 192, 0, 32, 32, 32*mx, 32*my, 32, 32 );sandX.push(mx*32);sandY.push(my*32)}
/*sandB*/	if (map[my][mx] === 15) {ctx.drawImage( mapchip, 224, 0, 32, 32, 32*mx, 32*my, 32, 32 );sandX.push(mx*32);sandY.push(my*32)}
/*jumper*/	if (map[my][mx] === 16) {ctx.drawImage( mapchip, 128, 32, 32, 32, 32*mx, 32*my, 32, 32 );jumperX.push(mx*32);jumperY.push(my*32)}
/*blockR*/	if (map[my][mx] === 17&&key==true) {ctx.drawImage( mapchip, 192, 32, 32, 32, 32*mx, 32*my, 32, 32 );blocksX.push(mx*32);blocksY.push(my*32)}
/*spikeR*/	if (map[my][mx] === 18&&key==true) {ctx.drawImage( mapchip, 160, 32, 32, 32, 32*mx, 32*my, 32, 32 );spikeX.push(mx*32);spikeY.push(my*32)}
/*keyb*/	if (map[my][mx] === 19&&key==true) {ctx.drawImage( mapchip, 32, 64, 32, 32, 32*mx, 32*my, 32, 32 );keyBX.push(mx*32);keyBY.push(my*32)}
/*enemy2*/	if (map[my][mx] === 20&&once) {ex2=32*mx, ey2=32*my;}
/*jumperE*/	if (map[my][mx] === 21) {ctx.drawImage( mapchip, 32, 0, 32, 32, 32*mx, 32*my, 32, 32 );ejumperX.push(mx*32);ejumperY.push(my*32)}
/*jumper2E*/	if (map[my][mx] === 21) {ctx.drawImage( mapchip, 32, 0, 32, 32, 32*mx, 32*my, 32, 32 );ejumper2X.push(mx*32);ejumper2Y.push(my*32)}
}}
/*BLOCK*/

if (inkey[39]) {x=x+xspeed}
if (inkey[37]) {x=x-xspeed}
if (inkey[32]&&!jump) {vy=-jumpheight;jump=true}

/*key*/
for (var i=0;i<keyY.length;i++) {
	if (
	y+32>keyY[i]&&
	y<keyY[i]&&
	x<keyX[i]+30&&
	x>keyX[i]-30
	) {key=true;getk.play()}
	else if (
	y>keyY[i]&&
	y-32<keyY[i]&&
	x<keyX[i]+30&&
	x>keyX[i]-30
	) {key=true;getk.play()}
}
for (var i=0;i<keyX.length;i++) {
if (x>keyX[i]-32&&keyX[i]>x&&y>keyY[i]-32&&keyY[i]+32>y) {key=true;getk.play()}
else if (x>keyX[i]&&keyX[i]+32>x&&y>keyY[i]-32&&keyY[i]+32>y) {key=true;getk.play()}
}
/*key*/

/*keyB*/
for (var i=0;i<keyBY.length;i++) {
	if (
	y+32>keyBY[i]&&
	y<keyBY[i]&&
	x<keyBX[i]+30&&
	x>keyBX[i]-30
	) {key=false;getk.play()}
	else if (
	y>keyBY[i]&&
	y-32<keyBY[i]&&
	x<keyBX[i]+30&&
	x>keyBX[i]-30
	) {key=false;getk.play()}
}
for (var i=0;i<keyBX.length;i++) {
if (x>keyBX[i]-32&&keyBX[i]>x&&y>keyBY[i]-32&&keyBY[i]+32>y) {key=false;getk.play()}
else if (x>keyBX[i]&&keyBX[i]+32>x&&y>keyBY[i]-32&&keyBY[i]+32>y) {key=false;getk.play()}
}
/*keyB*/

/*cp*/
for (var i=0;i<cpY.length;i++) {
	if (
	y+32>cpY[i]&&
	y<cpY[i]&&
	x<cpX[i]+30&&
	x>cpX[i]-30
	) {cp=true;savecp()}
	else if (
	y>cpY[i]&&
	y-32<cpY[i]&&
	x<cpX[i]+30&&
	x>cpX[i]-30
	) {cp=true;savecp()}
}

for (var i=0;i<cpX.length;i++) {
if (x>cpX[i]-32&&cpX[i]>x&&y>cpY[i]-32&&cpY[i]+32>y) {cp=true;savecp()}
else if (x>cpX[i]&&cpX[i]+32>x&&y>cpY[i]-32&&cpY[i]+32>y) {cp=true;savecp()}
}
/*cp*/

/*block*/
jump=true
for (var i=0;i<blocksY.length;i++) {
	if (
	!inkey[32]&&
	y+32.001>blocksY[i]&&
	y<blocksY[i]&&
	x<blocksX[i]+30&&
	x>blocksX[i]-30
	) {y=blocksY[i]-32;jump=false}
	else if (
	y+32>blocksY[i]&&
	y<blocksY[i]&&
	x<blocksX[i]+30&&
	x>blocksX[i]-30
	) {y=blocksY[i]-32;jump=false}
	else if (
	y>blocksY[i]&&
	y-32<blocksY[i]&&
	x<blocksX[i]+30&&
	x>blocksX[i]-30
	) {y=blocksY[i]+32;vy=0}
}

for (var i=0;i<blocksX.length;i++) {
if (x>blocksX[i]-32&&blocksX[i]>x&&y>blocksY[i]-32&&blocksY[i]+32>y) {x=blocksX[i]-32}
else if (x>blocksX[i]&&blocksX[i]+32>x&&y>blocksY[i]-32&&blocksY[i]+32>y) {x=blocksX[i]+32}
}

/*water*/
for (var i=0;i<waterY.length;i++) {
	if (
	inkey[32]&&
	y+32>waterY[i]&&
	y<waterY[i]&&
	x<waterX[i]+30&&
	x>waterX[i]-30
	) {y=y-0.3;vy=-3;jump=false}
}
for (var i=0;i<waterX.length;i++) {
if (inkey[32]&&x>waterX[i]-32&&waterX[i]>x&&y>waterY[i]-32&&waterY[i]+32>y) {y=y-0.3;vy=-3;jump=false}
else if (inkey[32]&&x>waterX[i]&&waterX[i]+32>x&&y>waterY[i]-32&&waterY[i]+32>y) {y=y-0.3;vy=-3;jump=false}
}
/*water*/

/*sand*/
for (var i=0;i<sandY.length;i++) {
	if (
	y+32>sandY[i]&&
	y<sandY[i]&&
	x<sandX[i]+30&&
	x>sandX[i]-30
	) {y=y+0.3;vy=+0.1;jump=true}
}
for (var i=0;i<sandX.length;i++) {
if (x>sandX[i]-32&&sandX[i]>x&&y>sandY[i]-32&&sandY[i]+32>y) {y=y+0.3;vy=+0.1;jump=true}
else if (x>sandX[i]&&sandX[i]+32>x&&y>sandY[i]-32&&sandY[i]+32>y) {y=y+0.3;vy=+0.1;jump=true}
}
/*sand*/

/*jumper*/
for (var i=0;i<jumperY.length;i++) {
	if (
	y+32>jumperY[i]&&
	y<jumperY[i]&&
	x<jumperX[i]+30&&
	x>jumperX[i]-30
	) {y=y-0.3;vy=-3;jump=true}
}
for (var i=0;i<jumperX.length;i++) {
if (x>jumperX[i]-32&&jumperX[i]>x&&y>jumperY[i]-32&&jumperY[i]+32>y) {y=y-0.3;vy=-3;jump=true}
else if (x>jumperX[i]&&jumperX[i]+32>x&&y>jumperY[i]-32&&jumperY[i]+32>y) {y=y-0.3;vy=-3;jump=true}
}
/*jumper*/

/*ejumper*/
for (var i=0;i<ejumperY.length;i++) {
	if (
	ey+32>ejumperY[i]&&
	ey<ejumperY[i]&&
	ex<ejumperX[i]+30&&
	ex>ejumperX[i]-30
	) {ey=ey-0.3;evy=-3;ejump=true}
}
for (var i=0;i<ejumperX.length;i++) {
if (ex>ejumperX[i]-32&&ejumperX[i]>ex&&ey>ejumperY[i]-32&&ejumperY[i]+32>ey) {ey=ey-0.3;evy=-3;ejump=true}
else if (ex>ejumperX[i]&&ejumperX[i]+32>ex&&ey>ejumperY[i]-32&&ejumperY[i]+32>ey) {ey=ey-0.3;evy=-3;ejump=true}
}
/*ejumper*/

/*ejumper2*/
for (var i=0;i<ejumper2Y.length;i++) {
	if (
	ey2+32>ejumper2Y[i]&&
	ey2<ejumper2Y[i]&&
	ex2<ejumper2X[i]+30&&
	ex2>ejumper2X[i]-30
	) {ey2=ey2-0.3;evy2=-3;ejump2=true}
}
for (var i=0;i<ejumper2X.length;i++) {
if (ex2>ejumper2X[i]-32&&ejumper2X[i]>ex2&&ey2>ejumper2Y[i]-32&&ejumper2Y[i]+32>ey2) {ey2=ey2-0.3;evy2=-3;ejump2=true}
else if (ex2>ejumper2X[i]&&ejumper2X[i]+32>ex2&&ey2>ejumper2Y[i]-32&&ejumper2Y[i]+32>ey2) {ey2=ey2-0.3;evy2=-3;ejump2=true}
}
/*ejumper2*/

/*Eblock*/
ejump=true
for (var i=0;i<blocksY.length;i++) {
	if (
	ey+32.001>blocksY[i]&&
	ey<blocksY[i]&&
	ex<blocksX[i]+30&&
	ex>blocksX[i]-30
	) {ey=blocksY[i]-32;ejump=false}
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

/*Espike*/
for (var i=0;i<spikeY.length;i++) {
	if (
	ey+32.001>spikeY[i]&&
	ey<spikeY[i]&&
	ex<spikeX[i]+30&&
	ex>spikeX[i]-30
	) {ey=spikeY[i]-32;ejump=false}
	else if (
	ey>spikeY[i]&&
	ey-32<spikeY[i]&&
	ex<spikeX[i]+30&&
	ex>spikeX[i]-30
	) {ey=spikeY[i]+32;evy=0}
}

for (var i=0;i<spikeX.length;i++) {
if (ex>spikeX[i]-32&&spikeX[i]>ex&&ey>spikeY[i]-32&&spikeY[i]+32>ey) {if (turn==1){turn=0} else {turn=1}}
else if (ex>spikeX[i]&&spikeX[i]+32>ex&&ey>spikeY[i]-32&&spikeY[i]+32>ey) {if (turn==1){turn=0} else {turn=1}}
}
/*Espike*/

/*bridge*/
for (var i=0;i<bridgeY.length;i++) {
	if (
	!inkey[32]&&
	y+32.001>bridgeY[i]&&
	y<bridgeY[i]&&
	x<bridgeX[i]+30&&
	x>bridgeX[i]-30
	) {y=bridgeY[i]-32;jump=false}
	else if (
	y+32>bridgeY[i]&&
	y<bridgeY[i]&&
	x<bridgeX[i]+30&&
	x>bridgeX[i]-30
	) {y=bridgeY[i]-32;jump=false}
}
/*bridge*/

/*spike*/
for (var i=0;i<spikeY.length;i++) {
	if (
	y+32>spikeY[i]&&
	y<spikeY[i]&&
	x<spikeX[i]+30&&
	x>spikeX[i]-30
	) {game=0}
	else if (
	y>spikeY[i]&&
	y-32<spikeY[i]&&
	x<spikeX[i]+30&&
	x>spikeX[i]-30
	) {game=0}
}

for (var i=0;i<spikeX.length;i++) {
if (x>spikeX[i]-32&&spikeX[i]>x&&y>spikeY[i]-32&&spikeY[i]+32>y) {game=0}
else if (x>spikeX[i]&&spikeX[i]+32>x&&y>spikeY[i]-32&&spikeY[i]+32>y) {game=0}
}
/*spike*/

/*enemy*/
if (
y+32>ey&&
y<ey&&
x<ex+30&&
x>ex-30
) {game=0}
else if (
y>ey&&
y-32<ey&&
x<ex+30&&
x>ex-30
) {game=0}
if (x>ex-32&&ex>x&&y>ey-32&&ey+32>y) {game=0}
else if (x>ex&&ex+32>x&&y>ey-32&&ey+32>y) {game=0}
/*enemy*/

/*enemy2*/
if (
y+32>ey2&&
y<ey2&&
x<ex2+30&&
x>ex2-30
) {game=0}
else if (
y>ey2&&
y-32<ey2&&
x<ex2+30&&
x>ex2-30
) {game=0}
if (x>ex2-32&&ex2>x&&y>ey2-32&&ey2+32>y) {game=0}
else if (x>ex2&&ex2+32>x&&y>ey2-32&&ey2+32>y) {game=0}
/*enemy2*/


if (jump) {y=y+vy;vy=vy+0.05}
if (ejump) {ey=ey+evy;evy=evy+0.05}
if (ejump2) {ey2=ey2+evy2;evy2=evy2+0.05}

if (turn==1) {ex=ex+espeed} else if (turn==0) {ex=ex-espeed}
if (turn2==1) {ex2=ex2+espeed2} else if (turn2==0) {ex2=ex2-espeed2}

once=false


if (y>940) {game=0;}


if (x>940&&5>screen) {screen++;x=0;makemap(screen)} else if (x>940){game=2}
if (x<0) {x=0}

if (game==1) {window.requestAnimationFrame(upd)};
/*GAMEOVER*/
if (game==0) {bgm.pause();gaov.play();document.getElementById("TEXT").innerHTML = "ゲームオーバー";document.getElementById("cplo").remove();}
/*GAMEOVER*/
if (game==2) {bgm.pause();clear.play();document.getElementById("TEXT").innerHTML = "クリア Time["+time+"]";}
};
};

function savecp() {
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
	cex2 = ex2;
	cey2 = ey2;
	ces2 = espeed2;
	cet2 = turn2;
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
	ex2 = cex2;
	ey2 = cey2;
	espeed2 = ces2;
	turn2 = cet2;
	document.getElementById("TEXT").innerHTML = "";
	game = 1;
	makemap(screen)
}


function starttimer() {
	function s1(){
		time++;
		document.getElementById("timer").innerHTML = "time["+time+"]";
		console.log(time)
		setTimeout(s1,1000)
	}
	s1();
}