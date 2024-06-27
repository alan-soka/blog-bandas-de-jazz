

class BandaCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set banda(banda) {
        this.shadowRoot.innerHTML = `

        `;
    }
}

customElements.define('banda-card', BandaCard);



fetch('../JAVASCRIPT/articles.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('contenedor');
        data.bandas.forEach(banda => {
            const bandaCard = document.createElement('banda-card');
            bandaCard.banda = banda;
            container.appendChild(bandaCard); 
        });
    })
    .catch(error => console.error('Error al cargar los datos:', error));