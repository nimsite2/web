var an = document.getElementById("An");

function btnclick(num){
an.value+=num;
};

function ic() {
	an.value = an.value.replace('×','*');
	an.value = an.value.replace('÷','/');
	an.value = eval(an.value);
};

function cls(){
	an.value = '';
};

