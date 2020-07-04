function gamePage() {
    if(gameStatus.current == gameStatus.start) {
        ctx.beginPath();
        ctx.font = "100px ARIAL";
        ctx.fillText("Press ENTER to START", 100, cvs.height/2);
        ctx.closePath();
    }
    
    if(gameStatus.current == gameStatus.finish) {
        ctx.beginPath();
        ctx.font = "100px ARIAL";
        ctx.fillText("Congrats! Game is finished", 100, cvs.height/2);
        ctx.closePath();
    }
}