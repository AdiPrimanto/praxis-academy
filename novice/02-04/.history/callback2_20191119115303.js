// CALLBACK PADA SYNCHRONUS
function calculate(x, y) {
    let result = x + y
    // return result
    console.log(result)
}
calculate(3, 2)

//Buatlah function diatas agar bisa melakukan operasi matematika yg lain seperti kurang, bagi, kali dan
// lain sebagainya. Output dari function di atas harus bisa di format ke dalam mata uang

// Dengan cara umum kita bisa menyelesaikanya dengan bantuan if atau switch untuk menguji operatornya. 
// Tapi ini akan membuat code lebih panjang dan kurang dinamis. Dengan callback kita dapat membuat function
// diatas menjadi lebih dinamis