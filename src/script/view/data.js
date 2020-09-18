    const reqApi = async() => {
        const baseUrl = "https://covid19.mathdro.id/api/countries/IDN"
        try {
            const response = await fetch(baseUrl)
            const responseJson = await response.json();
            viewData(responseJson);
        }catch(error){
            console.log(error)
        }
    }

    const viewData = (responseJson) => {
        let confirmed = document.getElementById("positif");
        let recovered = document.getElementById('sembuh');
        let death= document.getElementById("meninggal");
        let update = document.getElementById("updateDate");

        confirmed.innerHTML = `Pasien Terkonfirmasi : ${responseJson.confirmed.value} orang`
        recovered.innerHTML = `Pasien Sembuh : ${responseJson.recovered.value} orang`
        death.innerHTML = `Pasien Meninggal : ${responseJson.deaths.value} orang`;
        update.innerHTML = `*Terakhir di update pada : ${responseJson.lastUpdate}`;
    }

    export default reqApi;

