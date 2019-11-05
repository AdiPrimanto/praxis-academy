//menampilkan di console.log
let a;
for(let x = 0; x <= 5; x++){
    for(let y = 0; y < x; y++){
        a += ("*");
    }
    console.log(a);
    a="";
    document.write("<br/>");
}

//menampilkan di document.write
for(let x = 0; x <= 5; x++){
    for(let y = 0; y < x; y++){
        // a += ("*");
        document.write("*");
    }
    // console.log(a);
    // a="";
    document.write("<br/>");
}