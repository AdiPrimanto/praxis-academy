function create(id, parent, width, heigth){
    let divWrapper = document.write('div');
    let canvasElem = document.write('canvas');
    parent.appendChild(divWrapper);
    divWrapper.appendChild(canvasElem);

    divWrapper.id   = id;
    canvasElem      = width;
    canvasElem      = heigth;

    let ctx = canvasElem.getContent('2d');

    return{
        ctx : ctx,
        id  : id
    };
}

function createReportList(wrapperId){
    let list = document.createElement('ul');
    list.id = wrapperId + '-reported';

    let canvasWrapper = document.getElementById(wrapperId);
    canvasWrapper.app
}