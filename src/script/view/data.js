const format = require('format-number')

const reqApi = async () => {
    const baseUrl = "https://covid19.mathdro.id/api/countries/IDN"
    try {
        const response = await fetch(baseUrl)
        const responseJson = await response.json();
        viewData(responseJson);
    } catch (error) {
        console.log(error)
    }
}



const viewData = (responseJson) => {
    const formatNumber = number => {
        var formattedNumber = format({ suffix: " Orang" })(number);
        return formattedNumber
    }
    const covidContainer = document.querySelector('#covid-container');
    covidContainer.innerHTML = `<div class="container">
        <h2 class="text-center mt-5 text-heading">Informasi Kasus Covid-19 di Indonesia</h2>
    <div class="row mt-4">
        <div class="col-md-4 col-sm-12">
            <div class="card text-white bg-danger" style="max-height: 300px;">
                <div class="card-header text-center">
                    <h2>Positif</h2>
                </div>
                <div class="card-body">
                    <p class="card-text text-center">
                        <h4 class="text-center">
${formatNumber(responseJson.confirmed.value)}
            </h4>
                    </p>
                </div>
            </div>
        </div>
          <div class="col-md-4 col-sm-12">
              <div class="card text-white bg-success card-hijau" style="max-height: 300px;">
                  <div class="card-header text-center"><h2>Sembuh</h2></div>
                  <div class="card-body">
                      <p class="card-text">
                      <h4 class="text-center">${formatNumber(responseJson.recovered.value)}</h4> 
                      </p>
                  </div>
              </div>
          </div>

            <div class="col-md-4 col-sm-12">
                    <div class="card text-white bg-warning" style="max-height: 300px;">
                        <div class="card-header text-center">
                            <h2>Meninggal</h2>
                        </div>
                    <div class="card-body">
                        <p class="card-text">
                            <h4 class="text-center">${formatNumber(responseJson.deaths.value)}</h4>
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <p id="updateDate" class="mt-3"> Terakhir di Update pada ${responseJson.lastUpdate}</p>
        </div>;`
}

export default reqApi;

