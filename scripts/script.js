var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Display = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(6);
	//pick a new random color from array
	pickedColor = pickColor();
	//updates displayto reflect the new color
	colorDisplay.textContent = pickedColor;
	//change colors of squares on the page
	resetColors();
});

colorDisplay.textContent = pickedColor;

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
			messageDisplay.textContent = "Try Again";
		}
	});
}

function resetColors() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1Display.style.background = "#232323";
	resetButton.textContent = "New Colors";
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