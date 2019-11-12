// let jumAngkot = 10,
//     beroperasi = 6;
// for(noAngkot = 1; noAngkot <= jumAngkot; noAngkot++){
//     if(noAngkot <= beroperasi){
//         console.log('angkot beroperasi ' + noAngkot);
//     } else{
//         console.log('angkot tidak beroperasi ' + noAngkot);
//     }
// }

// let a = prompt("input angka : ");
// if(a%2 === 0){
//     console.log(a + "genap");
// }
// else{
//     console.log(a + "ganjil");
// }

// let jumAngkot = 10,
//     beroperasi = 6;
// for(noAngkot = 1; noAngkot <= jumAngkot; noAngkot++){
//     if(noAngkot <= beroperasi){
//         console.log('angkot beroperasi ' + noAngkot);
//     } else if((noAngkot === 8) || (noAngkot === 10)){
//         console.log('angkot lembur ' + noAngkot);
//     }
//     // else if(noAngkot === 10){
//     //     console.log('angkot lembur ' + noAngkot);
//     // }
//     else{
//         console.log('angkot tidak beroperasi ' + noAngkot);
//     }
// }

let jumAngkot = 10,
    beroperasi = 6;
for(noAngkot = 1; noAngkot <= jumAngkot; noAngkot++){
    if((noAngkot <= beroperasi) && (noAngkot ===5)){
        console.log('angkot beroperasi ' + noAngkot);
    }
    // else if(noAngkot === 5){
    //     console.log('angkot lembur ' + noAngkot);
    // }
    else if((noAngkot === 8) || (noAngkot === 10)){
        console.log('angkot lembur ' + noAngkot);
    }
    // else if(noAngkot === 10){
    //     console.log('angkot lembur ' + noAngkot);
    // }
    else{
        console.log('angkot tidak beroperasi ' + noAngkot);
    }
}