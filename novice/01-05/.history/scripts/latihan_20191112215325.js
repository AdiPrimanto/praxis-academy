//MENGULANG BARIS

// let x = '';
// for (let i = 1; i <= 5; i++) {
//     x += '*';
//     x += '\n';  //mencetak ke bawah
// }
// console.log(x);\

let x = '';
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < i; j++) {
        x += '#';
    }
    x += '\n';
}
console.log(x);
i0 j0 _
i1 j0 # j1
i2 j1 # j2
i3 j2 
