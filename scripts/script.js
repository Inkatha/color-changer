var easyMode = 3;
var hardMode = 6;

var colors = generateRandomColors(hardMode);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Display = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(colors.length);
	resetColors(colors.length);
});

//
easyButton.addEventListener("click", function() {
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors = generateRandomColors(easyMode);
	resetColors(easyMode);
	for (var i = easyMode; i < squares.length; i++) {
		squares[i].style.display = "none";
	}
});

hardButton.addEventListener("click", function() {
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	colors = generateRandomColors(hardMode);
	resetColors(hardMode);
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "";
	}
});

colorDisplay.textContent = pickedColor;
function init() {
	for (var i = 0; i < squares.length; i++) {
		//add initial colors to squares
		squares[i].style.background = colors[i];

		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked square
			var clickedColor = this.style.background;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!"
				h1Display.style.background = clickedColor;
				changeColors(clickedColor);
				resetButton.textContent = "Play Again?";
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again?";
			}
		});
	}
}

function resetColors(num) {
	//pick a new random color from array
	pickedColor = pickColor();
	//updates displayto reflect the new color
	colorDisplay.textContent = pickedColor;
	//change colors of squares on the page
	for (var i = 0; i < num; i++) {
		squares[i].style.background = colors[i];
	}
	h1Display.style.background = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var randomNum = Math.floor(Math.random() * colors.length);
	return colors[randomNum];
}

function generateRandomColors(num) {
	// make an array
	var colors = []
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		colors.push(randomColor());
	}
	//return that array
	return colors;
}

function randomColor() {
	var red = Math.floor(Math.random() * 255 + 1);
	var green = Math.floor(Math.random() * 255 + 1);
	var blue = Math.floor(Math.random() * 255 + 1);
	var rgbColor = "rgb(" + red.toString() + ", " + green.toString()  + ", " + blue.toString() + ")";
	return rgbColor
}