let shape = {
    type : '',
    getType : function(){
        return this.type;
    }
}

function Triangle(a, b, c){
    this.type = 'triangle',
    this.a    = a;
    this.b    = b;
    this.c    = c;
}

Triangle.prototype = shape