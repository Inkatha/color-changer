var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Display = document.querySelector("h1");

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
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
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