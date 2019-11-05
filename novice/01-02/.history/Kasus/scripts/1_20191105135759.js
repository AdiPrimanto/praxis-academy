let x = window.prompt("Masukkan angka pertama", "0");
let y = window.prompt("Masukkan angka kedua", "0");

if(parseInt(x, 10) > (y, 10)){
    console.log("Lebih besar " + x + " daripada " + y);
}
else if(parseInt(x, 10) < (y,10)){
    console.log("Lebih besar " + y + " daripada " + x);
}
else{
    console.log(x + "dan " + y + " bernilai sama");
}