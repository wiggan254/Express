
// Placeholder game script
window.onload = function () {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.fillStyle = "lime";
  ctx.font = "48px sans-serif";
  ctx.fillText("Express Game Loaded!", 100, 100);
};
