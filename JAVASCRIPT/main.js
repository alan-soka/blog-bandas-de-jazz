class BandaCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set banda(banda) {
        this.shadowRoot.innerHTML = `
            <div class="card">
                <div class="band-image">
                    <img src="${banda.imagen}" alt="${banda.nombre}">
                </div>
                <div>
                    <h2>${banda.nombre}</h2>
                    <p>Género: ${banda.genero}</p>
                    <p>Álbum famoso: ${banda.album_famoso}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('banda-card', BandaCard);

fetch('../JAVASCRIPT/articles.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('contenedor');
        data.forEach(banda => {
            const bandaCard = document.createElement('banda-card');
            bandaCard.banda = banda;
            container.appendChild(bandaCard);
        });
    })
    .catch(error => console.error('Error al cargar los datos:', error));

    