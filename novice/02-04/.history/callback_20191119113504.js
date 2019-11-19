function main(param1, param2, callBack){
    console.log(param1, param2);
    mycallBack();
}

function myCallback(){
    console.log("Hey Adii...");
}

main(1, 2, myCallback);