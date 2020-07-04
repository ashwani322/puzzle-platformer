function Box(x, y, w, h, options) {
    this.w = w;
    this.h = h;
    //let options = {};
    let colliderOptions = { isSensor : true};
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.collider = Bodies.rectangle(x, y, w, h, colliderOptions);
    World.add(world, [this.body, this.collider]);

    this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.save();
        ctx.translate(this.body.vertices[0].x, this.body.vertices[0].y);
        ctx.rotate(this.body.angle);
        ctx.fillRect(0, 0, this.w, this.h);
        //ctx.fill();
        
        ctx.closePath();
        ctx.restore();
    }    
}