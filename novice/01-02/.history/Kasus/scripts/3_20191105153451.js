let x = 0,
    y = -1,
    z = 4;

if ((x > y) && (x > z)) {
    if (y > z) {
        console.log(x + " , " + y + " , " + z);
    } else {
        console.log(x + " , " + z + " , " + y);
    }
} else if ((y > x) && (y > z)) {
    if (x > z) {
        console.log(x + " , " + y + " , " + z);
    } else {
        console.log(x + " , " + z + " , " + y);
    }
}