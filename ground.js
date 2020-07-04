function ground(x, y, w, h, options) {
    this.w = w;
    this.h = h;
    //let colliderOptions = { isStatic : true, isSensor : true};
    this.body = Bodies.rectangle(x, y, w, h, options);
    //this.collider = Bodies.rectangle(x, y, w, h, colliderOptions);
    /*this.collider = Bodies.rectangle(x + w/2, y + h/2, w*100, h, colliderOptions);
    this.wallL = Bodies.rectangle(-5, cvs.height/2, 10, cvs.height, options);
    this.wallR = Bodies.rectangle(cvs.width + 5, cvs.height/2, 10, cvs.height, options);
    World.add(world, [this.body, this.collider, this.wallL, this.wallR);*/
    World.add(world, [this.body]);//, this.collider]);

    this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = "black";
        //let w = Math.abs(this.body.vertices[0].x - this.body.vertices[1].x);
        //let h = Math.abs(this.body.vertices[1].y - this.body.vertices[2].y);
        ctx.fillRect(this.body.position.x - this.w/2, this.body.position.y - this.h/2, this.w, this.h);

        ctx.fill();
        ctx.closePath();
    }
    
    this.drawInAngle = function(angle) {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.save();
        ctx.translate(this.body.vertices[0].x, this.body.vertices[0].y);
        
        ctx.rotate(angle * Math.PI/180);
        //ctx.translate(0, 0);
        ctx.fillRect(0, 0, this.w, this.h);
        
        //ctx.rotate(-angle * Math.PI/180);
        //ctx.fill();
        
        ctx.closePath();
        ctx.restore();
    }
    
    
}

/*const ground =  {
    body : {},
    walls : [{}],
    collider : {},
    
    create : function(x, y, w, h) {
        let options = { isStatic : true};
        let colliderOptions = { isStatic : true, isSensor : true};
        this.body = Bodies.rectangle(x + w/2, y + h/2, w*100, h, options);
        this.collider = Bodies.rectangle(x + w/2, y + h/2, w*100, h, colliderOptions);
        this.walls[0] = Bodies.rectangle(-5, cvs.height/2, 10, cvs.height, options);
        this.walls[1] = Bodies.rectangle(cvs.width + 5, cvs.height/2, 10, cvs.height, options);
        World.add(world, [this.body, this.collider, this.walls[0], this.walls[1]]);
    },
    
    draw : function() {
        ctx.beginPath();
        let w = Math.abs(this.body.vertices[0].x - this.body.vertices[1].x);
        let h = Math.abs(this.body.vertices[1].y - this.body.vertices[2].y);
        ctx.fillRect(this.body.position.x - w/2, this.body.position.y - h/2, w, h);
        ctx.fill();
        ctx.closePath();
    },
    
    collisionDetection : function() {
        Events.on(engine, 'collisionStart', function(event) {
            var pairs = event.pairs;
            
            for (var i = 0, j = pairs.length; i != j; ++i) {
                var pair = pairs[i];
                //console.log(pair.bodyB == ground.collider);
                if(pair.bodyA === ball.body && pair.bodyB === ground.collider) {
                    isPlayerOnGround = true;
                } //else isPlayerOnGround = false;
                
            }
        });
    }
}*/