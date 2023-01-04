"use strict";
const SectionPlayer = document.querySelector('.Players');
const SectionPlayerMeioCampo = document.querySelector('.PlayersMeioCampo');
const SectionPlayerGoleiro = document.querySelector('.PlayersGoleiro');
const menuButtonPlayers = document.querySelector('.MenuColapsado');
const navBarPlayers = document.querySelector('nav');
const NextButton = document.querySelector('.RightArrow');
const PreviusButton = document.querySelector('.LeftArrow');
const NextButtonMeioCampo = document.querySelector('.RightArrowMeioCampo');
const PreviusButtonMeioCampo = document.querySelector('.LeftArrowMeioCampo');
const NextButtonGoleiro = document.querySelector('.RightArrowGoleiro');
const PreviusButtonGoleiro = document.querySelector('.LeftArrowGoleiro');
const MinAgeInput = document.querySelector('.MinimumAge');
const MaxAgeInput = document.querySelector('.MaxAge');
let arrayPlayers = [];
let arrayPlayersMeioCampo = [];
let arrayPlayersGoleiro = [];
let nameArrayPlayers = [];
let nameArrayPlayersMeioCampo = [];
let nameArrayPlayersGoleiro = [];
menuButtonPlayers === null || menuButtonPlayers === void 0 ? void 0 : menuButtonPlayers.addEventListener('click', () => {
    if (navBarPlayers.style.display === 'flex') {
        navBarPlayers.style.display = 'none';
    }
    else {
        navBarPlayers.style.display = 'flex';
    }
});
SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.addEventListener('mouseover', () => {
    NextButton === null || NextButton === void 0 ? void 0 : NextButton.classList.remove('None');
    PreviusButton === null || PreviusButton === void 0 ? void 0 : PreviusButton.classList.remove('None');
});
SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.addEventListener('mouseout', () => {
    setTimeout(() => NextButton === null || NextButton === void 0 ? void 0 : NextButton.classList.add('None'), 10000);
    setTimeout(() => PreviusButton === null || PreviusButton === void 0 ? void 0 : PreviusButton.classList.add('None'), 10000);
});
SectionPlayerMeioCampo === null || SectionPlayerMeioCampo === void 0 ? void 0 : SectionPlayerMeioCampo.addEventListener('mouseover', () => {
    NextButtonMeioCampo === null || NextButtonMeioCampo === void 0 ? void 0 : NextButtonMeioCampo.classList.remove('None');
    PreviusButtonMeioCampo === null || PreviusButtonMeioCampo === void 0 ? void 0 : PreviusButtonMeioCampo.classList.remove('None');
});
SectionPlayerMeioCampo === null || SectionPlayerMeioCampo === void 0 ? void 0 : SectionPlayerMeioCampo.addEventListener('mouseout', () => {
    setTimeout(() => NextButtonMeioCampo === null || NextButtonMeioCampo === void 0 ? void 0 : NextButtonMeioCampo.classList.add('None'), 10000);
    setTimeout(() => PreviusButtonMeioCampo === null || PreviusButtonMeioCampo === void 0 ? void 0 : PreviusButtonMeioCampo.classList.add('None'), 10000);
});
SectionPlayerGoleiro === null || SectionPlayerGoleiro === void 0 ? void 0 : SectionPlayerGoleiro.addEventListener('mouseover', () => {
    NextButtonGoleiro === null || NextButtonGoleiro === void 0 ? void 0 : NextButtonGoleiro.classList.remove('None');
    PreviusButtonGoleiro === null || PreviusButtonGoleiro === void 0 ? void 0 : PreviusButtonGoleiro.classList.remove('None');
});
SectionPlayerGoleiro === null || SectionPlayerGoleiro === void 0 ? void 0 : SectionPlayerGoleiro.addEventListener('mouseout', () => {
    setTimeout(() => NextButtonGoleiro === null || NextButtonGoleiro === void 0 ? void 0 : NextButtonGoleiro.classList.add('None'), 10000);
    setTimeout(() => PreviusButtonGoleiro === null || PreviusButtonGoleiro === void 0 ? void 0 : PreviusButtonGoleiro.classList.add('None'), 10000);
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
            if (nameArrayPlayers.includes(item.name) === false && item.name !== undefined && item.selection === 'França' && arrayPlayers.length < 5 && item.position === 'Atacante') {
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
PreviusButton === null || PreviusButton === void 0 ? void 0 : PreviusButton.addEventListener('click', () => {
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
            if (nameArrayPlayers.includes(item.name) === true && item.name !== undefined && item.selection === 'França' && arrayPlayers.length < 5 && item.position === 'Atacante') {
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
NextButtonMeioCampo === null || NextButtonMeioCampo === void 0 ? void 0 : NextButtonMeioCampo.addEventListener('click', () => {
    fetch("https://apigenerator.dronahq.com/api/rvtbHMY5/jogadores")
        .then((data) => {
        if (!data.ok) {
            console.log(data);
        }
        return data.json();
    })
        .then((data) => {
        let newPlayersList = [];
        const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayerMeioCampo');
        for (let index = 0; index < PlayerToBeRemove.length; index++) {
            SectionPlayerMeioCampo === null || SectionPlayerMeioCampo === void 0 ? void 0 : SectionPlayerMeioCampo.removeChild(PlayerToBeRemove[index]);
            arrayPlayersMeioCampo.shift();
        }
        data.map((item) => {
            if (nameArrayPlayersMeioCampo.includes(item.name) === false && item.name !== undefined && item.selection === 'França' && arrayPlayersMeioCampo.length < 5 && item.position === 'Meio-Campo') {
                newPlayersList.push(item.name);
                const CardPlayer = document.createElement('div');
                CardPlayer.classList.add('ContainerPlayerMeioCampo');
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
                SectionPlayerMeioCampo === null || SectionPlayerMeioCampo === void 0 ? void 0 : SectionPlayerMeioCampo.appendChild(CardPlayer);
                arrayPlayersMeioCampo.push(CardPlayer);
            }
        });
    });
});
PreviusButtonMeioCampo === null || PreviusButtonMeioCampo === void 0 ? void 0 : PreviusButtonMeioCampo.addEventListener('click', () => {
    fetch("https://apigenerator.dronahq.com/api/rvtbHMY5/jogadores")
        .then((data) => {
        if (!data.ok) {
            console.log(data);
        }
        return data.json();
    })
        .then((data) => {
        let newPlayersList = [];
        const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayerMeioCampo');
        for (let index = 0; index < PlayerToBeRemove.length; index++) {
            SectionPlayerMeioCampo === null || SectionPlayerMeioCampo === void 0 ? void 0 : SectionPlayerMeioCampo.removeChild(PlayerToBeRemove[index]);
            arrayPlayersMeioCampo.shift();
        }
        data.map((item) => {
            if (nameArrayPlayersMeioCampo.includes(item.name) === true && item.name !== undefined && item.selection === 'França' && arrayPlayersMeioCampo.length < 5 && item.position === 'Meio-Campo') {
                newPlayersList.push(item.name);
                const CardPlayer = document.createElement('div');
                CardPlayer.classList.add('ContainerPlayerMeioCampo');
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
                SectionPlayerMeioCampo === null || SectionPlayerMeioCampo === void 0 ? void 0 : SectionPlayerMeioCampo.appendChild(CardPlayer);
                arrayPlayersMeioCampo.push(CardPlayer);
            }
        });
    });
});
NextButtonGoleiro === null || NextButtonGoleiro === void 0 ? void 0 : NextButtonGoleiro.addEventListener('click', () => {
    fetch("https://apigenerator.dronahq.com/api/rvtbHMY5/jogadores")
        .then((data) => {
        if (!data.ok) {
            console.log(data);
        }
        return data.json();
    })
        .then((data) => {
        let newPlayersList = [];
        const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayerGoleiro');
        for (let index = 0; index < PlayerToBeRemove.length; index++) {
            SectionPlayerGoleiro === null || SectionPlayerGoleiro === void 0 ? void 0 : SectionPlayerGoleiro.removeChild(PlayerToBeRemove[index]);
            arrayPlayersGoleiro.shift();
        }
        data.map((item) => {
            if (nameArrayPlayersGoleiro.includes(item.name) === false && item.name !== undefined && item.selection === 'França' && arrayPlayersGoleiro.length < 5 && item.position === 'Goleiro') {
                newPlayersList.push(item.name);
                const CardPlayer = document.createElement('div');
                CardPlayer.classList.add('ContainerPlayerGoleiro');
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
                SectionPlayerGoleiro === null || SectionPlayerGoleiro === void 0 ? void 0 : SectionPlayerGoleiro.appendChild(CardPlayer);
                arrayPlayersGoleiro.push(CardPlayer);
            }
        });
    });
});
PreviusButtonGoleiro === null || PreviusButtonGoleiro === void 0 ? void 0 : PreviusButtonGoleiro.addEventListener('click', () => {
    fetch("https://apigenerator.dronahq.com/api/rvtbHMY5/jogadores")
        .then((data) => {
        if (!data.ok) {
            console.log(data);
        }
        return data.json();
    })
        .then((data) => {
        let newPlayersList = [];
        const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayerGoleiro');
        for (let index = 0; index < PlayerToBeRemove.length; index++) {
            SectionPlayerGoleiro === null || SectionPlayerGoleiro === void 0 ? void 0 : SectionPlayerGoleiro.removeChild(PlayerToBeRemove[index]);
            arrayPlayersGoleiro.shift();
        }
        data.map((item) => {
            if (nameArrayPlayersGoleiro.includes(item.name) === true && item.name !== undefined && item.selection === 'França' && arrayPlayersGoleiro.length < 5 && item.position === 'Goleiro') {
                newPlayersList.push(item.name);
                const CardPlayer = document.createElement('div');
                CardPlayer.classList.add('ContainerPlayerGoleiro');
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
                SectionPlayerGoleiro === null || SectionPlayerGoleiro === void 0 ? void 0 : SectionPlayerGoleiro.appendChild(CardPlayer);
                arrayPlayersGoleiro.push(CardPlayer);
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
    const arrayPlayersFilteredMeioCampo = arrayPlayersMeioCampo.filter((item) => {
        var _a, _b, _c;
        if ((MaxAgeInput === null || MaxAgeInput === void 0 ? void 0 : MaxAgeInput.value) === '') {
            return ((_a = item.lastChild) === null || _a === void 0 ? void 0 : _a.textContent) >= MinAgeInput.value;
        }
        return ((_b = item.lastChild) === null || _b === void 0 ? void 0 : _b.textContent) >= MinAgeInput.value && ((_c = item.lastChild) === null || _c === void 0 ? void 0 : _c.textContent) <= (MaxAgeInput === null || MaxAgeInput === void 0 ? void 0 : MaxAgeInput.value);
    });
    const arrayPlayersFilteredGoleiro = arrayPlayersGoleiro.filter((item) => {
        var _a, _b, _c;
        if ((MaxAgeInput === null || MaxAgeInput === void 0 ? void 0 : MaxAgeInput.value) === '') {
            return ((_a = item.lastChild) === null || _a === void 0 ? void 0 : _a.textContent) >= MinAgeInput.value;
        }
        return ((_b = item.lastChild) === null || _b === void 0 ? void 0 : _b.textContent) >= MinAgeInput.value && ((_c = item.lastChild) === null || _c === void 0 ? void 0 : _c.textContent) <= (MaxAgeInput === null || MaxAgeInput === void 0 ? void 0 : MaxAgeInput.value);
    });
    const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayer');
    const PlayerToBeRemoveMeioCampo = document.querySelectorAll('.ContainerPlayerMeioCampo');
    const PlayerToBeRemoveGoleiro = document.querySelectorAll('.ContainerPlayerGoleiro');
    for (let index = 0; index < PlayerToBeRemove.length; index++) {
        SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.removeChild(PlayerToBeRemove[index]);
    }
    for (let index = 0; index < PlayerToBeRemoveMeioCampo.length; index++) {
        SectionPlayerMeioCampo === null || SectionPlayerMeioCampo === void 0 ? void 0 : SectionPlayerMeioCampo.removeChild(PlayerToBeRemoveMeioCampo[index]);
    }
    for (let index = 0; index < PlayerToBeRemoveGoleiro.length; index++) {
        SectionPlayerGoleiro === null || SectionPlayerGoleiro === void 0 ? void 0 : SectionPlayerGoleiro.removeChild(PlayerToBeRemoveGoleiro[index]);
    }
    arrayPlayersFiltered.map((item) => {
        SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.appendChild(item);
    });
    arrayPlayersFilteredMeioCampo.map((item) => {
        SectionPlayerMeioCampo === null || SectionPlayerMeioCampo === void 0 ? void 0 : SectionPlayerMeioCampo.appendChild(item);
    });
    arrayPlayersFilteredGoleiro.map((item) => {
        SectionPlayerGoleiro === null || SectionPlayerGoleiro === void 0 ? void 0 : SectionPlayerGoleiro.appendChild(item);
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
    const arrayPlayersFilteredMeioCampo = arrayPlayersMeioCampo.filter((item) => {
        var _a, _b, _c;
        if ((MaxAgeInput === null || MaxAgeInput === void 0 ? void 0 : MaxAgeInput.value) === '') {
            return ((_a = item.lastChild) === null || _a === void 0 ? void 0 : _a.textContent) >= MinAgeInput.value;
        }
        return ((_b = item.lastChild) === null || _b === void 0 ? void 0 : _b.textContent) >= MinAgeInput.value && ((_c = item.lastChild) === null || _c === void 0 ? void 0 : _c.textContent) <= (MaxAgeInput === null || MaxAgeInput === void 0 ? void 0 : MaxAgeInput.value);
    });
    const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayer');
    const PlayerToBeRemoveMeioCampo = document.querySelectorAll('.ContainerPlayerMeioCampo');
    for (let index = 0; index < PlayerToBeRemove.length; index++) {
        SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.removeChild(PlayerToBeRemove[index]);
    }
    for (let index = 0; index < PlayerToBeRemoveMeioCampo.length; index++) {
        SectionPlayerMeioCampo === null || SectionPlayerMeioCampo === void 0 ? void 0 : SectionPlayerMeioCampo.removeChild(PlayerToBeRemoveMeioCampo[index]);
    }
    arrayPlayersFiltered.map((item) => {
        SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.appendChild(item);
    });
    arrayPlayersFilteredMeioCampo.map((item) => {
        SectionPlayerMeioCampo === null || SectionPlayerMeioCampo === void 0 ? void 0 : SectionPlayerMeioCampo.appendChild(item);
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
        if (item.position === 'Atacante') {
            arrayPlayers.length < 5 && (arrayPlayers.push(CardPlayer), nameArrayPlayers.push(NamePlayer.textContent));
        }
        if (item.position === 'Meio-Campo') {
            CardPlayer.classList.remove('ContainerPlayer');
            CardPlayer.classList.add('ContainerPlayerMeioCampo');
            arrayPlayersMeioCampo.length < 5 && (arrayPlayersMeioCampo.push(CardPlayer), nameArrayPlayersMeioCampo.push(NamePlayer.textContent));
        }
        if (item.position === 'Goleiro') {
            CardPlayer.classList.remove('ContainerPlayer');
            CardPlayer.classList.add('ContainerPlayerGoleiro');
            arrayPlayersGoleiro.length < 5 && (arrayPlayersGoleiro.push(CardPlayer), nameArrayPlayersGoleiro.push(NamePlayer.textContent));
        }
        arrayPlayers.map((index) => {
            SectionPlayer === null || SectionPlayer === void 0 ? void 0 : SectionPlayer.appendChild(index);
        });
        arrayPlayersMeioCampo.map((index) => {
            SectionPlayerMeioCampo === null || SectionPlayerMeioCampo === void 0 ? void 0 : SectionPlayerMeioCampo.appendChild(index);
        });
        arrayPlayersGoleiro.map((index) => {
            SectionPlayerGoleiro === null || SectionPlayerGoleiro === void 0 ? void 0 : SectionPlayerGoleiro.appendChild(index);
        });
    });
});
//# sourceMappingURL=script.js.map