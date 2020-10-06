var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'

var current = 0;

function change_color(id){
	console.log("click!");
	console.log(document.body.classList[0])
	if(current != 0){
		var pp = document.getElementById(current);
		//pp.style.backgroundColor = 'white';
		//pp.style.color = 'black';
		pp.style="";
		
	}
	var dd = document.getElementById(id);
	//dd.innerHTML = '#000000';
	//dd.style.backgroundColor = '#000000';
	//dd.style.color = 'white';
	var theme_name = document.body.classList[0];
	element = document.querySelector('.'+theme_name)
	style = getComputedStyle(element)
	console.log(style.getPropertyValue("--text"))
	//var bb = document.getElementsByTagName("BODY");
	//style = window.getComputedStyle(bb);
	//console.log(style.getPropertyValue('color'));
	dd.style.backgroundColor = style.getPropertyValue("--box");
	dd.style.color = style.getPropertyValue("--text");
	current = id;
}

input.addEventListener("keyup", event => {
  // console.log(event.keyCode)
  if (event.keyCode === 13 && event.target.value !== "") {

    var pp = document.getElementById(current);
	console.log(event.target.value)
	//pp.innerHTML += "<br>";
	//pp.innerHTML += event.target.value;
	//console.log(color.value);
	//pp.style.color = color.value;
	var para = document.createElement("div");
	var node = document.createTextNode(event.target.value);
	para.appendChild(node);
	para.style.color = color.value;
	pp.appendChild(para);
    event.target.value = "";
  }
});

function add_note(){
	var pp = document.getElementById(current);
	console.log(input.value)
	var para = document.createElement("div");
	var node = document.createTextNode(input.value);
	para.appendChild(node);
	para.style.color = color.value;
	pp.appendChild(para);
	input.value = "";
}




//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}