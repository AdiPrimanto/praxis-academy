var toggler = document.getElementByIdByClassName("caret");
var i;

for(i = 0; i < toggler.length; i++){
    toggler[i].addEventListener("click", function(){
        this.parentElement.querySelector(".nested").classList
    })
}