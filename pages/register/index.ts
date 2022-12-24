const namePlayer = document.querySelector("#namePlayer") as HTMLInputElement
const yearPlayer = document.querySelector("#yearPlayer") as HTMLInputElement
const positionPlayer = document.querySelector("#positionPlayer") as HTMLInputElement
const urlImagePlayer = document.querySelector("#urlImagePlayer") as HTMLInputElement
const selectionPlayer = document.querySelector("#selectionPlayer") as HTMLInputElement
const submitButton = document.querySelector('#buttonSubmit') as HTMLButtonElement

submitButton?.addEventListener("click", () => {
  const newPlayer = {
    name: namePlayer.value,
    year: yearPlayer.value,
    urlImage: urlImagePlayer.value,
    position: positionPlayer.value,
    selection: selectionPlayer.value
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlayer),
  }
  
  fetch("https://apigenerator.dronahq.com/api/rvtbHMY5/jogadores", options)
    .then((data) => {
      if (!data.ok) {
        console.log(data)
      }
      return data.json()
    })

    .then((update) => {
      console.log(update)
    })
})