

const key = "cbf2a38616bbd2683066c81f16309314"

function showDados(dados){
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML=dados.main.humidity + "%"
    document.querySelector(".previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function searchCity(city){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    showDados(dados)
}

function clickInButton(){
    const city = document.querySelector(".input-city").value

    searchCity(city)
}

