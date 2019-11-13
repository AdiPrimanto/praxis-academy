//MENGULANG BARIS

// let x = '';
// for (let i = 1; i <= 5; i++) {
//     x += '*';
//     x += '\n';  //mencetak ke bawah
// }
// console.log(x);\

// let x = '';
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <= i; j++) {
//         x += '#';
//     }
//     x += '\n';
// }
// console.log(x);

//BINTANG KECIL DI BAWAH

// let x = '';
// for (let i = 5; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//         x += '#';
//     }
//     x += '\n';
// }
// console.log(x);

////////////////////////////////////////////

let x = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j--) {
        x += '#';
    }
    x += '\n';
}
console.log(x);

