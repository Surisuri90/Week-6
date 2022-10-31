window.addEventListener('load', ()=>{

    fetch("quotes.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let quotes = data.quotes;
        let randomNum = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[randomNum];
        document.getElementById("tart-quote").innerHTML = '"' + randomQuote + '"';
    });
    
    let tartButton = document.getElementById("tart-button");
    tartButton.addEventListener("click", () => {
        console.log("Button clicked!");

        fetch("/random")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let tartString = "How about a " + data.type + " tart? It only costs $" + data.cost + "!";
            document.getElementById("tart-random").innerHTML = tartString;
        });
    });
});
