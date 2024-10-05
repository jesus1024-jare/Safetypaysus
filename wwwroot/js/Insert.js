document.getElementById('registrationForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtener los valores de los campos del formulario
    const data = {
        firstname: document.getElementById('firtsname').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        state: document.getElementById('opciones').value,
        courseenddate: document.getElementById('fecha').value,
        coursetype: document.getElementById('coursetype').value
    };

    try {
        const response = await fetch('http://localhost:7142/api/ControllerEstudiantes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Convierte el objeto a JSON
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('Respuesta:', responseData);
        document.getElementById('registrationForm').reset();
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
});