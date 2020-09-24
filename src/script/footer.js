class footer extends HTMLElement {

    constructor(){
        super();
    }
    
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `

        <footer class="footer">
        <p class="footer_text">Made by Sigit Wahyudi | Love From Wonogiri</p>
    </footer>
        `;
    }
}

customElements.define ( "my-footer", footer);