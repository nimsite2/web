window.addEventListener("keydown", keyd)
window.addEventListener("keyup", keyu)
var inkey = new Array();
function keyd(e) {inkey[e.keyCode] = true;if (inkey[76]) {looptime()};if (inkey[79]) {start()};if (inkey[67]) {clearlife()}}
function keyu(e) {inkey[e.keyCode] = false}

function chli() {
	w = document.getElementById("width").value
	h = document.getElementById("height").value
	px = document.getElementById("px").value
	window.location.href = 'index.html?w='+w+'&h='+h+'&px='+px;
}
var colorlist = ["lime","red"]
var randc = Math.floor(Math.random()*2);
var color = colorlist[randc]
document.getElementById("color").style.backgroundColor = color
function chcolor() {
	if (color=="lime") {color="red"} else {color = "lime"}
	document.getElementById("color").style.backgroundColor = color
}


document.getElementById("twop").checked = false;
var battle = false;
function twop() {
	if (!battle) {battle=true} else {battle=false}
}

function count() {
var redc = 0;
var limec = 0;
for (var i=0;i<w;i++){
	for (var j=0;j<h;j++) {
		var blocks = document.getElementById(i+":"+j)
		if (blocks.style.backgroundColor == "red") {
			redc++
		}else if (blocks.style.backgroundColor == "lime"){
			limec++
		}
}
}
document.getElementById("redVSlime").innerHTML = "[RED:"+redc+"][LIME:"+limec+"]"
}



var seru = document.getElementsByTagName('th');
for (var i=0;i<seru.length;i++){
seru[i].style.width = px+'px';
seru[i].style.height= px+'px';
}


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


function start() {
var si = new Array();
var sj = new Array();
var sni = new Array();
var snj = new Array();
for (var i=0;i<w;i++){
	for (var j=0;j<h;j++) {
		var blocks = document.getElementById(i+":"+j)
		if (blocks.style.backgroundColor == color) {
			var blocnt = 0;
			var blocks1 = document.getElementById(String(parseInt(i+1))+":"+j)
			if (blocks1!=null&&blocks1.style.backgroundColor == color) {blocnt++}
			var blocks2 = document.getElementById(String(parseInt(i-1))+":"+j)
			if (blocks2!=null&&blocks2.style.backgroundColor == color) {blocnt++}
			var blocks3 = document.getElementById(i+":"+String(parseInt(j+1)))
			if (blocks3!=null&&blocks3.style.backgroundColor == color) {blocnt++}
			var blocks4 = document.getElementById(i+":"+String(parseInt(j-1)))
			if (blocks4!=null&&blocks4.style.backgroundColor == color) {blocnt++}
			var blocks5 = document.getElementById(String(parseInt(i+1))+":"+String(parseInt(j+1)))
			if (blocks5!=null&&blocks5.style.backgroundColor == color) {blocnt++}
			var blocks6 = document.getElementById(String(parseInt(i-1))+":"+String(parseInt(j-1)))
			if (blocks6!=null&&blocks6.style.backgroundColor == color) {blocnt++}
			var blocks7 = document.getElementById(String(parseInt(i-1))+":"+String(parseInt(j+1)))
			if (blocks7!=null&&blocks7.style.backgroundColor == color) {blocnt++}
			var blocks8 = document.getElementById(String(parseInt(i+1))+":"+String(parseInt(j-1)))
			if (blocks8!=null&&blocks8.style.backgroundColor == color) {blocnt++}
			if (blocnt<=1||blocnt>=4){
				sni.push(i)
				snj.push(j)
			} else if (blocnt==2||blocnt==3) {
				si.push(i)
				sj.push(j)
			}
		}
		else {
			var blocnt2 = 0;
			var blocks21 = document.getElementById(String(parseInt(i+1))+":"+j)
			if (blocks21!=null&&blocks21.style.backgroundColor == color) {blocnt2++}
			var blocks22 = document.getElementById(String(parseInt(i-1))+":"+j)
			if (blocks22!=null&&blocks22.style.backgroundColor == color) {blocnt2++}
			var blocks23 = document.getElementById(i+":"+String(parseInt(j+1)))
			if (blocks23!=null&&blocks23.style.backgroundColor == color) {blocnt2++}
			var blocks24 = document.getElementById(i+":"+String(parseInt(j-1)))
			if (blocks24!=null&&blocks24.style.backgroundColor == color) {blocnt2++}
			var blocks25 = document.getElementById(String(parseInt(i+1))+":"+String(parseInt(j+1)))
			if (blocks25!=null&&blocks25.style.backgroundColor == color) {blocnt2++}
			var blocks26 = document.getElementById(String(parseInt(i-1))+":"+String(parseInt(j-1)))
			if (blocks26!=null&&blocks26.style.backgroundColor == color) {blocnt2++}
			var blocks27 = document.getElementById(String(parseInt(i-1))+":"+String(parseInt(j+1)))
			if (blocks27!=null&&blocks27.style.backgroundColor == color) {blocnt2++}
			var blocks28 = document.getElementById(String(parseInt(i+1))+":"+String(parseInt(j-1)))
			if (blocks28!=null&&blocks28.style.backgroundColor == color) {blocnt2++}
			if (blocnt2==3) {
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
if(battle){chcolor()};
if (loop) {setTimeout(start,50)}
}

var loop=false
function looptime() {
	randc = Math.floor(Math.random()*2);
	color = colorlist[randc]
	if (!loop) {loop=true;start();} else {loop=false}
	var text = document.getElementById("moveloop")
	if (loop) {text.value = "とめる"}
	if (!loop) {text.value = "動かす"}
}

function clearlife() {
	for (var i=0;i<w;i++){
		for (var j=0;j<h;j++) {
			var blocks = document.getElementById(i+":"+j)
			blocks.style.backgroundColor="black";
		}}
}