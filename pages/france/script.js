"use strict";
const timeA = document.querySelectorAll(".timeA");
const timeB = document.querySelectorAll(".timeB");
const golA = document.querySelectorAll(".golA");
const golB = document.querySelectorAll(".golB");
const buttonMoreAbout = document.querySelector("#moreAbout");
const qualifyingGames = document.querySelector(".qualifyingGames");
const gameNone = document.querySelector(".gameNone");
fetch("https://apigenerator.dronahq.com/api/zs9PYAhn/jogos")
    .then((data) => {
    if (!data.ok) {
        console.log(data);
    }
    return data.json();
})
    .then((data) => {
    const games = data.filter((element) => {
        if (element.timeA === "França" || element.timeB === "França") {
            return element;
        }
    });
    games.forEach((element, index) => {
        timeA[index].textContent = element.timeA;
        timeB[index].textContent = element.timeB;
        golA[index].textContent = element.gols.timeA;
        golB[index].textContent = element.gols.TimeB;
    });
});
buttonMoreAbout === null || buttonMoreAbout === void 0 ? void 0 : buttonMoreAbout.addEventListener("click", () => {
    if (buttonMoreAbout.textContent === "Ver Menos") {
        buttonMoreAbout.textContent = "Ver Mais";
        gameNone.style.display = "none";
        qualifyingGames.style.height = "20vh";
        qualifyingGames.classList.remove('openSeeMore');
    }
    else {
        buttonMoreAbout.textContent = "Ver Menos";
        gameNone.style.display = "block";
        qualifyingGames.style.height = "40vh";
        qualifyingGames.classList.add('openSeeMore');
    }
});
