window.addEventListener('load', ()=>{

    //Request json file
    fetch("app.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let quotes = data.quotes;
        let randomNum = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[randomNum];
        document.getElementById("tart-quote").innerHTML = '"' + randomQuote + '"';
    });

    //Request random pizza
    let pizzaButton = document.getElementById("tart-button");
    pizzaButton.addEventListener("click", () => {
        console.log("Button clicked!");

        //Request random pizza object
        fetch("/random")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let tartString = "How about a " + data.type + " tart? It only costs $" + data.cost + "!";
            document.getElementById("tart-random").innerHTML = tartString;
        });
    });
});
