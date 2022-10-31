
//Server with Express
let express = require('express');
let app = express();

//Serve files from the "public" folder
app.use(express.static('public'));

//Pizza Data
let data = {
    "disney charactors": [
        {
            "name": "Buzz Lightyear",
            "rank" : 1
        },
        {
            "name": "Woodi",
            "rank" : 12
        },  
        {
            "name" : "Jessi",
            "rank" : 3
        },
        {
            "name": "Winnie",
            "rank" : 4
        }
         {
            "name": "Mickey Mouse",
            "rank" : 5
        } {
            "name": "Minnie Mouse",
            "rank" : 6
        }
    ]
};

//Random Data
app.get('/random', (request, response) => {
    let randomNum = Math.floor(Math.random() * data.disney.length);
    let randomdisney = data.disney[randomNum];
    console.log(randomDisney);
    response.json(randomDisney);
})

app.listen(3000, ()=> {
    console.log("app is listening at localhost:3000");
})
