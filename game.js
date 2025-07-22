
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let multiplier = 1.0;
let crashed = false;

function drawRoad() {
    ctx.fillStyle = "#333";
    ctx.fillRect(canvas.width/3, 0, canvas.width/3, canvas.height);
}

function drawCar() {
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(canvas.width/2 - 25, canvas.height - 120, 50, 100);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRoad();
    drawCar();
    document.getElementById("multiplier").innerText = 'x' + multiplier.toFixed(2);

    if (!crashed) {
        multiplier += 0.01;
        requestAnimationFrame(draw);
    }
}

draw();

document.getElementById("cashoutButton").onclick = () => {
    if (!crashed) {
        crashed = true;
        document.getElementById("cashoutButton").innerText = "CASHED OUT at x" + multiplier.toFixed(2);
        document.getElementById("cashoutButton").style.backgroundColor = "#dc3545";
    } else {
        location.reload();
    }
};
