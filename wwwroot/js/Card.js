// URL de la API que devuelve la información
const apiUrl = 'http://localhost:7142/api/Card/card';

// Función para obtener los datos y llenar la información
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar los datos');
        }
        return response.json(); // Obtener los datos como JSON
    })
    .then(data => {
        const cardsContainer = document.getElementById('cardsContainer');

        // Limpiar el contenedor antes de agregar nuevas tarjetas
        cardsContainer.innerHTML = '';

        // Verifica si data es un arreglo
        if (Array.isArray(data)) {
            data.forEach(item => {
                // Crear un nuevo div para cada tarjeta
                const cardDiv = document.createElement('div');
                cardDiv.className = 'card'; // Asigna clase 'card'

                // Llenar la tarjeta con los datos correspondientes
                cardDiv.innerHTML = `
                    <img src="data:image/png;base64,${item.image}" alt="Imagen de ${item.firstname}">
                    <h3>${item.firstname} ${item.lastname}</h3>
                    <p>State: ${item.state}</p>
                    <p>Course end date: ${new Date(item.courseenddate).toLocaleDateString()}</p>
                `;

                // Agregar la tarjeta al contenedor
                cardsContainer.appendChild(cardDiv);
            });
        } else {
            console.error('Los datos no son un arreglo');
        }
    })
    .catch(error => {
        console.error('Error al mostrar los datos:', error);
    });
