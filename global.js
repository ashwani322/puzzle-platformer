// GLOBAL VARIABLES
const cvs = document.getElementById("myCanvas");
const ctx = cvs.getContext("2d");

let frames = 0;

// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;
    
let engine;
let world;


let isPlayerOnGround = false;
let isPlayerOnGoal = false;
let level = 1;
const gameStatus = {
    current : 0,
    start : 0,
    game : 1,
    over : 2,
    finish : 3
}