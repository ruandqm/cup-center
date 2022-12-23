"use strict";
const seeMore = document.getElementById('seeMore');
const scoreboard = document.getElementById('scoreBoard');
const gamesSection = document.getElementById('games');
const resultsSection = document.getElementById('results');
const firstGame = document.getElementById('firstGame');
const firstResult = document.getElementById('firstResult');
let qtdControl = 0; //stores the number of times the RenderClassificatory function was executed
const api = 'https://apigenerator.dronahq.com/api/zs9PYAhn/jogos';
let expanded = false;
function GetData() {
    let games = [];
    fetch(api)
        .then(function (response) {
        let body = response.json();
        return body;
    })
        .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].timeA === "Argentina" || data[i].timeB === "Argentina") {
                games.push(data[i]);
            }
        }
        RenderData(games);
    });
}
function GetScores(game) {
    let article = document.createElement('article');
    let teams = document.createElement('h2');
    let score = document.createElement('h2');
    let getResult = game.gols;
    let result = getResult.timeA + ' X ' + getResult.TimeB;
    let getTeams = game.timeA + ' x ' + game.timeB;
    teams.appendChild(document.createTextNode(getTeams));
    score.appendChild(document.createTextNode(result));
    article.appendChild(teams);
    article.appendChild(score);
    article.setAttribute("class", "game");
    return (article);
}
function RenderClassificatory(game) {
    let article = GetScores(game);
    if (qtdControl === 2) {
        article.setAttribute("class", "game moreGame");
        article.setAttribute("id", "moreGame");
        gamesSection.appendChild(article);
    }
    else {
        resultsSection.appendChild(article);
        qtdControl++;
    }
}
function RenderPhase(game) {
    let section = document.createElement('section');
    let title = document.createElement('div');
    let article = GetScores(game);
    let sectionTitle = game.fase;
    section.setAttribute("class", "phase");
    title.setAttribute("class", "sectionTitle");
    title.appendChild(document.createTextNode(sectionTitle));
    section.appendChild(title);
    section.appendChild(article);
    scoreboard.appendChild(section);
}
function RenderData(games) {
    for (let i = 0; i < games.length; i++) {
        if (games[i].fase === 'Classificatória') {
            RenderClassificatory(games[i]);
        }
        else {
            RenderPhase(games[i]);
        }
    }
}
function gamesExpand() {
    const moreGame = document.getElementById('moreGame');
    if (expanded === false) {
        gamesSection.classList.add('gamesExpand');
        moreGame.style.display = 'block';
        seeMore.innerHTML = 'Ver Menos';
        expanded = true;
    }
    else {
        gamesSection.classList.remove('gamesExpand');
        moreGame.style.display = 'none';
        seeMore.innerHTML = 'Ver Mais';
        expanded = false;
    }
}
GetData();
seeMore.addEventListener('click', gamesExpand);
//# sourceMappingURL=argentina.js.map