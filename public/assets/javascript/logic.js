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
        turnangle: Math.PI/4
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
    $("#up").on("mousedown", function () {
        digibot.x += digibot.stepsize*Math.sin(digibot.angle);
        digibot.y -= digibot.stepsize*Math.cos(digibot.angle);
        renderDigibot();
    });

    //moves digital robot backwards
    $("#down").on("mousedown", function() {
        digibot.x -= digibot.stepsize*Math.sin(digibot.angle);
        digibot.y += digibot.stepsize*Math.cos(digibot.angle);
        renderDigibot();
    });

    //rotates digital robot counterclockwise
    $("#left").on("mousedown", function() {
        digibot.angle -= digibot.turnangle;
        renderDigibot();
    });

    //rotates digital robot clockwise
    $("#right").on("mousedown", function() {
        digibot.angle += digibot.turnangle;
        renderDigibot();
    });

    //updates digital robot's position/angle on the canvas
    function renderDigibot() {
        //clearing what's currently on canvas
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //redrawing border
        ctx.fillStyle = "black";
        ctx.lineWidth = 10;
        ctx.strokeRect(0,0, canvas.width, canvas.height);

        var x = digibot.x;
        var y = digibot.y;
        var angle = digibot.angle;

        //drawing digital robot
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - 15*Math.cos(angle), y - 15*Math.sin(angle));
        ctx.lineTo(x + 35*Math.sin(angle), y - 35*Math.cos(angle));
        ctx.lineTo(x + 15*Math.cos(angle), y + 15*Math.sin(angle));
        // ctx.lineTo(x - 15*Math.cos(angle), y + 15*Math.sin(angle));
        ctx.lineTo(x,y);
        ctx.fill();
    }

    renderDigibot();
    
});
