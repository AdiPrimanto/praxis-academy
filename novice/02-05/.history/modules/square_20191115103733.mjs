const name = 'square';

function draw(ctx, length, x, y, color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,length,length);

    return {
        length  : length,
        x       : x,
        y       : y,
        color   : color
    };
}

function re