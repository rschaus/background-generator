
var css = document.querySelector("h3");

var color1 = document.querySelector(".color1");

var color2 = document.querySelector(".color2");

var body = document.getElementById("gradient");

var result = document.getElementById("result");

let colorResult = document.getElementById("result");

function changeColor() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value
		+ ", " 
		+ color2.value 
		+ ")";
	css.textContent = body.style.background + ";";

}

color1.addEventListener("input", changeColor)

color2.addEventListener("input", changeColor)

function copyColorBtn() {
	var length = colorResult.innerText.length;
	if (length > 0) {
		var btn = document.createElement("button");
   	 	btn.appendChild(document.createTextNode("Copy!"));
    	body.appendChild(btn);
		}
	}		

css.addEventListener("mouseenter", copyColorBtn, {once : true}) 