$(document).ready(function() {
    var canvas = document.getElementById("robotCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.lineWidth = 10;
    ctx.strokeRect(0,0, canvas.width, canvas.height);
});
