"use strict";

var Game = {
	canvas : undefined,
	canvasContext : undefined,
	shapePos : 0,
	radius : 30
};

Game.start = function (){
//	let bg = document.getElementById('body');
//	bg.background = "red";
	document.body.style.background = "black";
	Game.canvas = document.getElementById("myCanvas");
	Game.canvasContext = Game.canvas.getContext("2d");
	Game.mainLoop();
};

document.addEventListener('DOMContentLoaded', Game.start);

Game.draw = function () {
	Game.canvasContext.fillStyle = "white";
	Game.canvasContext.beginPath();
	Game.canvasContext.arc(Game.canvas.width/2, Game.shapePos, Game.radius, 0, Math.PI * 2, true);
	Game.canvasContext.fill();
	//Game.canvasContext.fillRect( Game.canvas.width/2, Game.shapePos, Game.radius, Game.radius );
};

Game.mainLoop = function () {
	Game.clearCanvas();
	Game.update();
	Game.draw();
	window.setTimeout(Game.mainLoop, 1000/60);//trying to get 24 fps instead of 60
};

Game.update = function () {
	var d = new Date();
	var x = d.getTime() % (2* Game.canvas.width);
	var bounce_height = -1*Math.abs( 0.75 *Game.canvas.height * Math.sin(d.getTime()/400));
	var offset = Game.canvas.height - Game.radius;
	Game.shapePos = bounce_height + offset;
};

Game.clearCanvas = function (){
	Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};
