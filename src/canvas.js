const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
context.fillStyle = "yellow";
context.fillRect(0, 0, 100, 100); // (x, y, width, height)
context.fillStyle = "black";
context.font = "bold 50px sans-serif";
context.fillText("JS", 40, 90, 50); // (text, x, y, maxWidth)
