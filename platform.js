const platform =  {
    body : {},
    collider : {},
    
    create : function(x, y, w, h) {
        let options = { isStatic : true};
        let colliderOptions = { isStatic : true, isSensor : true};
        this.body = Bodies.rectangle(x + w/2, y + h/2, w, h, options);
        this.collider = Bodies.rectangle(x + w/2, y + h/2, w, h, colliderOptions);
        World.add(world, [this.body, this.collider]);
    },
    
    draw : function() {
        ctx.beginPath();
        let w = Math.abs(this.body.vertices[0].x - this.body.vertices[1].x);
        let h = Math.abs(this.body.vertices[1].y - this.body.vertices[2].y);
        ctx.fillRect(this.body.position.x - w/2, this.body.position.y - h/2, w, h);
        ctx.fill();
        ctx.closePath();
    },
    
    collisionDetectionPlatform : function() {
        Events.on(engine, 'collisionStart', function(event) {
            var pairs = event.pairs;
            
            for (var i = 0, j = pairs.length; i != j; ++i) {
                var pair = pairs[i];
                //console.log(pair.bodyB == ground.collider);
                if(pair.bodyA === ball.body && pair.bodyB === platform.collider) {
                    isPlayerOnGround = true;
                } //else isPlayerOnGround = false;
                
            }
        });
    }
}