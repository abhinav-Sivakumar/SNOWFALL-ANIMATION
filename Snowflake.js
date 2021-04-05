class Snowflake 
{
    constructor() 
    {
        this.x = random(width);
        this.y = random(-100, -500);
        this.speed = random(1, 5);
        this.radius = random(8, 10);
    }

    drop()
    {
        this.y = this.y + this.speed;

        if (this.y > height) {
            this.y = random(-100, -500);
        }
    }

    /**
     * @param {CanvasRenderingContext2D} ctx
     */
    show(ctx)
    {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        // ctx.closePath();
        // ctx.stroke();
        ctx.fill();

        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'white';
        
    }
}