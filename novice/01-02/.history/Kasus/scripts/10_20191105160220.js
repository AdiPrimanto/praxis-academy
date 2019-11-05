//menampilkan di console.log
let a;
for(let x = 0; x <= 5; x++){
    for(let y = 0; y < x; y++){
        a += ("*");
    }
    console.log(a);
    a="";
}

//menampilkan di document.write
for(let x = 0; x <= 5; x++){
    for(let y = 0; y < x; y++){
        document.write("*");
    }
    document.write("<br/>");
}