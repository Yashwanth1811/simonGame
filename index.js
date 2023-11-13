alert("click on 'simonGame' to watch a video on knowing how to play the game.");
//define 4 colors for 4 buttons
var btnColors = ["yellow", "red", "blue", "green"];

//pattern given by the computer
var gamePattern = [];

//pattern played by the user
var userPattern = [];

//initially when game is not yet started
var started = false;

//initial level 0
var lvl = 0;

$(document).on("dblclick" , function() {
    /* start the game when the webPage is double clicked
    and when started is not equal to its initial value(logical not) */
    if (!started) {
        nextSequence();
        started = true;
    }
});

$(".start").on("touchstart", function() {
    /* start the game when the webPage is double clicked
    and when started is not equal to its initial value(logical not) */
    if (!started) {
        nextSequence();
        started = true;
    }
});

$(".btn").on("click", function () {
    //to select clicked button's id
    var userChosenColor = this.id;

    //to add them into user pattern
    userPattern.push(userChosenColor);

    //play sound of chosen color
    playSound(userChosenColor);

    //to flash when btn is pressed
    flashOnPress(userChosenColor);

    checkAns(userPattern.length - 1);
});

function nextSequence() {
    //clear all user clicked pattern so that they start from scratch again
    userPattern = [];

    //increment level every time nextSequence is called
    lvl++;

    //to change level every time
    $("h1").text("level " + lvl);

    //to generate random nos btw 0 to 3
    var rNo = (Math.floor(Math.random() * 3)) + 1;

    //to allocate colors based on index of random no array
    var rChosenColor = btnColors[rNo];

    //to add them into computer's pattern
    gamePattern.push(rChosenColor);

    //to flash the buttons
    $("#" + rChosenColor).fadeOut(100).fadeIn(100);

    //play sound for chosen color
    playSound(rChosenColor);
}

function checkAns(currentLvl) {
    //check whether user pattern and game pattern are equal
    if (gamePattern[currentLvl] === userPattern[currentLvl]) {
        //if yes check sequence of them are equal are not
        if (gamePattern.length === userPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("h1").text("Game over , double click to start again");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        reStart();
    }
}

//to restart the game
function reStart() {
    lvl = 0;
    gamePattern = [];
    started = false;
}

//to play specific sound when specific btn is selected
function playSound(color) {
    var y = new Audio("sounds/" + color + ".mp3");
    y.play();
}

//to produce flash on chosing color pressed class is added and removed after 100ms
function flashOnPress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed")
    }, 100);
}