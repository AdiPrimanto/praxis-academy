class MultiplicatorUnitFailure extends Error{}

function primitiveMultiply(a, b){
    if(Math.random() < 0.2 ){
        return a * b;
    }
    else{
        throw new M
    }
}