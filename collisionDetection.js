function collisionDetection() {
    Events.on(engine, 'collisionStart', function(event) {
        var pairs = event.pairs;
        
        for (var i = 0, j = pairs.length; i != j; ++i) {
            var pair = pairs[i];
            
            if(pair.bodyA == Ball.body || pair.bodyB == Ball.body) isPlayerOnGround = true;
            // ball and ground
            if(pair.bodyA === Ground.body && pair.bodyB === Ball.body) {
                isPlayerOnGround = true;
            }
            
            // ball and goal ball
            if(pair.bodyA === Ball.body && pair.bodyB === goalBall.body) {
                
                isPlayerOnGoal = true;
            }
            
            // ball and platform 
            if(platform1 != undefined) {                
                if(pair.bodyA === Ball.body && pair.bodyB === platform1.body) {
                    isPlayerOnGround = true;
                }
            }
            if(platform2 != undefined) {                
                if(pair.bodyA === Ball.body && pair.bodyB === platform2.body) {
                    isPlayerOnGround = true;
                }
            }
            
            if(box1 != undefined) {                
                if(pair.bodyA === Ball.body && pair.bodyB === box1.body) {
                    isPlayerOnGround = true;
                }
            }
        }
    });
}