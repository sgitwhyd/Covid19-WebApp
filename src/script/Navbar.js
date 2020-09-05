class Header extends HTMLElement {

    constructor(){
        super();
    }
    
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `

        <nav class="navbar navbar-expand-lg header">
        <div class="container">
        <span class="navbar-brand">Covid-19</span>
        <span class="navbar-text ml-auto" id="user">
        </span>
        </div>
      </nav>
        `;
    }
}

customElements.define ( "my-header", Header);