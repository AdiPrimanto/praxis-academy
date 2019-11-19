//Untuk membuat promise cukup dengan memanggil constructor nya :
let janjian = new Promise()
console.log(janjian)

//Request Ajax dengan Fetch
fetch('https://jsonplaceholder.typicode.com/users/1')
.then(function(response){
    return response.json();
})
.then(function())