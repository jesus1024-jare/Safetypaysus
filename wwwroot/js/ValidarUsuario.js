document.getElementById('enviar').addEventListener('click', function (event) {
    event.preventDefault();

    const validaruser = {
        USER: document.getElementById('user').value,
        PASSWORD: document.getElementById('password').value
    };

    fetch('http://localhost:7142/api/user/validarusuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(validaruser)
    })
    .then(res => {
        if (!res.ok) {
            // Si la respuesta no es correcta, lanza un error con el texto del estado
            return res.text().then(text => {
                throw new Error(`La respuesta de la red no fue correcta: ${res.status} ${text}`);
            });
        }
        // Imprime la respuesta en bruto para depuración
        return res.text().then(text => {
            console.log('Respuesta en bruto:', text);
            try {
                return JSON.parse(text);
            } catch {
                throw new Error('La respuesta no es un JSON válido.');
            }
        });
    })
    .then(data => {
        console.log('El usuario validado!', data);
        window.location.href = "/Home/Index";
    })
    .catch(error => {
        console.error('Ha habido un problema con su operación de recuperación:', error);
    });

    // Limpiar los campos del formulario
    document.getElementById('user').value = '';
    document.getElementById('password').value = '';
});
