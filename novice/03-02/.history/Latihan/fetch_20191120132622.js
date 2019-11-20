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

async function postData(url = '', )