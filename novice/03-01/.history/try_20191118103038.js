try{
    alert("Start of try runs");
    //...no errors here
    alert("End of try runs");
}
catch(err){
    alert("Catch is ignored, because there are no errors");
}

///////////////////////////////////////////////////////////////////

try{
    alert("Start of try runs");
    lalala;
    alert("End of try (never reached)");
}
catch(err){
    alert("Error has occured");
}