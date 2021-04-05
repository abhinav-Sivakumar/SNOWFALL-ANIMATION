
var snows = [];
var count = 500;
/**
 * @param {CanvasRenderingContext2D} ctx
 */
function setup(ctx) {
    
    for(var i = 0; i < count; i++)
    {
        snows[i] = new Snowflake(); 
    }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function draw(ctx) {
    ctx.fillStyle = "rgb(40, 80, 200)";
    ctx.fillRect(0, 0, width, height);
    
    for(var i = 0; i < count; i++)
    {
        snows[i].drop(); 
        snows[i].show(ctx); 
    }
}