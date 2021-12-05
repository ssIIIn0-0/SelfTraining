// 문구 출력


const quoteText = document.querySelector(".quote_text");

// 무료 문구모음사이트에서 새로 페이지에 접속할 때마다 랜덤으로 출력
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