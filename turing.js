var tape = ["_","_","_"];
var headLocation = 0;
var currentSymbol = tape[headLocation];

function moveLeft() {
	if (headLocation == 0) {
		tape.unshift("_");
	}
	else {
		headLocation--;
	}
	getCurrentSymbol();
	draw();
}

function moveRight() {
	if (headLocation == tape.length-1) {
		tape.push("_");
	}
	headLocation++;
	getCurrentSymbol();
	draw();
}

function writeOne() {
	tape[headLocation] = 1;
	getCurrentSymbol();
	draw();
}

function writeZero() {
	tape[headLocation] = 0;
	getCurrentSymbol();
	draw();
}

function erase() {
	tape[headLocation] = "_";
	getCurrentSymbol();
	draw();
}

function getCurrentSymbol() {
	currentSymbol = tape[headLocation];
}

function draw() {
	var tapeObj = document.getElementById("tape");
	tapeObj.innerHTML = "";
	for (var i in tape) {
			if (i == headLocation) {
				tapeObj.innerHTML += "<td class='head-square'>"
							+ tape[i] + "</td>";
			}
			else {
				tapeObj.innerHTML += "<td class='square'>"
							+ tape[i] + "</td>";
			}
	}
	
}

window.onload = draw;
