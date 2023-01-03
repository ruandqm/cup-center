const seeMore: HTMLElement = document.getElementById('seeMore')!
const scoreboard: HTMLElement = document.getElementById('scoreBoard')!
const gamesSection: HTMLElement = document.getElementById('games')!
const resultsSection: HTMLElement = document.getElementById('results')!;
/* const firstGame: HTMLElement = document.getElementById('firstGame')!
const firstResult: HTMLElement = document.getElementById('firstResult')! */
const loader: HTMLElement = document.getElementById('loader')!
loader.style.display = 'block'

let qtdControl = 0 //stores the number of times the RenderClassificatory function was executed
const api: string = 'https://apigenerator.dronahq.com/api/zs9PYAhn/jogos'

let expanded: boolean = false

interface Game {
    "timeA": string
    "timeB": string
    "data": string
    "gols": Gols
    "fase": string
    "id": number
}
interface Gols {
    "timeA": number
    "TimeB": number
}

function GetData() {
    let games: Array<Game> = []
    fetch(api)
        .then(function (response) {
            let body = response.json()
            return body
        })
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].timeA === "Argentina" || data[i].timeB === "Argentina") {
                    games.push(data[i])
                }
            }
            RenderData(games)
            loader.style.display = 'none'
        })
}
function GetScores(game: Game) {
    let article = document.createElement('article')
    let teams = document.createElement('h2')
    let score = document.createElement('h2')
    let getResult: Gols = game.gols
    let result = getResult.timeA + ' X ' + getResult.TimeB
    let getTeams = game.timeA + ' x ' + game.timeB
    teams.appendChild(document.createTextNode(getTeams))
    score.appendChild(document.createTextNode(result))
    article.appendChild(teams)
    article.appendChild(score)
    article.setAttribute("class", "game")
    return (article)
}

function RenderClassificatory(game: Game) {
    let article = GetScores(game)
    if (qtdControl === 2) {
        article.setAttribute("class", "game moreGame")
        article.setAttribute("id", "moreGame")
        gamesSection.appendChild(article)
    } else {
        resultsSection.appendChild(article)
        qtdControl++
    }
}

function RenderPhase(game: Game) {
    let section = document.createElement('section')
    let title = document.createElement('div')

    let article = GetScores(game)

    let sectionTitle = game.fase

    section.setAttribute("class", "phase")
    title.setAttribute("class", "sectionTitle")
    title.appendChild(document.createTextNode(sectionTitle))
    section.appendChild(title)
    section.appendChild(article)
    scoreboard.appendChild(section)
}

function RenderData(games: Array<Game>) {
    for (let i = 0; i < games.length; i++) {
        if (games[i].fase === 'Classificatória') {
            RenderClassificatory(games[i])
        } else {
            RenderPhase(games[i])
        }
    }
}

function gamesExpand() {
    const moreGame: HTMLElement = document.getElementById('moreGame')!
    if (expanded === false) {
        gamesSection.classList.add('gamesExpand')
        moreGame.style.display = 'block'
        seeMore.innerHTML = 'Ver Menos'
        expanded = true
    } else {
        gamesSection.classList.remove('gamesExpand')
        moreGame.style.display = 'none'
        seeMore.innerHTML = 'Ver Mais'
        expanded = false
    }
}

GetData()

seeMore.addEventListener('click', gamesExpand)