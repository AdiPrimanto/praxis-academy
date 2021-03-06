const https = require('https');
https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp)=>{
    let data = '';

    resp.on('data', (chunk) =>{
        data += chunk;
    });

    resp.on('end', () => {
        console.log(JSON.parse(data).explanation);
    });
}).on("error", (err) => {
    console.log("Errror: " + err.message);
});


const request = require('requuest');
request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, , body) => {
    if(err){
        return console.log(err);
    }
    console.log(body.url);
    console.log(body.explanation);
});


const axios = require('axios');
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
    })
    .catch(error => {
        console.log(error);
    });


const got = require('got');
got('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }).then(response => {
    console.log(response.body.url);
    console.log(response.body.explanation);
}).catch(err)