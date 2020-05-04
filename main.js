(function () {
    var numOfSquare = 6;
    var colors = [];
    var pickedColor;
    var sqr = document.querySelectorAll(".square");  // To taarget Square
    var dispColor = document.querySelector(".displayColor"); // To taarget Heading RGB Name 
    var message = document.querySelector("#message"); // To taarget Message Button
    var h1 = document.querySelector("h1");  // To taarget Heading
    var reset = document.querySelector("#reset");  // To taarget Reset Button
    var easyButtn = document.querySelector("#easy");  // To taarget Easy Button
    var hardButtn = document.querySelector("#hard");  // To taarget Hard Button
    var harderButtn = document.querySelector("#harder");  // To taarget Harder Button

    var modeBtn = document.querySelectorAll(".mode");  // To taarget Hard Button

    init();

    function init() {
        modeBtnChange();
        resetGame();
        colorChange();
    };

    // mode class Buttn (Easy / Hard Buttn) Event Listner start
    function modeBtnChange() {
        for (var i = 0; i < modeBtn.length; i++) {
            modeBtn[i].addEventListener("click", function () {
                easyButtn.classList.remove("selected"); // To remove easy button selection
                hardButtn.classList.remove("selected"); // To remove hard button selection
                harderButtn.classList.remove("selected"); // To remove easy button selection
                this.classList.add("selected"); // To set selected either easy or hard button is clicked
                // numOfSquare = (this.textContent === "Easy") ? 3 : 6 : 9 : 12; // Checking the Buttn which one is clicked
                if (this.textContent === "Easy") {
                    numOfSquare = 3
                } else if (this.textContent === "Hard") {
                    numOfSquare = 6
                } else if (this.textContent === "Harder") {
                    numOfSquare = 9
                };
                resetGame();
            })
        }
    };
    // mode class Buttn Event Listner End

    // Reset all start
    function resetGame() {
        reset.textContent = "New Colors"; // To set Reset Button text : New Colors
        message.textContent = "";  // To Clear Message Button 
        colors = generateRandomColor(numOfSquare); // To get Randome Color
        pickedColor = pickdColor(colors); // To peak Randome Color
        dispColor.textContent = pickedColor; // To Set Heading RGB Name 

        for (var i = 0; i < sqr.length; i++) {
            if (colors[i]) {
                sqr[i].style.display = "block"; // To display all the square
                sqr[i].style.backgroundColor = colors[i]; // To set Square Color Randomly
            } else {
                sqr[i].style.display = "none"; // To hide all the extra square
            };
        };
    };
    // Reset all End

    // Create Square Color Array Start
    function colorChange() {
        for (var i = 0; i < sqr.length; i++) {
            sqr[i].style.backgroundColor = colors[i]; // To set Square Color Randomly

            // Square Event Listner start
            sqr[i].addEventListener("click", function () {
                var clickedColor = this.style.backgroundColor; // To get Clicked Square Color
                if (clickedColor === pickedColor) {  // Match logic
                    reset.textContent = "Play Again"; // To set Reset Button text : Play Again
                    message.textContent = "Correct"; // To set Message Button text : Correct
                    h1.style.backgroundColor = pickedColor; // To set Heading color
                    matchColor(pickedColor); // To set every Square color to matched color
                } else {                            // Miss Match logic       
                    reset.textContent = "Play Again"; // To set Reset Button text : Play Again
                    message.textContent = "Try again"; // To set Message Button text : Try again
                    this.style.backgroundColor = "#232323"; // To set Clicked Square Color to Backgroun Color
                };
            })
            // Square Event Listner End
        };
    };
    // Create Square Color Array End

    function matchColor(colr) {
        for (var i = 0; i < sqr.length; i++) {
            sqr[i].style.backgroundColor = colr;
        };
    };

    function pickdColor(colrs) {
        var randomNumber = Math.floor(Math.random() * colors.length);
        return colrs[randomNumber];
    };

    function generateRandomColor(numOfColor) {
        var colors = [];
        for (i = 0; i < numOfColor; i++) {
            randomColor()
            colors.push(randomColor());
        }
        return colors;
    };

    function randomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb" + "(" + r + ", " + g + ", " + b + ")";
    };

    // Reset Event Listner start
    reset.addEventListener("click", function () {
        resetGame();
    });
    // Reset Event Listner End
})();
