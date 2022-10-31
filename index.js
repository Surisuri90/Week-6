
//Server with Express
let express = require('express');
let app = express();

//Serve files from the "public" folder
app.use(express.static('public'));

//Pizza Data
let data = {
    " Tart Type": [
        {
            "Type": "Apple",
            "cost" : 1
        },
        {
            "Tpye": "Watermelon Tart",
            "cost" : 2
        },  
        {
            "Tpye" : "Milk Tart",
            "cost" : 3
        },
        {
            "Tpye": "Banana Tart",
            "cost" : 2
        }
         {
            "Tpye": "Mango Tart",
            "cost" : 3
        } {
            "Tpye": "Charry",
            "cost" : 3
        }
    ]
};

//Random Data
app.get('/random', (request, response) => {
    let randomNum = Math.floor(Math.random() * data.tart.length);
    let randomdisney = data.tart[randomNum];
    console.log(randomDisney);
    response.json(randomDisney);
})

app.listen(3000, ()=> {
    console.log("app is listening at localhost:3000");
})
