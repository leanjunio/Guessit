var numSquares = 6
var colors = []
var pickedColor
var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById('colorDisplay')
var messageDisplay = document.querySelector('#message')
var h1 = document.querySelector('h1')
var resetButton = document.querySelector('#reset')
var modeButtons = document.querySelectorAll('.mode')

init();

function init(){
	// mode buttons
	setupModeButtons()
	setupSquares()
	reset()
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++) {
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i]
	
		// add click listeners to squares
		squares[i].addEventListener('click', function(){
	
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor
	
			// compare color to pickedColor
			if (clickedColor === pickedColor){
				// alert('correct')
				messageDisplay.textContent = 'Correct'
				resetButton.textContent = 'Play again?'
				changeColors(clickedColor)
				h1.style.backgroundColor = clickedColor
			} else {
				// alert('wrong')
				messageDisplay.textContent = 'Try again'
				this.style.backgroundColor = "#232323"
			}
		})
	}
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener('click', function(){
			modeButtons[0].classList.remove('selected')
			modeButtons[1].classList.remove('selected')
			this.classList.add('selected')
			if(this.textContent === 'Easy'){
				numSquares = 3
			} else {
				numSquares = 6
			}
			reset()
		})
	}
}

function reset(){
	// generate all new colors
	colors = generateRandomColorsArray(numSquares)
	// pick a new random color from array
	pickedColor = pickColor()
	this.textContent = 'New Colors'	
	messageDisplay.textContent = ''
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor
	// change colors of squares 
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = 'block'
			squares[i].style.backgroundColor = colors[i]
		} else {
			squares[i].style.display = 'none'
		}
	}
	h1.style.backgroundColor = 'steelblue'
}

resetButton.addEventListener('click', reset)

function changeColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
		// change the color to match given color
		squares[i].style.backgroundColor = color
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateRandomColorsArray(number){
	// Make an array
	var arr = []
	// add num random colors to array
	for(var i = 0; i < number; i++){
		// get random color and push into array
		arr.push(generateRandomColors())
	}
	// return array
	return arr
}

function generateRandomColors(){
	var red = Math.floor(Math.random() * 256)
	var green = Math.floor(Math.random() * 256)
	var blue = Math.floor(Math.random() * 256)
	return `rgb(${red}, ${green}, ${blue})`
}