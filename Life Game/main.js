window.addEventListener("keydown", keyd)
window.addEventListener("keyup", keyu)
var inkey = new Array();
function keyd(e) {inkey[e.keyCode] = true;if (inkey[76]) {looptime()};if (inkey[79]) {start()};if (inkey[67]) {clearlife()};if (inkey[84]) {chcolor()};if (inkey[74]) {chpx(px--)};if (inkey[75]) {chpx(px++)}}
function keyu(e) {inkey[e.keyCode] = false}

document.getElementById("width").value = w;
document.getElementById("height").value = h;
document.getElementById("px").value = px;

function chli() {
	w = document.getElementById("width").value
	h = document.getElementById("height").value
	px = document.getElementById("px").value
	window.location.href = 'index.html?w='+w+'&h='+h+'&px='+px;
}
var colorlist = ["lime","red","blue"]
var randc = Math.floor(Math.random()*colorlist.length);
var color = colorlist[randc]


document.getElementById("color").style.backgroundColor = color


function chcolor() {
	randc++
	if (randc>=colorlist.length) {randc=0}
	color = colorlist[randc]
	document.getElementById("color").style.backgroundColor = color
}


document.getElementById("twop").checked = false;
var battle = false;
function twop() {
	if (!battle) {battle=true} else {battle=false}
}


var counter = false;
function countstart() {
if (counter) {counter=false} else {counter=true}
count();
}



function count() {
var redc = 0;
var limec = 0;
var bluec = 0;
for (var i=0;i<h;i++){
	for (var j=0;j<w;j++) {
		var blocks = document.getElementById(i+":"+j)
		if (blocks.style.backgroundColor == "red") {
			redc++
		}else if (blocks.style.backgroundColor == "lime"){
			limec++
		}else if (blocks.style.backgroundColor == "blue"){
			bluec++
		}
}
}
document.getElementById("redVSlime").innerHTML = "<font color='red'>[RED:"+redc+"]</font><font color='lime'>[LIME:"+limec+"]</font><font color='blue'>[BLUE:"+bluec+"]</font>"
if (counter) {document.getElementById("counter").style.color = "red"} else {document.getElementById("counter").style.color = "white";document.getElementById("redVSlime").innerHTML = "";}
if (counter) {setTimeout(count,100)}
}



var seru = document.getElementsByTagName('th');
function chpx(px){
document.getElementById("px").value = px;
document.getElementById("chpx").value = px;
for (var i=0;i<seru.length;i++){
seru[i].style.width = px+'px';
seru[i].style.height= px+'px';
}
}
document.getElementById("chpx").value = px;
chpx(px);


var inmou = false
window.addEventListener("mousedown",moud)
window.addEventListener("mouseup",mouu)
function moud() {inmou=true}
function mouu() {inmou=false}

function tclick(i,j) {
var blocks = document.getElementById(i+":"+j)
if (blocks.style.backgroundColor==color) {
blocks.style.backgroundColor = 'black';
} else {
blocks.style.backgroundColor = color;
}
}
document.getElementById("tpc").checked = false;
var tp=false
function tpc(){
	if (tp) {tp=false} else {tp=true}
}

function start() {
var si = new Array();
var sj = new Array();
var sni = new Array();
var snj = new Array();
for (var i=0;i<h;i++){
	for (var j=0;j<w;j++) {
		var blocks = document.getElementById(i+":"+j)
			var blocnt = 0;
			var ti = i-1;
			if(tp&&ti<0){ti=h-1}
			var blocksp = document.getElementById(ti+":"+j)
			if (blocksp!=null&&blocksp.style.backgroundColor == color) {blocnt++}
			var ti = i+1;
			if(tp&&ti>=h){ti=0}
			var blocksp = document.getElementById(ti+":"+j)
			if (blocksp!=null&&blocksp.style.backgroundColor == color) {blocnt++}
			var tj = j+1;
			if(tp&&tj>=w){tj=0}
			var blocksp = document.getElementById(i+":"+tj)
			if (blocksp!=null&&blocksp.style.backgroundColor == color) {blocnt++}
			var tj = j-1;
			if(tp&&tj<0){tj=w-1}
			var blocksp = document.getElementById(i+":"+tj)
			if (blocksp!=null&&blocksp.style.backgroundColor == color) {blocnt++}
			var ti = i+1;
			if(tp&&ti>=h){ti=0}
			var tj = j+1;
			if(tp&&tj>=w){tj=0}
			var blocksp = document.getElementById(ti+":"+tj)
			if (blocksp!=null&&blocksp.style.backgroundColor == color) {blocnt++}
			var ti = i+1;
			if(tp&&ti>=h){ti=0}
			var tj = j-1;
			if(tp&&tj<0){tj=w-1}
			var blocksp = document.getElementById(ti+":"+tj)
			if (blocksp!=null&&blocksp.style.backgroundColor == color) {blocnt++}
			var ti = i-1;
			if(tp&&ti<0){ti=h-1}
			var tj = j+1;
			if(tp&&tj>=w){tj=0}
			var blocksp = document.getElementById(ti+":"+tj)
			if (blocksp!=null&&blocksp.style.backgroundColor == color) {blocnt++}
			var ti = i-1;
			if(tp&&ti<0){ti=h-1}
			var tj = j-1;
			if(tp&&tj<0){tj=w-1}
			var blocksp = document.getElementById(ti+":"+tj)
			if (blocksp!=null&&blocksp.style.backgroundColor == color) {blocnt++}

		if (blocks.style.backgroundColor == color) {
			if (blocnt<=1||blocnt>=4){
				sni.push(i)
				snj.push(j)
			} else if (blocnt==2||blocnt==3) {
				si.push(i)
				sj.push(j)
			}
		}
		else {
			if (blocnt==3) {
				si.push(i)
				sj.push(j)
			}
		}
		}
	}
for (var i=0;i<si.length;i++){
	var blocks = document.getElementById(si[i]+":"+sj[i])
	blocks.style.backgroundColor = color
}
for (var i=0;i<sni.length;i++){
	var blocks = document.getElementById(sni[i]+":"+snj[i])
	blocks.style.backgroundColor = "black"
}
if (battle&&loop) {
	chcolor()
	setTimeout(start,50/colorlist.length)
}else if (loop) {
	setTimeout(start, 50)
}
	document.getElementById("color").style.backgroundColor = color
}




var loop=false
function looptime() {
	if (battle) {
	randc = Math.floor(Math.random()*colorlist.length);
	color = colorlist[randc]
}
	if (!loop) {loop=true;start();} else {loop=false}
	var text = document.getElementById("moveloop")

	if (loop) {text.value = "とめる"}
	if (!loop) {text.value = "動かす"}
}

function clearlife() {
	for (var i=0;i<h;i++){
		for (var j=0;j<w;j++) {
			var blocks = document.getElementById(i+":"+j)
			blocks.style.backgroundColor="black";
		}}
}
