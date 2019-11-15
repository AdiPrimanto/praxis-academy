export { name, draw, re}
export const name = 'square';

export function draw(ctx, length, x, y, color){
    ctx.fillStyle = color;
    ctx.fillReck(x, y, length, length);

    return {
        length : length,
        x : x,
        y : y,
        color : color
    };
}