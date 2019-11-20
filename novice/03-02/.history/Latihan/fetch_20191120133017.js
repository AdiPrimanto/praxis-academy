const response = await fetch('http://example.com/movies.json');
const myJson = await response.json();
console.log(JSON.stringify(myJson));

//SUPPLYING REQUEST OPTIONS
try{
    const data = await postData('http://example.com/answer', {answer: 42});
    console.log(JSON.stringify(data));
} catch(error){
    console.log(error);
}

async function postData(url = '', data = {}){
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',   //get post put delete etc
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data)
    });
    return await response.json();
}