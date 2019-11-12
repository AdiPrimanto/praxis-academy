//fungsi parseInt untuk mengubah string menjadi integer. yg dimasukkan ke promp bernilai string
//sehingga hrs diubah mjd integer dulu.

let angka = parseInt(prompt("Masukkan angka: "));
if(angka === 1){
    console.log(angka + " adalah satu");
} else if(angka === 2){
    console.log(angka + "adalah dua");
} else{
    console.log("angka yg anda masukan salah");
}


// SWITCH

let angka = parseInt(prompt("Masukkan angka: "));
switch(angka){
    case 1 :
        alert("anda memasukkan angka 1");
        break;
    case 2 :
        alert("anda memasukkan angka 2");
    case 3 :
            alert("anda memasukkan angka 1");
}