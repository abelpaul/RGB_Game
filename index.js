let colors = generateRandomColors(6);


function generateRandomColors(num){
    let arr = [];

for( let i = 0; i< num; i++) {
    arr.push(randomColor())
}

    return arr;
}

function randomColor() {
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);
  return "rgb("+ r + ", " + g + ", " + b + ")" ;
}

let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("span");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector(".reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn")

resetButton.addEventListener("click",function(){
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i<squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
      }

easyBtn.addEventListener("click",function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colors = generateRandomColors(3)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i=0; i<squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
})
hardBtn.addEventListener("click",function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colors = generateRandomColors(6)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i=0; i<squares.length; i++) {
    
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        
    }
})

h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor ;


for(let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    // click listeners added to squares
    squares[i].addEventListener("click",function(){
        
        let clickedColor = this.style.backgroundColor;

        if(pickedColor === clickedColor) {
        messageDisplay.textContent = "Correcto!"
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again ";
        }
    });
}

function changeColors(color){
    for(let i = 0; i<squares.length; i++) {
      squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];

} 

