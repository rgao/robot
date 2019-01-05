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
        speedX: 0,
        speedY: 0,
        angle: 0, //direction bot is pointing clockwise of north.
        speed: canvas.width / 150,
        turnangle: Math.PI / 50,
        turnSpeed: 0,
        img: null
    };

    var mouseStillDown = false;

    //moves digital robot forward
    $("#up").on("mousedown", forwards);

    $("#up").on("touchstart", forwards);

    //moves digital robot backwards
    $("#down").on("mousedown", backwards);

    $("#down").on("touchstart", backwards);

    //rotates digital robot counterclockwise
    $("#left").on("mousedown", counterclockwise);
    
    $("#left").on("touchstart", counterclockwise);

    //rotates digital robot clockwise
    $("#right").on("mousedown", clockwise);

    $("#right").on("touchstart", clockwise);

    //robot stops moving after lifting mousekey
    $(".direction-btn").on("mouseup",stopMoving);

    //arrow key handler
    $(document).keydown(function (e) {
        switch (e.which) {
            case 37: // left
                counterclockwise();
                //console.log("hit left");
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

    $(document).keyup(stopMoving);

    //moves robot based on speed of x and y components
    function move() {
        digibot.x += digibot.speedX;
        digibot.y += digibot.speedY;

        //lets robot wrap back around screen
        digibot.x = (digibot.x + canvas.width) % canvas.width;
        digibot.y = (digibot.y + canvas.height) % canvas.height;

        digibot.angle += digibot.turnSpeed;

        //showing moving on canvas
        renderDigibot();
    }

    //moves digital robot forward
    function forwards() {
        digibot.speedX =  digibot.speed*Math.sin(digibot.angle);
        digibot.speedY = -digibot.speed*Math.cos(digibot.angle);
        digitbot.turnSpeed = 0;
        move();
    }

    //moves digital robot backwards
    function backwards() {
        digibot.speedX = -digibot.speed*Math.sin(digibot.angle);
        digibot.speedY = digibot.speed*Math.cos(digibot.angle);
        digibot.turnSpeed = 0;
        move();
    }

    //turns digital robot counterclockwise
    function counterclockwise() {
        digibot.speedX = 0;
        digibot.speedY = 0;
        digibot.turnSpeed = -digibot.turnangle;
        move();
    }

    //turns digital robot clockwise
    function clockwise() {
        digibot.speedX = 0;
        digibot.speedY = 0;
        digibot.turnSpeed = digibot.turnangle;
        move();
    }

    //stops robot from moving
    function stopMoving() {
        console.log("stopping");
        digibot.speedX = 0;
        digibot.speedY = 0;
        digibot.turnSpeed = 0;
        move();
    }

    //updates digital robot's position/angle on the canvas
    function renderDigibot() {
        //clearing what's currently on canvas
        // ctx.fillStyle = "white";
        // ctx.fillRect(0, 0, canvas.width, canvas.height);

        //var img = new Image();
        //img.src = "/assets/images/moonSurface.jpg";
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        //ctx.drawImage(img, 0, 0);


        //redrawing border
        // ctx.fillStyle = "black";
        // ctx.lineWidth = 2;
        // ctx.strokeRect(0, 0, canvas.width, canvas.height);

        var x = digibot.x;
        var y = digibot.y;
        var angle = digibot.angle;

        //console.log("x: " + x);
        //console.log("y: " + y);

        var triBase = canvas.width * 2 / 100;
        var triHeight = canvas.height * 10 / 100;

        //drawing digital robot
        //saving current canvas settings
        ctx.save();
        //moving origin of canvas to center robot's current location
        ctx.translate(x,y);
        //rotating canvas
        ctx.rotate(angle);
        ctx.drawImage(digibot.img, 25/-2, 50*3/-4, 25, 50);
        //setting canvas back to normal
        ctx.restore();


        // ctx.beginPath();
        // ctx.moveTo(x, y);
        // ctx.lineTo(x - triBase * Math.cos(angle), y - triBase * Math.sin(angle));
        // ctx.lineTo(x + triHeight * Math.sin(angle), y - triHeight * Math.cos(angle));
        // ctx.lineTo(x + triBase * Math.cos(angle), y + triBase * Math.sin(angle));
        // ctx.lineTo(x - 15*Math.cos(angle), y + 15*Math.sin(angle));
        //ctx.lineTo(x, y);
        //ctx.fill();
    }

    var background = new Image();
    background.src = "/assets/images/tagusvalles.jpg";
    //img.src = "https://media0.giphy.com/media/TZf4ZyXb0lXXi/giphy.gif?cid=6104955e5c2ed0d27253484d6b3128a2";
    
    var vehicle = new Image();
    vehicle.src = "/assets/images/dragon.png";
    digibot.img = vehicle;
    
    var interval;
    interval = setInterval(move, 20);

    //implements customization features to current page
    $("#customize-btn").on("click", function(event) {
        event.preventDefault();

        //changing background image
        var location = $("#location-select").val();
        console.log(location);
        background.src = "/assets/images/" + location + ".jpg";

        //changing vehicle
        var robotType = $("#robot-select").val();
        digibot.img.src = "/assets/images/" + robotType + ".png";
    });

    //saves the current customization settings
    $("#save-btn").on("click", function(event) {
        event.preventDefault();

        var settings = {
            background: img
        };
        console.log(settings);
    });

    // $(".user-btn").show();
});
