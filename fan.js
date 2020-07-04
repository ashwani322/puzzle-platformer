function fan(x, y, w, h, options) {
    /*let fan1 = Bodies.rectangle(x, y, w, h, {angle : 0});
    let fan2 = Bodies.rectangle(x, y, w, h, {angle : 90 * Math.PI/180});
    this.body = Matter.Body.create( {parts: [fan1, fan2]});*/
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, this.w, this.h, options);
    
    var constraint = Matter.Constraint.create({
        pointA: { x: this.x, y: this.y },
        bodyB: this.body,
        pointB: { x: 0, y: 0,
        stiffness: 1.0}
    });
    
    World.add(world, [this.body, constraint]);
    
    this.draw = function() {
        let angle = this.body.angle;
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.save();
        ctx.translate(this.body.vertices[0].x, this.body.vertices[0].y);
        
        ctx.rotate(angle);
        //ctx.translate(0, 0);
        ctx.fillRect(0, 0, this.w, this.h);
        
        //ctx.rotate(-angle * Math.PI/180);
        //ctx.fill();
        
        ctx.closePath();
        ctx.restore();
        
    }
}