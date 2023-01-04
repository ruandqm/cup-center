"use strict";
const playersApi = 'https://apigenerator.dronahq.com/api/rvtbHMY5/jogadores';
const prevs = document.getElementsByClassName('prev');
const nexts = document.getElementsByClassName('next');
const prev1 = document.getElementById('prev1');
const prev2 = document.getElementById('prev2');
const prev3 = document.getElementById('prev3');
const prev4 = document.getElementById('prev4');
const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const next3 = document.getElementById('next3');
const next4 = document.getElementById('next4');
const cardsGK = document.getElementById('cardsGK');
const cardsDF = document.getElementById('cardsDF');
const cardsMF = document.getElementById('cardsMF');
const cardsFW = document.getElementById('cardsFW');
const minAge = document.getElementById('minAge');
const maxAge = document.getElementById('maxAge');
const cards = document.getElementsByClassName('card');
let renderized = false;
async function GetPlayersTeam() {
    let players = await (await fetch(playersApi)).json();
    let playersTeam = [];
    for (let i = 0; i < players.length; i++) {
        if (players[i].selection === "Argentina") {
            playersTeam.push(players[i]);
        }
    }
    return playersTeam;
}
async function GetPlayers() {
    let players = await GetPlayersTeam();
    if (renderized === false) {
        RenderPlayers(players);
    }
}
function GetPlayer(player) {
    let article = document.createElement('article');
    let img = document.createElement('img');
    let name = document.createElement('h2');
    let age = document.createElement('h2');
    img.src = player.urlImage;
    name.appendChild(document.createTextNode(player.name));
    age.appendChild(document.createTextNode(player.year + ' anos'));
    article.appendChild(img);
    article.appendChild(name);
    article.appendChild(age);
    article.setAttribute("class", "card");
    return (article);
}
function renderGK(player) {
    let article = GetPlayer(player);
    cardsGK.appendChild(article);
}
function renderDF(player) {
    let article = GetPlayer(player);
    cardsDF.appendChild(article);
}
function renderMF(player) {
    let article = GetPlayer(player);
    cardsMF.appendChild(article);
}
function renderFW(player) {
    let article = GetPlayer(player);
    cardsFW.appendChild(article);
}
function RenderPlayers(players) {
    renderized = true;
    for (let i = 0; i < players.length; i++) {
        if (players[i].position === 'GK') {
            renderGK(players[i]);
        }
        if (players[i].position === 'DF') {
            renderDF(players[i]);
        }
        if (players[i].position === 'MF') {
            renderMF(players[i]);
        }
        if (players[i].position === 'FW') {
            renderFW(players[i]);
        }
    }
}
GetPlayers();
async function FilterApply(filter, type) {
    let minAgeFilter = parseInt(minAge.value);
    let maxAgeFilter = parseInt(maxAge.value);
    if (Number.isNaN(minAgeFilter)) {
        minAgeFilter = 0;
    }
    if (Number.isNaN(maxAgeFilter)) {
        maxAgeFilter = 200;
    }
    let players = await GetPlayersTeam();
    let FilteredPlayers = [];
    for (let i = 0; i < players.length; i++) {
        if (parseInt(players[i].year) < maxAgeFilter && parseInt(players[i].year) > minAgeFilter) {
            FilteredPlayers.push(players[i]);
        }
    }
    for (var i = cards.length - 1; i >= 0; i--) {
        cards[i].remove();
    }
    RenderPlayers(FilteredPlayers);
}
let actTranslate = 0;
function prevSlide(e) {
    actTranslate += 12;
    switch (e.composedPath()[0].id) {
        case 'prev1':
            cardsGK.style.transform = 'translateX(' + actTranslate + 'em)';
            break;
        case 'prev2':
            cardsDF.style.transform = 'translateX(' + actTranslate + 'em)';
            break;
        case 'prev3':
            cardsMF.style.transform = 'translateX(' + actTranslate + 'em)';
            break;
        case 'prev4':
            cardsFW.style.transform = 'translateX(' + actTranslate + 'em)';
            break;
    }
    if (actTranslate > -60) {
        switch (e.composedPath()[0].id) {
            case 'prev1':
                next1.style.display = 'block';
                break;
            case 'prev2':
                next2.style.display = 'block';
                break;
            case 'prev3':
                next3.style.display = 'block';
                break;
            case 'prev4':
                next4.style.display = 'block';
                break;
        }
    }
    if (actTranslate === 0) {
        e.composedPath()[0].style.display = 'none';
    }
}
function nextSlide(e) {
    actTranslate += -12;
    switch (e.composedPath()[0].id) {
        case 'next1':
            cardsGK.style.transform = 'translateX(' + actTranslate + 'em)';
            break;
        case 'next2':
            cardsDF.style.transform = 'translateX(' + actTranslate + 'em)';
            break;
        case 'next3':
            cardsMF.style.transform = 'translateX(' + actTranslate + 'em)';
            break;
        case 'next4':
            cardsFW.style.transform = 'translateX(' + actTranslate + 'em)';
            break;
    }
    if (actTranslate < -60) {
        e.composedPath()[0].style.display = 'none';
    }
    if (actTranslate < 0) {
        switch (e.composedPath()[0].id) {
            case 'next1':
                prev1.style.display = 'block';
                break;
            case 'next2':
                prev2.style.display = 'block';
                break;
            case 'next3':
                prev3.style.display = 'block';
                break;
            case 'next4':
                prev4.style.display = 'block';
                break;
        }
    }
}
for (let prev of prevs) {
    prev.addEventListener('click', prevSlide);
}
for (let next of nexts) {
    next.addEventListener('click', nextSlide);
}
minAge.addEventListener('blur', () => {
    FilterApply(parseInt(minAge.value), 'min');
});
maxAge.addEventListener('blur', () => {
    FilterApply(parseInt(minAge.value), 'max');
});
//# sourceMappingURL=playersArgentina.js.map