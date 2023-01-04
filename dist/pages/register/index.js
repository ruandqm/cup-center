"use strict";
const namePlayer = document.querySelector("#namePlayer");
const yearPlayer = document.querySelector("#yearPlayer");
const positionPlayer = document.querySelector("#positionPlayer");
const urlImagePlayer = document.querySelector("#urlImagePlayer");
const selectionPlayer = document.querySelector("#selectionPlayer");
const submitButton = document.querySelector('#buttonSubmit');
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", () => {
    const newPlayer = {
        name: namePlayer.value,
        year: yearPlayer.value,
        urlImage: urlImagePlayer.value,
        position: positionPlayer.value,
        selection: selectionPlayer.value
    };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlayer),
    };
    fetch("https://apigenerator.dronahq.com/api/rvtbHMY5/jogadores", options)
        .then((data) => {
        if (!data.ok) {
            console.log(data);
        }
        return data.json();
    })
        .then((update) => {
        console.log(update);
    });
});
//# sourceMappingURL=index.js.map