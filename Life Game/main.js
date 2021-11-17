

function chli() {
	w = document.getElementById("width").value
	h = document.getElementById("height").value
	window.location.href = 'index.html?w='+w+'&h='+h;
}



function tclick(i,j) {
var blocks = document.getElementById(i+":"+j)
if (blocks.style.backgroundColor=='lime') {
blocks.style.backgroundColor = 'black';
} else {
blocks.style.backgroundColor = 'lime';
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
		if (i>=2&&j>=2&&i<=w-2&&j<=h-2&&blocks.style.backgroundColor == 'lime') {
			var blocnt = 0;
			var blocks1 = document.getElementById(String(parseInt(i+1))+":"+j)
			if (blocks1.style.backgroundColor == 'lime') {blocnt++}
			var blocks2 = document.getElementById(String(parseInt(i-1))+":"+j)
			if (blocks2.style.backgroundColor == 'lime') {blocnt++}
			var blocks3 = document.getElementById(i+":"+String(parseInt(j+1)))
			if (blocks3.style.backgroundColor == 'lime') {blocnt++}
			var blocks4 = document.getElementById(i+":"+String(parseInt(j-1)))
			if (blocks4.style.backgroundColor == 'lime') {blocnt++}
			var blocks5 = document.getElementById(String(parseInt(i+1))+":"+String(parseInt(j+1)))
			if (blocks5.style.backgroundColor == 'lime') {blocnt++}
			var blocks6 = document.getElementById(String(parseInt(i-1))+":"+String(parseInt(j-1)))
			if (blocks6.style.backgroundColor == 'lime') {blocnt++}
			var blocks7 = document.getElementById(String(parseInt(i-1))+":"+String(parseInt(j+1)))
			if (blocks7.style.backgroundColor == 'lime') {blocnt++}
			var blocks8 = document.getElementById(String(parseInt(i+1))+":"+String(parseInt(j-1)))
			if (blocks8.style.backgroundColor == 'lime') {blocnt++}
			if (blocnt<=1||blocnt>=4){
				sni.push(i)
				snj.push(j)
			} else if (blocnt==2||blocnt==3) {
				si.push(i)
				sj.push(j)
			}
		}
		if (i>=2&&j>=2&&i<=w-2&&j<=h-2) {
			var blocnt2 = 0;
			var blocks21 = document.getElementById(String(parseInt(i+1))+":"+j)
			if (blocks21.style.backgroundColor == 'lime') {blocnt2++}
			var blocks22 = document.getElementById(String(parseInt(i-1))+":"+j)
			if (blocks22.style.backgroundColor == 'lime') {blocnt2++}
			var blocks23 = document.getElementById(i+":"+String(parseInt(j+1)))
			if (blocks23.style.backgroundColor == 'lime') {blocnt2++}
			var blocks24 = document.getElementById(i+":"+String(parseInt(j-1)))
			if (blocks24.style.backgroundColor == 'lime') {blocnt2++}
			var blocks25 = document.getElementById(String(parseInt(i+1))+":"+String(parseInt(j+1)))
			if (blocks25.style.backgroundColor == 'lime') {blocnt2++}
			var blocks26 = document.getElementById(String(parseInt(i-1))+":"+String(parseInt(j-1)))
			if (blocks26.style.backgroundColor == 'lime') {blocnt2++}
			var blocks27 = document.getElementById(String(parseInt(i-1))+":"+String(parseInt(j+1)))
			if (blocks27.style.backgroundColor == 'lime') {blocnt2++}
			var blocks28 = document.getElementById(String(parseInt(i+1))+":"+String(parseInt(j-1)))
			if (blocks28.style.backgroundColor == 'lime') {blocnt2++}
			if (blocnt2==3) {
				si.push(i)
				sj.push(j)
			}
		}
		}
	}
for (var i=0;i<si.length;i++){
	var blocks = document.getElementById(si[i]+":"+sj[i])
	blocks.style.backgroundColor = "lime"
}
for (var i=0;i<sni.length;i++){
	var blocks = document.getElementById(sni[i]+":"+snj[i])
	blocks.style.backgroundColor = "black"
}
if (loop) {setTimeout(start,50)}
}

var loop=false
function looptime() {
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