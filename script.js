let title = document.getElementById("title");
let totalPositif = document.getElementById("positif");
let NewConfirmed = document.getElementById("newConfirmed");
let totalSembuh = document.getElementById("sembuh");
let newRecovered = document.getElementById("newRecovered");
let totalMeninggal = document.getElementById("meninggal");
let newDeaths = document.getElementById("newDeaths");
let refreshData = document.getElementById("Date");

const reqApiCorona = async() => {
    try{
        const req = await fetch("https://api.covid19api.com/summary")
        const res = await req.json();
    
        title.innerHTML = `Data Covid-19 di Negara ${res.Countries[77].Country}`
        NewConfirmed.innerHTML = `Kasus Baru Terkonfirmasi : ${res.Countries[77].NewConfirmed} orang`;
        totalPositif.innerHTML = `Total Kasus : ${res.Countries[77].TotalConfirmed} orang`;
        newDeaths.innerHTML = `Kematian Baru Terkonfirmasi: ${res.Countries[77].NewDeaths} orang`;
        totalMeninggal.innerHTML = `Total Kematian : ${res.Countries[77].TotalDeaths} orang`;
        newRecovered.innerHTML = `Pasien Baru Sembuh : ${res.Countries[77].NewRecovered} orang`
        totalSembuh.innerHTML = `Pasien Sembuh : ${res.Countries[77].TotalRecovered} orang`;
        refreshData.innerHTML = `Data Terkahir diperbaharui Pada: ${res.Countries[77].Date}`;
        
    }catch(error) {
        console.log("error")
    }
}

reqApiCorona();