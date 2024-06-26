

class BandaCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set banda(banda) {
        this.shadowRoot.innerHTML = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

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