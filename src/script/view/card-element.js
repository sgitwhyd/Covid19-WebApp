import css from "bootstrap/dist/css/bootstrap.min.css";

class cardElement extends HTMLElement{

    constructor(){
        super()
    }

    connectedCallback(){
        this.render();

    }


    render(){
        this.innerHTML = ` 

        <div class="container">
        <h2 class="text-center mt-5">Informasi Kasus Covid-19 di Indonesia</h2>
    <div class="row mt-4">
        <div class="col-md-4 col-sm-12">
            <div class="card text-white bg-danger" style="max-height: 300px;">
                <div class="card-header text-center">
                    <h2>Positif</h2>
                </div>
                <div class="card-body">
                    <p class="card-text text-center">
                        <h4 id="positif"></h4>
                    </p>
                </div>
            </div>
        </div>
          <div class="col-md-4 col-sm-12">
              <div class="card text-white bg-success card-hijau" style="max-height: 300px;">
                  <div class="card-header text-center"><h2>Sembuh</h2></div>
                  <div class="card-body">
                      <p class="card-text">
                      <h4 id="sembuh"></h4> 
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
                            <h4 id="meninggal"></h4>
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <p id="updateDate" class="mt-3"></p>
        </div>`;
    }
}

customElements.define("card-element", cardElement );