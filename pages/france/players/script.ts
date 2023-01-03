
const SectionPlayer = document.querySelector('.Players')
const SectionPlayerMeioCampo = document.querySelector('.PlayersMeioCampo')
const SectionPlayerGoleiro = document.querySelector('.PlayersGoleiro')

const menuButtonPlayers = document.querySelector('.MenuColapsado')
const navBarPlayers = document.querySelector('nav')

const NextButton = document.querySelector('.RightArrow')
const PreviusButton = document.querySelector('.LeftArrow')

const NextButtonMeioCampo = document.querySelector('.RightArrowMeioCampo')
const PreviusButtonMeioCampo = document.querySelector('.LeftArrowMeioCampo')

const NextButtonGoleiro = document.querySelector('.RightArrowGoleiro')
const PreviusButtonGoleiro = document.querySelector('.LeftArrowGoleiro')


const MinAgeInput = document.querySelector('.MinimumAge')
const MaxAgeInput = document.querySelector('.MaxAge')

interface PlayerData extends Node {
    selection: string
    name: string
    year: string
    position: string
    urlImage: string
    id: number
}

interface arrayPlayersData extends Node { }

let arrayPlayers: arrayPlayersData[] = []
let arrayPlayersMeioCampo: arrayPlayersData[] = []
let arrayPlayersGoleiro: arrayPlayersData[] = []

let nameArrayPlayers: string[] = []
let nameArrayPlayersMeioCampo: string[] = []
let nameArrayPlayersGoleiro: string[] = []

menuButtonPlayers?.addEventListener('click', () => {
    if(navBarPlayers!.style!.display! === 'flex'){
        navBarPlayers!.style!.display! = 'none'
    }else{
        navBarPlayers!.style!.display! = 'flex'
    }
})

SectionPlayer?.addEventListener('mouseover', () => {
    NextButton?.classList.remove('None')
    PreviusButton?.classList.remove('None')
})

SectionPlayer?.addEventListener('mouseout', () => {
    setTimeout(() => NextButton?.classList.add('None'), 10000)
    setTimeout(() => PreviusButton?.classList.add('None'), 10000)
})

SectionPlayerMeioCampo?.addEventListener('mouseover', () => {
    NextButtonMeioCampo?.classList.remove('None')
    PreviusButtonMeioCampo?.classList.remove('None')
})

SectionPlayerMeioCampo?.addEventListener('mouseout', () => {
    setTimeout(() => NextButtonMeioCampo?.classList.add('None'), 10000)
    setTimeout(() => PreviusButtonMeioCampo?.classList.add('None'), 10000)
})

SectionPlayerGoleiro?.addEventListener('mouseover', () => {
    NextButtonGoleiro?.classList.remove('None')
    PreviusButtonGoleiro?.classList.remove('None')
})

SectionPlayerGoleiro?.addEventListener('mouseout', () => {
    setTimeout(() => NextButtonGoleiro?.classList.add('None'), 10000)
    setTimeout(() => PreviusButtonGoleiro?.classList.add('None'), 10000)
})

NextButton?.addEventListener('click', () => {
    fetch("https://apigenerator.dronahq.com/api/rvtbHMY5/jogadores")
        .then((data) => {
            if (!data.ok) {
                console.log(data)
            }
            return data.json()
        })

        .then((data) => {
            let newPlayersList: string[] = []
            const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayer')

            for (let index = 0; index < PlayerToBeRemove.length; index++) {
                SectionPlayer?.removeChild(PlayerToBeRemove![index])
                arrayPlayers.shift()
            }

            data.map((item: PlayerData) => {
                if (nameArrayPlayers.includes(item.name) === false && item.name !== undefined && item.selection === 'França' && arrayPlayers.length < 5 && item.position === 'Atacante') {
                    newPlayersList.push(item.name)

                    const CardPlayer = document.createElement('div')
                    CardPlayer.classList.add('ContainerPlayer')

                    const SrcPlayer = document.createElement('img')
                    SrcPlayer.src = item.urlImage
                    SrcPlayer.width = 150
                    CardPlayer.appendChild(SrcPlayer)

                    const NamePlayer = document.createElement('h4')
                    NamePlayer.textContent = item.name
                    NamePlayer.classList.add('PlayerName')
                    CardPlayer.appendChild(NamePlayer)

                    const AgePlayer = document.createElement('p')
                    AgePlayer.textContent = item.year
                    AgePlayer.classList.add('PlayerAge')
                    CardPlayer.appendChild(AgePlayer)

                    SectionPlayer?.appendChild(CardPlayer)
                    arrayPlayers.push(CardPlayer)
                }
            })
        })
})

PreviusButton?.addEventListener('click', () => {
    fetch("https://apigenerator.dronahq.com/api/rvtbHMY5/jogadores")
        .then((data) => {
            if (!data.ok) {
                console.log(data)
            }
            return data.json()
        })

        .then((data) => {
            let newPlayersList: string[] = []
            const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayer')

            for (let index = 0; index < PlayerToBeRemove.length; index++) {
                SectionPlayer?.removeChild(PlayerToBeRemove![index])
                arrayPlayers.shift()
            }

            data.map((item: PlayerData) => {
                if (nameArrayPlayers.includes(item.name) === true && item.name !== undefined && item.selection === 'França' && arrayPlayers.length < 5 && item.position ===         'Atacante') {
                    newPlayersList.push(item.name)

                    const CardPlayer = document.createElement('div')
                    CardPlayer.classList.add('ContainerPlayer')

                    const SrcPlayer = document.createElement('img')
                    SrcPlayer.src = item.urlImage
                    SrcPlayer.width = 150
                    CardPlayer.appendChild(SrcPlayer)

                    const NamePlayer = document.createElement('h4')
                    NamePlayer.textContent = item.name
                    NamePlayer.classList.add('PlayerName')
                    CardPlayer.appendChild(NamePlayer)

                    const AgePlayer = document.createElement('p')
                    AgePlayer.textContent = item.year
                    AgePlayer.classList.add('PlayerAge')
                    CardPlayer.appendChild(AgePlayer)

                    SectionPlayer?.appendChild(CardPlayer)
                    arrayPlayers.push(CardPlayer)
                }
            })
        })
})

NextButtonMeioCampo?.addEventListener('click', () => {
    fetch("https://apigenerator.dronahq.com/api/rvtbHMY5/jogadores")
        .then((data) => {
            if (!data.ok) {
                console.log(data)
            }
            return data.json()
        })

        .then((data) => {
            let newPlayersList: string[] = []
            const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayerMeioCampo')

            for (let index = 0; index < PlayerToBeRemove.length; index++) {
                SectionPlayerMeioCampo?.removeChild(PlayerToBeRemove![index])
                arrayPlayersMeioCampo.shift()
            }

            data.map((item: PlayerData) => {
                if (nameArrayPlayersMeioCampo.includes(item.name) === false && item.name !== undefined && item.selection === 'França' && arrayPlayersMeioCampo.length < 5 && item.position === 'Meio-Campo') {
                    newPlayersList.push(item.name)

                    const CardPlayer = document.createElement('div')
                    CardPlayer.classList.add('ContainerPlayerMeioCampo')

                    const SrcPlayer = document.createElement('img')
                    SrcPlayer.src = item.urlImage
                    SrcPlayer.width = 150
                    CardPlayer.appendChild(SrcPlayer)

                    const NamePlayer = document.createElement('h4')
                    NamePlayer.textContent = item.name
                    NamePlayer.classList.add('PlayerName')
                    CardPlayer.appendChild(NamePlayer)

                    const AgePlayer = document.createElement('p')
                    AgePlayer.textContent = item.year
                    AgePlayer.classList.add('PlayerAge')
                    CardPlayer.appendChild(AgePlayer)

                    SectionPlayerMeioCampo?.appendChild(CardPlayer)
                    arrayPlayersMeioCampo.push(CardPlayer)
                }
            })
        })
})

PreviusButtonMeioCampo?.addEventListener('click', () => {
    fetch("https://apigenerator.dronahq.com/api/rvtbHMY5/jogadores")
        .then((data) => {
            if (!data.ok) {
                console.log(data)
            }
            return data.json()
        })

        .then((data) => {
            let newPlayersList: string[] = []
            const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayerMeioCampo')

            for (let index = 0; index < PlayerToBeRemove.length; index++) {
                SectionPlayerMeioCampo?.removeChild(PlayerToBeRemove![index])
                arrayPlayersMeioCampo.shift()
            }

            data.map((item: PlayerData) => {
                if (nameArrayPlayersMeioCampo.includes(item.name) === true && item.name !== undefined && item.selection === 'França' && arrayPlayersMeioCampo.length < 5 && item.   position ===  'Meio-Campo') {
                    newPlayersList.push(item.name)

                    const CardPlayer = document.createElement('div')
                    CardPlayer.classList.add('ContainerPlayerMeioCampo')

                    const SrcPlayer = document.createElement('img')
                    SrcPlayer.src = item.urlImage
                    SrcPlayer.width = 150
                    CardPlayer.appendChild(SrcPlayer)

                    const NamePlayer = document.createElement('h4')
                    NamePlayer.textContent = item.name
                    NamePlayer.classList.add('PlayerName')
                    CardPlayer.appendChild(NamePlayer)

                    const AgePlayer = document.createElement('p')
                    AgePlayer.textContent = item.year
                    AgePlayer.classList.add('PlayerAge')
                    CardPlayer.appendChild(AgePlayer)

                    SectionPlayerMeioCampo?.appendChild(CardPlayer)
                    arrayPlayersMeioCampo.push(CardPlayer)
                }
            })
        })
})

NextButtonGoleiro?.addEventListener('click', () => {
    fetch("https://apigenerator.dronahq.com/api/rvtbHMY5/jogadores")
        .then((data) => {
            if (!data.ok) {
                console.log(data)
            }
            return data.json()
        })

        .then((data) => {
            let newPlayersList: string[] = []
            const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayerGoleiro')

            for (let index = 0; index < PlayerToBeRemove.length; index++) {
                SectionPlayerGoleiro?.removeChild(PlayerToBeRemove![index])
                arrayPlayersGoleiro.shift()
            }

            data.map((item: PlayerData) => {
                if (nameArrayPlayersGoleiro.includes(item.name) === false && item.name !== undefined && item.selection === 'França' && arrayPlayersGoleiro.length < 5 && item.position === 'Goleiro') {
                    newPlayersList.push(item.name)

                    const CardPlayer = document.createElement('div')
                    CardPlayer.classList.add('ContainerPlayerGoleiro')

                    const SrcPlayer = document.createElement('img')
                    SrcPlayer.src = item.urlImage
                    SrcPlayer.width = 150
                    CardPlayer.appendChild(SrcPlayer)

                    const NamePlayer = document.createElement('h4')
                    NamePlayer.textContent = item.name
                    NamePlayer.classList.add('PlayerName')
                    CardPlayer.appendChild(NamePlayer)

                    const AgePlayer = document.createElement('p')
                    AgePlayer.textContent = item.year
                    AgePlayer.classList.add('PlayerAge')
                    CardPlayer.appendChild(AgePlayer)

                    SectionPlayerGoleiro?.appendChild(CardPlayer)
                    arrayPlayersGoleiro.push(CardPlayer)
                }
            })
        })
})

PreviusButtonGoleiro?.addEventListener('click', () => {
    fetch("https://apigenerator.dronahq.com/api/rvtbHMY5/jogadores")
        .then((data) => {
            if (!data.ok) {
                console.log(data)
            }
            return data.json()
        })

        .then((data) => {
            let newPlayersList: string[] = []
            const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayerGoleiro')

            for (let index = 0; index < PlayerToBeRemove.length; index++) {
                SectionPlayerGoleiro?.removeChild(PlayerToBeRemove![index])
                arrayPlayersGoleiro.shift()
            }

            data.map((item: PlayerData) => {
                if (nameArrayPlayersGoleiro.includes(item.name) === true && item.name !== undefined && item.selection === 'França' && arrayPlayersGoleiro.length < 5 && item.   position ===  'Goleiro') {
                    newPlayersList.push(item.name)

                    const CardPlayer = document.createElement('div')
                    CardPlayer.classList.add('ContainerPlayerGoleiro')

                    const SrcPlayer = document.createElement('img')
                    SrcPlayer.src = item.urlImage
                    SrcPlayer.width = 150
                    CardPlayer.appendChild(SrcPlayer)

                    const NamePlayer = document.createElement('h4')
                    NamePlayer.textContent = item.name
                    NamePlayer.classList.add('PlayerName')
                    CardPlayer.appendChild(NamePlayer)

                    const AgePlayer = document.createElement('p')
                    AgePlayer.textContent = item.year
                    AgePlayer.classList.add('PlayerAge')
                    CardPlayer.appendChild(AgePlayer)

                    SectionPlayerGoleiro?.appendChild(CardPlayer)
                    arrayPlayersGoleiro.push(CardPlayer)
                }
            })
        })
})

MinAgeInput?.addEventListener('blur', () => {

    const arrayPlayersFiltered = arrayPlayers.filter((item) => {
        if (MaxAgeInput?.value! === '') {
            return item.lastChild?.textContent! >= MinAgeInput.value!
        }

        return item.lastChild?.textContent! >= MinAgeInput.value! && item.lastChild?.textContent! <= MaxAgeInput?.value!
    })

    const arrayPlayersFilteredMeioCampo = arrayPlayersMeioCampo.filter((item) => {
        if (MaxAgeInput?.value! === '') {
            return item.lastChild?.textContent! >= MinAgeInput.value!
        }

        return item.lastChild?.textContent! >= MinAgeInput.value! && item.lastChild?.textContent! <= MaxAgeInput?.value!
    })

    const arrayPlayersFilteredGoleiro = arrayPlayersGoleiro.filter((item) => {
        if (MaxAgeInput?.value! === '') {
            return item.lastChild?.textContent! >= MinAgeInput.value!
        }

        return item.lastChild?.textContent! >= MinAgeInput.value! && item.lastChild?.textContent! <= MaxAgeInput?.value!
    })

    const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayer')
    const PlayerToBeRemoveMeioCampo = document.querySelectorAll('.ContainerPlayerMeioCampo')
    const PlayerToBeRemoveGoleiro = document.querySelectorAll('.ContainerPlayerGoleiro')

    for (let index = 0; index < PlayerToBeRemove.length; index++) {
        SectionPlayer?.removeChild(PlayerToBeRemove![index])
    }

    for (let index = 0; index < PlayerToBeRemoveMeioCampo.length; index++) {
        SectionPlayerMeioCampo?.removeChild(PlayerToBeRemoveMeioCampo![index])
    }

    for (let index = 0; index < PlayerToBeRemoveGoleiro.length; index++) {
        SectionPlayerGoleiro?.removeChild(PlayerToBeRemoveGoleiro![index])
    }

    arrayPlayersFiltered.map((item) => {
        SectionPlayer?.appendChild(item)
    })

    arrayPlayersFilteredMeioCampo.map((item) => {
        SectionPlayerMeioCampo?.appendChild(item)
    })

    arrayPlayersFilteredGoleiro.map((item) => {
        SectionPlayerGoleiro?.appendChild(item)
    })
})

MaxAgeInput?.addEventListener('blur', () => {
    const arrayPlayersFiltered = arrayPlayers.filter((item) => {
        if (MaxAgeInput?.value! === '') {
            return item.lastChild?.textContent! >= MinAgeInput.value!
        }

        return item.lastChild?.textContent! >= MinAgeInput.value! && item.lastChild?.textContent! <= MaxAgeInput?.value!
    })

    const arrayPlayersFilteredMeioCampo = arrayPlayersMeioCampo.filter((item) => {
        if (MaxAgeInput?.value! === '') {
            return item.lastChild?.textContent! >= MinAgeInput.value!
        }

        return item.lastChild?.textContent! >= MinAgeInput.value! && item.lastChild?.textContent! <= MaxAgeInput?.value!
    })

    const PlayerToBeRemove = document.querySelectorAll('.ContainerPlayer')
    const PlayerToBeRemoveMeioCampo = document.querySelectorAll('.ContainerPlayerMeioCampo')

    for (let index = 0; index < PlayerToBeRemove.length; index++) {
        SectionPlayer?.removeChild(PlayerToBeRemove![index])
    }

    for (let index = 0; index < PlayerToBeRemoveMeioCampo.length; index++) {
        SectionPlayerMeioCampo?.removeChild(PlayerToBeRemoveMeioCampo![index])
    }

    arrayPlayersFiltered.map((item) => {
        SectionPlayer?.appendChild(item)
    })

    arrayPlayersFilteredMeioCampo.map((item) => {
        SectionPlayerMeioCampo?.appendChild(item)
    })
})

fetch("https://apigenerator.dronahq.com/api/rvtbHMY5/jogadores")
    .then((data) => {
        if (!data.ok) {
            console.log(data)
        }
        return data.json()
    })

    .then((data) => {
        data.map((item: PlayerData) => {
            if (item.id === 1) { return }

            const CardPlayer = document.createElement('div')
            CardPlayer.classList.add('ContainerPlayer')

            const SrcPlayer = document.createElement('img')
            SrcPlayer.src = item.urlImage
            SrcPlayer.width = 150
            CardPlayer.appendChild(SrcPlayer)

            const NamePlayer = document.createElement('h4')
            NamePlayer.textContent = item.name
            NamePlayer.classList.add('PlayerName')
            CardPlayer.appendChild(NamePlayer)

            const AgePlayer = document.createElement('p')
            AgePlayer.textContent = item.year
            AgePlayer.classList.add('PlayerAge')
            CardPlayer.appendChild(AgePlayer)

            if (item.position === 'Atacante') {
                arrayPlayers.length < 5 && (arrayPlayers.push(CardPlayer), nameArrayPlayers.push(NamePlayer.textContent))
            }

            if (item.position === 'Meio-Campo') {
                CardPlayer.classList.remove('ContainerPlayer')
                CardPlayer.classList.add('ContainerPlayerMeioCampo')
                arrayPlayersMeioCampo.length < 5 && (arrayPlayersMeioCampo.push(CardPlayer), nameArrayPlayersMeioCampo.push(NamePlayer.textContent))
            }

            if (item.position === 'Goleiro') {
                CardPlayer.classList.remove('ContainerPlayer')
                CardPlayer.classList.add('ContainerPlayerGoleiro')
                arrayPlayersGoleiro.length < 5 && (arrayPlayersGoleiro.push(CardPlayer), nameArrayPlayersGoleiro.push(NamePlayer.textContent))
            }

            arrayPlayers.map((index: arrayPlayersData): void => {
                SectionPlayer?.appendChild(index)
            })

            arrayPlayersMeioCampo.map((index: arrayPlayersData): void => {
                SectionPlayerMeioCampo?.appendChild(index)
            })

            arrayPlayersGoleiro.map((index: arrayPlayersData): void => {
                SectionPlayerGoleiro?.appendChild(index)
            })
        })
    })
