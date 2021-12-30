var dlugosc = 0;
var anime1Cost = 1;

function walenie(amount){
	dlugosc = dlugosc + amount;
	document.getElementById("dlugosc").innerHTML = dlugosc;
}

function chodzi(){
	alert("Musisz powiększyć swojego chuja poprzez ruchanie anime dziewczynek")
}

function anime1Kupno(){
	if (dlugosc >= anime1Cost){
		dlugosc = dlugosc - anime1Cost;
		
		document.getElementById("dlugosc").innerHTML = dlugosc;
		document.getElementById("anime1cost").innerHTML = anime1Cost;
	}
}

var tImg = ['img/malychuj.png','img/duzychuj.png'];
        
var vImg = true;
function fSetImg(){
    if (vImg){
        document.getElementById('iImg').src = tImg[1];
        vImg = false;
    }  
}

