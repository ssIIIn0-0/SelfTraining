const quoteText = document.querySelector(".quote_text");


function getQuote() {
    function randomItem(a) {
        return a[Math.floor(Math.random() * a.length)];
    }

    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const random = randomItem(data);
            const author = random.author;
            const text = random.text;
            quoteText.innerText = `${text}`;
        });
}

function init() {
    getQuote();
}

init();