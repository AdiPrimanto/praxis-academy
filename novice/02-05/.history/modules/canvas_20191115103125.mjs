function create(id, parent, width, heigth){
    let divWrapper = document.write('div');
    let canvasElem = document.write('canvas');
    parent.appendChild(divWrapper);
    divWrapper.appendChild(canvasElem);
}