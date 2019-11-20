class MultiplicatorUnitFailure extends Error{}

function primitiveMultiply(a, b){
    if(Math.random() < 0.2 ){
        return a * b;
    }
    else{
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b){
    let done = false;
    while(!done)
}

console.log(reliableMultiply(2, 3));