//MENGULANG BARIS

// let x = '';
// for (let i = 1; i <= 5; i++) {
//     x += '*';
//     x += '\n';  //mencetak ke bawah
// }
// console.log(x);\

let x ='';
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
        x += '#';
    }
    document.write('\n');
}
document.write(x);