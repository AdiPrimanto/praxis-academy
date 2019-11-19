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

function calculate(param1, param2, callBack){
    result = param1 + param2

    if(typeof callBack == 'function'){
        result = callBack(param1, param2)
    }

    return result
}

a = calculate(2000, 4000, function(x, y){
    return "$ " + (x + y)
})
b = calculate(2000, 4000, function(x, y){
    return "$ " + (x * y)
})
console.log(a);
console.log(b);

//CALLBACK SEBAGAI EVENT LISTENER
document.getElementById("my_button").addEventListener("click", function(){
    alert("Klik di Sini")
})

//CALLBACK PADA ASYNCHRONUS
function p1(){
    console.log('p1 done');
}
function p2(){
    setTimeout(function(){

    })
    
}
function p3(){
    console.log('p3 done');
}
p1()
p2()
p3()