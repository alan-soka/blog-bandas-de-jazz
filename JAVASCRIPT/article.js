class BandaCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set banda(banda) {
        this.shadowRoot.innerHTML = `
            <img src="${banda.imagen}" alt="${banda.nombre}">
            <div>
                <h2>${banda.nombre}</h2>
                <h3>Año: ${banda.año}</h3>
                <p>Álbum famoso: ${banda.album_famoso}</p>
                <p>${banda.texto}</p>
            </div>
            <style>
                img {
                    margin-top: 20px;
                    background-color: antiquewhite;
                    height: 250px;
                    width: 250px;
                    border-radius: 10px;
                }
                h2, h3, p {
                    font-family: Arial, sans-serif;
                    color: black;
                    margin: 5px;
                }
                h2 {
                    font-size: 1.2rem;
                    margin: 1px;
                }
                h3, p {
                    font-size: 1rem;
                }
                div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            </style>
        `;
    }
}

customElements.define('banda-card', BandaCard);

fetch('../JAVASCRIPT/articles.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('contenedor');
        const bandaCard = document.createElement('banda-card');
        container.appendChild(bandaCard);

        document.querySelectorAll('.menu .articulo').forEach((link, index) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const bandaIndex = link.getAttribute('data-index');
                bandaCard.banda = data[bandaIndex];
            });
        });
    })
    .catch(error => console.error('Error al cargar los datos:', error));
