$(document).ready(function () {
    var canvas = document.getElementById("robotCanvas");
    var ctx = canvas.getContext("2d");

    var center = {
        x: canvas.width / 2,
        y: canvas.height / 2
    };

    var digibot = {
        x: center.x,
        y: center.y,
        angle: 0, //direction bot is pointing clockwise of north.
        stepsize: canvas.width * 2 / 100,
        turnangle: Math.PI / 4
    };

    var mouseStillDown = false;
    var interval;

    //moves digital robot forward
    // $("#up").on("mousedown", function(event) {
    //     startmoving(forwards)
    // });

    $("#up").on("mousedown", forwards);

    //moves digital robot backwards
    $("#down").on("mousedown", backwards);

    //rotates digital robot counterclockwise
    $("#left").on("mousedown", counterclockwise);

    //rotates digital robot clockwise
    $("#right").on("mousedown", clockwise);

    

    $(".direction-btn").on("mouseup",function (event) {
        console.log("stop");
        mouseStillDown = false;
        clearInterval(interval);
    });

    //arrow key handler
    $(document).keydown(function (e) {
        switch (e.which) {
            case 37: // left
                counterclockwise();
                console.log("hit left");
                break;

            case 38: // up
                forwards();
                break;

            case 39: // right
                clockwise();
                break;

            case 40: // down
                backwards();
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

    //starts moving robot in a direction based on move function
    function startmoving(direction) {
        mouseStillDown = true;
        move(direction);
    }

    //moves robot in a direction for as long as mouse held
    function move(direction) {
        //user no longer holding down mouse
        // if (!mouseStillDown) {
        //     return;
        // }
        // direction();

        // //user still holding down mouse. robot continues moving
        // if (mouseStillDown) {
        //     //interval = setInterval(move(direction), 50);
        //     move(direction);
        // }
        if(mouseStillDown) {
            direction();
            //setTimeout(move(direction), 2000);
            move(direction);
            console.log("still holding");
        }
        else {
            return;
        }
    }

    //moves digital robot forward
    function forwards() {
        digibot.x += digibot.stepsize * Math.sin(digibot.angle);
        digibot.x = (digibot.x + canvas.width) % canvas.width;
        digibot.y -= digibot.stepsize * Math.cos(digibot.angle);
        digibot.y = (digibot.y + canvas.height) % canvas.height;
        renderDigibot();
    }

    //moves digital robot backwards
    function backwards() {
        digibot.x -= digibot.stepsize * Math.sin(digibot.angle);
        digibot.x = (digibot.x + canvas.width) % canvas.width;
        digibot.y += digibot.stepsize * Math.cos(digibot.angle);
        digibot.y = (digibot.y + canvas.height) % canvas.height;
        renderDigibot();
    }

    //turns digital robot counterclockwise
    function counterclockwise() {
        digibot.angle -= digibot.turnangle;
        renderDigibot();
    }

    //turns digital robot clockwise
    function clockwise() {
        digibot.angle += digibot.turnangle;
        renderDigibot();
    }

    //updates digital robot's position/angle on the canvas
    function renderDigibot() {
        //clearing what's currently on canvas
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //redrawing border
        ctx.fillStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        var x = digibot.x;
        var y = digibot.y;
        var angle = digibot.angle;

        console.log("x: " + x);
        console.log("y: " + y);

        var triBase = canvas.width * 2 / 100;
        var triHeight = canvas.height * 10 / 100;

        //drawing digital robot
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - triBase * Math.cos(angle), y - triBase * Math.sin(angle));
        ctx.lineTo(x + triHeight * Math.sin(angle), y - triHeight * Math.cos(angle));
        ctx.lineTo(x + triBase * Math.cos(angle), y + triBase * Math.sin(angle));
        // ctx.lineTo(x - 15*Math.cos(angle), y + 15*Math.sin(angle));
        ctx.lineTo(x, y);
        ctx.fill();
    }

    renderDigibot();
});
