const timeA = document.querySelectorAll(".timeA")
const timeB = document.querySelectorAll(".timeB")

const golA = document.querySelectorAll(".golA")
const golB = document.querySelectorAll(".golB")

const buttonMoreAbout = document.querySelector("#moreAbout")
const qualifyingGames = document.querySelector<HTMLElement>(".qualifyingGames")

const gameNone = document.querySelector<HTMLElement>(".gameNone")

const menuButtonGames = document.querySelector('.MenuColapsado')
const navBarGames = document.querySelector('nav')

menuButtonGames?.addEventListener('click', () => {
    if(navBarGames!.style!.display! === 'flex'){
        navBarGames!.style!.display! = 'none'
    }else{
        navBarGames!.style!.display! = 'flex'
    }
})

interface TeamData {
  timeA: string
  timeB: string
  data: string
  gols: {
    timeA: string
    TimeB: string
  };
  fase: string
  id: number
}

fetch("https://apigenerator.dronahq.com/api/zs9PYAhn/jogos")
  .then((data) => {
    if (!data.ok) {
      console.log(data)
    }
    return data.json()
  })

  .then((data) => {
    const franceGames = data.filter((item: any) => {
      return item.timeA === 'França' || item.timeB === 'França'
    })

    console.log(franceGames)
    const games = data.filter((element: TeamData) => {
      if (element.timeA === "França" || element.timeB === "França") {
        return element
      }
    })

    games.forEach((element: TeamData, index: number) => {
      timeA[index].textContent = element.timeA
      timeB[index].textContent = element.timeB
      golA[index].textContent = element.gols.timeA
      golB[index].textContent = element.gols.TimeB
    })
  })
  
buttonMoreAbout?.addEventListener("click", () => {
  if(buttonMoreAbout.textContent === "Ver Menos"){
    buttonMoreAbout.textContent = "Ver Mais"
    gameNone!.style.display = "none"
    qualifyingGames!.style.height = "20vh"
    qualifyingGames!.classList.remove('openSeeMore')
  }

  else{
    buttonMoreAbout.textContent = "Ver Menos"
    gameNone!.style.display = "block"
    qualifyingGames!.style.height = "40vh"
    qualifyingGames!.classList.add('openSeeMore')
  }
})