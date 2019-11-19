async function hello(){
    result = await doAsync()
    console.log(result)
}

//Async/await Error Handling

async function fetchWithAsyncAwait(id){
    try{
        let response = await fetch(endpoint.id)
        response = await response.json()
        console.log(response)
    }
    catch{
        console.log('ooopss' + err)
    }
}