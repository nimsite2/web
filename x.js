function X(){
if(!codeedit){
document.getElementsByTagName("html")[0].innerHTML=`<textarea style='background-color:black;color:lime;border:none;width:100%;height:90vh;margin:0px;padding:2px;'>`+document.documentElement.outerHTML.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#039;').replace(/</g,'&lt;').replace(/>/g,'&gt;');+`</textarea>`
codeedit = true;
} else if (codeedit){
document.getElementsByTagName("html")[0].innerHTML=document.getElementsByTagName("textarea")[0].value
codeedit = false;
}
}
