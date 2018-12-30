$(document).ready(function () {
    var canvas = document.getElementById("robotCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.lineWidth = 10;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    var center = {
        x: canvas.width / 2,
        y: canvas.height / 2
    };

    var digibot = {
        x: center.x,
        y: center.y,
        angle: 0, //direction bot is pointing clockwise of north.
        stepsize: 10,
        turnangle: Math.PI / 4
    };

    // ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(center.x - 15, center.y);
    ctx.lineTo(center.x, center.y - 35);
    ctx.lineTo(center.x + 15, center.y);
    ctx.lineTo(center.x, center.y);
    ctx.fill();
    // ctx.stroke();

    //moves digital robot forward
    $("#up").on("mousedown", forwards);

    //moves digital robot backwards
    $("#down").on("mousedown", backwards);

    //rotates digital robot counterclockwise
    $("#left").on("mousedown", counterclockwise);

    //rotates digital robot clockwise
    $("#right").on("mousedown", clockwise);

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
        ctx.lineWidth = 10;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        var x = digibot.x;
        var y = digibot.y;
        var angle = digibot.angle;

        console.log("x: " + x);
        console.log("y: " + y);

        //drawing digital robot
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - 15 * Math.cos(angle), y - 15 * Math.sin(angle));
        ctx.lineTo(x + 35 * Math.sin(angle), y - 35 * Math.cos(angle));
        ctx.lineTo(x + 15 * Math.cos(angle), y + 15 * Math.sin(angle));
        // ctx.lineTo(x - 15*Math.cos(angle), y + 15*Math.sin(angle));
        ctx.lineTo(x, y);
        ctx.fill();
    }

    renderDigibot();
});
