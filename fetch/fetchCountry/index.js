let btn = document.querySelector("button");

let select = document.getElementById("select")
select.addEventListener("change",()=>{
let value = select.value

let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=${value}`
// console.log(value)
fetch(url)
.then((res)=>{
    return res.json()
})
.then((data)=>{
  displayData(data.data)
})
})


btn.addEventListener("click",getData)

function getData(){
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
      displayData(data.data)
    })
}

function displayData(array){
    let container = document.querySelector(".container")
    container.innerHTML = ""
    array.forEach(ele => {
        let card = document.createElement("div")
        let country = document.createElement("h3")
        country.textContent = `Country- ${ele.country}`

        let rank = document.createElement("p")
        rank.textContent = `Rank- ${ele.Rank}`

        let population = document.createElement("p")
        population.textContent = `Population- ${ele.population}`

        card.append(country,population,rank)
        container.append(card)
    });
}