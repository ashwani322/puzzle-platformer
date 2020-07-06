document.addEventListener("keydown", keypressed);

const playerMoved = {
    idle : 0,
    current : 0,
    left : 1,
    up : 2,
    right : 3,
    down : 4
}

function keypressed(e) {
    switch(e.keyCode) {
        case 13:
            if(gameStatus.current == gameStatus.start) {
                gameStatus.current = gameStatus.game;
                setup();
            }
            break;
        case 37:
            playerMoved.current = playerMoved.left;
            break;
        case 38:
            if(isPlayerOnGround) playerMoved.current = playerMoved.up;
            break;
        case 39:
            playerMoved.current = playerMoved.right;
            break;
        case 40:
            playerMoved.current = playerMoved.down;
            break;    
    }
}

function update() {
    // call update functions
    if(gameStatus.current == gameStatus.game) {
        Ball.update();
    }
}

function draw() {
    gamePage();
    if(gameStatus.current == gameStatus.game) {
        Level();
        Ground.draw();
        Ball.draw("fill");
        if(isPlayerOnGoal) goalBall.draw("fill");
        else goalBall.draw("noFill");

        if(level == 2) platform1.draw();
        if(level == 3) {
            platform1.draw();
            platform2.draw();
        }
        if(level == 4) {
            platform1.draw();
            box1.draw();
            //box2.draw();
            //box3.draw();            
        }
        if(level == 5) {
            platform1.draw();
            platform2.drawInAngle(-30);
            platform3.drawInAngle(60);
            box1.draw();
        }
        if(level == 6) {
            platform1.draw();
            platform2.draw();
            box1.draw();
        }
        if(level == 7) {
            platform1.draw();
            platform2.draw();
            box1.draw();
            fan1.draw();
        }
        if(level == 8) {
            platform1.draw();
            /*for(let i = 0 ; i<10000 ; i++) {
                droplets[i].draw("fill");
            }*/
        }
        
    }
}

let Ground;
let Ball;
let wall1;
let wall2;
let platform1;
let platform2;
let platform3;
let box1;
let box2;
let box3;

let fan1;

//let droplets = [];

function setup() {
    // to do things which are not required to run in the LOOP
    
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    //cvs.style.border = "1px solid black";   
    document.body.style.overflow = "hidden";
    cvs.style.marginLeft = "-8px";
    engine = Engine.create();    
    world = engine.world;
    
//    let ballA = ball.create(cvs.width/2, 0, 20);
//    let groundA = ground.create(0, cvs.height - 200, cvs.width, 400);
//    let top = ground.create(10, 10, 10, 10);
    //platform.create(0, cvs.height - 150, cvs.width/2, 50);
    if(gameStatus.current == gameStatus.game) {
        Ground = new ground(cvs.width/2, cvs.height - 100, cvs.width, 200, {isStatic : true});

        if(level == 1) {
            Ball = new ball(200, cvs.height - 400, 20, {restitution : 0});
            goalBall = new ball(cvs.width - 300, cvs.height - 240, 20, {restitution : 0, isStatic : true, isSensor : true});
        }
        /*else if (level == 2) {
            Ball = new ball(cvs.width - 150, cvs.height - 400, 20, {restitution : 0});
            goalBall = new ball(100, cvs.height - 220, 20, {restitution : 0, isStatic : true, isSensor : true});
        }*/
        else if(level == 2) {
            Ball = new ball(100, cvs.height - 400, 20, {restitution : 0});
            goalBall = new ball(cvs.width - 100, cvs.height/1.8 - 55, 20, {restitution : 0, isStatic : true, isSensor : true});
            platform1 = new ground(cvs.width - 200, cvs.height/1.8, 400, 30, {isStatic : true});
        }
        else if(level == 3) {
            Ball = new ball(100, cvs.height - 400, 20, {restitution : 0});
            goalBall = new ball(100, cvs.height/2 - 55, 20, {restitution : 0, isStatic : true, isSensor : true});
            platform1 = new ground(cvs.width - 400, cvs.height/1.7, 800, 30, {isStatic : true});
            platform2 = new ground(200, cvs.height/2, 400, 30, {isStatic : true});
        }
        else if(level == 4) {
            Ball = new ball(100, cvs.height - 400, 20, {restitution : 0});
            goalBall = new ball(cvs.width - 100, cvs.height/3 + 35, 20, {restitution : 0, isStatic : true, isSensor : true});
            platform1 = new ground(cvs.width - 200, cvs.height/3 + 100, 400, 30, {isStatic : true});
            box1 = new Box(cvs.width - 250, cvs.height/3 + 200, 100, 100, {});
            //box2 = new Box(cvs.width - 50, cvs.height/3 + 200, 80, 50, {});
            //box3 = new Box(40, cvs.height/3 + 200, 60, 50, {});
        }
        else if(level == 5) {
            Ball = new ball(100, cvs.height - 400, 20, {restitution : 0});
            goalBall = new ball(cvs.width - 100, 50, 20, {restitution : 0, isStatic : true, isSensor : true});
            platform1 = new ground(cvs.width - 200, cvs.height/3 + 100, 400, 30, {isStatic : true});
            platform2 = new ground(445, 510, 550, 30, {isStatic : true, angle : -30 * Math.PI/180});
            platform3 = new ground(780, 510, 365, 30, {isStatic : true, angle : 60 * Math.PI/180});
            
            box1 = new Box(cvs.width - 150, 200, 100, 100, {});            
        }
        else if(level == 6) {
            Ball = new ball(100, 200, 20, {restitution : 0});
            goalBall = new ball(cvs.width - 100, cvs.height - 495, 20, {restitution : 0, isStatic : true, isSensor : true});
            platform1 = new ground(200, cvs.height - 200, 400, 400, {isStatic : true});
            platform2 = new ground(cvs.width - 150, cvs.height - 450, 400, 30, {isStatic : true});           
            box1 = new Box(420, 200, 100, 100, {});            
        }
        else if(level == 7) {
            Ball = new ball(100, cvs.height - 400, 20, {restitution : 0});
            goalBall = new ball(100, 105, 20, {restitution : 0, isStatic : true, isSensor : true});
            platform1 = new ground(cvs.width - 200, cvs.height - 350, 400, 30, {isStatic : true}); 
            platform2 = new ground(200, 150, 400, 30, {isStatic : true});           
            box1 = new Box(cvs.width - 300, cvs.height - 300, 100, 60, {});   
            
            fan1 = new fan(700, 300, 300, 30, {angle : 20 * Math.PI/180});
        }
        else if(level == 8) {
            Ball = new ball(100, cvs.height - 400, 20, {restitution : 0});
            goalBall = new ball(100, 105, 20, {restitution : 0, isStatic : true, isSensor : true});
            
            platform1 = new ground(cvs.width - 200, cvs.height - 350, 400, 30, {isStatic : true}); 
            /*for(let i = 0 ; i<10000 ; i++) {
                droplets[i]  = new ball(100, 100+i, 0.1, {restitution : 1, friction : 0});
            }*/
            
        }
        
        wall1 = new ground(-5, cvs.height/2, 10, cvs.height, {isStatic : true});
        wall2 = new ground(cvs.width + 5, cvs.height/2, 10, cvs.height, {isStatic : true});
    }
}

function Level() {
    
    ctx.beginPath();
    ctx.font= "15px ARIAL";
    ctx.fillText("LEVEL "+level, 40, 40);
    ctx.fill();
    ctx.closePath();
    
    if(isPlayerOnGoal) {
        level++;
        //if(level == 8) gameStatus.current = gameStatus.finish;
        isPlayerOnGoal = false;
        setup();
    }
    
    // FPS
    
    ctx.beginPath();
    ctx.font= "15px ARIAL";
    ctx.fillText("FPS "+showFPS, 240, 40);
    ctx.fill();
    ctx.closePath();
    
}

let prevTime;
let deltaTime = 0;
let fps = 0;
let oneSec = 0;
let showFPS;

function main(timestamp) {
    //clear the canvas
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    frames++;
    
    // FPS handling
    if(prevTime == undefined)
        prevTime = timestamp;
    deltaTime += timestamp - prevTime;
    prevTime = timestamp;
    oneSec += deltaTime;
    
    fps++;
    if(oneSec/1000 >= 1){
        showFPS = fps;
        oneSec = 0;
        fps = 0;
    }
    
    if(deltaTime >= 1000/60) {
        /*fps++;
        if(oneSec/1000 >= 1){
            showFPS = fps;
            oneSec = 0;
            fps = 0;
        }*/
        
        //update functions
        update();

        // draw functions
        draw();

        // Update engine

        //ground.collisionDetection();
        collisionDetection();
        //platform.collisionDetectionPlatform();
        
        deltaTime = 0;
    }
    
    //if(frames < 10) console.log(timestamp);
    requestAnimationFrame(main);
    Engine.update(engine, 1000 / 60);
}
setup();
requestAnimationFrame(main);