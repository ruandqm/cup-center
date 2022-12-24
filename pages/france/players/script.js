"use strict";
const SectionPlayer = document.querySelector('.Players');
const NextButton = document.querySelector('.RightArrow');
const MinAgeInput = document.querySelector('.MinimumAge');
const MaxAgeInput = document.querySelector('.MaxAge');
let arrayPlayers = [];
let nameArrayPlayers = [];
SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.addEventListener('mouseover', () => {
    NextButton === null || NextButton === void 0 ? void 0 : NextButton.classList.remove('None');
});
SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.addEventListener('mouseout', () => {
    setTimeout(() => NextButton === null || NextButton === void 0 ? void 0 : NextButton.classList.add('None'), 10000);
});
NextButton === null || NextButton === void 0 ? void 0 : NextButton.addEventListener('click', () => {
    fetch("https://apigenerator.dronahq.com/api/rvtbHMY5/jogadores")
        .then((data) => {
        if (!data.ok) {
            console.log(data);
        }
        return data.json();
    })
        .then((data) => {
        let newPlayersList = [];
        const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayer');
        for (let index = 0; index < PlayerToBeRemove.length; index++) {
            SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.removeChild(PlayerToBeRemove[index]);
            arrayPlayers.shift();
        }
        data.map((item) => {
            if (nameArrayPlayers.includes(item.name) === false && item.name !== undefined) {
                newPlayersList.push(item.name);
                const CardPlayer = document.createElement('div');
                CardPlayer.classList.add('ContainerPlayer');
                const SrcPlayer = document.createElement('img');
                SrcPlayer.src = item.urlImage;
                SrcPlayer.width = 150;
                CardPlayer.appendChild(SrcPlayer);
                const NamePlayer = document.createElement('h4');
                NamePlayer.textContent = item.name;
                NamePlayer.classList.add('PlayerName');
                CardPlayer.appendChild(NamePlayer);
                const AgePlayer = document.createElement('p');
                AgePlayer.textContent = item.year;
                AgePlayer.classList.add('PlayerAge');
                CardPlayer.appendChild(AgePlayer);
                SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.appendChild(CardPlayer);
                arrayPlayers.push(CardPlayer);
            }
        });
    });
});
MinAgeInput === null || MinAgeInput === void 0 ? void 0 : MinAgeInput.addEventListener('blur', () => {
    const arrayPlayersFiltered = arrayPlayers.filter((item) => {
        var _a, _b, _c;
        if ((MaxAgeInput === null || MaxAgeInput === void 0 ? void 0 : MaxAgeInput.value) === '') {
            return ((_a = item.lastChild) === null || _a === void 0 ? void 0 : _a.textContent) >= MinAgeInput.value;
        }
        return ((_b = item.lastChild) === null || _b === void 0 ? void 0 : _b.textContent) >= MinAgeInput.value && ((_c = item.lastChild) === null || _c === void 0 ? void 0 : _c.textContent) <= (MaxAgeInput === null || MaxAgeInput === void 0 ? void 0 : MaxAgeInput.value);
    });
    const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayer');
    for (let index = 0; index < PlayerToBeRemove.length; index++) {
        SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.removeChild(PlayerToBeRemove[index]);
    }
    arrayPlayersFiltered.map((item) => {
        SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.appendChild(item);
    });
});
MaxAgeInput === null || MaxAgeInput === void 0 ? void 0 : MaxAgeInput.addEventListener('blur', () => {
    const arrayPlayersFiltered = arrayPlayers.filter((item) => {
        var _a, _b, _c;
        if ((MaxAgeInput === null || MaxAgeInput === void 0 ? void 0 : MaxAgeInput.value) === '') {
            return ((_a = item.lastChild) === null || _a === void 0 ? void 0 : _a.textContent) >= MinAgeInput.value;
        }
        return ((_b = item.lastChild) === null || _b === void 0 ? void 0 : _b.textContent) >= MinAgeInput.value && ((_c = item.lastChild) === null || _c === void 0 ? void 0 : _c.textContent) <= (MaxAgeInput === null || MaxAgeInput === void 0 ? void 0 : MaxAgeInput.value);
    });
    const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayer');
    for (let index = 0; index < PlayerToBeRemove.length; index++) {
        SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.removeChild(PlayerToBeRemove[index]);
    }
    arrayPlayersFiltered.map((item) => {
        SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.appendChild(item);
    });
});
fetch("https://apigenerator.dronahq.com/api/rvtbHMY5/jogadores")
    .then((data) => {
    if (!data.ok) {
        console.log(data);
    }
    return data.json();
})
    .then((data) => {
    data.map((item) => {
        if (item.id === 1) {
            return;
        }
        const CardPlayer = document.createElement('div');
        CardPlayer.classList.add('ContainerPlayer');
        const SrcPlayer = document.createElement('img');
        SrcPlayer.src = item.urlImage;
        SrcPlayer.width = 150;
        CardPlayer.appendChild(SrcPlayer);
        const NamePlayer = document.createElement('h4');
        NamePlayer.textContent = item.name;
        NamePlayer.classList.add('PlayerName');
        CardPlayer.appendChild(NamePlayer);
        const AgePlayer = document.createElement('p');
        AgePlayer.textContent = item.year;
        AgePlayer.classList.add('PlayerAge');
        CardPlayer.appendChild(AgePlayer);
        arrayPlayers.length < 5 && (arrayPlayers.push(CardPlayer), nameArrayPlayers.push(NamePlayer.textContent));
        arrayPlayers.map((index) => {
            SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.appendChild(index);
        });
    });
});
