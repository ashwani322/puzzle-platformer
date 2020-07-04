function ball(x, y, r, options) {
    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
    
    this.draw = function(option) {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.body.position.x, this.body.position.y, this.body.circleRadius, 0, 2 * Math.PI);
        if(option == "fill") ctx.fill();
        else ctx.stroke();
        ctx.closePath();
    }
    
    this.update = function() {
        
        if(playerMoved.current == playerMoved.left) {
            this.body.force.x = -0.01;
            playerMoved.current = playerMoved.idle;
        }
        if(playerMoved.current == playerMoved.right) {
            this.body.force.x = 0.01;
            playerMoved.current = playerMoved.idle;
        }
        if(playerMoved.current == playerMoved.up) {
            this.body.force.y = -0.05;
            playerMoved.current = playerMoved.idle;
            isPlayerOnGround = false;
        }
        
    }
}

/*const ball =  {
    velY : 10,
    body : {},
    create : function(x, y, r) {
        let options = {restitution : 0};
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
        
    },
    
    draw : function() {
        ctx.beginPath();
        ctx.arc(this.body.position.x, this.body.position.y, this.body.circleRadius, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
    },
    
    update : function() {
        
        if(playerMoved.current == playerMoved.left) {
            this.body.force.x = -0.01;
            playerMoved.current = playerMoved.idle;
        }
        if(playerMoved.current == playerMoved.right) {
            this.body.force.x = 0.01;
            playerMoved.current = playerMoved.idle;
        }
        if(playerMoved.current == playerMoved.up) {
            this.body.force.y = -0.05;
            playerMoved.current = playerMoved.idle;
            isPlayerOnGround = false;
        }
        
    }
}*/